export const filtersData = [
  { type: 'location', activeTitle: 'Локации', title: 'Локация' },

  {
    type: 'checkbox',
    isSingle: true,
    items: ['Недельная аренда', 'Дневная аренда'],
    title: 'Аренда',
    activeTitle: '',
  },
  { type: 'range', title: 'Цена', min: 2, max: 45, unit: ' млн. €' },
  { type: 'range', title: 'Длина', min: 5, max: 85, unit: ' м' },
  { type: 'range', title: 'Год постройки', min: 1985, max: 2020, unit: '' },
  {
    type: 'checkbox',
    items: ['Новые', 'Б / у'],
    title: 'Новые и Б/У',
    activeTitle: 'Состояния',
    isSingle: true,
  },
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
    items: ['Стальной', 'Алюминиевый', 'Стеклопластик'],
    title: 'Корпус',
    activeTitle: 'Корпуса',
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
  {
    type: 'checkbox',
    items: [
      'Площадка для вертолета',
      'Бассейн',
      'Лифт',
      'Спортзал',
      'Кинотеатр',
      'Еще что-то',
    ],
    title: 'Дополнительно',
    activeTitle: 'Дополнительно',
  },
]

export const weeklyList = [
  {
    isFavorite: true,
    price: 'от 43 000 € в неделю',
  },
  {
    badge: 'Эксклюзив',
    title: 'Heesen TRITON 50m',
    price: 'от 43 000 € в неделю',
  },
  {
    isFavorite: true,
    badge: 'Эксклюзив',
    title: 'Heesen 55M FDHF Pollux',
    price: 'от 43 000 € в неделю',
  },
  {
    images: ['/img/yachts-list/slide7.png'],
    title: 'Heesen Explorer Xventure 57m',
    price: 'от 43 000 € в неделю',
  },
  {
    images: ['/img/yachts-list/slide7.png'],
    title: 'Heesen 50m Aquamarine',
    price: 'от 43 000 € в неделю',
  },
  {
    title: 'Heesen Altea 50M',
    badge: 'Новинка',
    price: 'от 43 000 € в неделю',
  },
  {
    price: 'от 43 000 € в неделю',
  },
  {
    price: 'от 43 000 € в неделю',
  },
  {
    images: ['/img/yachts-list/slide7.png'],
    title: 'Heesen Explorer Xventure 57m',
    price: 'от 43 000 € в неделю',
  },
  {
    title: 'Heesen Altea 50M',
    badge: 'Новинка',
    price: 'от 43 000 € в неделю',
  },
  {
    price: 'от 43 000 € в неделю',
  },
]

export const dailyList = [
  {
    images: [
      '/img/charter/daily/slide2.png',
      '/img/charter/daily/slide1.png',
      '/img/charter/daily/slide3.png',
    ],
    price: 'от 43 000 € в день',
  },
  {
    images: [
      '/img/charter/daily/slide4.png',
      '/img/charter/daily/slide5.png',
      '/img/charter/daily/slide6.png',
    ],
    price: 'от 43 000 € в день',
  },
  {
    price: 'от 43 000 € в день',
    images: ['/img/charter/daily/slide5.png'],
  },
  {
    images: [
      '/img/charter/daily/slide2.png',
      '/img/charter/daily/slide1.png',
      '/img/charter/daily/slide3.png',
    ],
    title: 'Heesen Explorer Xventure 57m',
    price: 'от 43 000 € в день',
  },
  {
    images: [
      '/img/charter/daily/slide4.png',
      '/img/charter/daily/slide5.png',
      '/img/charter/daily/slide6.png',
    ],
    price: 'от 43 000 € в день',
  },
  {
    images: [
      '/img/charter/daily/slide4.png',
      '/img/charter/daily/slide5.png',
      '/img/charter/daily/slide6.png',
    ],
    price: 'от 43 000 € в день',
  },
  {
    price: 'от 43 000 € в день',
    images: ['/img/charter/daily/slide5.png'],
  },
  {
    title: 'Heesen Explorer Xventure 57m',
    images: [
      '/img/charter/daily/slide2.png',
      '/img/charter/daily/slide1.png',
      '/img/charter/daily/slide3.png',
    ],
    price: 'от 43 000 € в день',
  },
  {
    images: [
      '/img/charter/daily/slide4.png',
      '/img/charter/daily/slide5.png',
      '/img/charter/daily/slide6.png',
    ],
    price: 'от 43 000 € в день',
  },
  {
    images: [
      '/img/charter/daily/slide4.png',
      '/img/charter/daily/slide5.png',
      '/img/charter/daily/slide6.png',
    ],
    price: 'от 43 000 € в день',
  },
  {
    price: 'от 43 000 € в день',
    images: ['/img/charter/daily/slide3.png'],
  },
]

export const neighbourWeekly = [
  {
    images: ['/img/yachts-list/slide9.jpg'],
    price: 'от 200 000 € в неделю',
  },
  {
    images: ['/img/yachts-list/slide8.jpg'],
    price: 'от 200 000 € в неделю',
  },
  {
    images: ['/img/yachts-list/slide7.png'],
    price: 'от 200 000 € в неделю',
  },
  {
    images: ['/img/yachts-list/slide3.png'],
    price: 'от 200 000 € в неделю',
  },
  {
    images: ['/img/yachts-list/slide4.png'],
    price: 'от 200 000 € в неделю',
  },
  {
    images: ['/img/yachts-list/slide6.png'],
    price: 'от 200 000 € в неделю',
  },
]

export const specialDaily = [
  {
    images: ['/img/charter/daily/special/slide1.png'],
    price: 'от 200 00 € в день',
  },
  {
    images: ['/img/charter/daily/special/slide2.png'],
    price: 'от 200 00 € в день',
  },
  {
    images: ['/img/charter/daily/special/slide3.png'],
    price: 'от 200 00 € в день',
  },
  {
    images: ['/img/charter/daily/special/slide1.png'],
    price: 'от 200 00 € в день',
  },
  {
    images: ['/img/charter/daily/special/slide2.png'],
    price: 'от 200 00 € в день',
  },
  {
    images: ['/img/charter/daily/special/slide3.png'],
    price: 'от 200 00 € в день',
  },
]
