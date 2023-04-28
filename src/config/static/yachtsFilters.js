export const yachtsFiltersStatic = (isRussian) =>
  isRussian
    ? {
        shipyards: { title: 'Верфь', activeTitle: 'Верфи' },
        price: { title: 'Цена', unit: ' €' },
        length: { title: 'Длина', unit: ' м' },
        builtYear: { title: 'Год постройки', unit: 'гг.' },
        material: {
          title: 'Корпус',
          activeTitle: 'Корпуса',
        },
        condition: {
          title: 'Новые и Б/У',
          activeTitle: 'Новые и Б/У',
        },
        speed: { title: 'Скорость', unit: ' узл' },
        cabin: { title: 'Каюты', activeTitle: 'Каюты' },
        guests: { title: 'Гости', activeTitle: 'Гости' },
        type: { title: 'Типы яхт', activeTitle: 'Типы' },
        extra: { title: 'Дополнительно', activeTitle: 'Дополнительно' },
        charterType: [
          { title: 'Недельная аренда', slug: 'week' },
          { title: 'Дневная аренда', slug: 'day' },
        ],
        location: {
          title: 'Локация',
          activeTitle: 'Локации',
          inputActive: 'Введите название места для аренды яхты',
          input: 'Поиск места по названию',
          chooseTabTitle: 'Выбрать регион',
        },
      }
    : {
        shipyards: { title: 'Shipyard', activeTitle: 'Shipyards' },
        price: { title: 'Price', unit: ' €' },
        length: { title: 'Length', unit: ' m' },
        builtYear: { title: 'Built date', unit: 'years' },
        material: {
          title: 'Body',
          activeTitle: 'Bodies',
        },
        condition: {
          title: 'New / Past-Usage',
          activeTitle: 'New / Past-Usage',
        },
        speed: { title: 'Speed', unit: ' knots' },
        cabin: { title: 'Cabins', activeTitle: 'Cabins' },
        guests: { title: 'Guests', activeTitle: 'Guests' },
        type: { title: 'Yacht type', activeTitle: 'Yacht types' },
        extra: { title: 'Extra', activeTitle: 'Extra' },
        charterType: [
          { title: 'Week charter', slug: 'week' },
          { title: 'Daily charter', slug: 'day' },
        ],
        location: {
          title: 'Location',
          activeTitle: 'Locations',
          inputActive: 'Enter the name of the location to rent a yacht',
          input: 'Search site by name',
          chooseTabTitle: 'Choose region',
        },
      }
