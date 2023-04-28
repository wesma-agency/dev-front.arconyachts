import { PATH } from 'config/path'

export const footerStatic = (isRussian) =>
  isRussian
    ? {
        headquarter: {
          title: 'Главный офис',
          city: 'Монако',
          address: '27-29, Avenue des Papalins, MC 98000 +377.97.98.3210',
        },
        bottomLinks: [
          { title: 'Политика конфиденциальности', href: PATH.POLICY },
          { title: 'Реквизиты', href: PATH.CONTACTS },
          { title: 'Карта сайта', href: PATH.SITEMAP },
        ],
        associations: [
          {
            name: 'MYBA',
            title: 'Член Mediterranean Yacht Brokers Association',
            href:
              'https://www.myba-association.com/en/member-detail/member-list/439-arcon-yachts.cfm',
            image: {
              width: 77,
              height: 55,
              src: '/img/footer/logo_myba.svg',
            },
          },
          {
            name: 'ECPY',
            title: 'Член European Committee for Professional Yachting',
            href: 'https://www.ecpy.org/members#:~:text=ARCON%20YACHTS',
            image: {
              width: 30,
              height: 47,
              src: '/img/footer/logo_ecpy@1x.png',
              src2x: '/img/footer/logo_ecpy@2x.png',
            },
          },
        ],
        subscription: 'Подпишитесь на нашу рассылку',
        links: {
          sale: 'ПРОДАЖА',
          condition: 'Состояние',
          cabins: 'Количество кают',
          body: 'Корпус',
          tags: 'Теги',
          charter: 'АРЕНДА/ЧАРТЕР',
          locations: 'Локации',
          projects: 'ПРОЕКТЫ',
          buildingProjects: 'Проекты',
          building: 'Строительство',
          serviceLink: 'МЕНЕДЖМЕНТ',
          selling: 'Продажа яхт',
          leasing: 'Аренда яхт',
          handling: 'Обслуживание яхт',
          support: 'Техническая поддержка',
          crewManagement: 'Управление персоналом',
          finances: 'Контроль финансов',
          law: 'Юридические услуги',
          dock: 'Продажа и аренда причалов',
          transportation: 'Доставка и транспортировка яхты',
          registration: 'Регистрация яхты',
          shipyards: 'Верфи',
          aboutText:
            'Компания Arcon Yachts предоставляет своим клиентам широкий спектр услуг в сфере яхтенной индустрии.',

          about: 'О нас',
          news: 'Новости',
          company: 'О компании',
          contacts: 'Контакты',
          requisites: 'Реквизиты',
        },
        subscribe: {
          title: 'Подпишитесь на нашу рассылку',
          mail: 'Наша почта',
          error: 'Пожалуйста, проверьте ваши данные',
        },
      }
    : {
        headquarter: {
          title: 'Headquarter',
          city: 'Monaco',
          address: '27-29, Avenue des Papalins, MC 98000 +377.97.98.3210',
        },
        bottomLinks: [
          { title: 'Privacy policy', href: PATH.POLICY },
          { title: 'Company details', href: PATH.CONTACTS },
          { title: 'Sitemap', href: PATH.SITEMAP },
        ],
        associations: [
          {
            name: 'MYBA',
            title: 'Member of Mediterranean Yacht Brokers Association',
            href:
              'https://www.myba-association.com/en/member-detail/member-list/439-arcon-yachts.cfm',
            image: {
              width: 77,
              height: 55,
              src: '/img/footer/logo_myba.svg',
            },
          },
          {
            name: 'ECPY',
            title: 'Member of European Committee for Professional Yachting',
            href: 'https://www.ecpy.org/members#:~:text=ARCON%20YACHTS',
            target: '_blank',
            image: {
              width: 30,
              height: 47,
              src: '/img/footer/logo_ecpy@1x.png',
              src2x: '/img/footer/logo_ecpy@2x.png',
            },
          },
        ],
        subscription: 'Подпишитесь на нашу рассылку',
        links: {
          sale: 'SALE',
          condition: 'Condition',
          cabins: 'Number of cabins',
          body: 'Body material',
          tags: 'Tags',
          charter: 'Rent/Charter',
          locations: 'Locations',
          projects: 'Projects',
          buildingProjects: 'Projects',
          building: 'Building',
          service: 'Service Yacht',
          serviceLink: 'YACHT OWNERS’ SERVICES',
          selling: 'Sell a yacht',
          leasing: 'Charter a yacht',
          handling: 'Operations management',
          support: 'Technical management',
          crewManagement: 'Crew management',
          finances: 'Financial management',
          law: 'Legal management',
          dock: 'Berths for sale and rent',
          transportation: 'Yacht transportation',
          registration: 'Flag and registration',
          shipyards: 'Shipyards',
          aboutText:
            'Purchase, build and manage the yacht of your dreams. Arcon Yachts is with you every step of the way',

          about: 'About us',
          news: 'News',
          company: 'About company',
          contacts: 'Contacts',
          requisites: 'Requisites',
        },
        subscribe: {
          title: 'Subscribe to our newsletter',
          mail: 'Our mail',
          error: 'Please check the entered data',
        },
      }
