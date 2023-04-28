export const locationSearch = (isRussian) =>
  isRussian
    ? {
        type: 'Начните вводить и мы покажем подходящие варианты',
        notFound: 'Такой локации нет',
      }
    : {
        type: 'Start typing and we will show suitable options.',
        notFound: 'There are no location',
      }
