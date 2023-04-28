export const spoilerStatic = (isRussian) =>
  isRussian
    ? {
      hide: 'Скрыть',
      showMore: 'Показать полностью',
    }
    : {
      hide: 'Hide',
      showMore: 'Show more',
    }