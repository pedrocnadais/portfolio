/** @type {import('next').NextConfig} */
const nextConfig = {
 basePath: "/portfolio",
 output: "export",
 reactStrictMode: true,
 experimental: {
  serverActions: true,
 }
}

module.exports = nextConfig
