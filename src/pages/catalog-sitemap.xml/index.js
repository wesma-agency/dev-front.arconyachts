import { initializeApollo } from '../../graphql/apollo'
import {
  GET_CHARTER_SLUG,
  GET_PROJECTS_SLUG,
  GET_SALE_SLUG,
  GET_SHIPYARDS_SLUG,
} from '../../graphql/query/getSitemap'
import { getServerSideSitemap } from 'next-sitemap'
import { YACHT_META_ITEMS } from '../../graphql/query/Yacht_Meta'

export default function CatalogSitemap() {}

export const getServerSideProps = async (ctx) => {
  const client = initializeApollo(ctx)
  const { query, locale } = ctx
  let locales = ['/ru', ''];
  if(locale === 'ru') {
    locales = ['/ru'];
  } else {
    locales = [''];
  }
  // const locales = ['/ru', '']
  const sitemap = []

  // slug для основных разделов страницы
  const mainPages = [
      'sale',
      'charters',
      'projects',
      'shipyards',
      'building',
      'management',
      'about',
      'news',
      'berth_assistance',
      'contacts',
      'crew_management',
      'favorites',
      'finances',
      'handling',
      'leasing',
      'legal_services',
      'policy',
      'registration',
      'selling',
      'spread',
      'support',
      'transportation',
  ]

  // Добавляем основные разделы
  mainPages.forEach((el) => {
    locales.forEach((locale) => {
      const date = new Date().toISOString()
      const page = {
        loc: [process.env.SITE_URL + locale, el].join('/'),
        lastmod: date,
      }
      sitemap.push(page)
    })
  });

  // Получаем проекты
  const { data: projects } = await client.query({
    query: GET_PROJECTS_SLUG,
  })
  if (projects.yachts.data.length > 0) {
    projects.yachts.data.forEach((el) => {
      locales.forEach((locale) => {
        const date = new Date().toISOString()
        const page = {
          loc: [process.env.SITE_URL + locale, 'projects', el.slug].join('/'),
          lastmod: date,
        }
        sitemap.push(page)
      })
    })
  }

  // Получаем страницы-подборки
  const { data: meta } = await client.query({
    query: YACHT_META_ITEMS,
  })
  if (meta.yacht_meta_items.length > 0) {
    meta.yacht_meta_items.forEach((el) => {
      locales.forEach((locale) => {
        const date = new Date().toISOString()
        const page = {
          lastmod: date,
        }
        switch (el.type) {
          case 'rent':
            if (el.filter === 'cabin') {
              console.log(el)
              page.loc = [
                process.env.SITE_URL + locale,
                'charters',
                `cabin-${el.value}`,
              ].join('/')
            } else {
              page.loc = [
                process.env.SITE_URL + locale,
                'charters',
                el.value,
              ].join('/')
            }
            break
          case 'sale':
            if (el.filter === 'cabin') {
              page.loc = [
                process.env.SITE_URL + locale,
                'sale',
                `cabin-${el.value}`,
              ].join('/')
            } else {
              page.loc = [process.env.SITE_URL + locale, 'sale', el.value].join(
                '/'
              )
            }
            break
        }
        page.loc && sitemap.push(page)
      })
    })
  }

  // Получаем верфи
  const { data: shipyards } = await client.query({
    query: GET_SHIPYARDS_SLUG,
  })
  if (shipyards.shipyards.data.length > 0) {
    shipyards.shipyards.data.forEach((el) => {
      locales.forEach((locale) => {
        const date = new Date().toISOString()
        const page = {
          loc: [process.env.SITE_URL + locale, 'shipyards', el.slug].join('/'),
          lastmod: date,
        }
        sitemap.push(page)
      })
    })
  }

  // Получаем каталог sale
  const { data: sale } = await client.query({
    query: GET_SALE_SLUG,
  })
  if (sale.yachts.data.length > 0) {
    sale.yachts.data.forEach((el) => {
      locales.forEach((locale) => {
        const date = new Date().toISOString()
        const page = {
          loc: [process.env.SITE_URL + locale, 'sale', el.slug].join('/'),
          lastmod: date,
        }
        sitemap.push(page)
      })
    })
  }

  // Получаем каталог charter
  const { data: charter } = await client.query({
    query: GET_CHARTER_SLUG,
  })
  if (charter.yachts.data.length > 0) {
    charter.yachts.data.forEach((el) => {
      locales.forEach((locale) => {
        const date = new Date().toISOString()
        const page = {
          loc: [process.env.SITE_URL + locale, 'charters', el.slug].join('/'),
          lastmod: date,
        }
        sitemap.push(page)
      })
    })
  }

  return getServerSideSitemap(ctx, sitemap)
}
