/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    EMAILJS_KEY: process.env.EMAILJS_KEY,

    SERVICE_ID: process.env.SERVICE_ID,
     TEMPLATE_ID: process.env.TEMPLATE_ID
  }

}

module.exports = nextConfig
