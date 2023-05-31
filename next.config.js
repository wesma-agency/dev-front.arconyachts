const path = require('path')
const withPlugins = require('next-compose-plugins')
const withImages = require('next-optimized-images')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withPlugins(
  [
    // [withBundleAnalyzer],
    [
      withImages,
      {
        optimizeImages: false,
      },
    ],
  ],
  {
    webpack(config, options) {
      config.resolve.alias['/assets'] = path.resolve('src/assets')

      return config
    },
    async headers() {
      return [
        {
          source: '/charters/:slug',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, s-maxage=30, stale-while-revalidate=59'
            }
          ]
        }
      ]
    },
    env: {
      GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY,
    },
    i18n: {
      locales: ['en', 'ru'],
      defaultLocale: 'en',
      localeDetection: false
    },
    images: {
      formats: ['image/webp'],
      deviceSizes: [375, 640, 980, 1280, 1920],
      // imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
      domains: ['dev-01-api.wesma.ru'],
      unoptimized: true
    },
    async rewrites() {
      return [
        // {
        //   source: '/default',
        //   destination: '/ru',
        //   locale: false,
        // },
        // {
        //   source: '/default/:path*',
        //   destination: '/ru/:path*',
        //   locale: false,
        // },
        {
          source: '/sale/cabin-:count(\\d{1,1}):path*',
          destination: '/sale/:count:path*',
        },
      ]
    },
    async redirects() {
      return [
        // {
        //   source: '/default',
        //   destination: '/ru',
        //   locale: false,
        //   statusCode: 301,
        // },
        // {
        //   source:
        //     '/default/:slug((?!_next|img|robots.txt|sitemap.xml|catalog-sitemap.xml|fonts).*)',
        //   destination: '/ru/:slug*',
        //   locale: false,
        //   statusCode: 301,
        // },
        {
          source: '/shipyards/:slug*/building',
          destination: '/shipyards/:slug*',
          statusCode: 301,
        },
        {
          source: '/shipyards/:shipyard*/charters/:yacht*/addtnl',
          destination: '/charters/:yacht*',
          statusCode: 301,
        },
        {
          source: '/shipyards/:shipyard*/charters/:yacht*/photos',
          destination: '/charters/:yacht*',
          statusCode: 301,
        },
        {
          source: '/shipyards/:shipyard*/charters/:yacht*/plans',
          destination: '/charters/:yacht*',
          statusCode: 301,
        },
        {
          source: '/shipyards/:shipyard*/charters',
          destination: '/charters/:shipyard*',
          statusCode: 301,
        },
        {
          source: '/shipyards/:shipyard*/charters/:yacht*',
          destination: '/charters/:yacht*',
          statusCode: 301,
        },
        {
          source: '/shipyards/:shipyard*/projects/:yacht*/addtnl',
          destination: '/projects/:yacht*',
          statusCode: 301,
        },
        {
          source: '/shipyards/:shipyard*/projects/:yacht*/photos',
          destination: '/projects/:yacht*',
          statusCode: 301,
        },
        {
          source: '/shipyards/:shipyard*/projects/:yacht*/plans',
          destination: '/projects/:yacht*',
          statusCode: 301,
        },
        {
          source: '/shipyards/:shipyard*/projects/:yacht*',
          destination: '/projects/:yacht*',
          statusCode: 301,
        },
        {
          source: '/shipyards/:shipyard*/sales/:yacht*/addtnl',
          destination: '/sale/:yacht*',
          statusCode: 301,
        },
        {
          source: '/shipyards/:shipyard*/sales/:yacht*/photos',
          destination: '/sale/:yacht*',
          statusCode: 301,
        },
        {
          source: '/shipyards/:shipyard*/sales/:yacht*/plans',
          destination: '/sale/:yacht*',
          statusCode: 301,
        },
        {
          source: '/shipyards/:shipyard*/sales',
          destination: '/sale/:shipyard*',
          statusCode: 301,
        },
        {
          source: '/shipyards/:shipyard*/sales/:yacht*',
          destination: '/sale/:yacht*',
          statusCode: 301,
        },
        {
          source: '/sale/:city/:location',
          destination: '/sale/:location',
          statusCode: 301,
        },
        {
          source: '/sales/:city/:location',
          destination: '/sales/:location',
          statusCode: 301,
        },
        {
          source: '/sales/:slug*',
          destination: '/sale/:slug*',
          statusCode: 301,
        },
        {
          source: '/service',
          destination: '/handling',
          statusCode: 301,
        },
        {
          source: '/company',
          destination: '/about',
          statusCode: 301,
        },
        {
          source: '/details',
          destination: '/about',
          statusCode: 301,
        },
        {
          source: '/history',
          destination: '/about',
          statusCode: 301,
        },
        {
          source: '/team',
          destination: '/about',
          statusCode: 301,
        },
        {
          source: '/news_items/:news*',
          destination: '/news/:news*',
          statusCode: 301,
        },
        {
          source: '/privacy',
          destination: '/policy',
          statusCode: 301,
        },
        {
          source: '/sale/:count(\\d{1,1})',
          destination: '/sale/cabin-:count',
          statusCode: 301,
        },
      ]
    },
  }
)
