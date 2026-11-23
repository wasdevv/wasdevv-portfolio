/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // ObraHub was renamed Tork; its case study now lives at /tork.
  async redirects() {
    return [{ source: "/obrahub", destination: "/tork", permanent: false }]
  },
}

export default nextConfig
