import { differenceInYears } from 'date-fns'
import { getNoun } from 'utils/getNoun'

const yearsCount = differenceInYears(new Date(), new Date(1999, 0, 1))
const years = ['год', 'года', 'лет']
const yearsEn = ['year', 'years']

const staff = [
  {
    src: '/img/about/slide-1@1x.jpg',
    srcSet: '/img/about/slide-1@2x.jpg',
  },
  {
    src: '/img/about/slide-2@1x.jpg',
    srcSet: '/img/about/slide-2@2x.jpg',
  },
  {
    src: '/img/about/slide-3@1x.jpg',
    srcSet: '/img/about/slide-3@2x.jpg',
  },
  {
    src: '/img/about/slide-4@1x.jpg',
    srcSet: '/img/about/slide-4@2x.jpg',
  },
]

export const aboutStatic = (isRussian) =>
  isRussian
    ? {
        meta: {
          title: `Опыт компании${`\n`}более ${yearsCount} ${getNoun(
            yearsCount,
            ...['года', 'лет']
          )} работы - Arcon Yachts`,
          description:
            'Выбирая в качестве партнера компанию Arcon Yachts, вы получаете высококвалифицированную поддержку',
        },
        intro: {
          note: `О компании`,
          title: `Опыт компании${`\n`}более ${yearsCount} ${getNoun(
            yearsCount,
            ...['года', 'лет']
          )} работы`,
          facts: [
            {
              fact: `${yearsCount} ${getNoun(yearsCount, ...years)}`,
              clarification: `на рынке`,
            },
            {
              fact: `200+`,
              clarification: `членов экипажа под управлением`,
            },
            {
              fact: '70+ яхт',
              clarification: `построено и передано заказчикам`,
            },
            {
              noun: ['яхта', 'яхты', 'яхт'],
              clarification: `на продажу и в чартер`,
            },
          ],
          staff,
          description: [
            `За плечами у Arcon Yachts более 20 лет успешной работы с российскими и зарубежными клиентами по всему миру. Эксперты Arcon Yachts хорошо знают тех, для кого строят индивидуальные яхты на ведущих верфях в Италии, Германии и Нидерландах. А также тех, кто считает строительство подобных яхт делом своей жизни. Arcon Yachts разговаривает на одном языке и с теми, и с другими, как результат, строит яхты не похожие ни на одну другую, выходит за рамки даже самых устоявшихся яхтенных платформ и добивается индивидуализации там, где остальные могут согласиться на стандартное дизайн-решение.`,
            `Выбирая в качестве партнера компанию Arcon Yachts, вы получаете высококвалифицированную поддержку при строительстве и покупке вашей новой яхты, а также при продаже яхты, которая вам больше не кажется оптимальным вариантом.`,
            `Arcon Yachts можно доверить менеджмент собственной яхты и подбор чартерного судна. Эксперты компании знают, как находить среди множества яхт, доступных в аренду, те, которые действительно достойны внимания, тем более, что многие из этих яхт они построили сами.`,
          ],
          buttonText: `Скачать презентацию`,
        },

        contactForm: {
          selling: {
            title: `Хотите продать свою яхту?`,
            subtitle: `Оставьте заявку, и мы вместе с вами найдем подходящего покупателя для вашей яхты`,
            submitText: `Оставить заявку`,
          },
          leasing: {
            title: `Хотите опробовать яхту перед покупкой?`,
            subtitle: `Оставьте заявку, и мы постараемся организовать для вас чартер этой или аналогичной яхты`,
            submitText: `Запросить чартер`,
          },
          transportation: {
            title: `Узнать больше о перегонах яхт `,
            subtitle: `Отправьте запрос и мы доставим вашу яхту в нужную локацию, вне зависимости от того, как далеко она сейчас, и где вы хотите ее видеть`,
            submitText: `Оставить заявку`,
          },
          about: {
            title: `Связаться с нами `,
            subtitle: ` Задайте нам вопрос. Мы внимательно относимся к каждому сообщению и с удовольствием познакомимся с вами и найдем решение для вашей задачи, какой бы сложной она ни была`,
            submitText: `Задать вопрос`,
            textarea: `Сообщение`,
          },
          management: {
            title: `Связаться с нами `,
            subtitle: `Возьмем на себя ответственность за все происходящее на борту вашей яхты и убедимся  в том, что вы не тратите время и ресурсы на решение повседневных задач`,
            submitText: `Оставить заявку`,
          },
          support: {
            title: `Связаться с нами `,
            subtitle: `Скоординируем техническое обслуживание вашей яхты, проконтролируем рефит любой сложности, распланируем сюрвеи и инспекции для соответствия классу и флагу`,
            submitText: `Оставить заявку`,
          },
          crewManagement: {
            title: `Связаться с нами `,
            subtitle: `Возьмем на себя организацию рабочих процессов в команде вашей яхты, решим все административные задачи по найму экипажа`,
            submitText: `Оставить заявку`,
          },
          finances: {
            title: `Связаться с нами `,
            subtitle: `Обеспечим соблюдение бюджета и введём стандарты прозрачной финансовой отчетности, окажем поддержку в решении любых финансовых вопросов, связанных с вашей яхтой`,
            submitText: `Оставить заявку`,
          },
          legalServices: {
            title: `Связаться с нами `,
            subtitle: `Убедимся в том, что при покупке, продаже, аренде, обслуживании и эксплуатации вашей яхты договоры заключаются по международным стандартам с учетом ваших интересов`,
            submitText: `Оставить заявку`,
          },
        },

        founders: {
          title: `Основатели Arcon Yachts`,
          description: `Компания и ее основатели завоевали серьезный авторитет в яхтенной индустрии, являясь дилерами и партнерами лидирующих немецких, голландских и итальянских  верфей  постройке и продаже яхт от 30 до 100 метров.`,
        },
        managers: {
          title: `Менеджмент Arcon`,
          description: `Офисы Arcon Yachts расположены в ключевых маринах и городах, а команда экспертов готова вести с вами честный диалог и добиваться для вас лучшего результата. `,
        },
      }
    : {
        meta: {
          title: `The company's experience ${`\n`} more ${yearsCount} ${getNoun(
            yearsCount,
            ...['of the year', 'years old']
          )} work - Arcon Yachts`,
          description:
            'Choosing Arcon Yachts as a partner, you get highly qualified support',
        },
        intro: {
          note: `About`,
          title: `The company's experience ${`\n`} more ${yearsCount} ${getNoun(
            yearsCount,
            ...['of the year', 'years old']
          )} Work `,
          facts: [
            {
              fact: `${yearsCount} ${getNoun(yearsCount, ...yearsEn)}`,
              clarification: `of experience `,
            },
            {
              fact: `200+`,
              clarification: `crew members looked after`,
            },
            {
              fact: '70+ yachts',
              clarification: `yachts built and delivered`,
            },
            {
              noun: ['yacht', 'yachts'],
              clarification: `yachts listed for sale and charter`,
            },
          ],
          staff,
          description: [
            `Arcon Yachts has been fulfilling the dreams of Russian and European clients for more than 20 years. The team knows well the people who create and build individual vessels on the yards in Italy, Germany and the Netherlands. Arcon Yachts speaks their language and, even on semi-custom platforms, manages to avoid standard design solutions and build yachts that stand out from the crowd. `,
            `By choosing Arcon Yachts, you get a team of dedicated experts experienced in buying, selling or building yachts.`,
            `You can entrust Arcon Yachts with the management of your vessel, and with the yacht charter for your time away. You’ll be choosing among some advanced vessels. And an unforgettable charter experience is guaranteed.`,
          ],
          buttonText: `Download Presentation `,
        },

        contactForm: {
          selling: {
            title: `Are you selling your yacht?`,
            subtitle: `Leave a request, and we will advise you on the best price for your yacht, market the vessel properly, and achieve a successful sale.`,
            submitText: `Enquire`,
          },
          leasing: {
            title: `Would you love to charter the yacht before buying it?`,
            subtitle: `Enquire a charter, and we’ll do our best to make a deal with the current yacht owner.`,
            submitText: `Enquire a charter`,
          },
          transportation: {
            title: `Have your yacht transported to any location`,
            subtitle: `Leave a request, and we’ll have your yacht transported safely to the location of your choice, no matter how far she moored and what’s the destination.`,
            submitText: `Enquire transportation`,
          },
          about: {
            title: `Interact with${'\u00A0'}us`,
            subtitle: `Get personalised advice. We${'\u00A0'}would be${'\u00A0'}glad to${'\u00A0'}know you and to${'\u00A0'}find the best solution for you.`,
            submitText: `Contact the${'\u00A0'}team`,
            textarea: `Message`,
          },
          management: {
            title: `Are you looking for a professional manager for your yacht? `,
            subtitle: `Leave a request, and Arcon Yacht yacht manager will provide you with a suitable range of yacht management operations and assist you in every aspect`,
            submitText: `Enquire`,
          },
          support: {
            title: `Interact with us`,
            subtitle: `Get personalised advice. We would be glad to know you and to find the best solution for you.`,
            submitText: `Enquire`,
          },
          crewManagement: {
            title: `Interact with us`,
            subtitle: `Get personalised advice. We would be glad to know you and to find the best solution for you.`,
            submitText: `Enquire`,
          },
          finances: {
            title: `Interact with us`,
            subtitle: `Get personalised advice. We would be glad to know you and to find the best solution for you.`,
            submitText: `Enquire`,
          },
          legalServices: {
            title: `Interact with us`,
            subtitle: `Get personalised advice. We would be glad to know you and to find the best solution for you.`,
            submitText: `Enquire`,
          },
        },

        founders: {
          title: `About Arcon Yachts`,
          description: `The founders of Arcon Yachts have been introducing clients to the best German, Dutch and Italian yachting brands for many years. They are one of the most knowledgeable yacht experts on the market, trusted with building and selling yachts up to 100 m long.`,
        },
        managers: {
          title: `Meet the team of Arcon Yachts`,
          description: `Our offices are in the key locations, our team of highly qualified experts is one phone call away and is ready to travel the world and source the best result for you and your family.`,
        },
      }
