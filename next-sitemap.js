module.exports = {
  siteUrl: process.env.SITE_URL,
  generateRobotsTxt: false,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        disallow: [
          '/*price=*',
          '/*length=*',
          '/*shipyard=*',
          '/*body=*',
          '/*condition=*',
          '/*speed=*',
          '/*cabin=*',
          '/*sort=*',
          '/*type=*',
          '/*undefined=*',
        ],
        allow: ['/_next/*.js', '/_next/*.css', '/_next/*.jpg', '/_next/*.svg'],
      },
      {
        userAgent: 'Yandex',
        disallow: [
          '/*price=*',
          '/*length=*',
          '/*shipyard=*',
          '/*body=*',
          '/*condition=*',
          '/*speed=*',
          '/*cabin=*',
          '/*sort=*',
          '/*type=*',
          '/*undefined=*',
        ],
        allow: ['/_next/*.js', '/_next/*.css', '/_next/*.jpg', '/_next/*.svg'],
        cleanParam: 'utm',
        host: 'https://arconyachts.com',
      },
      {
        userAgent: 'Googlebot',
        disallow: [
          '/*price=*',
          '/*length=*',
          '/*shipyard=*',
          '/*body=*',
          '/*condition=*',
          '/*speed=*',
          '/*cabin=*',
          '/*sort=*',
          '/*type=*',
          '/*undefined=*',
        ],
        allow: ['/_next/*.js', '/_next/*.css', '/_next/*.jpg', '/_next/*.svg'],
      },
    ],
    additionalSitemaps: [
      `${process.env.SITE_URL}/catalog-sitemap.xml`,
      `${process.env.SITE_URL}/sitemap.xml`,
    ],
  },
  exclude: [
    '/en*',
    '/catalog-sitemap.xml',
    // '/en/about',
    // '/en/berth_assistance',
    // '/en/building',
    // '/en/charters',
    // '/en/contacts',
    // '/en/crew_management',
    // '/en/favorites',
    // '/en/finances',
    // '/en/handling',
    // '/en/leasing',
    // '/en/legal_services',
    // '/en/management',
    // '/en/news',
    // '/en/policy',
    // '/en/projects',
    // '/en/registration',
    // '/en/sale',
    // '/en/selling',
    // '/en/shipyards',
    // '/en/sitemap',
    // '/en/spread',
    // '/en/support',
    '/ru/sitemap',
    '/sitemap',
  ],
}