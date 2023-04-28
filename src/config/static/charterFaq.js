export const charterFaqStatic = (isRussian) =>
  isRussian
    ? {
        titlePre: 'Вопросы по',
        daily: 'дневной',
        titleAfter: 'аренде',
      }
    : {
        titlePre: 'Questions about',
        daily: 'day',
        titleAfter: 'charter',
      }
