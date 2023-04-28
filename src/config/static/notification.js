export const notificationStatic = (isRussian) =>
  isRussian
    ? {
        cookie: {
          title: 'Мы используем Cookie',
          text: 'Продолжая просмотр этого сайта, вы соглашаетесь с ',
          link: 'политикой обработки персональных данных',
          button: 'Я не против',
        },
        email: {
          title: 'Вы подписались',
          text: 'На ваш электронный адрес придет сообщение со ссылкой для подтверждения',
        },
        error: {
          title: 'Подписаться не получилось',
          text: 'Пожалуйста, попробуйте подписаться позже еще раз',
        },
        warning: {
          title: 'Спасибо',
          text: 'Вы уже подписаны на нашу рассылку',
        },
        formError: {
          title: 'Не получилось отправить вашу заявку',
          text: 'Пожалуйста, попробуйте позже еще раз',
        },
      }
    : {
        cookie: {
          title: 'We use cookie',
          text: 'Continuing to view this site, you agree to ',
          link: 'Personal data processing policies',
          button: 'Accept & close',
        },
        email: {
          title: "You're subscribed",
          text: 'Your email address will receive a message with reference to confirm',
        },
        error: {
          title: 'Subscription failed',
          text: 'Please, try again time later',
        },
        warning: {
          title: 'Thank you',
          text: 'You are already subscribed to our newsletter',
        },
        formError: {
          title: 'We couldn’t complete your request',
          text: 'Please try again later',
        },
      }
