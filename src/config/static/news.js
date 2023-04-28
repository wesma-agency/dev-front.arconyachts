export const newsStatic = (isRussian) =>
  isRussian
    ? {
        meta: {
          title: 'Новости - Arcon Yachts',
          description: 'Новости от Arcon Yachts',
        },
        epilogueTitle: `Новости от ARCON YACHTS`,
        date: `Новость от `,

        invitation: {
          image: `/img/news/invitationPicture.jpg`,
          size: {
            width: 637,
            height: 918,
          },
          title: `Приглашение`,
          text: `Представьтесь, пожалуйста, и мы с радостью отправим вам приглашение на мероприятие`,
          buttonText: `Получить приглашение`,
        },
        related: {
          title: `Другие новости`,
        },
        title: 'Новости',
        subscription: {
          title: `Подпишитесь на нашу рассылку `,
          subtitle: `Оставьте заявку, и мы будем присылать вам экспертную информацию о важных событиях в яхтенной индустрии`,
          submitText: `Подписаться`,
        },
        more: { pre: 'Показать еще ', after: ' новостей' },
      }
    : {
        meta: {
          title: 'News - Arcon Yachts',
          description: 'News from Arcon Yachts',
        },
        epilogueTitle: `News from Arcon Yachts`,
        date: `News from `,

        invitation: {
          image: `/img/news/invitationPicture.jpg`,
          size: {
            width: 637,
            height: 918,
          },
          title: `Event invitations`,
          text: `Leave your name and address and receive an${'\u00A0'}invitation to${'\u00A0'}an${'\u00A0'}exclusive event. `,
          buttonText: `Receive an${'\u00A0'}invitation`,
        },
        related: {
          title: `Other news`,
        },
        title: 'news',
        subscription: {
          title: `Sign up${'\u00A0'}to${'\u00A0'}our newsletter`,
          subtitle: `Sign up${'\u00A0'}to${'\u00A0'}Arcon Yachts newsletter to${'\u00A0'}stay updated on${'\u00A0'}the latest yachts for sale and charter and get our broker insight.`,
          submitText: `Sign up`,
        },
        more: { pre: 'More ', after: ' news' },
      }
