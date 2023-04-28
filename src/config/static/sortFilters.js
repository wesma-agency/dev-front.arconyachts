export const sortsStatic = (isRussian) =>
  isRussian
    ? {
        currencies: [
          { title: '€', type: 'EUR', mobileTitle: '€ Евро' },
          { title: '$', type: 'USD', mobileTitle: '$ Доллар США' },
          { title: '£', type: 'GBP', mobileTitle: '£ Британский фунт' },
          { title: '₽', type: 'RUB', mobileTitle: '₽ Российский рубль' },
        ],
        sorts: [
          {
            title: 'популярное',
            value: [
              { slug: 'popular-desc', mobileTitle: 'Популярное' },
              // { slug: 'popular-asc', mobileTitle: 'Популярное' },
            ],
          },
          {
            title: 'по цене',
            value: [
              { slug: 'price-asc', mobileTitle: 'По цене (дешевые — дорогие)' },
              {
                slug: 'price-desc',
                mobileTitle: 'По цене (дорогие — дешевые)',
              },
            ],
          },
          {
            title: 'по длине',
            value: [
              {
                slug: 'length-asc',
                mobileTitle: 'По длине (короткие — длинные)',
              },
              {
                slug: 'length-desc',
                mobileTitle: 'По длине (длинные — короткие)',
              },
            ],
          },
          {
            title: 'по состоянию',
            value: [
              {
                slug: 'condition-asc',
                mobileTitle: 'По состоянию (б/у — новые)',
              },
              {
                slug: 'condition-desc',
                mobileTitle: 'По состоянию (новые — б/у)',
              },
            ],
          },
        ],
        projectSorts: [
          {
            title: 'популярное',
            value: [
              { slug: 'popular-desc', mobileTitle: 'Популярное' },
              // { slug: 'popular-asc', mobileTitle: 'Популярное' },
            ],
          },
          {
            title: 'по длине',
            value: [
              {
                slug: 'length-asc',
                mobileTitle: 'По длине (короткие — длинные)',
              },
              {
                slug: 'length-desc',
                mobileTitle: 'По длине (длинные — короткие)',
              },
            ],
          },
        ],

        sortStatic: {
          mobileDefault: 'Сортировка - не выбрано',
        },
      }
    : {
        currencies: [
          { title: '€', type: 'EUR', mobileTitle: '€ Euro' },
          { title: '$', type: 'USD', mobileTitle: '$ Dollar USD' },
          { title: '£', type: 'GBP', mobileTitle: '£ Pound' },
          { title: '₽', type: 'RUB', mobileTitle: '₽ Ruble' },
        ],
        sorts: [
          {
            title: 'popular',
            value: [
              { slug: 'popular-desc', mobileTitle: 'Popular' },
              // { slug: 'popular-asc', mobileTitle: 'Популярное' },
            ],
          },
          {
            title: 'by price',
            value: [
              {
                slug: 'price-asc',
                mobileTitle: 'By price (cheap — expensive)',
              },
              {
                slug: 'price-desc',
                mobileTitle: 'By price (expensive — cheap)',
              },
            ],
          },
          {
            title: 'by length',
            value: [
              {
                slug: 'length-asc',
                mobileTitle: 'By length (short — long)',
              },
              {
                slug: 'length-desc',
                mobileTitle: 'By length (long — short)',
              },
            ],
          },
          {
            title: 'by condition',
            value: [
              {
                slug: 'condition-asc',
                mobileTitle: 'By condition (past-usage — new)',
              },
              {
                slug: 'condition-desc',
                mobileTitle: 'By condition (new — past-usage)',
              },
            ],
          },
        ],
        projectSorts: [
          {
            title: 'popular',
            value: [
              { slug: 'popular-desc', mobileTitle: 'Popular' },
              // { slug: 'popular-asc', mobileTitle: 'Популярное' },
            ],
          },

          {
            title: 'by length',
            value: [
              {
                slug: 'length-asc',
                mobileTitle: 'By length (short — long)',
              },
              {
                slug: 'length-desc',
                mobileTitle: 'By length (long — short)',
              },
            ],
          },
        ],

        sortStatic: {
          mobileDefault: 'Sort - not chosen',
        },
      }
