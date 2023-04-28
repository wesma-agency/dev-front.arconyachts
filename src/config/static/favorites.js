export const favoritesStatic = (isRussian) =>
  isRussian
    ? {
        meta: {
          title: 'Избранное - Arcon Yachts',
          description: 'Избранное - Arcon Yachts',
        },
        header: `Избранное`,
        sale: 'Продажа',
        charterWeek: 'Недельная аренда',
        charterDay: 'Дневная аренда',
        projects: 'Проекты',
      }
    : {
        meta: {
          title: 'Favorites - Arcon Yachts',
          description: 'Favorites - Arcon Yachts',
        },
        header: `Favorites`,
        sale: 'Sale',
        charterWeek: 'Week charter',
        charterDay: 'Daily charter',
        projects: 'Projects',
      }
