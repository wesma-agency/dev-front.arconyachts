const buildingRu = {
  title: 'Строительство яхт',
  intro:
    'Специалисты Arcon Yachts сопроводят строительство яхты вашей мечты и позаботятся о том, чтобы это удивительное приключение приносило вам удовольствие, а ситуация никогда не выходила из под контроля.',
  params: [
    {
      title: 'Партнеры',
      value: '5 верфей',
    },
    {
      title: 'Построено',
      value: '70 яхт',
    },
    {
      title: 'Год основания',
      value: '1999',
    },
  ],
  buttonTitle: 'Подробнее о строительстве',
  services: [
    {
      title: 'Разработка',
      src: '/img/build/features/ship.svg',
      text:
        'Разработку проекта стальной, алюминиевой или стеклопластиковой яхты совместно со специалистами верфи;',
    },
    {
      title: 'Документооборот',
      src: '/img/build/features/docks.svg',
      text:
        'Заключение договоров с подрядчиками – инженерами, дизайнерами, различными техническими специалистами;',
    },
    {
      title: 'Курирование',
      src: '/img/build/features/team.svg',
      text:
        'Поиск поставщиков оборудования, предметов интерьера, судового инвентаря, аксессуаров и прочих необходимых товаров;',
    },
    // {
    //   title: 'Разработка',
    //   src: '/img/build/features/conversation.svg',
    //   text:
    //     'Разработку проекта стальной, алюминиевой или стеклопластиковой яхты совместно со специалистами верфи;',
    // },
    // {
    //   title: 'Документооборот',
    //   src: '/img/build/features/risk.svg',
    //   text:
    //     'Заключение договоров с подрядчиками – инженерами, дизайнерами, различными техническими специалистами;',
    // },
    // {
    //   title: 'Курирование',
    //   src: '/img/build/features/plan.svg',
    //   text:
    //     'Поиск поставщиков оборудования, предметов интерьера, судового инвентаря, аксессуаров и прочих необходимых товаров;',
    // },
  ],
}
const buildingEn = {
  title: 'New build',
  intro:
    "Arcon Yachts' team will guide you throughout the complex build process in a seamless way and ensure your enjoyment and control of the situation",
  params: [
    {
      title: 'Partners',
      value: '5 shipyards',
    },
    {
      title: 'Built',
      value: '70 yachts',
    },
    {
      title: 'Foundation Date',
      value: '1999',
    },
  ],
  buttonTitle: 'More info',
  services: [
    {
      title: 'Project development',
      src: '/img/build/features/ship.svg',
      text:
        'Thorough planning of a new-build project with any type of hull, superstructure and technical specs, working closely with the yard-based specialists to build a yacht that aligns with your vision and your budget',
    },
    {
      title: 'Legal management',
      src: '/img/build/features/docks.svg',
      text:
        'Finalising the contracts, reviewing all the documents and making sure every word of it is based on your requirements',
    },
    {
      title: 'Project management',
      src: '/img/build/features/team.svg',
      text:
        'Finding the most suitable suppliers and contractors for your project',
    },
    // {
    //   title: 'Project development',
    //   src: '/img/build/features/conversation.svg',
    //   text:
    //     'Thorough planning of a new-build project with any type of hull, superstructure and technical specs, working closely with the yard-based specialists to build a yacht that aligns with your vision and your budget',
    // },
    // {
    //   title: 'Legal management',
    //   src: '/img/build/features/risk.svg',
    //   text:
    //     'Finalising the contracts, reviewing all the documents and making sure every word of it is based on your requirements',
    // },
    // {
    //   title: 'Project management',
    //   src: '/img/build/features/plan.svg',
    //   text:
    //     'Finding the most suitable suppliers and contractors for your project',
    // },
  ],
}

export const homeStatic = (isRussian) =>
  isRussian
    ? {
        meta: {
          title:
            'Моторные яхты, мегаяхты: стальные и алюминиевые — Arcon Yachts',
          description:
            'Стальные и алюминиевые моторные яхты и мегаяхты на продажу, в аренду, строительство яхт, управление. Широкий спектр услуг в сфере яхтенной индустрии',
        },
        infoTitle: 'стальные, пластиковые и алюминиевые яхты от Arcon Yachts ',
        infoContent: [
          'Компания Arcon Yachts предоставляет своим клиентам широкий спектр услуг в сфере яхтенной индустрии. Мы специализируемся на продаже, покупке, аренде, строительстве и управлении яхт. Специалисты Arcon Yachts оказывают клиентам полный перечень яхтенных услуг в рамках одной компании, имеющей представительства в России, Украине, Казахстане, Черногории и Монако.',
          'Вы можете выбрать стальные яхты из Голландии и других стран мира от ведущих судостроительных компаний, в том числе Amels, Feadship, Moonen, Lurssen, Palmer Johnson, Wim van der Walk, Heesen, Benetti и др. Мы предоставляем возможность построить с нашей помощью моторные яхты по индивидуальным проектам. Суда с металлическими корпусами отличаются высокой надежностью и долговечностью. Для их производства используются сталь и алюминий – это премиум яхты от лучших верфей мира. Чтобы сделать оптимальный выбор,  ознакомьтесь с особенностями материалов.',
        ],
        label: 'Arcon Yachts',
        title: 'Продажа, аренда и строительство яхт',
        rent: 'Аренда',
        sale: 'Продажа',
        more: 'Подробнее о яхте',
        form: {
          title: 'нужна помощь в выборе яхты?',
          subtitle:
            'Оставьте заявку, и мы расскажем вам о яхтах, которые сегодня можно купить, построить или взять в аренду',
          submitText: 'Подобрать яхту',
        },
        catalog: {
          title: 'Каталог яхт',
          sale: 'Продажа',
          saleDescription:
            'В нашем каталоге вы можете найти выставленную на продажу яхту Tatiana с корпусом длиной 25,97 м. В ее 4 каютах с комфортом разместятся 11 гостей. Эксперты Arcon Yachts расскажут вам подробнее о Tatiana и яхтах, похожих на нее.',
          charter: 'Аренда/Чартер',
          charterDescription:
            'В нашем каталоге доступных в аренду яхт вы можете найти яхту Ionian Princess с корпусом длиной 45 м. В ее 6 каютах с комфортом разместятся 12 гостей. Эксперты Arcon Yachts расскажут вам подробнее о Ionian Princess и похожих чартерных судах.',
          buttonText: 'Посмотреть все',
        },

        building: buildingRu,
        service: {
          title: 'Полный комплекс яхтенных услуг',
          description: [
            'В процессе покупки или строительства вашей новой яхты эксперты Arcon Yachts будут рядом  в самые ответственные моменты и позаботятся о том, чтобы строгий контроль качества услуг осуществлялся на каждом этапе.',
          ],
        },
        news: { button: 'Посмотреть все новости', title: 'Новости' },
        epilogue: `<p>
        У нас вы сможете купить новые элитные яхты и подержанные суда,
        которые находятся в России, Казахстане, Украине и европейских
        странах. Наши специалисты выполнят всю сложную ответственную работу
        и оставят вам только приятные хлопоты.
        </p>
        <p>
        Узнать цены на яхты и получить о них основную информацию Вы можете в
        нашем каталоге. В нем размещены фото и видео материалы, спецификации
        и планы палуб. Можно сравнить предлагаемые модели и купить яхту,
        которая идеально соответствует вашим требованиям. Чтобы быстро найти
        подходящие предложения, воспользуйтесь фильтром, где в качестве
        критериев поиска можно указать стоимость яхты, производителя, длину
        и прочие характеристики. Подробную информацию Вы можете запросить у
        наших консультантов. Консультанты расскажут о любых интересующих вас
        моделях, а также как и где купить яхту. Заявки на приобретение
        оформляются по телефону и в он-лайн режиме.
        </p>`,
      }
    : {
        meta: {
          title: 'Motor yachts: super and megayachts - Arcon Yachts',
          description:
            'Motor yachts and megayachts for sale, superyachts for rent, construction of large yachts, management. A wide range of services in the yachting industry.',
        },
        infoTitle:
          'Steel, fibreglass and aluminium yachts available with Arcon Yachts ',
        infoContent: [
          'Arcon Yachts is with you every step of the way as you purchase, build and manage the yacht of your dreams. Arcon’s offices are in the key locations (Russia, Ukraine, Kazakhstan, Montenegro and Monaco). The team of experts is one phone call away from you.',
          'Arcon Yachts offers a large fleet of Dutch steel motor yachts for sale and uses its expertise to build all kinds of steel motor yachts on Italian and Northern European yards: Feadship, Moonen, Lurssen, Palmer Johnson, Wim van der Walk, Heesen, and Benetti. With Arcon, you can build a new steel motor yacht of any size and level of customization. Motor yachts in steel and aluminium are highly seaworthy and reliable. Most of luxurious and innovative yachts of today have metal hulls and superstructures. The best way to choose a premium vessel is by exploring the details of yacht-building process.',
        ],
        label: 'Arcon Yachts ',
        title: 'YACHTS for sale, charter and under construction',
        rent: 'Charter ',
        sale: 'Sale ',
        more: 'More info ',

        form: {
          title: `Next yacht to${'\u00A0'}own, build or${'\u00A0'}charter?`,
          subtitle: `Send an${'\u00A0'}enquiry, and we’ll tell you about yachts that are available for sale, charter and under construction.`,
          submitText: 'Enquire',
        },
        catalog: {
          title: 'All yachts',
          sale: 'Yachts for sale',
          saleDescription:
            'Tatiana is a motor yacht listed for sale with a length of 25.97 m. 11 guests are accommodated in her 4 cabins. Contact Arcon Yachts experts to grasp the unique features of Tatiana and to view similar vessels for sale.',
          charter: 'Yachts for charter',
          charterDescription:
            'Ionian Princess is a motor yacht available for charter with a length of 45.00 m. 12 guests are accommodated in her 6 cabins. Contact Arcon Yachts experts to grasp the unique features of Ionian Princess and view similar vessels for charter.',
          buttonText: 'See more',
        },
        building: buildingEn,
        service: {
          title: 'Tailored yacht management services',
          description: [
            'Arcon Yachts’ team of experts will monitor the process and cover all the aspects of your yacht build and sale. They will make sure your interests are secure and your specifications are followed.',
          ],
        },
        news: {
          button: 'More news',
          title: 'News ',
        },
        epilogue: `<p>
        Among the yachts listed for sale with Arcon Yachts, you will find recently built vessels from the leading shipyards, as well as brokerage yachts moored in Russia, Kazakhstan, Ukraine, and European marinas. Arcon Yachts’ team of experts will ensure your enjoyment of the sale and the smoothness of the process.
        </p>
        <p>
        Go to the yacht directory to get more information on the yachts listed for sale with Arcon Yachts. There you’ll find the photos, videos, technical specs and GAs. You have an option to compare vessels and find out which one is best suited for your requirements. Filter the results of your yacht search by defining the price range, shipbuilder, delivery date, hull length etc. Arcon Yachts team of experts is one phone call away from you and eager to source, support and assist you in every step of the process. You can also reach the Arcon Yachts team online.
        </p>`,
      }
