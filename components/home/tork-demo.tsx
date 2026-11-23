"use client"

import Link from "next/link"
import { Maximize2, Minimize2, Pause, Play, Volume2, VolumeX } from "lucide-react"
import { motion, useMotionValue, useTransform } from "framer-motion"
import { useCallback, useEffect, useRef, useState } from "react"
import { useLanguage } from "@/components/language-provider"
import { CountUp } from "./count-up"
import { Dash } from "./timeline"
import { usePrefersReducedMotion } from "./use-reduced-motion"

/**
 * Chapter start times, in seconds, for /public/videos/tork-demo.*. Edit these
 * after re-recording; titles and texts are in lib/i18n.ts (home.work.projects
 * .obrahub.chapters), matched by position.
 */
export const TORK_CHAPTER_TIMES = [0, 56, 72, 96]

const STACK =
  "Ruby on Rails 8.1 · Ruby 4 · PostgreSQL · Hotwire · Tailwind CSS 4 · Claude API · Asaas · AWS S3 · Terraform · RSpec · Docker · Railway"
const ease = [0.2, 0.7, 0.2, 1] as const

/** The "Software I've shipped" Tork card: product video with chapters kept in sync. */
export function TorkCard() {
  const { t } = useLanguage()
  const copy = t.home.work.projects.obrahub
  const reduce = usePrefersReducedMotion()
  const videoRef = useRef<HTMLVideoElement>(null)
  const frameRef = useRef<HTMLDivElement>(null)
  const time = useMotionValue(0)
  const [duration, setDuration] = useState(0)
  const [active, setActive] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [second, setSecond] = useState(0) // whole seconds, for the time readout
  const [fullscreen, setFullscreen] = useState(false)
  // Starts muted (browsers only autoplay silent video); the visitor turns sound on.
  const [muted, setMuted] = useState(true)
  const [volume, setVolume] = useState(0.8)
  const volumeRef = useRef<HTMLDivElement>(null)
  // Once the visitor pauses, scrolling must not resume playback behind their back.
  const userPaused = useRef(false)

  const chapters = copy.chapters.map((c, i) => ({ ...c, t: TORK_CHAPTER_TIMES[i] ?? 0 }))
  const chapterAt = useCallback(
    (s: number) => {
      let i = 0
      TORK_CHAPTER_TIMES.forEach((start, k) => {
        if (s >= start) i = k
      })
      return Math.min(i, copy.chapters.length - 1)
    },
    [copy.chapters.length],
  )

  // Follow currentTime smoothly while playing (timeupdate only fires ~4×/s).
  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    let frame = 0
    const tick = () => {
      time.set(video.currentTime)
      setActive(chapterAt(video.currentTime))
      setSecond(Math.floor(video.currentTime))
      if (!video.paused) frame = requestAnimationFrame(tick)
    }
    const onPlay = () => {
      setPlaying(true)
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(tick)
    }
    const onPause = () => {
      setPlaying(false)
      tick()
    }
    const onMeta = () => setDuration(video.duration || 0)
    video.addEventListener("play", onPlay)
    video.addEventListener("pause", onPause)
    video.addEventListener("seeked", tick)
    video.addEventListener("loadedmetadata", onMeta)
    if (video.readyState >= 1) onMeta()
    return () => {
      cancelAnimationFrame(frame)
      video.removeEventListener("play", onPlay)
      video.removeEventListener("pause", onPause)
      video.removeEventListener("seeked", tick)
      video.removeEventListener("loadedmetadata", onMeta)
    }
  }, [chapterAt, time])

  // Autoplay only while at least half of the video is on screen; never with reduced motion.
  useEffect(() => {
    const video = videoRef.current
    if (!video || reduce) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          if (!userPaused.current) video.play().catch(() => {})
        } else if (!video.paused) video.pause()
      },
      { threshold: [0, 0.5] },
    )
    io.observe(video)
    return () => io.disconnect()
  }, [reduce])

  const seek = (s: number) => {
    const video = videoRef.current
    if (!video) return
    userPaused.current = false
    video.currentTime = s
    video.play().catch(() => {})
  }

  const togglePlay = () => {
    const video = videoRef.current
    if (!video) return
    if (video.paused) {
      userPaused.current = false
      video.play().catch(() => {})
    } else {
      userPaused.current = true
      video.pause()
    }
  }

  // Timeline scrubbing: click or drag; keeps the current play/pause state.
  const trackRef = useRef<HTMLDivElement>(null)
  const scrubTo = (clientX: number) => {
    const video = videoRef.current
    const track = trackRef.current
    if (!video || !track || !duration) return
    const r = track.getBoundingClientRect()
    video.currentTime = Math.min(1, Math.max(0, (clientX - r.left) / r.width)) * duration
  }
  const onTrackKey = (e: React.KeyboardEvent) => {
    const video = videoRef.current
    if (!video || !duration) return
    const step = e.shiftKey ? 15 : 5
    if (e.key === "ArrowRight") video.currentTime = Math.min(duration, video.currentTime + step)
    else if (e.key === "ArrowLeft") video.currentTime = Math.max(0, video.currentTime - step)
    else if (e.key === "Home") video.currentTime = 0
    else if (e.key === "End") video.currentTime = duration - 0.1
    else return
    e.preventDefault()
  }
  const played = useTransform(time, (s) => (duration ? Math.min(1, s / duration) : 0))

  useEffect(() => {
    const onChange = () => setFullscreen(document.fullscreenElement === frameRef.current)
    document.addEventListener("fullscreenchange", onChange)
    return () => document.removeEventListener("fullscreenchange", onChange)
  }, [])
  const applyVolume = (v: number) => {
    const video = videoRef.current
    if (!video) return
    const next = Math.round(Math.min(1, Math.max(0, v)) * 100) / 100
    video.volume = next
    video.muted = next === 0
    setVolume(next)
    setMuted(video.muted)
    if (!video.muted && video.paused) {
      userPaused.current = false
      video.play().catch(() => {})
    }
  }
  const volumeAt = (clientX: number) => {
    const r = volumeRef.current?.getBoundingClientRect()
    if (r) applyVolume((clientX - r.left) / r.width)
  }
  const onVolumeKey = (e: React.KeyboardEvent) => {
    const current = muted ? 0 : volume
    if (e.key === "ArrowRight" || e.key === "ArrowUp") applyVolume(current + 0.1)
    else if (e.key === "ArrowLeft" || e.key === "ArrowDown") applyVolume(current - 0.1)
    else if (e.key === "Home") applyVolume(0)
    else if (e.key === "End") applyVolume(1)
    else return
    e.preventDefault()
  }

  const toggleMute = () => {
    const video = videoRef.current
    if (!video) return
    video.muted = !video.muted
    // Unmuting from a zero volume would still be silent.
    if (!video.muted && video.volume === 0) {
      video.volume = 0.8
      setVolume(0.8)
    }
    setMuted(video.muted)
    // Asking for sound is a clear "I'm watching": make sure it is playing.
    if (!video.muted && video.paused) {
      userPaused.current = false
      video.play().catch(() => {})
    }
  }

  const toggleFullscreen = () => {
    if (document.fullscreenElement) document.exitFullscreen().catch(() => {})
    else frameRef.current?.requestFullscreen?.().catch(() => {})
  }

  // Share of the active chapter already played (0 → 1).
  const chapterProgress = useTransform(time, (s) => {
    const start = TORK_CHAPTER_TIMES[active] ?? 0
    const end = TORK_CHAPTER_TIMES[active + 1] ?? (duration || start + 1)
    return Math.min(1, Math.max(0, (s - start) / Math.max(0.001, end - start)))
  })

  // Reduced motion resolves after hydration: pin the final state rather than
  // dropping the props, or the initial opacity 0 would stick.
  const enter = reduce
    ? { initial: false as const, animate: { opacity: 1, y: 0 }, transition: { duration: 0 } }
    : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.3 },
        transition: { duration: 0.6, ease },
      }

  return (
    <article className="grid items-center gap-x-12 gap-y-8 border-t border-hp-line py-12 font-geist lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
      <div className="order-2 min-w-0 lg:order-1">
        <h3 className="m-0 mb-2 text-[30px] font-bold tracking-[-0.01em] text-hp-lilac">{copy.title}</h3>
        <p className="m-0 mb-4 font-plex-mono text-[13px] text-hp-violet">{copy.kicker}</p>
        <p className="m-0 mb-7 max-w-[48ch] text-hp-lilac-soft">{copy.body}</p>

        <dl className="m-0 mb-8 grid grid-cols-3 border-y border-hp-line">
          {copy.figures.map((f, i) => (
            <div key={f.label} className={`flex flex-col-reverse justify-end gap-1.5 py-4 ${i > 0 ? "border-l border-hp-line pl-4" : "pr-4"}`}>
              <dt className="text-[13px] leading-snug text-hp-lilac-dim">{f.label}</dt>
              <dd className="m-0 text-[clamp(1.6rem,1.2rem+1.2vw,2.25rem)] font-medium leading-none tracking-[-0.03em] text-hp-violet">
                <CountUp text={f.value} />
              </dd>
            </div>
          ))}
        </dl>

        <ol className="m-0 mb-7 flex list-none flex-col gap-1 p-0">
          {chapters.map((c, i) => {
            const on = i === active
            return (
              <li key={c.title}>
                <button
                  type="button"
                  onClick={() => seek(c.t)}
                  aria-current={on ? "step" : undefined}
                  className={`group flex w-full cursor-pointer gap-3 py-2.5 text-left transition-opacity duration-300 ${
                    on ? "opacity-100" : "opacity-45 hover:opacity-80"
                  }`}
                >
                  <Dash className={on ? "text-hp-violet" : ""} />
                  <span className="min-w-0 flex-1">
                    <span className="flex items-baseline justify-between gap-3">
                      <span className="font-medium text-hp-lilac">{c.title}</span>
                      <span className="font-plex-mono text-[12px] text-hp-lilac-dim">{formatTime(c.t)}</span>
                    </span>
                    <span className="mt-0.5 block text-[15px] leading-snug text-hp-lilac-soft">{c.text}</span>
                    <span aria-hidden="true" className="mt-2.5 block h-px overflow-hidden bg-hp-line">
                      {on ? (
                        <motion.span
                          className="block h-full origin-left bg-hp-violet"
                          style={{ scaleX: chapterProgress }}
                        />
                      ) : null}
                    </span>
                  </span>
                </button>
              </li>
            )
          })}
        </ol>

        <ul aria-label="Stack" className="m-0 mb-7 flex list-none flex-wrap gap-2 p-0">
          {STACK.split(" · ").map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-hp-line-2 px-3 py-1 font-plex-mono text-[13px] text-hp-lilac-soft"
            >
              {tech}
            </li>
          ))}
        </ul>
        <Link href="/tork" className="font-semibold text-hp-violet hover:underline hover:underline-offset-4">
          {copy.cta}
        </Link>
      </div>

      <motion.div
        ref={frameRef}
        {...enter}
        className="order-1 flex min-w-0 flex-col overflow-hidden rounded-[10px] border border-hp-line bg-hp-bg lg:order-2"
      >
        <div className="flex items-center gap-2 border-b border-hp-line px-4 py-3 font-plex-mono text-xs text-hp-lilac-dim">
          {[0, 1, 2].map((i) => (
            <span key={i} aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-hp-line-2" />
          ))}
          <span className="ml-2">obrahub.up.railway.app · demo</span>
        </div>

        <div className={`relative bg-hp-bg ${fullscreen ? "min-h-0 flex-1" : "aspect-video"}`}>
          <span className="pointer-events-none absolute left-3 top-3 z-10 rounded-md border border-hp-violet/40 bg-hp-bg/80 px-2.5 py-1 font-plex-mono text-[11px] uppercase tracking-[0.14em] text-hp-lilac">
            Walkthrough · {formatTime(duration)}
          </span>
          <video
            ref={videoRef}
            className="block h-full w-full"
            muted
            playsInline
            loop
            preload="metadata"
            poster="/videos/tork-demo-poster.webp"
            aria-label={copy.videoLabel}
            onClick={togglePlay}
          >
            <source src="/videos/tork-demo.webm" type="video/webm" />
            <source src="/videos/tork-demo.mp4" type="video/mp4" />
          </video>
          {reduce && !playing ? (
            <button
              type="button"
              onClick={togglePlay}
              className="absolute inset-0 flex cursor-pointer items-center justify-center bg-hp-bg/30"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-hp-violet/50 bg-hp-bg/80 px-5 py-2.5 text-sm font-medium text-hp-lilac">
                <Play className="h-4 w-4" aria-hidden="true" />
                {copy.play}
              </span>
            </button>
          ) : null}
        </div>

        <div className="flex items-center gap-4 border-t border-hp-line px-4 py-2.5 font-plex-mono text-[13px] text-hp-lilac">
          <button
            type="button"
            onClick={togglePlay}
            aria-label={playing ? copy.pause : copy.play}
            className="inline-flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-full text-hp-lilac hover:bg-hp-violet/15 hover:text-hp-violet"
          >
            {playing ? <Pause className="h-4 w-4" aria-hidden="true" /> : <Play className="h-4 w-4" aria-hidden="true" />}
          </button>
          <span className="shrink-0 tabular-nums">
            {formatTime(second)} <span className="text-hp-lilac-dim">/ {formatTime(duration)}</span>
          </span>
          <div
            ref={trackRef}
            role="slider"
            tabIndex={0}
            aria-label={copy.seek}
            aria-valuemin={0}
            aria-valuemax={Math.round(duration)}
            aria-valuenow={second}
            aria-valuetext={`${formatTime(second)} / ${formatTime(duration)}`}
            onKeyDown={onTrackKey}
            onPointerDown={(e) => {
              e.currentTarget.setPointerCapture(e.pointerId)
              scrubTo(e.clientX)
            }}
            onPointerMove={(e) => {
              if (e.currentTarget.hasPointerCapture(e.pointerId)) scrubTo(e.clientX)
            }}
            className="group/track relative flex h-6 min-w-0 flex-1 cursor-pointer touch-none items-center rounded-sm focus-visible:outline-hp-violet"
          >
            <span className="relative block h-[3px] w-full overflow-hidden rounded-full bg-hp-line-2">
              <motion.span className="absolute inset-0 origin-left bg-hp-violet" style={{ scaleX: played }} />
            </span>
            {duration
              ? TORK_CHAPTER_TIMES.slice(1).map((c) => (
                  <span
                    key={c}
                    aria-hidden="true"
                    className="absolute top-1/2 h-2 w-px -translate-y-1/2 bg-hp-lilac-dim"
                    style={{ left: `${(c / duration) * 100}%` }}
                  />
                ))
              : null}
          </div>
          <button
            type="button"
            onClick={toggleMute}
            aria-label={muted ? copy.unmute : copy.mute}
            aria-pressed={!muted}
            className="inline-flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-full text-hp-lilac hover:bg-hp-violet/15 hover:text-hp-violet"
          >
            {muted ? <VolumeX className="h-4 w-4" aria-hidden="true" /> : <Volume2 className="h-4 w-4" aria-hidden="true" />}
          </button>
          {/* Phones handle volume with their own buttons (iOS ignores video.volume). */}
          <div
            ref={volumeRef}
            role="slider"
            tabIndex={0}
            aria-label={copy.volume}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round((muted ? 0 : volume) * 100)}
            aria-valuetext={`${Math.round((muted ? 0 : volume) * 100)}%`}
            onKeyDown={onVolumeKey}
            onPointerDown={(e) => {
              e.currentTarget.setPointerCapture(e.pointerId)
              volumeAt(e.clientX)
            }}
            onPointerMove={(e) => {
              if (e.currentTarget.hasPointerCapture(e.pointerId)) volumeAt(e.clientX)
            }}
            className="relative -ml-2 hidden h-6 w-20 shrink-0 cursor-pointer touch-none items-center rounded-sm focus-visible:outline-hp-violet sm:flex"
          >
            <span className="relative block h-[3px] w-full overflow-hidden rounded-full bg-hp-line-2">
              <span
                className="absolute inset-0 origin-left bg-hp-lilac"
                style={{ transform: `scaleX(${muted ? 0 : volume})` }}
              />
            </span>
          </div>
          <button
            type="button"
            onClick={toggleFullscreen}
            aria-label={fullscreen ? copy.collapse : copy.expand}
            className="inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-md px-2 py-1 text-[12px] uppercase tracking-[0.12em] text-hp-lilac-dim hover:text-hp-violet"
          >
            {fullscreen ? <Minimize2 className="h-3.5 w-3.5" aria-hidden="true" /> : <Maximize2 className="h-3.5 w-3.5" aria-hidden="true" />}
            <span className="hidden sm:inline">{fullscreen ? copy.collapse : copy.expand}</span>
          </button>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-2 border-t border-hp-line px-5 py-3.5 font-plex-mono text-[13px] text-hp-lilac-dim">
          {copy.checks.map((check, i) => (
            <span key={check}>
              {i === 0 ? <span className="text-hp-violet">✓ </span> : null}
              {check}
            </span>
          ))}
        </div>
      </motion.div>
    </article>
  )
}

function formatTime(s: number) {
  return `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`
}
