export const notFoundStatic = (isRussian) =>
  isRussian
    ? {
        meta: {
          title: 'Страница не найдена - Arcon Yachts',
          description: 'Страница не найдена - Arcon Yachts',
        },
        page: `404 ошибка`,
        header: `Запрашиваемой страницы не существует. Но вы можете пролистать до конца страницу, на которой находитесь сейчас, и найти нужную информацию по ссылкам.`,
      }
    : {
        meta: {
          title: 'Page not found - Arcon Yachts',
          description: 'Page not found - Arcon Yachts',
        },
        page: `404 error`,
        header: `Page not found. Get a link to the desired information at the bottom of this page.`,
      }
