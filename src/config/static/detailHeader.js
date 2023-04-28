import { shipyardStatic } from 'config/static/shipyard'
import { detailYachtStatic } from 'config/static/detailYacht'

export const detailHeaderStatic = (isRussian) =>
  isRussian
    ? {
        pageToText: {
          ...detailYachtStatic(isRussian).pages,
          'shipyard-page': {
            title: 'Верфь',
          },
          building: {
            title: 'Строительство яхт',
            button: 'Отправить запрос',
          },
          project: {
            title: 'Проект',
          },
        },
        params: {
          length: 'Длина',
          meters: 'м',
          feets: 'футов',
          bulidDate: 'Год постройки',
          restored: 'Год постройки/ренновации',
          cabins: 'Каюты/гостей',
          speed: 'Макс. Скорость',
          speedUnit: 'узл',
          material: 'Материал',
          partners: 'Партнеры',
          guests: ['гость', 'гостя', 'гостей'],
        },
        requestPrice: 'По запросу',
      }
    : {
        pageToText: {
          ...detailYachtStatic(isRussian).pages,
          'shipyard-page': {
            title: 'Shipyard',
          },
          building: {
            title: 'Building Yachts',
            button: 'Send request',
          },
          project: {
            title: 'Project',
          },
        },
        params: {
          length: 'Length',
          meters: 'm',
          feets: 'ft',
          bulidDate: 'Year of Construction',
          restored: 'Construction / renovation',
          cabins: 'Cabins / guests',
          guests: ['guest', 'guests'],
          speed: 'Max Speed',
          speedUnit: 'knots',
          material: 'Material',
          partners: 'Partners',
        },
        requestPrice: 'On request',
      }
