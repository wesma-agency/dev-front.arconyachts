export const yachtCardStatic = (isRussian) =>
  isRussian
    ? {
        prices: {
          week: { pretext: 'от ', label: ' в неделю' },
          day: { pretext: 'от ', label: ' в день' },
        },
        lengths: {
          m: 'м',
          ft: 'ft',
        },
        cabins: ['каюта', 'каюты', 'кают'],
        guests: ['гость', 'гостя', 'гостей'],
        more: { photo: 'фото', text: 'Ещё' },
        conditions: {
          new: 'новая',
          pastUsage: 'б / у',
        },
        requestPrice: 'По запросу',
      }
    : {
        prices: {
          week: { pretext: 'from ', label: ' per week' },
          day: { pretext: 'from ', label: ' per day' },
        },
        lengths: {
          m: 'm',
          ft: 'ft',
        },
        cabins: ['cabin', 'cabins'],
        guests: ['guest', 'guests'],
        more: { photo: 'photo', text: 'More' },
        conditions: {
          new: 'new',
          pastUsage: 'past-usage',
        },
        requestPrice: 'On request',
      }
