import { PATH } from 'config/path'

export const sitemapStatic = (isRussian) =>
  isRussian
    ? {
        meta: {
          title: 'Карта сайта - Arcon Yachts',
          description: 'Список страниц сайта - Arcon Yachts',
        },
        title: 'Карта сайта',
        name: 'Arcon Yachts',
        sale: 'Продажа',
        charter: 'Аренда',
        service: 'Обслуживание яхт',
        conditions: { new: 'Новые', pastUsage: 'Б/У' },
        serviceItems: [
          { path: PATH.SERVICE_SELLING, title: 'Продажа яхт' },
          { path: PATH.SERVICE_LEASING, title: 'Аренда яхт' },
          {
            path: PATH.SERVICE_HANDLING,
            title: 'Всестороннее обслуживание яхт',
          },
          { path: PATH.SERVICE_SUPPORT, title: 'Техническая поддержка' },
          {
            path: PATH.SERVICE_CREW_MANAGEMENT,
            title: 'Управление персоналом',
          },
          {
            path: PATH.SERVICE_FINANCES,
            title: 'Контроль финансов',
          },
          { path: PATH.SERVICE_LAW, title: 'Юридические услуги' },
          { path: PATH.SERVICE_DOCK, title: 'Продажа и аренда причалов' },
          {
            path: PATH.SERVICE_TRANSPORTATION,
            title: 'Доставка и транспортировка яхты',
          },
          {
            path: PATH.SERVICE_REGISTRATION,
            title: 'Регистрация яхты',
          },
        ],
        about: 'О нас',
        aboutItems: [
          { path: PATH.NEWS, title: 'Новости' },
          // { path: PATH.ABOUT, title: 'О компании' },
          { path: PATH.CONTACTS, title: 'Контакты' },
          { path: PATH.CONTACTS, title: 'Реквизиты' },
        ],
      }
    : {
        meta: {
          title: 'Site map - Arcon Yachts',
          description: 'List of site pages - Arcon Yachts',
        },
        title: 'Sitemap',
        name: 'Arcon Yachts',
        sale: 'Sale',
        charter: 'Charter',
        service: 'Service',
        conditions: { new: 'New', pastUsage: 'Past usage' },
        serviceItems: [
          { path: PATH.SERVICE_SELLING, title: 'Sell a yacht' },
          { path: PATH.SERVICE_LEASING, title: 'Charter a yacht' },
          {
            path: PATH.SERVICE_HANDLING,
            title: 'Всестороннее обслуживание яхт',
          },
          { path: PATH.SERVICE_SUPPORT, title: 'Technical management' },
          {
            path: PATH.SERVICE_CREW_MANAGEMENT,
            title: 'Crew management',
          },
          {
            path: PATH.SERVICE_FINANCES,
            title: 'Financial management',
          },
          { path: PATH.SERVICE_LAW, title: 'Legal management' },
          { path: PATH.SERVICE_DOCK, title: 'Berths for sale and rent' },
          {
            path: PATH.SERVICE_TRANSPORTATION,
            title: 'Yacht transportation',
          },
          {
            path: PATH.SERVICE_REGISTRATION,
            title: 'Flag and registration',
          },
        ],
        about: 'About',
        aboutItems: [
          { path: PATH.NEWS, title: 'News' },
          // { path: PATH.ABOUT, title: 'About' },
          { path: PATH.CONTACTS, title: 'Contacts' },
          { path: PATH.CONTACTS, title: 'Requisites' },
        ],
      }
