require('dotenv').config();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: process.env.API_URL || "https://api.nasa.gov/neo/rest/v1/feed",
    API_KEY: process.env.API_KEY || "bXcLsxkE0rRaauQsHzuweAwfgSNLug3lmYE9e9MC",
  },
}

module.exports = nextConfig
