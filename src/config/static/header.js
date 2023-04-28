import { PATH } from 'config/path'

export const headerStatic = (isRussian) =>
  isRussian
    ? {
        phone: '+7 (495) 937-90-00',
        linkPhone: '+74959379000',
        links: [
          { title: 'продажа', href: PATH.SALE_CATALOG },
          { title: 'аренда/чартер', href: PATH.CHARTER_CATALOG },
          { title: 'проекты', href: PATH.PROJECTS },
          { title: 'верфи', href: PATH.SHIPYARDS },
          { title: 'строительство', href: PATH.BUILDING },
          { title: 'менеджмент яхт', href: PATH.SERVICE_MANAGEMENT },
          { title: 'о нас', href: PATH.ABOUT },
        ],
        mobileLinks: [
          { title: 'продажа', href: PATH.SALE_CATALOG },
          { title: 'аренда / чартер', href: PATH.CHARTER_CATALOG },
          { title: 'проекты', href: PATH.PROJECTS },
          { title: 'строительство', href: PATH.BUILDING },
          { title: 'менеджмент яхт', href: PATH.SERVICE_MANAGEMENT },
          { title: 'верфи', href: PATH.SHIPYARDS },
          { title: 'о нас', href: PATH.ABOUT },
        ],
        favorites: 'Избранное',
      }
    : {
        phone: '+33 6 48 43 99 06',
        linkPhone: '+33648439906',
        links: [
          { title: 'SALES', href: PATH.SALE_CATALOG },
          { title: 'CHARTER', href: PATH.CHARTER_CATALOG },
          { title: 'PROJECTS', href: PATH.PROJECTS },
          { title: 'SHIPYARDS', href: PATH.SHIPYARDS },
          { title: 'NEW BUILD', href: PATH.BUILDING },
          { title: 'YACHT MANAGEMENT', href: PATH.SERVICE_MANAGEMENT },
          { title: 'ABOUT US', href: PATH.ABOUT },
        ],

        mobileLinks: [
          { title: 'SALES', href: PATH.SALE_CATALOG },
          { title: 'CHARTER', href: PATH.CHARTER_CATALOG },
          { title: 'PROJECTS', href: PATH.PROJECTS },
          { title: 'SHIPYARDS', href: PATH.SHIPYARDS },
          { title: 'NEW BUILD', href: PATH.BUILDING },
          { title: 'YACHT MANAGEMENT', href: PATH.SERVICE_MANAGEMENT },
          { title: 'ABOUT US', href: PATH.ABOUT },
        ],
        favorites: 'Favorites',
      }
