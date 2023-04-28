import { PATH } from 'config/path'

export const servicesStatic = (isRussian) =>
  isRussian
    ? {
        meta: {
          title: 'Менеджмент яхт - Arcon yachts',
          description:
            'Arcon yachts поможет обеспечить текущее обслуживание яхты и найти профессиональную команду',
        },
        pageLabel: 'ARCON yachts',
        pageTitle: 'Менеджмент яхт',
        pageIntro: `Даже если у${'\u00A0'}вас уже есть яхта, которая вас полностью устраивает, и${'\u00A0'}вы${'\u00A0'}пока не${'\u00A0'}планируете ее${'\u00A0'}менять, эксперты Arcon Yachts будут рядом во${'\u00A0'}время ваших яхтенных путешествий и${'\u00A0'}вне сезона, отвечая на${'\u00A0'}вопросы, выстраивая важные процессы и${'\u00A0'}налаживая коммуникацию с${'\u00A0'}теми, кто делает вашу жизнь насыщеннее и${'\u00A0'}интереснее.`,
        linkText: 'Узнать подробности',
        image: {
          src: '/img/service/card1@1x.jpg',
          srcSet: '/img/service/card1@2x.jpg',
          alt: 'arcon yachts',
        },

        maintenances: [
          {
            id: 1,
            name: 'Продажа вашей яхты',
            description: `Оперативно выведем в${'\u00A0'}продажу вашу яхту и${'\u00A0'}найдем покупателя в${'\u00A0'}кратчайшие сроки`,
            slug: PATH.SERVICE_SELLING,
          },
          {
            id: 2,
            name: 'Успешная аренда вашей яхты',
            description: `Проведем глубокий анализ рынка и${'\u00A0'}представим вашу чартерную яхту нужной аудитории по${'\u00A0'}всему миру`,
            slug: PATH.SERVICE_LEASING,
          },
          {
            id: 3,
            name: 'Всестороннее обслуживание вашей яхты',
            description: `Возьмем на${'\u00A0'}себя ответственность за${'\u00A0'}все происходящее на${'\u00A0'}борту вашей яхты и${'\u00A0'}убедимся в${'\u00A0'}том, что вы${'\u00A0'}не${'\u00A0'}тратите время и${'\u00A0'}ресурсы на${'\u00A0'}решение повседневных задач`,
            slug: PATH.SERVICE_HANDLING,
          },
          {
            id: 4,
            name: 'Техническая поддержка',
            description: `Скоординируем техническое обслуживание вашей яхты, проконтролируем рефит любой сложности, распланируем сюрвеи и${'\u00A0'}инспекции для соответствия классу и${'\u00A0'}флагу`,
            slug: PATH.SERVICE_SUPPORT,
          },
          {
            id: 5,
            name: `Подбор профессиональной команды и${'\u00A0'}управление экипажем`,
            description: `Возьмем на${'\u00A0'}себя организацию рабочих процессов в${'\u00A0'}команде вашей яхты, решим все административные задачи по${'\u00A0'}найму экипажа`,
            slug: PATH.SERVICE_CREW_MANAGEMENT,
          },
          {
            id: 6,
            name: 'Контроль финансов',
            description: `Обеспечим соблюдение бюджета и${'\u00A0'}введём стандарты прозрачной финансовой отчетности, окажем поддержку в${'\u00A0'}решении любых финансовых вопросов, связанных с${'\u00A0'}вашей яхтой`,
            slug: PATH.SERVICE_FINANCES,
          },
          {
            id: 7,
            name: 'Юридические услуги',
            description: `Убедимся в${'\u00A0'}том, что при покупке, продаже, аренде, обслуживании и${'\u00A0'}эксплуатации вашей яхты договоры заключаются по${'\u00A0'}международным стандартам с${'\u00A0'}учетом ваших интересов`,
            slug: PATH.SERVICE_LAW,
          },
          {
            id: 8,
            name: `Аренда и${'\u00A0'}продажа причалов`,
            description: `Подберем для вас престижный и${'\u00A0'}безопасный порт на${'\u00A0'}длительный срок зимой или найдём лучшее место в${'\u00A0'}летний сезон`,
            slug: PATH.SERVICE_DOCK,
          },
          {
            id: 9,
            name: 'Доставка вашей яхты',
            description: `Поможем с${'\u00A0'}перегоном только что купленной или построенной яхты в${'\u00A0'}нужный порт`,
            slug: PATH.SERVICE_TRANSPORTATION,
          },
          {
            id: 10,
            name: 'Регистрация вашей яхты',
            description: `Выберем вместе с${'\u00A0'}вами флаг и${'\u00A0'}зарегистрируем яхту, возьмём на${'\u00A0'}себя все формальности`,
            slug: PATH.SERVICE_REGISTRATION,
          },
        ],
      }
    : {
        meta: {
          title: 'Management - Arcon yachts',
          description:
            'Arcon yachts will help you provide ongoing yacht maintenance and find a professional crew',
        },
        pageLabel: 'Arcon yachts',
        pageTitle: 'Yacht owners’ services',
        pageIntro: `If you are pleased with your vessel and have no aim to change it, Arcon Yachts’ advisers still might be of assistance to you. They will support you and your crew in and off-season, help you to solve all the problems, facilitate the processes, mediate between parties involved, and ensure a fruitful collaboration with everyone who helps you live your dream.`,
        linkText: 'More info',
        image: {
          src: '/img/service/card1@1x.jpg',
          srcSet: '/img/service/card1@2x.jpg',
          alt: 'arcon yachts',
        },
        maintenances: [
          {
            id: 1,
            name: 'Sell a yacht',
            description: `Arcon Yachts team will market your yacht efficiently and find a perfect buyer for your vessel.`,
            slug: PATH.SERVICE_SELLING,
          },
          {
            id: 2,
            name: 'List a yacht for charter',
            description: `Arcon Yachts team will timely list your yacht for charter, manage the whole process, and make sure you reach the results you want.`,
            slug: PATH.SERVICE_LEASING,
          },
          {
            id: 3,
            name: 'Get a complete management program',
            description: `We will take care of every detail of the yacht operations, provide all your needs and ensure your yacht ownership is easy and stress-free.`,
            slug: PATH.SERVICE_HANDLING,
          },
          {
            id: 4,
            name: 'Use technical support',
            description: `Arcon Yachts’ trained technicians are on hand to assist you with major refit projects, maintenance work, surveys, inspections and certifications. We will also update you on the new regulations and chartering requirements.`,
            slug: PATH.SERVICE_SUPPORT,
          },
          {
            id: 5,
            name: `Source the best crew`,
            description: `We will appoint your yacht with the most experienced crew and administrate the employment, thus make sure you, your family and your guests always get high-level service.`,
            slug: PATH.SERVICE_CREW_MANAGEMENT,
          },
          {
            id: 6,
            name: 'Get financial reports',
            description: `We will provide you with effective checks and tailored financial support with yacht operations on a day-to-day basis.`,
            slug: PATH.SERVICE_FINANCES,
          },
          {
            id: 7,
            name: 'Get legal advice',
            description: `We will cover all the legal issues of buying, selling, chartering and managing a yacht. Also, we will ensure the agreements are signed with your interests in mind and with full compliance with international maritime law.`,
            slug: PATH.SERVICE_LAW,
          },
          {
            id: 8,
            name: `Buy or rent a berth`,
            description: `We’ll find you a prime and safe berth for a night, a season, or a year ahead.`,
            slug: PATH.SERVICE_DOCK,
          },
          {
            id: 9,
            name: 'Have your yacht transported safely',
            description: `We will have your yacht transported safely to the location of your choice.`,
            slug: PATH.SERVICE_TRANSPORTATION,
          },
          {
            id: 10,
            name: 'Choose the best flag and registration',
            description: `We will help you choose the best flag for your private or charter yacht and make day-to-day operations easy.`,
            slug: PATH.SERVICE_REGISTRATION,
          },
        ],
      }
export const dockStatic = (isRussian) =>
  isRussian
    ? {
        meta: {
          title: 'Стоянка яхт. Стоимость мест, где хранить яхту - Arcon Yachts',
          description:
            'Подбор лучших мест на стоянке яхт. Информация о стоимости стоянки и правильном хранении яхт от Arcon Yachts.',
        },
        pageLabel: 'Обслуживание яхт',
        pageTitle: `Продажа и${'\u00A0'}аренда причалов`,
        image: {
          src: '/img/dock/banner-dock@1x.jpg',
          srcSet: '/img/dock/banner-dock@2x.jpg',
          alt: 'Баннер',
        },
        info: {
          intro: `После покупки яхты или по${'\u00A0'}окончанию ее${'\u00A0'}строительства эксперты Arcon Yachts:`,
          text: [
            [
              `Подберут для вас престижный и${'\u00A0'}отлично охраняемый порт в${'\u00A0'}интересующем регионе и${'\u00A0'}убедятся в${'\u00A0'}том, что вам в${'\u00A0'}эту гавань возвращаться приятно.`,
              `Обеспечат вас информацией о${'\u00A0'}причалах, которые выставлены на${'\u00A0'}продажу в${'\u00A0'}ключевых яхтенных направлениях. `,
              `Позаботятся о${'\u00A0'}том, чтобы у${'\u00A0'}вашей яхты был причал в${'\u00A0'}лучших маринах в${'\u00A0'}период летних и${'\u00A0'}зимних путешествий.`,
              `Помогут арендовать место для яхты в${'\u00A0'}порту в${'\u00A0'}момент важного культурного события.`,
            ],
          ],
        },
      }
    : {
        meta: {
          title: 'Berth Assistance - Arcon Yachts',
          description:
            'Selection of the best berths for yachts. Arcon Yachts provides information on the cost of parking and proper storage of yachts.',
        },
        pageLabel: 'Service',
        pageTitle: `Berth Assistance`,
        image: {
          src: '/img/dock/banner-dock@1x.jpg',
          srcSet: '/img/dock/banner-dock@2x.jpg',
          alt: 'banner',
        },
        info: {
          title: `Once you take delivery of your new yacht or complete the purchase transaction, experts of Arcon Yachts will provide you with full details of:`,
          text: [
            [
              `Choosing a safe and prestigious marina, you will be delighted to be back to again and again;`,
              `Sourcing moorings listed for sale in the key locations;`,
              `Securing anchorage and moorings during your vacations in the high season;`,
              `Event charters (Monaco Grand Prix, Cannes Film Festival and alike).`,
            ],
          ],
        },
      }
export const transportationStatic = (isRussian) =>
  isRussian
    ? {
        meta: {
          title:
            'Доставка и транспортировка яхты. Доставка и транспортировка яхты по запросу - Arcon Yachts',
          description:
            'Услуги профессиональной перевозки яхт. Осуществляем перегон и доставку яхт к месту назначения от компании Arcon Yachts.',
        },
        pageLabel: 'Обслуживание яхт',
        pageTitle: 'Доставка и транспортировка яхты',
        image: {
          src: '/img/transportation/banner@1x.jpg',
          srcSet: '/img/transportation/banner@2x.jpg',
          alt: 'banner',
        },
        info: {
          intro: `Перегон яхты${'\u00A0'}— безусловно волнительный момент, особенно если расстояния большие, а${'\u00A0'}погодные условия непредсказуемы. Эксперты Arcon Yachts свяжутся с${'\u00A0'}лучшей транспортной компанией и${'\u00A0'}позаботятся о${'\u00A0'}том, чтобы у${'\u00A0'}вашей яхты была самая надежная страховка и${'\u00A0'}лучшее сопровождение на${'\u00A0'}пути. Специалисты Arcon Yachts с${'\u00A0'}легкостью сработаются с${'\u00A0'}вашим капитаном и${'\u00A0'}его командой или, если нужно, обеспечат вашу яхту перегонным экипажем.`,
          title: `Эксперты Arcon Yachts готовы помочь с${'\u00A0'}доставкой яхты в${'\u00A0'}любую точку мира. В${'\u00A0'}каких случаях вам это может понадобиться?`,
          text: [
            [
              `Если вы${'\u00A0'}во${'\u00A0'}время путешествия оставили свою яхту в${'\u00A0'}конечной точке маршрута и${'\u00A0'}у${'\u00A0'}вас нет времени перегонять его самостоятельно.`,
              `Если яхте нужно срочно сменить порт, но${'\u00A0'}у${'\u00A0'}вас нет возможности прибыть на${'\u00A0'}место и${'\u00A0'}сделать это самостоятельно.`,
              `Если во${'\u00A0'}время длительного яхтенного путешествия команда вашего судна оказалась в${'\u00A0'}незнакомом регионе и${'\u00A0'}теперь предстоит прохождение таможни и${'\u00A0'}возвращение в${'\u00A0'}родной порт.`,
              `Если погодные условия или обстоятельства не${'\u00A0'}позволяют вашей команде перегнать яхту самостоятельно через океан.`,
            ],
          ],
        },
      }
    : {
        meta: {
          title:
            'Arcon Yachts Yacht transportation. Yachts transportation and shipping upon request - Arcon Yachts',
          description:
            'Arcon Yachts Professional yacht transportation services. We provide ferrying and transportation of yachts to the place of destination from Arcon Yachts',
        },
        pageLabel: 'Operations management',
        pageTitle: 'Have your yacht transported safely',
        image: {
          src: '/img/transportation/banner@1x.jpg',
          srcSet: '/img/transportation/banner@2x.jpg',
          alt: 'Banner',
        },
        info: {
          intro: `Getting your yacht from A to B without damage or delay is not an easy task. Especially, if the distances are long and the weather forecast is not promising. Experts of Arcon Yachts will help you find suitable shipping options with a leading transport company, clarify specific details and ensure your vessel has the best insurance. Arcon Yachts managers will form a strong team with your crew or provide you with well-trained delivery skippers.`,
          title: `An experienced team of Arcon Yachts will relocate your vessel to the port of your choice and have your newly built or purchased yacht delivered. You might need this service also when`,
          text: [
            [
              `cruising in a new destination;`,
              `there is an unexpected change of plans;`,
              `need to change the home port while the crew got time off;`,
              `it’s not safe for your vessel to cross the ocean on her own bottom.`,
            ],
          ],
        },
      }
export const registrationStatic = (isRussian) =>
  isRussian
    ? {
        meta: {
          title:
            'Регистрация яхт в России и за рубежом. Зарегистрировать яхту - Arcon Yachts',
          description:
            'Предоставляем услуги по регистрации яхт, как в России, так и за рубежом. Компания Arcon Yachts поможет зарегистрировать яхту владельцам.',
        },
        pageLabel: 'Обслуживание яхт',
        pageTitle: 'Регистрация яхты',
        image: {
          src: '/img/registration/banner@1x.jpg',
          srcSet: '/img/registration/banner@2x.jpg',
          alt: 'Баннер',
        },
        info: {
          intro: `Эксперты Arcon Yachts проведут вас через каждый этап покупки яхты и${'\u00A0'}строительства вашего нового суда и${'\u00A0'}помогут найти ответы на${'\u00A0'}самые важные вопросы. В${'\u00A0'}частности, помогут вам выбрать оптимальный вариант регистрации яхты.`,
          title: 'Arcon Yachts будет рядом, когда вам понадобится:',
          text: [
            [
              `Первоначальная регистрация яхты, будь${'\u00A0'}то под традиционным яхтенным флагом (Британские Виргинские острова, Гернси, Джерси, Панама, Мальта, Сейшельские острова) или под флагом, который важен именно для вас.`,
              `Смена флага и${'\u00A0'}снятие яхты с${'\u00A0'}учета.`,
              `Временный ввоз яхты на${'\u00A0'}территорию другой страны.`,
              `Смена регистрации с${'\u00A0'}частного судна на${'\u00A0'}чартерное и${'\u00A0'}наоборот.`,
            ],
          ],
        },
      }
    : {
        meta: {
          title: 'Yacht registration - Arcon Yachts',
          description:
            'We provide services for the registration of yachts, both in Russia and abroad. Arcon Yachts will help you register your yacht',
        },
        pageLabel: 'Yacht maintenance',
        pageTitle: 'Choose the best flag and registration',
        image: {
          src: '/img/registration/banner@1x.jpg',
          srcSet: '/img/registration/banner@2x.jpg',
          alt: 'banner',
        },
        info: {
          intro: `Arcon Yachts’ experts not only will guide you through all the stages of the sale and build but will also ensure that every detail serves your purposes. Including the yacht’s flag state.`,
          title: 'Arcon Yachts’ experts will guide and support you in:',
          text: [
            [
              `choosing the flag to fly from the transom of your brand new yacht, whether it’s a traditional offshore (British Virgin Islands, Guernsey, Jersey, Panama, Malta, Seychelles islands), your home country or any other state,`,
              `changing the flag or removing the yacht from the registry;`,
              `complying with the regulations of the flag state in different countries during cruising;`,
              `making a new yacht registration (switching from private vessel to commercially operated and vice versa).`,
            ],
          ],
        },
      }
export const sellingStatic = (isRussian) =>
  isRussian
    ? {
        meta: {
          title:
            'Продажа вашей яхты в России и за рубежом. Продать яхту - Arcon Yachts',
          description:
            'Предоставляем услуги по продаже яхт, как в России, так и за рубежом. Компания Arcon Yachts поможет продать яхту владельцам.',
        },
        pageLabel: 'Обслуживание яхт',
        pageTitle: 'Продажа вашей яхты',
        image: {
          src: '/img/registration/banner@1x.jpg',
          srcSet: '/img/registration/banner@2x.jpg',
          alt: 'Баннер',
        },
        info: {
          intro: `На${'\u00A0'}каком${'\u00A0'}бы этапе у${'\u00A0'}вас ни${'\u00A0'}возникло желание продать вашу яхту, эксперты Arcon Yachts смогут оперативно вывести ее${'\u00A0'}в${'\u00A0'}продажу и${'\u00A0'}найти покупателя в${'\u00A0'}кратчайшие сроки.`,
          text: [
            [
              `У${'\u00A0'}Arcon Yachts большой опыт заключения сделок, мы${'\u00A0'}чувствуем настроения рынка, прекрасно знаем его участников, считываем тренды и${'\u00A0'}настроения тех, кто ищет для себя новую яхту.`,
              `Наш опыт продаж дает нам возможность правильно проанализировать характеристики, особенности и${'\u00A0'}историю вашей яхты и${'\u00A0'}сфокусировать внимание потенциальных клиентов на${'\u00A0'}самых сильных качествах судна.`,
              `Вся информация, которая публикуется во${'\u00A0'}время продажи яхты, будет проверенной, достоверной, надежной и${'\u00A0'}четкой, а${'\u00A0'}конфиденциальность ваших данных будет непременно соблюдена.`,
              `Мы${'\u00A0'}понимаем, что расставаться с${'\u00A0'}яхтой даже ради покупки большего и${'\u00A0'}лучшего судна непросто, и${'\u00A0'}с${'\u00A0'}большим вниманием занимаемся поиском надежного и${'\u00A0'}проверенного покупателя.`,
              `У${'\u00A0'}экспертов Arcon Yachts нет языковых барьеров и${'\u00A0'}территориальных ограничений, что обеспечивает вашу яхту самой широкой и${'\u00A0'}самой правильной аудиторией.`,
              `Мы${'\u00A0'}нацелены на${'\u00A0'}прочные партнерские отношения и${'\u00A0'}убедимся в${'\u00A0'}том, что с${'\u00A0'}нами вам захочется не${'\u00A0'}только продать, но${'\u00A0'}и${'\u00A0'}купить новую яхту, и${'\u00A0'}построить яхту с${'\u00A0'}нуля.`,
            ],
          ],
        },
      }
    : {
        meta: {
          title:
            'Sell a yacht - Arcon Yachts',
          description:
            'Whichever moment you choose to sell the yacht, the team of Arcon Yachts will list it, target the right audience, and timely find the new owner.',
        },
        pageLabel: 'Service',
        pageTitle: 'Sell a yacht',
        image: {
          src: '/img/registration/banner@1x.jpg',
          srcSet: '/img/registration/banner@2x.jpg',
          alt: 'banner',
        },
        info: {
          intro: `Whichever moment you choose to sell the yacht, the team of Arcon Yachts will list it, target the right audience, and timely find the new owner.`,
          text: [
            [
              `Arcon Yachts has an excellent sales record, feels the yachting trends and understands the mindset of those who look for a yacht to buy.`,
              `Our experience allows us to highlight the strong points of your yacht, focus on her uniqueness and let her stand out from the crowd.`,
              `Your privacy is guaranteed. No information about your yacht will be published without your approval.`,
              `Saying goodbye to your yacht is an emotional moment. And we’ll search for a new reliable owner who respects the story of the vessel no less than you do.`,
              `Arcon Yachts experts speak many languages and travel the world. There are no limits to present your yacht to a knowledgeable audience.`,
              `We aim to become your trusted brokers and partners and will ensure the pursuit of your goals.`,
            ],
          ],
        },
      }
export const leasingStatic = (isRussian) =>
  isRussian
    ? {
        meta: {
          title:
            'Аренда вашей яхты в России и за рубежом. Сдать яхту в аренду - Arcon Yachts',
          description:
            'Предоставляем услуги по аренде яхт, как в России, так и за рубежом. Компания Arcon Yachts поможет владельцам сдать яхту в аренду.',
        },
        pageLabel: 'Обслуживание яхт',
        pageTitle: 'Успешная аренда вашей яхты',
        image: {
          src: '/img/registration/banner@1x.jpg',
          srcSet: '/img/registration/banner@2x.jpg',
          alt: 'Баннер',
        },
        info: {
          intro: `Решение сдать собственную яхту в${'\u00A0'}аренду${'\u00A0'}- это шаг в${'\u00A0'}абсолютно новый и${'\u00A0'}очень интересный мир. Эксперты Arcon Yachts проведут глубокий анализ рынка и${'\u00A0'}представят вашу чартерную яхту нужной аудитории по${'\u00A0'}всему миру.`,
          text: [
            [
              `Arcon Yachts берут на${'\u00A0'}себя полную организацию процесса и${'\u00A0'}подготовку яхты к${'\u00A0'}выходу на${'\u00A0'}чартерный рынок.`,
              `Конфиденциальность ваших данных будет абсолютной как на${'\u00A0'}начальных этапах, так и${'\u00A0'}во${'\u00A0'}время активной сдачи яхты в${'\u00A0'}аренду.`,
              `Подход к${'\u00A0'}вашей яхте будет индивидуальным, а${'\u00A0'}все вопросы, касающиеся аренды вашей яхты, вы${'\u00A0'}сможете обсуждать с${'\u00A0'}вашим личным менеджером Arcon Yachts. `,
              `Мы${'\u00A0'}займемся графиком путешествий, сделаем его максимально плотным и${'\u00A0'}полностью соответствующим вашим приоритетам.`,
              `Arcon Yachts думают о${'\u00A0'}репутации вашей яхты на${'\u00A0'}чартерном рынке и${'\u00A0'}понимают, насколько она важна для вас и${'\u00A0'}насколько полезна при продаже яхты в${'\u00A0'}дальнейшем.`,
            ],
          ],
        },
      }
    : {
        meta: {
          title:
            'List a yacht for charter - Arcon Yachts',
          description:
            'By changing your yacht’s registration from private to commercial, you step onto new territory. Arcon Yachts experts will support you on every stage, e.g. research the yacht’s story, bring forward the strong points of the vessel, and timely present it to the international audience.',
        },
        pageLabel: 'Service',
        pageTitle: 'List a yacht for charter',
        image: {
          src: '/img/registration/banner@1x.jpg',
          srcSet: '/img/registration/banner@2x.jpg',
          alt: 'banner',
        },
        info: {
          intro: `By changing your yacht’s registration from private to commercial, you step onto new territory. Arcon Yachts experts will support you on every stage, e.g. research the yacht’s story, bring forward the strong points of the vessel, and timely present it to the international audience.`,
          text: [
            [
              `Arcon Yachts will prepare your vessel to be listed for charter and manage the entire charter operation.`,
              `Your privacy is guaranteed at every stage.`,
              `Your personal charter manager will be one phone call away in high and low season, aboard and ashore and advise you whenever you need it.`,
              `We’ll manage the requests and charters on your behalf and will always be flexible when it comes to your weeks of vacation.`,
              `Arcon Yachts will ensure your vessel has a proper charter reputation on the market and every guest has an unforgettable experience onboard.`,
            ],
          ],
        },
      }
export const handlingStatic = (isRussian) =>
  isRussian
    ? {
        meta: {
          title:
            'Всестороннее обслуживание вашей яхты вашей яхты в России и за рубежом. Всестороннее обслуживание яхты - Arcon Yachts',
          description:
            'Предоставляем услуги по всестореннему обслуживанию яхт, как в России, так и за рубежом. Компания Arcon Yachts поможет владельцам со всесторонним обслуживанием яхты.',
        },
        pageLabel: 'Обслуживание яхт',
        pageTitle: 'Всестороннее обслуживание вашей яхты',
        image: {
          src: '/img/transportation/banner@1x.jpg',
          srcSet: '/img/transportation/banner@2x.jpg',
          alt: 'Баннер',
        },
        info: {
          intro: `Независимо от${'\u00A0'}того, сколько недель вы${'\u00A0'}проводите на${'\u00A0'}борту вашей яхты, ее${'\u00A0'}содержание предполагает решение сложных организационных вопросов. Эксперты Arcon Yachts возьмут на${'\u00A0'}себя ответственность за${'\u00A0'}все происходящее на${'\u00A0'}борту и${'\u00A0'}убедятся в${'\u00A0'}том, что вы${'\u00A0'}не${'\u00A0'}тратите время и${'\u00A0'}ресурсы на${'\u00A0'}решение повседневных задач`,
          text: [
            [
              `Arcon Yachts придерживаются комплексного подхода и${'\u00A0'}составляют индивидуальную программу менеджмента для каждой яхты.`,
              `Вам гарантирован доступ к${'\u00A0'}любой информации о${'\u00A0'}яхте, как и${'\u00A0'}абсолютная конфиденциальность ваших данных.`,
              `Ключ успеха${'\u00A0'}— в${'\u00A0'}правильной коммуникации. У${'\u00A0'}вас будет личный менеджер, с${'\u00A0'}которым можно выйти на${'\u00A0'}связь и${'\u00A0'}максимально оперативно решить интересующие вопросы.`,
              `Уважительные отношения с${'\u00A0'}экипажем${'\u00A0'}— приоритет для Arcon Yachts. Уровень обслуживания на${'\u00A0'}борту вашей яхты будет не${'\u00A0'}просто выше, чем раньше, но${'\u00A0'}с${'\u00A0'}годами между вами и${'\u00A0'}экипажем будет достигнуто настоящее взаимопонимание.`,
              `Arcon Yachts сделает акцент на${'\u00A0'}строгом контроле и${'\u00A0'}сборе информации, которая впоследствии может понадобиться вам при продаже яхты или при выведении ее${'\u00A0'}на${'\u00A0'}чартерный рынок. В${'\u00A0'}частности, систематизирует проверку сертификатов и${'\u00A0'}документации, получение и${'\u00A0'}обновление всех необходимых документов, в${'\u00A0'}том числе страхования.`,
            ],
          ],
        },
      }
    : {
        meta: {
          title:
            'Get a complete management program - Arcon Yachts',
          description:
            'Independently on how many weeks you spend onboard your yacht per year, keeping its status as a valuable asset is a complex process with many parties involved. Arcon Yachts’ advisers have knowledge and resources to secure your peace of mind and ensure you are not wasting time on unforeseen issues.',
        },
        pageLabel: 'Service',
        pageTitle: 'Get a complete management program',
        image: {
          src: '/img/transportation/banner@1x.jpg',
          srcSet: '/img/transportation/banner@2x.jpg',
          alt: 'banner',
        },
        info: {
          intro: `Independently on how many weeks you spend onboard your yacht per year, keeping its status as a valuable asset is a complex process with many parties involved. Arcon Yachts’ advisers have knowledge and resources to secure your peace of mind and ensure you are not wasting time on unforeseen issues.`,
          text: [
            [
              `Arcon Yachts will prepare a tailored management program for your vessel. You can add services you require at any moment.`,
              `Your privacy is guaranteed at every stage. Access to all the information on your yacht and its current condition is easy.`,
              `The key is in communication. Your personal yacht manager will be one phone call away and will guide you through the entire process to resolve any problem discreetly and without delay.`,
              `A respectful relationship with the crew of your yacht is a priority for Arcon Yachts. The level of service onboard will not only rise with years, but you will also reach a better understanding with the crew.`,
              `Arcon Yachts will collect the data and technical documentation, automatise the updates, renewals of certifications and insurance solutions, and provide your vessel with a higher resale value in the future.`,
            ],
          ],
        },
      }
export const supportStatic = (isRussian) =>
  isRussian
    ? {
        meta: {
          title:
            'Техническая поддержка вашей яхты в России и за рубежом. Техническая поддержка яхт - Arcon Yachts',
          description:
            'Предоставляем услуги по технической поддержке яхт, как в России, так и за рубежом. Компания Arcon Yachts поможет владельцам с технической поддержкой яхт.',
        },
        pageLabel: 'Обслуживание яхт',
        pageTitle: 'Техническая поддержка',
        image: {
          src: '/img/transportation/banner@1x.jpg',
          srcSet: '/img/transportation/banner@2x.jpg',
          alt: 'Баннер',
        },
        info: {
          intro: `Не${'\u00A0'}достаточно заручиться помощью надежного капитана и${'\u00A0'}представителей верфи, построившей вашу яхту, для того, чтобы обеспечить ей${'\u00A0'}отличное техническое состояние на${'\u00A0'}годы. Эксперты Arcon Yachts скоординируют техническое обслуживание вашей яхты, проконтролируют рефит любой сложности, распланируют сюрвеи и${'\u00A0'}инспекции для соответствия классу и${'\u00A0'}флагу.`,
          text: [
            [
              `Arcon Yachts окажут вам и${'\u00A0'}вашему экипажу техническую поддержку в${'\u00A0'}разгар сезона, в${'\u00A0'}зимний период, во${'\u00A0'}время пребывания на${'\u00A0'}верфи.`,
              `С${'\u00A0'}регулярными проверками бортовых систем и${'\u00A0'}грамотной организацией сервисных работ у${'\u00A0'}вас будет гарантия того, что технические проблемы не${'\u00A0'}возникнут в${'\u00A0'}самый неподходящий момент, а, значит, вам, как владельцу яхты, не${'\u00A0'}придется подстраиваться под других и${'\u00A0'}действовать по${'\u00A0'}обстоятельствам.`,
              `С${'\u00A0'}Arcon Yachts у${'\u00A0'}вас будет доступ к${'\u00A0'}сети надежных поставщиков, сервисных служб и${'\u00A0'}специалистов, которые осуществят полный мониторинг состояния вашей яхты, а${'\u00A0'}также найдут наиболее эффективный способ устранения проблем на${'\u00A0'}ранней стадии.`,
              `Вам гарантирован доступ к${'\u00A0'}любой информации о${'\u00A0'}яхте, как и${'\u00A0'}абсолютная конфиденциальность ваших данных. `,
              `Проверка сертификатов и${'\u00A0'}технической документации будут систематизированы, ваша яхта будет безоговорочно соответствовать требованиям вашего флага и${'\u00A0'}класса.`,
              `Arcon Yachts сделают акцент на${'\u00A0'}строгом контроле и${'\u00A0'}сборе информации, которая впоследствии может понадобиться вам при продаже яхты или при выведении ее${'\u00A0'}на${'\u00A0'}чартерный рынок.`,
            ],
          ],
        },
      }
    : {
        meta: {
          title:
            'Use technical support - Arcon Yachts',
          description:
            'At times assistance of your captain and shipyard\'s representatives is not sufficient to keep your yacht in a perfect state for years.',
        },
        pageLabel: 'Service',
        pageTitle: 'Use technical support',
        image: {
          src: '/img/transportation/banner@1x.jpg',
          srcSet: '/img/transportation/banner@2x.jpg',
          alt: 'banner',
        },
        info: {
          intro: `At times assistance of your captain and shipyard's representatives is not sufficient to keep your yacht in a perfect state for years. A highly knowledgable team of Arcon Yachts will increase the technical efficiency of your yacht, manage a refit, schedule surveys, maintenance works and monthly checks and ensure your class and flag requirements are met.`,
          text: [
            [
              `Arcon Yachts will assist your crew during the pre-season checks and peak season, at the shipyard.`,
              `With regular verifications and technical audits, our team will have a deep understanding of the yacht's operations, and help your crew avoid unforeseen issues during your vacations.`,
              `Arcon Yachts will provide you with access to a wide network of reliable subcontractors and technical specialists whose task will be predicting technical problems and fixing them at an early stage.`,
              `Round-the-clock support, full access to the information and your privacy are guaranteed.`,
              `The team of experts prepares a complete technical data set of your yacht and ensures the vessel complies with construction standards set forth by classification societies and flag state requirements.`,
              `Arcon Yachts focuses on the documentation that provides your vessel with a better charter reputation and a higher resale value in the future.`,
            ],
          ],
        },
      }
export const crewManagementStatic = (isRussian) =>
  isRussian
    ? {
        meta: {
          title:
            'Подбор профессиональной команды и управление экипажем вашей яхты в России и за рубежом. Подбор профессиональной команды и управление экипажем яхты - Arcon Yachts',
          description:
            'Предоставляем услуги по подбору профессиональной команды и управлению экипажем вашей яхты, как в России, так и за рубежом. Компания Arcon Yachts поможет владельцам с подбором профессиональной команды и управлениеь экипажем вашей яхты',
        },
        pageLabel: 'Обслуживание яхт',
        pageTitle: `Подбор профессиональной команды и${'\u00A0'}управление экипажем вашей яхты`,
        image: {
          src: '/img/registration/banner@1x.jpg',
          srcSet: '/img/registration/banner@2x.jpg',
          alt: 'Баннер',
        },
        info: {
          intro: `Профессиональный и${'\u00A0'}доброжелательный экипаж${'\u00A0'}— залог спокойного и${'\u00A0'}приятного отдыха на${'\u00A0'}борту вашей яхты. Эксперты Arcon Yachts возьмут на${'\u00A0'}себя организацию рабочих процессов в${'\u00A0'}команде и${'\u00A0'}решат все административные задачи по${'\u00A0'}найму экипажа.`,
          text: [
            [
              `Arcon Yachts умеют выстраивать длительные и${'\u00A0'}доверительные отношения с${'\u00A0'}экипажами яхт и${'\u00A0'}добиваться того, чтобы члены экипажа выполняли свою работу не${'\u00A0'}просто на${'\u00A0'}должном уровне, а${'\u00A0'}не${'\u00A0'}уровень выше заданного.`,
              `Мы${'\u00A0'}убедимся в${'\u00A0'}том, что в${'\u00A0'}коллективе выстроена правильная иерархия, а${'\u00A0'}функции распределены максимально логично и${'\u00A0'}с${'\u00A0'}учетом ваших приоритетов. `,
              `Речь не${'\u00A0'}только о${'\u00A0'}поиске лучших представителей профессии для вашей яхты, но${'\u00A0'}также о${'\u00A0'}работе с${'\u00A0'}теми, кто уже занят на${'\u00A0'}борту, о${'\u00A0'}постоянном повышении их${'\u00A0'}квалификации и${'\u00A0'}развитии, а${'\u00A0'}значит приобретении ими новых навыков, которые полезны вам и${'\u00A0'}вашей семье.`,
              `Заключим все необходимые трудовые договоры и${'\u00A0'}соглашения о${'\u00A0'}конфиденциальности.`,
              `С${'\u00A0'}экспертами Arcon Yachts у${'\u00A0'}вас будет ощущение полной безопасности на${'\u00A0'}борту вашей яхты, конфиденциальность и${'\u00A0'}ваши интересы будут соблюдаться в${'\u00A0'}каждый момент времени.`,
            ],
          ],
        },
      }
    : {
        meta: {
          title:
            'Source the best crew - Arcon Yachts',
          description:
            'A smiling and highly professional crew is central to the successful operation of your vessel. The team of Arcon Yachts will administrate the operations and monitor your crew performance.',
        },
        pageLabel: 'Service',
        pageTitle: `Source the best crew`,
        image: {
          src: '/img/registration/banner@1x.jpg',
          srcSet: '/img/registration/banner@2x.jpg',
          alt: 'banner',
        },
        info: {
          intro: `A smiling and highly professional crew is central to the successful operation of your vessel. The team of Arcon Yachts will administrate the operations and monitor your crew performance.`,
          text: [
            [
              `Arcon Yachts builds an excellent relationship with your crew and makes sure their level of efficiency is high.`,
              `We check the crew structure, ensure that the roles onboard fully correspond to your lifestyle, and keep working on a creative and positive thinking team for your yacht.`,
              `We present you to proven candidates while ensuring that the current crew members are fully certified and keep your interests in mind. Year-round training programs provide you and your family with high-standard service onboard.`,
              `We set up a structure to employ the crew, provide all the employment contracts, non-disclosure agreements, medical certificates, and the rest of the documentation for crew members of different nationalities and countries of residence.`,
              `With Arcon Yachts, you will feel secure as your affairs and the affairs of your guests are kept confidential.`,
            ],
          ],
        },
      }
export const financesStatic = (isRussian) =>
  isRussian
    ? {
        meta: {
          title:
            'Контроль финансов для вашей яхты в России и за рубежом. Контроль финансов - Arcon Yachts',
          description:
            'Предоставляем услуги по контролю финансов, как в России, так и за рубежом. Компания Arcon Yachts поможет владельцам с контролем финансов.',
        },
        pageLabel: 'Обслуживание яхт',
        pageTitle: 'Контроль финансов',
        image: {
          src: '/img/transportation/banner@1x.jpg',
          srcSet: '/img/transportation/banner@2x.jpg',
          alt: 'Баннер',
        },
        info: {
          intro: `Не${'\u00A0'}важно, стремитесь вы${'\u00A0'}получить определенный доход от${'\u00A0'}сдачи яхты в${'\u00A0'}аренду или пользуетесь яхтой как частной, с${'\u00A0'}правильно выстроенной логикой финансовых операций, вам, как владельцу, может стать на${'\u00A0'}порядок комфортнее. Arcon Yachts обеспечит соблюдение бюджета и${'\u00A0'}введет стандарты прозрачной финансовой отчетности, а${'\u00A0'}также окажет поддержку в${'\u00A0'}решении любых финансовых вопросов, связанных с${'\u00A0'}вашей яхтой.`,
          text: [
            [
              `Эксперты Arcon Yachts сформируют индивидуальную программу финансового менеджмента для вашей яхты, возьмут на${'\u00A0'}себя составление бюджета, проверку заказов, сверку расходов и${'\u00A0'}оплату услуг.`,
              `А${'\u00A0'}также помогут с${'\u00A0'}оформлением банковских карт для яхты и${'\u00A0'}систематизацией расходов экипажа.`,
              `Можно быть уверенным в${'\u00A0'}том, что вам и${'\u00A0'}вашему персональному ассистенту не${'\u00A0'}придется проводить платежи и${'\u00A0'}общаться с${'\u00A0'}подрядчиками, то${'\u00A0'}есть вы${'\u00A0'}не${'\u00A0'}будете тратить время и${'\u00A0'}ресурсы на${'\u00A0'}решение повседневных задач.`,
              `На${'\u00A0'}протяжении года вам будут предоставляться детальные отчеты и${'\u00A0'}доступ к${'\u00A0'}самой важной информации о${'\u00A0'}вашей яхте, таким образом вы${'\u00A0'}сможете вносить коррективы и${'\u00A0'}расставлять приоритеты.`,
              `Благодаря действиям Arcon Yachts у${'\u00A0'}вас будет четкое понимание того, насколько оперативно решаются административные и${'\u00A0'}технические вопросы, связанные с${'\u00A0'}вашей яхтой, и${'\u00A0'}насколько эффективны действия тех, кто вовлечен в${'\u00A0'}процесс.`,
            ],
          ],
        },
      }
    : {
        meta: {
          title:
            'Get financial reports - Arcon Yachts',
          description:
            'Whether you aim to generate income, reduce the cost of ownership, or reach transparency in financial operations, a designated manager will help you secure the best result.',
        },
        pageLabel: 'Service',
        pageTitle: 'Get financial reports',
        image: {
          src: '/img/transportation/banner@1x.jpg',
          srcSet: '/img/transportation/banner@2x.jpg',
          alt: 'banner',
        },
        info: {
          intro: `Whether you aim to generate income, reduce the cost of ownership, or reach transparency in financial operations, a designated manager will help you secure the best result. Arcon Yachts’ team will keep you well informed, ensure financial transparency and forward planning, and provide you with real-time tracking of your yacht’s accounts and expenses.`,
          text: [
            [
              `Arcon Yachts advisers will offer you a tailored program of financial management to avoid deviations from the budget, verify invoices, process purchase orders, and arrange payments.`,
              `Our team will set up an account for your yacht, oversee the crew payroll, issue cards for the captain and crew, monitor their use.`,
              `We will ensure your personal assistant won't need to step in and make urgent transactions or contact sub-contractors, and the day-to-day yacht operations go seamlessly.`,
              `Detailed reports will be presented to you annually, monthly and weekly. You will also have access to updates, follow-ups and yacht accounting at any moment.`,
              `With this information at hand and an experienced team managing the budget of your yacht, the predictability of your expenses will be higher and the level of efficiency of every participant clearer.`,
            ],
          ],
        },
      }
export const lawStatic = (isRussian) =>
  isRussian
    ? {
        meta: {
          title:
            'Юридические услуги в России и за рубежом. Юридические услуги - Arcon Yachts',
          description:
            'Предоставляем юридические услуги, как в России, так и за рубежом. Компания Arcon Yachts поможет владельцам яхт с юридическими услуги.',
        },
        pageLabel: 'Обслуживание яхт',
        pageTitle: 'Юридические услуги',
        image: {
          src: '/img/transportation/banner@1x.jpg',
          srcSet: '/img/transportation/banner@2x.jpg',
          alt: 'Баннер',
        },
        info: {
          intro: `В${'\u00A0'}ключевые моменты услуги юристов, специализирующихся на${'\u00A0'}морском праве, оказываются очень полезны. Эксперты Arcon Yachts убедятся в${'\u00A0'}том, что при покупке, продаже, аренде, обслуживании и${'\u00A0'}эксплуатации вашей яхты договоры заключаются по${'\u00A0'}международным стандартам и${'\u00A0'}с${'\u00A0'}учетом ваших интересов.`,
          text: [
            [
              `Arcon Yachts удостоверится в${'\u00A0'}том, что все происходящее на${'\u00A0'}борту вашей яхты полностью соответствует международному морскому праву и${'\u00A0'}не${'\u00A0'}противоречит требованиям вашего флага и${'\u00A0'}класса. ${'\u00A0'}себя составление бюджета, проверку заказов, сверку расходов и${'\u00A0'}оплату услуг.`,
              `Дадим практические рекомендации вашему экипажу по${'\u00A0'}тому, как избежать спорных моментов и${'\u00A0'}страховых случаев на${'\u00A0'}борту, в${'\u00A0'}порту, во${'\u00A0'}время длительных и${'\u00A0'}краткосрочных путешествий, по${'\u00A0'}прибытию на${'\u00A0'}верфь, и${'\u00A0'}убедимся в${'\u00A0'}том, что действия экипажа грамотны и${'\u00A0'}осторожны.`,
              `Имея в${'\u00A0'}команде лучших специалистов в${'\u00A0'}области международного морского права, мы${'\u00A0'}полностью оградим вас от${'\u00A0'}ненужного стресса, а${'\u00A0'}в${'\u00A0'}случае спорных ситуации, станем лучшими посредниками и${'\u00A0'}подберем правильные слова и${'\u00A0'}статьи закона.`,
              `Arcon Yachts также займется поиском лучшего страхового полиса для вашей яхты и${'\u00A0'}ежегодно будет находить для вас наиболее выгодный страховой продукт.`,
            ],
          ],
        },
      }
    : {
        meta: {
          title:
            'Get legal advice - Arcon Yachts',
          description:
            'When buying, selling and building a yacht, comprehensive advice from a knowledgable maritime lawyer is priceless.',
        },
        pageLabel: 'Service',
        pageTitle: 'Get legal advice',
        image: {
          src: '/img/transportation/banner@1x.jpg',
          srcSet: '/img/transportation/banner@2x.jpg',
          alt: 'banner',
        },
        info: {
          intro: `When buying, selling and building a yacht, comprehensive advice from a knowledgable maritime lawyer is priceless. Further operations may also require legal services, as constant changes lay at the heart of the superyacht industry. The team of Arcon Yachts will ensure all the agreements are signed with your interests in mind and full compliance with international maritime law.`,
          text: [
            [
              `Arcon Yachts legal service will be complete. Everything concerning your yacht is according to construction standards of classification societies and flag state requirements.`,
              `We will prepare your crew for any situation, teach them their rights and obligations and show them how to avoid disputes while cruising, mooring, or during winter works at the shipyard. `,
              `We will facilitate your yacht ownership in all respects and time zones and ensure your peace of mind. As well as support you and find the best legal solutions in disputes that have already arisen.`,
              `Arcon Yachts will also provide you with the best insurance solution for your vessel and negotiate a better product every year.`,
            ],
          ],
        },
      }
