/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'http', hostname: '*' },
      { protocol: 'https', hostname: '*' },
    ],
  },
  redirects: () => {
    /** 默认重定向配置 */
    const defaultRedirects = [
      {
        source: '/MailRegisterSuccess',
        destination: '/registersuccess',
        permanent: true,
      },
    ]

    return defaultRedirects
  },
  reactStrictMode: true,
  output: 'standalone',
  env: {
    APP_ENV: process.env.APP_ENV,
    BUILD_ID: process.env.CI_COMMIT_REF_SLUG,
  },
  swcMinify: true,
  compiler: {
    removeConsole: process.env.APP_ENV == 'prd',
    styledComponents: true,
  },
}

module.exports = nextConfig
