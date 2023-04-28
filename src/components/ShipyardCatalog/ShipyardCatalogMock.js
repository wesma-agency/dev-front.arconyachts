export const ShipyardCatalogInfo = {
  info: {
    title: `Верфи`,
    description: `Вы можете выбрать стальные яхты из Голландии и других стран мира от ведущих судостроительных компаний, в том числе Amels, Feadship, Moonen, Lurssen, Palmer Johnson, Wim van der Walk, Heesen, Benetti и др. Мы предоставляем возможность построить с нашей помощью моторные яхты по индивидуальным проектам. Суда с металлическими корпусами отличаются высокой надежностью и долговечностью. Для их производства используются сталь и алюминий – это премиум яхты от лучших верфей мира. Чтобы сделать оптимальный выбор, предлагаем ознакомиться с особенностями материалов.`,
  },
  filter: [
    {
      type: 'checkbox',
      items: [
        'Нидерланды',
        'Италия',
        'Великобритания',
        'Дания',
        'Канада',
        'Норвегия',
        'Швеция',
      ],
      title: 'Страны',
      activeTitle: 'Страны',
    },
    {
      type: 'checkbox',
      items: ['Стальной', 'Алюминиевый', 'Стеклопластик'],
      title: 'Корпус',
      activeTitle: 'Корпуса',
    },
    { type: 'toggle', title: 'Голландские', quantity: 52 },
    { type: 'toggle', title: 'Итальянские', quantity: 25 },
    { type: 'toggle', title: 'Английские', quantity: 2 },
    { type: 'toggle', title: 'Алюминиевые', quantity: 2 },
    { type: 'toggle', title: 'Стальные', quantity: 2 },
    { type: 'range', title: 'Цена', min: 2, max: 45, unit: ' млн. €' },
    { type: 'range', title: 'Длина', min: 5, max: 85, unit: ' м' },
    { type: 'range', title: 'Год постройки', min: 1985, max: 2020, unit: '' },
    {
      type: 'checkbox',
      items: [
        'Abeking & Rasmussen',
        'AB Yachts',
        'Admiral Tecnomar',
        'Alloy Yachts',
        'Abeking & Rasmussen',
        'AB Yachts',
        'Alloy Yachts',
      ],
      title: 'Верфь',
      activeTitle: 'Верфи',
    },
    {
      type: 'checkbox',
      items: ['Новые', 'Б / у'],
      title: 'Новые и Б/У',
      activeTitle: 'Состояния',
      isSingle: true,
    },
    { type: 'range', title: 'Скорость', min: 5, max: 24, unit: ' узл' },
    {
      type: 'checkbox',
      items: ['2 каюты', '4 каюты', '6 каюты', '8 кают', '10 кают', '12 кают'],
      title: 'Каюты',
      activeTitle: 'Каюты',
    },
    {
      type: 'checkbox',
      items: ['Моторная', 'Парусная', 'Экспедиционная', 'Траулер'],
      title: 'Тип яхты',
      activeTitle: 'Типы',
    },
  ],
  manufacturerLetters: [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ],
  manufacturersData: [
    {
      title: 'princess',
      imageSrc: '/img/shipyard/shipyard1.png',
      size: {
        width: 206,
        height: 63,
      },
      countryName: 'UK',
      countrySrc: '/img/shipyard/shipyard-country1.png',
      count: 6,
    },
    {
      title: 'dominator',
      imageSrc: '/img/shipyard/shipyard2.png',
      size: {
        width: 171,
        height: 105,
      },
      countryName: 'Italy',
      countrySrc: '/img/shipyard/shipyard-country1.png',
      count: 2,
    },
    {
      title: 'van der valk',
      imageSrc: '/img/shipyard/shipyard3.png',
      size: {
        width: 207,
        height: 79,
      },
      countryName: 'UK',
      countrySrc: '/img/shipyard/shipyard-country1.png',
      count: 6,
    },
    {
      title: 'custom line',
      imageSrc: '/img/shipyard/shipyard4.png',
      size: {
        width: 161,
        height: 161,
      },
      countryName: 'Italy',
      countrySrc: '/img/shipyard/shipyard-country1.png',
      count: 1,
    },
    {
      title: 'trinity',
      imageSrc: '/img/shipyard/shipyard5.png',
      size: {
        width: 213,
        height: 80,
      },
      countryName: 'UK',
      countrySrc: '/img/shipyard/shipyard-country1.png',
      count: 1,
    },
    {
      title: 'turquose',
      imageSrc: '/img/shipyard/shipyard6.png',
      size: {
        width: 322,
        height: 218,
      },
      countryName: 'Spain',
      countrySrc: '/img/shipyard/shipyard-country1.png',
      count: 2,
    },
    {
      title: 'chris craft',
      imageSrc: '/img/shipyard/shipyard7.png',
      size: {
        width: 180,
        height: 108,
      },
      countryName: 'UK',
      countrySrc: '/img/shipyard/shipyard-country1.png',
      count: 3,
    },
    {
      title: 'moonen',
      imageSrc: '/img/shipyard/shipyard8.png',
      size: {
        width: 161,
        height: 26,
      },
      countryName: 'Italy',
      countrySrc: '/img/shipyard/shipyard-country1.png',
      count: 1,
    },
    {
      title: 'oceanco',
      imageSrc: '/img/shipyard/shipyard9.png',
      size: {
        width: 235,
        height: 49,
      },
      countryName: 'The Netherlands',
      countrySrc: '/img/shipyard/shipyard-country1.png',
      count: 2,
    },
    {
      title: 'vitters',
      imageSrc: '/img/shipyard/shipyard10.png',
      size: {
        width: 233,
        height: 143,
      },
      countryName: 'The Netherlands',
      countrySrc: '/img/shipyard/shipyard-country1.png',
      count: 5,
    },
    {
      title: 'hakvoort',
      imageSrc: '/img/shipyard/shipyard11.png',
      size: {
        width: 233,
        height: 143,
      },
      countryName: 'UK',
      countrySrc: '/img/shipyard/shipyard-country1.png',
      count: 2,
    },
    {
      title: 'codecasa',
      imageSrc: '/img/shipyard/shipyard12.png',
      size: {
        width: 231,
        height: 143,
      },
      countryName: 'The Netherlands',
      countrySrc: '/img/shipyard/shipyard-country1.png',
      count: 4,
    },
    {
      title: 'icon yachts',
      imageSrc: '/img/shipyard/shipyard13.png',
      size: {
        width: 211,
        height: 129,
      },
      countryName: 'UK',
      countrySrc: '/img/shipyard/shipyard-country1.png',
      count: 7,
    },
    {
      title: 'amels',
      imageSrc: '/img/shipyard/shipyard14.png',
      size: {
        width: 233,
        height: 143,
      },
      countryName: 'UK',
      countrySrc: '/img/shipyard/shipyard-country1.png',
      count: 1,
    },
    {
      title: 'rossinavi',
      imageSrc: '/img/shipyard/shipyard15.png',
      size: {
        width: 233,
        height: 143,
      },
      countryName: 'Spain',
      countrySrc: '/img/shipyard/shipyard-country1.png',
      count: 1,
    },
    {
      title: 'heesen',
      imageSrc: '/img/shipyard/shipyard16.png',
      size: {
        width: 75,
        height: 90,
      },
      countryName: 'The Netherlands',
      countrySrc: '/img/shipyard/shipyard-country1.png',
      count: 1,
    },
  ],
  infoBlock: {
    title: `верфи${'\n'}Arcon Yachts`,
    content: [
      `У нас вы сможете купить новые элитные яхты и подержанные суда, которые находятся в России, Казахстане, Украине и европейских странах. Наши специалисты выполнят всю сложную ответственную работу и оставят вам только приятные хлопоты.`,
      `Узнать цены на яхты и получить о них основную информацию Вы можете в нашем каталоге. В нем размещены фото и видео материалы, спецификации и планы палуб. Можно сравнить предлагаемые модели и купить яхту, которая идеально соответствует вашим требованиям. Чтобы быстро найти подходящие предложения, воспользуйтесь фильтром, где в качестве критериев поиска можно указать стоимость яхты, производителя, длину и прочие характеристики. Подробную информацию Вы можете запросить у наших консультантов. Консультанты расскажут о любых интересующих вас моделях, а также как и где купить яхту. Заявки на приобретение оформляются по телефону и в он-лайн режиме.`,
      `Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
  consequuntur facere itaque sit nobis accusamus amet, commodi dolor illum
  explicabo consectetur voluptate iusto quidem sint obcaecati, eligendi
  animi repellat nam vitae dolorem illo architecto, aspernatur natus
  ratione? Modi unde vero repellendus facilis labore laboriosam doloremque
  libero similique nam quisquam velit, eveniet omnis illo. Dolores
  accusamus eos ullam repellat?`,
      `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,
  cumque ea magni et asperiores repudiandae dolorem voluptatem culpa
  voluptas, harum dolor eveniet beatae accusamus obcaecati quisquam
  pariatur? Maiores quasi, asperiores sapiente nam inventore praesentium
  ut! Pariatur, possimus repudiandae accusantium tenetur consectetur
  recusandae voluptatum ratione eveniet porro deserunt asperiores, sint
  nemo iste vel suscipit minima, molestiae cumque. Id, qui rerum est
  incidunt quod optio saepe culpa quis quae molestias ducimus! Quod
  asperiores inventore corporis labore commodi saepe nemo dolore corrupti
  facilis hic, sequi expedita pariatur minus. Culpa est quis omnis, atque
  amet esse qui ad, iusto fugiat tempore sit, iure ipsam assumenda hic
  adipisci aut voluptatum. Delectus in quisquam laboriosam amet ab
  molestias illum! Reprehenderit porro, officiis alias facere eligendi
  impedit rerum vitae architecto quod voluptatibus adipisci error,
  mollitia ullam dolor incidunt id? Voluptas officiis, ab inventore
  deleniti mollitia repudiandae molestias dolorem, eos facere, dignissimos
  amet aliquid eaque accusamus. Sint, id?`,
    ],
    button: `Показать полностью`,
  },
}
