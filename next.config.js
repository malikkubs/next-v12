/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};
const withOffline = require("next-offline");
module.exports = withOffline(nextConfig);
