export const EventLogService = {
  getEventLogData() {
    return [
      {
        id: '1',
        date: '10.12.2022 10:00:14',
        importance: 'Высокая',
        equipment: 'Вегас',
        message: 'Сервер Вегас недоступен',
        responsible: 'Смирнов В.А.',
        sex: "man",
        isRead: false
      },
      {
        id: '2',
        date: '10.12.2022 10:00:15',
        importance: 'Низкая',
        equipment: 'Коммутатор',
        message: 'Потеряно сетевое соединение',
        responsible: 'Капустин С.С.',
        sex: "man",
        isRead: false
      },
      {
        id: '3',
        date: '10.12.2022 10:00:16',
        importance: 'Низкая',
        equipment: 'Люк',
        message: 'Открыта крышка',
        responsible: 'Ветрова И.С.',
        sex: "woman",
        isRead: false
      },
      {
        id: '4',
        date: '10.12.2022 10:00:17',
        importance: 'Высокая',
        equipment: 'ИБП',
        message: 'Низкий заряд батареи',
        responsible: 'Лавочкин А.В.',
        sex: "man",
        isRead: false
      },
      {
        id: '5',
        date: '10.12.2022 10:00:18',
        importance: 'Критическая',
        equipment: 'Трансформатор',
        message: 'Недостаточное количество масла',
        responsible: 'Олышанская Е. Г.',
        sex: "woman",
        isRead: false
      },
      {
        id: '6',
        date: '11.12.2022 11:00:10',
        importance: 'Средняя',
        equipment: 'Маршрутизатор',
        message: 'Перезагрузка устройства',
        responsible: 'Петров А.Б.',
        sex: "man",
        isRead: false
      },
      {
        id: '7',
        date: '11.12.2022 12:00:11',
        importance: 'Высокая',
        equipment: 'Сервер 1',
        message: 'Сбой при записи данных',
        responsible: 'Сидоров В.В.',
        sex: "man",
        isRead: false
      },
      {
        id: '8',
        date: '12.12.2022 09:30:12',
        importance: 'Низкая',
        equipment: 'Принтер',
        message: 'Замятие бумаги',
        responsible: 'Федорова О.П.',
        sex: "woman",
        isRead: false
      },
      {
        id: '9',
        date: '13.12.2022 08:15:13',
        importance: 'Критическая',
        equipment: 'Кондиционер',
        message: 'Выход из строя компрессора',
        responsible: 'Жуков Ю.Н.',
        sex: "man",
        isRead: false
      },
      {
        id: '10',
        date: '14.12.2022 09:45:14',
        importance: 'Высокая',
        equipment: 'Система видеонаблюдения',
        message: 'Потеря изображения с камер',
        responsible: 'Никитин К.Е.',
        sex: "man",
        isRead: false
      },
      {
        id: '11',
        date: '10.12.2022 10:00:14',
        importance: 'Высокая',
        equipment: 'Вегас',
        message: 'Сервер Вегас недоступен',
        responsible: 'Смирнов В.А.',
        sex: "man",
        isRead: false
      },
      {
        id: '12',
        date: '10.12.2022 10:00:15',
        importance: 'Низкая',
        equipment: 'Коммутатор',
        message: 'Потеряно сетевое соединение',
        responsible: 'Капустин С.С.',
        sex: "man",
        isRead: false
      },
      {
        id: '13',
        date: '10.12.2022 10:00:16',
        importance: 'Низкая',
        equipment: 'Люк',
        message: 'Открыта крышка',
        responsible: 'Ветрова И.С.',
        sex: "woman",
        isRead: false
      },
      {
        id: '14',
        date: '10.12.2022 10:00:17',
        importance: 'Высокая',
        equipment: 'ИБП',
        message: 'Низкий заряд батареи',
        responsible: 'Лавочкин А.В.',
        sex: "man",
        isRead: false
      },
      {
        id: '15',
        date: '10.12.2022 10:00:18',
        importance: 'Критическая',
        equipment: 'Трансформатор',
        message: 'Недостаточное количество масла',
        responsible: 'Олышанская Е. Г.',
        sex: "woman",
        isRead: false
      },
      {
        id: '16',
        date: '10.12.2022 10:00:19',
        importance: 'Критическая',
        equipment: 'ЛВС',
        message: 'Обрыв силового кабеля',
        responsible: 'Ветрова И.С.',
        sex: "woman",
        isRead: false
      },
      {
        id: '17',
        date: '11.12.2022 11:00:10',
        importance: 'Средняя',
        equipment: 'Маршрутизатор',
        message: 'Перезагрузка устройства',
        responsible: 'Петров А.Б.',
        sex: "man",
        isRead: false
      },
      {
        id: '18',
        date: '11.12.2022 12:00:11',
        importance: 'Высокая',
        equipment: 'Сервер 1',
        message: 'Сбой при записи данных',
        responsible: 'Сидоров В.В.',
        sex: "man",
        isRead: false
      },
      {
        id: '19',
        date: '12.12.2022 09:30:12',
        importance: 'Низкая',
        equipment: 'Принтер',
        message: 'Замятие бумаги',
        responsible: 'Федорова О.П.',
        sex: "woman",
        isRead: false
      },
      {
        id: '20',
        date: '13.12.2022 08:15:13',
        importance: 'Критическая',
        equipment: 'Кондиционер',
        message: 'Выход из строя компрессора',
        responsible: 'Жуков Ю.Н.',
        sex: "man",
        isRead: false
      },
    ];
  },

  getEventLog() {
    return Promise.resolve(this.getEventLogData());
  },

};





