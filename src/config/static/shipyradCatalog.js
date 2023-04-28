export const shipyardCatalogStatic = (isRussian) =>
  isRussian
    ? {
        meta: {
          title: 'Верфи яхт. Выбор завода яхт - Arcon Yachts',
          description:
            'Мировые верфи яхт в каталоге. Наша компания поможет и проконсультирует с выбором судостроительных заводов яхт, верфей для покупки, или аренды яхт.',
        },
        notFound:
          'По вашему запросу ничего не найдено, но можете посмотреть другие отличные варианты:',
        filter: {
          country: 'Страны',
          chars: [
            'A',
            'B',
            'C',
            'D',
            'E',
            'F',
            'G',
            'H',
            'I',
            'J',
            'K',
            'L',
            'M',
            'N',
            'O',
            'P',
            'Q',
            'R',
            'S',
            'T',
            'U',
            'V',
            'W',
            'X',
            'Y',
            'Z',
          ],
        },
        epilogue: 'ВЕРФИ ARCON YACHTS',
        epilogueText: `
          <p>У нас вы сможете купить новые элитные яхты и подержанные суда, которые находятся в России, Казахстане, Украине и европейских странах. Наши специалисты выполнят всю сложную ответственную работу и оставят вам только приятные хлопоты.</p>
          <p>Узнать цены на яхты и получить о них основную информацию Вы можете в нашем каталоге. В нем размещены фото и видео материалы, спецификации и планы палуб. Можно сравнить предлагаемые модели и купить яхту, которая идеально соответствует вашим требованиям. Чтобы быстро найти подходящие предложения, воспользуйтесь фильтром, где в качестве критериев поиска можно указать стоимость яхты, производителя, длину и прочие характеристики. Подробную информацию Вы можете запросить у наших консультантов. Консультанты расскажут о любых интересующих вас моделях, а также как и где купить яхту. Заявки на приобретение оформляются по телефону и в он-лайн режиме.</p>
        `,
        form: {
          title: 'Не нашли ничего подходящего?',
          subtitle:
            'Оставьте заявку, и мы сделаем для вас индивидуальную подборку яхт бренда, который вас интересует, а также проведем сравнительный анализ нужных верфей и составим список их конкурентных преимуществ',
          submitText: 'Подобрать яхту',
        },
        pageTitle: 'Верфи',
      }
    : {
        meta: {
          title:
            'Motor yacht companies and luxury manufacturers - Arcon Yachts',
          description:
            'Popular manufacturers of motor yachts. The choice luxury yacht of the best yacht companies.',
        },
        notFound:
          "Sorry, we couldn't find any yacht that matches your criteria, but here are some vessels that might be of interest to you.",
        filter: {
          country: 'Locations',
          chars: [
            'A',
            'B',
            'C',
            'D',
            'E',
            'F',
            'G',
            'H',
            'I',
            'J',
            'K',
            'L',
            'M',
            'N',
            'O',
            'P',
            'Q',
            'R',
            'S',
            'T',
            'U',
            'V',
            'W',
            'X',
            'Y',
            'Z',
          ],
        },
        epilogue: 'ARCON YACHTS SHIPYARDS',
        epilogueText: `
          <p>Luxury yacht manufacturers are spread all over Europe and all over the world. Most of motor yacht manufacturers are based in Europe. Leading super and mega yacht builders are from Northern Europe — Netherlands and Germany. Dutch shipyards specialized in sailing yachts are also the best. Italy has very strong yachtbuilding traditions as well, their yachts of various sizes are truly excellent vessels. Italian shipyards are one of the most successful, they build and sell very well. Great Britain is very good at building luxury motor yachts in GRP with sizes up to 40 m. France for now is less about building super yachts, but stunning sailing yachts and extremely performant multihulls are their success.</p>
          <p>United States have numerous shipyards of their own. Each with great history and unique technologies. But european production is getting more and more popular among american clients. Benetti, Overmarine Group | Mangusta, Wider, Feadship, Luerssen — twice a year they all come to the american boat shows with their newest launches and the most successfull yachts.</p>
          <p>Asian manufacturers have only recently entered the market. Although some strong production has been already organized in Taiwan.</p>
          <p>Australia builds motor yachts rarely but builds very well. Their production is of true luxury. As for New Zealand, it's a unique country with very strong yacht building traditions. They are experts at sailing yachts, brilliant at building motor yachts.</p>
        `,
        form: {
          title: `Does it${'\u00A0'}look like there is${'\u00A0'}nothing suitable?`,
          subtitle: `Leave a${'\u00A0'}request, and we${'\u00A0'}will make a${'\u00A0'}personal selection of${'\u00A0'}yachts from the brands you are particularly interested in${'\u00A0'}and shortlist the yards that match your requirements and personal needs.`,
          submitText: 'Search more yachts',
        },
        pageTitle: 'Shipyards',
      }
