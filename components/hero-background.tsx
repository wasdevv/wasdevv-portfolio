"use client";

import { useEffect, useRef } from "react";

/**
 * Pixel-art "planet horizon" background (giant circle cutting the screen on a
 * diagonal, dithered sky→violet→plum glow, silver stars along the rim).
 *
 * Layers: static canvas (CPU, ImageData) → animated canvas (WebGL2, same scene).
 * Everything is deterministic (integer hash, no Math.random), so the first
 * WebGL frame matches the static canvas. Grain covers the whole screen but is
 * fixed (seed 0, never re-seeded); only the ripple and the stars move.
 */

export type RGB = [number, number, number];

// Final colours, used as-is (no hue rotation). BLACK and SILVER are never transformed.
const SKY: RGB = [96, 165, 250]; // rim: blue, against the violet
const VIOLET: RGB = [167, 139, 250]; // middle band
const PLUM: RGB = [59, 18, 92]; // body of the disc
const SILVER: RGB = [250, 250, 252]; // stars
const BLACK: RGB = [9, 9, 11]; // canvas

/** Fixed grain amplitude (peak-to-peak, 0–255 units): subtle on the sky, stronger on the planet. */
const GRAIN_SKY = 18;
const GRAIN_PLANET = 24;

const TAU = Math.PI * 2;
const MAX_STARS = 30000;
const MAX_PIXELS = 2_200_000;

/** Star time units per real second (phase += ω·t). */
const STAR_TIME_RATE = 150;
/** Ring ripple slide speed, radians per second. */
const RIPPLE_SPEED = 0.35;

// ---------------------------------------------------------------------------
// Shared math

function palette(rim?: RGB) {
  return { sky: rim ?? SKY, violet: VIOLET, plum: PLUM, silver: SILVER, black: BLACK };
}

export function hash(x: number) {
  x >>>= 0;
  x = Math.imul(x ^ (x >>> 16), 2146121005);
  x = Math.imul(x ^ (x >>> 15), 2221713035);
  return (x ^ (x >>> 16)) >>> 0;
}

export function rnd(x: number) {
  return (hash(x) >>> 8) / 16777216;
}

function horizon(w: number, h: number) {
  const k = Math.min(2, Math.max(0.5, Math.sqrt((w * h) / (1920 * 1080))));
  const x0 = -724 * k + (w - 1920 * k) * 0.4;
  const inner = 2000 * k;
  const outer = 2500 * k;
  const topX = x0 + Math.sqrt(outer * outer - inner * inner);
  const span = w - x0;
  const rightY =
    outer > span ? inner - Math.sqrt(outer * outer - span * span) : Infinity;
  const ax = Math.min(topX, w * 0.405);
  const by = Math.min(rightY, h * 0.585);
  const dx = w - ax;
  const dy = by;
  const chord = Math.hypot(dx, dy);
  const sag = chord * 0.062;
  const radius = (chord * chord) / (8 * sag) + sag * 0.5;
  const cx = (ax + w) * 0.5 - (dy / chord) * (radius - sag);
  const cy = by * 0.5 + (dx / chord) * (radius - sag);

  let tMin = Infinity;
  let tMax = -Infinity;
  for (let i = 0; i <= 32; i++) {
    const f = i / 32;
    for (const [px, py] of [
      [w * f, 0],
      [w * f, h],
      [0, h * f],
      [w, h * f],
    ]) {
      const t = Math.atan2(py - cy, px - cx);
      if (t < tMin) tMin = t;
      if (t > tMax) tMax = t;
    }
  }
  return { k, cx, cy, radius, thetaMin: tMin - 0.04, thetaMax: tMax + 0.04 };
}

type Geo = ReturnType<typeof horizon>;

/** Static per-star data: theta, rr, omega, phase, alpha (stars with alpha ≤ 0 dropped). */
function buildStars(g: Geo) {
  const band = 500 * g.k;
  const span = g.thetaMax - g.thetaMin;
  const count = Math.max(
    0,
    Math.min(
      MAX_STARS,
      Math.round(0.00625 * span * (g.radius - band / 2) * band),
    ),
  );
  const out = new Float32Array(count * 5);
  let n = 0;
  for (let s = 0; s < count; s++) {
    const h = hash(s ^ 2769414579);
    const theta = g.thetaMin + span * rnd(h);
    const lim = band * (1 - Math.cbrt(rnd(h ^ 1675113877)));
    const m = Math.max(lim, 14 * g.k);
    const depth = rnd(h ^ 3266489909) * m;
    const alpha = Math.max(
      0,
      Math.min(1, Math.min(depth / 3, (m - depth) / (m * 0.25))),
    );
    if (alpha <= 0) continue;
    out[n++] = theta;
    out[n++] = g.radius - depth;
    out[n++] = 0.004 + 0.011 * rnd(h ^ 668265263);
    out[n++] = TAU * rnd(h ^ 374761393);
    out[n++] = alpha;
  }
  return { data: out.subarray(0, n), count: n / 5 };
}

function internalSize(el: HTMLElement) {
  const rect = el.getBoundingClientRect();
  const w = Math.max(320, rect.width);
  const h = Math.max(240, rect.height);
  const dpr = Math.max(1, window.devicePixelRatio || 1);
  const s = Math.max(0.55, Math.min(dpr, Math.sqrt(MAX_PIXELS / (w * h))));
  return { width: Math.round(w * s), height: Math.round(h * s) };
}

// ---------------------------------------------------------------------------
// Canvas A: static CPU render

function drawStatic(
  canvas: HTMLCanvasElement,
  w: number,
  h: number,
  rim?: RGB,
) {
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  const pal = palette(rim);
  const g = horizon(w, h);
  const { k, cx, cy, radius } = g;
  const freq = (TAU * 2.2) / (g.thetaMax - g.thetaMin);
  const img = ctx.createImageData(w, h);
  const px = img.data;
  const hw = w / 2;
  const hh = h / 2;
  const vr = 1600 * k;
  const vig = (x: number, y: number) => {
    const n = Math.hypot(x - hw, y - hh) / vr;
    return Math.max(0.2, 1 - n * n * n);
  };

  // Glow on a 2×2 block grid.
  const cols = Math.ceil(w / 2);
  const rows = Math.ceil(h / 2);
  const blockRGB = new Float32Array(cols * rows * 3);
  const blockSet = new Uint8Array(cols * rows);
  const dA = 14 * k;
  const dV = 120 * k;
  const dP = 600 * k;
  const rampV = 10 * k;
  const rampP = 30 * k;
  const ring = 5 * k;
  for (let by = 0; by < rows; by++) {
    const y = by * 2;
    const ry = y - cy;
    for (let bx = 0; bx < cols; bx++) {
      const x = bx * 2;
      const rx = x - cx;
      const d = Math.hypot(rx, ry) - radius;
      if (d < 0) continue;
      let b = vig(x + 1, y + 1);
      let col: RGB | null = null;
      if (d < ring) {
        b *= 1 + 0.16 * Math.sin(Math.atan2(ry, rx) * freq);
        col = pal.sky;
      } else {
        const A = Math.exp(-d / dA);
        const V = Math.exp(-d / dV) * Math.min(1, d / rampV) * 0.85;
        const P = Math.exp(-d / dP) * Math.min(1, d / rampP) * 0.7;
        const total = Math.min(1, A + V + P);
        if (total > 0.003) {
          const n = rnd((by * cols + bx) ^ 539363090);
          if (n < A) {
            b *= 1 + 0.16 * Math.sin(Math.atan2(ry, rx) * freq);
            col = pal.sky;
          } else if (n < A + V) col = pal.violet;
          else if (n < total) col = pal.plum;
        }
      }
      if (col) {
        const i = by * cols + bx;
        blockSet[i] = 1;
        blockRGB[i * 3] = col[0] * b;
        blockRGB[i * 3 + 1] = col[1] * b;
        blockRGB[i * 3 + 2] = col[2] * b;
      }
    }
  }

  // Fill + fixed grain (seed 0) on every pixel, then the speckle (512×512 tile,
  // ~4.5% of pixels nudged towards black/white). Must match SCENE_FS exactly.
  for (let y = 0, i = 0, o = 0; y < h; y++) {
    const row = (y >> 1) * cols;
    const tileRow = (y & 511) * 512;
    for (let x = 0; x < w; x++, i++, o += 4) {
      const bi = row + (x >> 1);
      let r: number, gg: number, bb: number;
      const planet = blockSet[bi] === 1;
      if (planet) {
        r = blockRGB[bi * 3];
        gg = blockRGB[bi * 3 + 1];
        bb = blockRGB[bi * 3 + 2];
      } else {
        const v = vig(x + 0.5, y + 0.5);
        r = pal.black[0] * v;
        gg = pal.black[1] * v;
        bb = pal.black[2] * v;
      }
      const grain = (rnd(i ^ 2654435769) - 0.5) * (planet ? GRAIN_PLANET : GRAIN_SKY);
      r += grain;
      gg += grain;
      bb += grain;
      const t = rnd((tileRow + (x & 511)) ^ 3266489909);
      if (t < 0.045) {
        const target = t < 0.023 ? 0 : 255;
        const f = 10 / 255;
        r += (target - r) * f;
        gg += (target - gg) * f;
        bb += (target - bb) * f;
      }
      px[o] = r;
      px[o + 1] = gg;
      px[o + 2] = bb;
      px[o + 3] = 255;
    }
  }

  // Stars: 2×2 squares alpha-blended towards silver.
  const stars = buildStars(g);
  const sd = stars.data;
  for (let s = 0; s < stars.count; s++) {
    const theta = sd[s * 5];
    const rr = sd[s * 5 + 1];
    const omega = sd[s * 5 + 2];
    const phase = sd[s * 5 + 3];
    const alpha = sd[s * 5 + 4];
    const ang =
      theta - ((0.06 * k) / omega) * (Math.cos(phase) / Math.max(rr, 1));
    const sx = cx + rr * Math.cos(ang);
    const sy = cy + rr * Math.sin(ang);
    const v = vig(sx, sy);
    const x0 = Math.ceil(sx - 1.5);
    const y0 = Math.ceil(sy - 1.5);
    for (let y = y0; y < y0 + 2; y++) {
      if (y < 0 || y >= h) continue;
      for (let x = x0; x < x0 + 2; x++) {
        if (x < 0 || x >= w) continue;
        const o = (y * w + x) * 4;
        px[o] += (pal.silver[0] * v - px[o]) * alpha;
        px[o + 1] += (pal.silver[1] * v - px[o + 1]) * alpha;
        px[o + 2] += (pal.silver[2] * v - px[o + 2]) * alpha;
      }
    }
  }

  ctx.putImageData(img, 0, 0);
}

// ---------------------------------------------------------------------------
// Canvas B: WebGL2 animated render

const GLSL_COMMON = `#version 300 es
precision highp float;
precision highp int;
uniform vec2 uRes;
uniform float uK;
uint hash(uint x) {
  x = (x ^ (x >> 16u)) * 2146121005u;
  x = (x ^ (x >> 15u)) * 2221713035u;
  return x ^ (x >> 16u);
}
float rnd(uint x) { return float(hash(x) >> 8u) / 16777216.0; }
float vig(vec2 p) {
  float n = length(p - uRes * 0.5) / (1600.0 * uK);
  return max(0.2, 1.0 - n * n * n);
}
`;

const FULLSCREEN_VS = `#version 300 es
void main() {
  vec2 p = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
}
`;

const SCENE_FS = `${GLSL_COMMON}
uniform vec2 uCenter;
uniform float uRadius, uFreq, uRipple;
uniform vec3 uSky, uViolet, uPlum, uBlack;
out vec4 outColor;
void main() {
  int W = int(uRes.x);
  int px = int(gl_FragCoord.x);
  int py = int(uRes.y) - 1 - int(gl_FragCoord.y);
  int cols = (W + 1) / 2;
  int bx = px >> 1;
  int by = py >> 1;
  vec2 b = vec2(float(bx * 2), float(by * 2));
  vec2 rv = b - uCenter;
  float d = length(rv) - uRadius;
  vec3 col = vec3(0.0);
  bool has = false;
  if (d >= 0.0) {
    float v = vig(b + 1.0);
    float ripple = 1.0 + 0.16 * sin(atan(rv.y, rv.x) * uFreq + uRipple);
    if (d < 5.0 * uK) {
      col = uSky * v * ripple; has = true;
    } else {
      float A = exp(-d / (14.0 * uK));
      float V = exp(-d / (120.0 * uK)) * min(1.0, d / (10.0 * uK)) * 0.85;
      float P = exp(-d / (600.0 * uK)) * min(1.0, d / (30.0 * uK)) * 0.7;
      float total = min(1.0, A + V + P);
      if (total > 0.003) {
        float n = rnd(uint(by * cols + bx) ^ 539363090u);
        if (n < A) { col = uSky * v * ripple; has = true; }
        else if (n < A + V) { col = uViolet * v; has = true; }
        else if (n < total) { col = uPlum * v; has = true; }
      }
    }
  }
  if (!has) col = uBlack * vig(vec2(float(px), float(py)) + 0.5);
  // Fixed grain on every pixel: constant seed 0, so it never changes between frames.
  const uint GRAIN_SEED = 0u;
  uint idx = uint(py * W + px);
  col += (rnd(idx ^ 2654435769u ^ GRAIN_SEED) - 0.5) * (has ? ${GRAIN_PLANET.toFixed(1)} : ${GRAIN_SKY.toFixed(1)});
  float t = rnd(uint((py & 511) * 512 + (px & 511)) ^ 3266489909u);
  if (t < 0.045) col += ((t < 0.023 ? 0.0 : 255.0) - col) * (10.0 / 255.0);
  outColor = vec4(col / 255.0, 1.0);
}
`;

const STARS_VS = `${GLSL_COMMON}
layout(location = 0) in vec4 aStar; // theta, rr, omega, phase
layout(location = 1) in float aAlpha;
uniform vec2 uCenter;
uniform float uT;
uniform vec3 uSilver;
out vec4 vColor;
void main() {
  float ang = aStar.x - (0.06 * uK / aStar.z) * cos(aStar.w + aStar.z * uT) / max(aStar.y, 1.0);
  vec2 p = uCenter + aStar.y * vec2(cos(ang), sin(ang));
  vec2 c = ceil(p - 1.5) + 1.0; // centre of the 2×2 pixel block
  gl_Position = vec4(c.x / uRes.x * 2.0 - 1.0, 1.0 - c.y / uRes.y * 2.0, 0.0, 1.0);
  gl_PointSize = 2.0;
  vColor = vec4(uSilver * vig(p) / 255.0, aAlpha);
}
`;

const STARS_FS = `#version 300 es
precision highp float;
in vec4 vColor;
out vec4 outColor;
void main() { outColor = vColor; }
`;

function compile(gl: WebGL2RenderingContext, vs: string, fs: string) {
  const prog = gl.createProgram()!;
  for (const [type, src] of [
    [gl.VERTEX_SHADER, vs],
    [gl.FRAGMENT_SHADER, fs],
  ] as const) {
    const sh = gl.createShader(type)!;
    gl.shaderSource(sh, src);
    gl.compileShader(sh);
    if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
      throw new Error(gl.getShaderInfoLog(sh) ?? "shader compile failed");
    }
    gl.attachShader(prog, sh);
    gl.deleteShader(sh);
  }
  gl.linkProgram(prog);
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
    throw new Error(gl.getProgramInfoLog(prog) ?? "program link failed");
  }
  return prog;
}

function createRenderer(canvas: HTMLCanvasElement, rim?: RGB) {
  const gl = canvas.getContext("webgl2", {
    alpha: false,
    antialias: false,
    depth: false,
    stencil: false,
    premultipliedAlpha: false,
    powerPreference: "low-power",
  });
  if (!gl) return null;

  const pal = palette(rim);
  const scene = compile(gl, FULLSCREEN_VS, SCENE_FS);
  const stars = compile(gl, STARS_VS, STARS_FS);
  const loc = (p: WebGLProgram, n: string) => gl.getUniformLocation(p, n);

  const emptyVao = gl.createVertexArray();
  const starVao = gl.createVertexArray();
  const starBuf = gl.createBuffer();
  gl.bindVertexArray(starVao);
  gl.bindBuffer(gl.ARRAY_BUFFER, starBuf);
  gl.enableVertexAttribArray(0);
  gl.vertexAttribPointer(0, 4, gl.FLOAT, false, 20, 0);
  gl.enableVertexAttribArray(1);
  gl.vertexAttribPointer(1, 1, gl.FLOAT, false, 20, 16);
  gl.bindVertexArray(null);

  gl.useProgram(scene);
  gl.uniform3fv(loc(scene, "uSky"), pal.sky);
  gl.uniform3fv(loc(scene, "uViolet"), pal.violet);
  gl.uniform3fv(loc(scene, "uPlum"), pal.plum);
  gl.uniform3fv(loc(scene, "uBlack"), pal.black);
  gl.useProgram(stars);
  gl.uniform3fv(loc(stars, "uSilver"), pal.silver);

  const sceneU = {
    res: loc(scene, "uRes"),
    k: loc(scene, "uK"),
    center: loc(scene, "uCenter"),
    radius: loc(scene, "uRadius"),
    freq: loc(scene, "uFreq"),
    ripple: loc(scene, "uRipple"),
  };
  const starU = {
    res: loc(stars, "uRes"),
    k: loc(stars, "uK"),
    center: loc(stars, "uCenter"),
    t: loc(stars, "uT"),
  };

  let starCount = 0;

  return {
    resize(w: number, h: number) {
      canvas.width = w;
      canvas.height = h;
      gl.viewport(0, 0, w, h);
      const g = horizon(w, h);
      const s = buildStars(g);
      starCount = s.count;
      gl.bindBuffer(gl.ARRAY_BUFFER, starBuf);
      gl.bufferData(gl.ARRAY_BUFFER, s.data, gl.STATIC_DRAW);

      gl.useProgram(scene);
      gl.uniform2f(sceneU.res, w, h);
      gl.uniform1f(sceneU.k, g.k);
      gl.uniform2f(sceneU.center, g.cx, g.cy);
      gl.uniform1f(sceneU.radius, g.radius);
      gl.uniform1f(sceneU.freq, (TAU * 2.2) / (g.thetaMax - g.thetaMin));
      gl.useProgram(stars);
      gl.uniform2f(starU.res, w, h);
      gl.uniform1f(starU.k, g.k);
      gl.uniform2f(starU.center, g.cx, g.cy);
    },
    /** ms = elapsed animation time; 0 reproduces the static canvas. */
    render(ms: number) {
      const sec = ms / 1000;

      gl.disable(gl.BLEND);
      gl.useProgram(scene);
      gl.uniform1f(sceneU.ripple, sec * RIPPLE_SPEED);
      gl.bindVertexArray(emptyVao);
      gl.drawArrays(gl.TRIANGLES, 0, 3);

      gl.enable(gl.BLEND);
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
      if (starCount > 0) {
        gl.useProgram(stars);
        gl.uniform1f(starU.t, sec * STAR_TIME_RATE);
        gl.bindVertexArray(starVao);
        gl.drawArrays(gl.POINTS, 0, starCount);
      }
      gl.bindVertexArray(null);
    },
    isLost: () => gl.isContextLost(),
    dispose() {
      gl.deleteProgram(scene);
      gl.deleteProgram(stars);
      gl.deleteBuffer(starBuf);
      gl.deleteVertexArray(starVao);
      gl.deleteVertexArray(emptyVao);
    },
  };
}

// ---------------------------------------------------------------------------
// Component

type HeroBackgroundProps = {
  /** Mirror the horizon vertically (glow at the bottom instead of the top). */
  flip?: boolean;
  /** Set to false to keep only the static canvas. */
  animated?: boolean;
  /** Rim colour override (the thin edge and the densest dots next to it), as [r, g, b]. Defaults to SKY. */
  rim?: RGB;
  /** Stop the animation loop (e.g. while the background is faded out); the last frame stays. */
  paused?: boolean;
  /** Animation speed multiplier (1 = normal). Below 1 the loop also drops to ~20 fps. */
  speed?: number;
  className?: string;
};

const canvasStyle: React.CSSProperties = {
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  imageRendering: "pixelated",
};

export function HeroBackground({
  flip = false,
  animated = true,
  rim: rimProp,
  paused = false,
  speed = 1,
  className = "",
}: HeroBackgroundProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const staticRef = useRef<HTMLCanvasElement>(null);
  const glRef = useRef<HTMLCanvasElement>(null);
  const pausedRef = useRef(paused);
  const speedRef = useRef(speed);
  speedRef.current = speed;
  // Keyed by value so an inline array literal doesn't restart the effect every render.
  const rimKey = rimProp ? rimProp.join(",") : "";
  const syncRef = useRef<() => void>(() => {});

  useEffect(() => {
    pausedRef.current = paused;
    syncRef.current();
  }, [paused]);

  useEffect(() => {
    const root = rootRef.current;
    const staticCanvas = staticRef.current;
    const glCanvas = glRef.current;
    if (!root || !staticCanvas || !glCanvas) return;

    const rim = rimKey ? (rimKey.split(",").map(Number) as RGB) : undefined;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let renderer: ReturnType<typeof createRenderer> = null;
    let disposed = false;
    let loopId: number | undefined;
    let resizeId: number | undefined;
    let startId: number | undefined;
    let elapsed = 0;
    let lastTick = 0;
    let lastPaint = 0;
    let size = { width: 0, height: 0 };

    const showStatic = (show: boolean) => {
      staticCanvas.style.visibility = show ? "visible" : "hidden";
      glCanvas.style.visibility = show ? "hidden" : "visible";
    };

    const stopLoop = () => {
      if (loopId !== undefined) cancelAnimationFrame(loopId);
      loopId = undefined;
    };

    // Time advances by the frame delta times the current speed, so changing
    // speed never makes the scene jump.
    const tick = (now: number) => {
      if (!renderer) return;
      const rate = speedRef.current;
      elapsed += Math.min(100, now - lastTick) * rate;
      lastTick = now;
      if (rate >= 1 || now - lastPaint >= 50) {
        renderer.render(elapsed);
        lastPaint = now;
      }
      loopId = requestAnimationFrame(tick);
    };

    const startLoop = () => {
      if (
        !renderer ||
        loopId !== undefined ||
        motion.matches ||
        document.hidden ||
        pausedRef.current
      )
        return;
      lastTick = performance.now();
      loopId = requestAnimationFrame(tick);
    };

    const syncMotion = () => {
      if (!renderer) return;
      if (motion.matches || document.hidden || pausedRef.current) {
        stopLoop();
        renderer.render(elapsed);
      } else startLoop();
    };

    syncRef.current = syncMotion;

    const draw = () => {
      size = internalSize(root);
      if (renderer) {
        renderer.resize(size.width, size.height);
        renderer.render(elapsed);
      } else {
        drawStatic(staticCanvas, size.width, size.height, rim);
      }
    };

    const scheduleDraw = () => {
      if (resizeId !== undefined) return;
      resizeId = requestAnimationFrame(() => {
        resizeId = undefined;
        const next = internalSize(root);
        if (next.width !== size.width || next.height !== size.height) draw();
      });
    };

    const onContextLost = (e: Event) => {
      e.preventDefault();
      stopLoop();
      renderer = null;
      drawStatic(staticCanvas, size.width, size.height, rim);
      showStatic(true);
    };

    // 1. Static canvas, always.
    showStatic(true);
    draw();

    // 2. Animated canvas on top, once WebGL2 is ready.
    if (animated) {
      startId = requestAnimationFrame(() => {
        startId = undefined;
        if (disposed) return;
        try {
          renderer = createRenderer(glCanvas, rim);
        } catch (err) {
          console.error(err);
          renderer = null;
        }
        if (!renderer) return;
        renderer.resize(size.width, size.height);
        renderer.render(elapsed);
        // Hide the static layer only after the first GL frame is on screen.
        requestAnimationFrame(() =>
          requestAnimationFrame(() => {
            if (!disposed && renderer) showStatic(false);
          }),
        );
        glCanvas.addEventListener("webglcontextlost", onContextLost);
        syncMotion();
      });
    }

    const ro = new ResizeObserver(scheduleDraw);
    ro.observe(root);
    motion.addEventListener("change", syncMotion);
    document.addEventListener("visibilitychange", syncMotion);

    return () => {
      disposed = true;
      stopLoop();
      if (startId !== undefined) cancelAnimationFrame(startId);
      if (resizeId !== undefined) cancelAnimationFrame(resizeId);
      ro.disconnect();
      motion.removeEventListener("change", syncMotion);
      document.removeEventListener("visibilitychange", syncMotion);
      glCanvas.removeEventListener("webglcontextlost", onContextLost);
      if (renderer && !renderer.isLost()) renderer.dispose();
      renderer = null;
      syncRef.current = () => {};
    };
  }, [animated, rimKey]);

  return (
    <div
      aria-hidden="true"
      className={className}
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      <div
        ref={rootRef}
        style={{
          position: "absolute",
          inset: 0,
          background: "#09090b",
          transform: flip ? "scaleY(-1)" : undefined,
        }}
      >
        <canvas ref={staticRef} style={canvasStyle} />
        <canvas ref={glRef} style={{ ...canvasStyle, visibility: "hidden" }} />
      </div>
    </div>
  );
}
