import { PATH } from 'config/path'

export const breadcrumbsStatic = (isRussian) =>
  isRussian
    ? {
        mapSlugToTitle: {
          sale: { title: 'Продажа', href: PATH.SALE_CATALOG },
          charters: { title: 'Аренда', href: PATH.CHARTER_CATALOG },
          shipyards: { title: 'Верфи', href: PATH.SHIPYARDS },
          building: { title: 'Строительство яхт', href: PATH.BUILDING },
          projects: { title: 'Проекты', href: PATH.PROJECTS },
          news: { title: 'Новости', href: PATH.NEWS },
          management: {
            title: 'Менеджмент яхт',
            href: PATH.SERVICE_MANAGEMENT,
          },
          registration: {
            title: 'Регистрация яхты',
            href: PATH.SERVICE_REGISTRATION,
          },
          transportation: {
            title: 'Доставка и транспортировка яхты',
            href: PATH.SERVICE_TRANSPORTATION,
          },
          berth_assistance: {
            title: 'Продажа и аренда причалов',
            href: PATH.SERVICE_DOCK,
          },
          selling: {
            title: 'Продажа вашей яхты',
            href: PATH.SERVICE_SELLING,
          },
          leasing: {
            title: 'Успешная аренда вашей яхты',
            href: PATH.SERVICE_LEASING,
          },
          handling: {
            title: 'Всестороннее обслуживание вашей яхты',
            href: PATH.SERVICE_HANDLING,
          },
          support: {
            title: 'Техническая поддержка',
            href: PATH.SERVICE_SUPPORT,
          },
          crew_management: {
            title:
              'Подбор профессиональной команды и управление экипажем вашей яхты',
            href: PATH.SERVICE_CREW_MANAGEMENT,
          },
          finances: {
            title: 'Контроль финансов',
            href: PATH.SERVICE_FINANCES,
          },
          legal_services: {
            title: 'Юридические услуги',
            href: PATH.SERVICE_LAW,
          },
          about: { title: 'О нас', href: PATH.ABOUT },
          favorites: { title: 'Избранное', href: PATH.FAVORITES },
          contacts: { title: 'Контакты', href: PATH.CONTACTS },
          sitemap: { title: 'Контакты', href: PATH.SITEMAP },
        },
        main: 'Главная',
      }
    : {
        mapSlugToTitle: {
          sale: { title: 'Sale', href: PATH.SALE_CATALOG },
          charters: { title: 'Charter', href: PATH.CHARTER_CATALOG },
          shipyards: { title: 'Shipyards', href: PATH.SHIPYARDS },
          building: { title: 'Building', href: PATH.BUILDING },
          projects: { title: 'Projects', href: PATH.PROJECTS },
          news: { title: 'News', href: PATH.NEWS },
          management: {
            title: 'Management',
            href: PATH.SERVICE_MANAGEMENT,
          },
          registration: {
            title: 'Flag and registration',
            href: PATH.SERVICE_REGISTRATION,
          },
          transportation: {
            title: 'Have your yacht transported safely',
            href: PATH.SERVICE_TRANSPORTATION,
          },
          berth_assistance: {
            title: 'Buy or rent a berth',
            href: PATH.SERVICE_DOCK,
          },
          selling: {
            title: 'Sell a yacht',
            href: PATH.SERVICE_SELLING,
          },
          leasing: {
            title: 'List a yacht for charter',
            href: PATH.SERVICE_LEASING,
          },
          handling: {
            title: 'Get a complete management program',
            href: PATH.SERVICE_HANDLING,
          },
          support: {
            title: 'Use technical support',
            href: PATH.SERVICE_SUPPORT,
          },
          crew_management: {
            title:
              'Source the best crew',
            href: PATH.SERVICE_CREW_MANAGEMENT,
          },
          finances: {
            title: 'Get financial reports',
            href: PATH.SERVICE_FINANCES,
          },
          legal_services: {
            title: 'Get legal advice',
            href: PATH.SERVICE_LAW,
          },
          about: { title: 'About', href: PATH.ABOUT },
          favorites: { title: 'Favorites', href: PATH.FAVORITES },
          contacts: { title: 'Contacts', href: PATH.CONTACTS },
          sitemap: { title: 'Contacts', href: PATH.SITEMAP },
        },
        main: 'Home',
      }
