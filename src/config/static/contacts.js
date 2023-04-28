export const contactsStatic = (isRussian) =>
  isRussian
    ? {
        meta: {
          title: 'Контакты - Arcon Yachts',
          description: 'Наша контактная информация - Arcon Yachts',
        },
        header: `Наши контакты`,
        addresses: [
          {
            city: `Монако`,
            phoneNumber: `+377.97.98.3210`,
            address: `27-29, Avenue des Papalins, MC 98000`,
            coordinates: {
              latitude: 81.9,
              longitude: 30,
            },
          },
          {
            city: `Москва`,
            phoneNumber: `+7 (495) 937-90-00`,
            address: `Ленинградское шоссе 39/7, Москва, 125212`,
            coordinates: {
              latitude: 43,
              longitude: 70,
            },
          },
          {
            city: `Киев `,
            phoneNumber: `+38 09 77 42 44 44`,
            address: `ул. Раисы Окипной 18, Киев, 02002`,
            coordinates: {
              latitude: 8.889,
              longitude: 82,
            },
          },
        ],
        img: {
          src: `/img/headquater/map.jpg`,
          alt: `Наши представительства есть в Монако, Моксве и Киеве`,
          size: {
            width: 1440,
            height: 630,
          },
        },
        requisites: {
          title: `Реквизиты`,
          data: `Общество с ограниченной ответственностью «Аркон Яхтс»${`\n`}125212, г. Москва, Ленинградское шоссе, д. 39, стр. 7${`\n`}ИНН/КПП — 7716212778/774301001${`\n`}ОГРН — 1027700402234`,
        },
        mail: {
          title: 'Наша почта',
          value: 'info@arconyachts.com',
        },
      }
    : {
        meta: {
          title: 'Contacts - Arcon Yachts',
          description: 'Our contact information - Arcon Yachts',
        },
        header: `Our contacts`,
        addresses: [
          {
            city: `Monaco `,
            phoneNumber: `+377.97.98.3210`,
            address: `27-29, Avenue des Papalins, MC 98000 `,
            coordinates: {
              latitude: 81.9,
              longitude: 30,
            },
          },
          {
            city: `Moscow `,
            phoneNumber: `+7 (495) 937-90-00`,
            address: `Leningrad Highway 39/7, Moscow, 125212 `,
            coordinates: {
              latitude: 43,
              longitude: 70,
            },
          },
          {
            city: `Kiev `,
            phoneNumber: `+38 09 77 42 44 44`,
            address: `ul.Raisa Okipna 18, Kiev, 02002 `,
            coordinates: {
              latitude: 8.889,
              longitude: 82,
            },
          },
        ],
        img: {
          src: `/img/headquater/map.jpg`,
          alt: `Our representative offices are in Monaco, Moxwe and Kiev `,
          size: {
            width: 1440,
            height: 630,
          },
        },
        requisites: {
          title: `Requisites `,
          data: `Arkon Yakhts Limited Liability Company ${`\n`}Leningradskoe highway 39, build. 7, Moscow, Russia, 125212 ${`\n`}INN / CPP - 7716212778/774301001 ${`\n`}OGRN - 1027700402234`,
        },
        mail: {
          title: 'Our mail',
          value: 'info@arconyachts.com',
        },
      }
