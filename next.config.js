/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')

const nextConfig = {
  reactStrictMode: true,
  i18n,
  env: {
    MONGODB_URI: 'mongodb://127.0.0.1:27017/digitaldisplay'
  }
}

module.exports = nextConfig
