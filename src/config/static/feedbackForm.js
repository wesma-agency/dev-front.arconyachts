export const feedbackFormStatic = (isRussian) =>
  isRussian
    ? {
        default: {
          title: 'не нашли ничего подходящего?',
          subtitle: 'Оставьте заявку и мы подберем для вас яхту',
          buttonText: 'Подобрать яхту',
          specialLink: 'специальные условия',
          submitted: 'Ваша заявка принята!',
          submittedText: 'Мы свяжемся с вами в ближайшее время.',
          again: 'Отправить еще раз',
          agreement: [
            'Нажимая кнопку ',
            'Вы соглашаетесь на ',
            'обработку персональных данных',
          ],
        },
        errors: {
          nameRequired: 'Укажите ваше имя',
          emailRequired: 'Укажите вашу почту',
          emailCorrect: 'Укажите корректную почту',
          phoneRequired: 'Укажите ваш телефон',
          phoneCorrect: 'Укажите корректный телефон',
          messageRequired: 'Напишите ваше сообщение',
        },
        placeholder: {
          name: 'Имя',
          phone: 'Телефон',
          email: 'Почта',
          message: 'Сообщение',
        },
      }
    : {
        default: {
          title: `Does it${'\u00A0'}look like there is${'\u00A0'}nothing suitable?`,
          subtitle: `Leave a${'\u00A0'}request, and we${'\u00A0'}will make a${'\u00A0'}personal selection of${'\u00A0'}yachts for you. There’s a${'\u00A0'}perfect yacht for you out there in${'\u00A0'}the market, and we${'\u00A0'}are willing to${'\u00A0'}find${'\u00A0'}it.`,
          buttonText: 'View more yachts for sale',
          specialLink: 'special conditions',
          submitted: `Your application is${'\u00A0'}accepted!`,
          submittedText: 'We will contact you shortly.',
          again: 'Send again',
          agreement: [
            'Pressing button ',
            'you agree to ',
            'processing personal data ',
          ],
        },
        errors: {
          nameRequired: 'Specify your name',
          emailRequired: 'Specify your mail',
          emailCorrect: 'Specify the correct mail',
          phoneRequired: 'Specify your phone',
          phoneCorrect: 'Specify the correct phone',
          messageRequired: 'Write your message',
        },
        placeholder: {
          name: 'Name',
          phone: 'Phone',
          email: 'E-mail',
          message: 'Message',
        },
      }
