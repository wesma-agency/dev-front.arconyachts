export const shipyardStatic = (isRussian) =>
  isRussian
    ? {
        introTitle: 'Верфь',
        infoTitle: 'яхты',
        builtCount: ['яхта', 'яхты', 'яхт'],
        metaShipyard: {
          title: 'Верфь яхт',
          description: 'Информация и модельный ряд моторных яхт верфи',
        },
        params: {
          location: 'Локация',
          built: 'Построено',
          foundationDate: 'Год основания',
        },
        navigation: {
          about: 'О верфи',
          sell: 'Продажа яхт',
          charter: 'Аренда яхт',
          building: 'Строительство яхт',
        },
        sale: {
          title: 'Продажа яхт',
          caption: ['доступна', 'доступно'],
          button: 'Посмотреть все яхты',
        },
        charter: {
          title: 'Аренда яхт',
          caption: ['доступна', 'доступно'],
          button: 'Посмотреть все яхты',
        },
        sellFeedbackForm: {
          title: 'Хотите продать свою яхту?',
          subtitle:
            'Оставьте заявку, и мы вместе с вами найдем подходящего покупателя для вашей яхты',
          submitText: 'Оставить заявку',
        },
        building: {
          title: 'Строительство яхт',
          caption: ['яхта', 'яхты', 'яхты'],
          button: 'Заказать проект яхты',
          descriptionCaption: 'Реализованые проекты:',
        },
        projectForm: {
          title: 'Хотите построить собственную яхту?',
          subtitle:
            'Оставьте заявку, и мы вместе с вами найдем подходящие верфи и студии дизайна, организуем тендеры, наладим коммуникацию со всеми участниками процесса и проведем грамотный контроль строительства на всех его этапах',
          submitText: 'Заказать проект яхты',
        },
        related: {
          title: 'Другие верфи',
        },
        suitableForm: {
          title: 'Не нашли ничего подходящего?',
          subtitle:
            'Оставьте заявку, и мы сделаем для вас индивидуальную подборку яхт этой верфи, а также предоставим информацию о возможностях и сроках строительства нового судна с ними',
          submitText: 'Подобрать яхту',
        },
      }
    : {
        introTitle: 'Shipyard',
        infoTitle: 'yachts',
        builtCount: ['yacht', 'yachts'],
        metaShipyard: {
          title: 'Shipyard',
          description: 'Information and lineup of motor yachts by shipyard',
        },
        params: {
          location: 'Location',
          built: 'Built',
          foundationDate: 'Foundation date',
        },
        navigation: {
          about: 'About shipyard',
          sell: 'Sale yachts',
          charter: 'Charter yachts',
          building: 'Building yachts',
        },
        sale: {
          title: 'Sale yachts',
          caption: ['available'],
          button: 'See more',
        },
        charter: {
          title: 'Charter yachts',
          caption: ['available'],
          button: 'See more',
        },
        sellFeedbackForm: {
          title: 'Are you selling your yacht?',
          subtitle: `Leave a${'\u00A0'}request, and we${'\u00A0'}will advise you on${'\u00A0'}the best price for your yacht, market the vessel properly, and achieve a${'\u00A0'}successful sale.`,
          submitText: 'Enquire',
        },
        building: {
          title: 'Building Yachts',
          caption: ['yacht', 'yachts'],
          button: 'Enquire',
          descriptionCaption: 'RECENT PROJECTS',
        },
        projectForm: {
          title: 'Willing to build a yacht?',
          subtitle:
            'Leave a request, and together with you, we will find shipyards and design studios that match your requirements and personal need. We will act as your intermediary between the different parties and ensure that your yacht is built to the highest standards.',
          submitText: 'Enquire',
        },
        related: {
          title: 'Other shipyards',
        },
        suitableForm: {
          title: `Does it${'\u00A0'}look like there is${'\u00A0'}nothing suitable?`,
          subtitle: `Leave a${'\u00A0'}request, and we${'\u00A0'}will make a${'\u00A0'}personal selection of${'\u00A0'}yachts created by${'\u00A0'}this shipyard and listed for sale, as${'\u00A0'}well we’ll advise you on${'\u00A0'}the availability of${'\u00A0'}the shipyard’s build slots.`,
          submitText: 'Search more yachts',
        },
      }
