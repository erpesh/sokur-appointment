console.log('Loaded UK');

export default {
  logIn: "Ввійти",
  register: "Зареєструватись",
  password: "Пароль",
  confirmPassword: "Підтвердьте пароль",
  bookLessonFirst: 'Записатися',
  bookLessonSecond: 'на заняття',
  submit: "Підтвердити",
  time: "Час",
  studentName: "Ім'я учня",
  telNumber: "Телефон",
  update: "Оновити",
  deleteAccount: "Видалити акаунт",
  cancelChanges: "Відмінити",
  fullName: "Повне Ім'я",
  lessonDuration: "Тривалість Заняття",
  lessonPrice: "Ціна Заняття",
  '30 min': "30 хв",
  '1 hour': "1 год",
  '2 hours': "2 год",
  'Monday': "Понеділок",
  'Tuesday': "Вівторок",
  'Wednesday': "Середа",
  'Thursday': "Четвер",
  'Friday': "П'ятниця",
  'Saturday': "Субота",
  'Sunday': "Неділя",
  'online': "Онлайн",
  'on-site': "На місці",
  'both': "Обидва",
  appointments: "Заняття",
  settings: "Налаштування",

  // warnings and messages
  timeShouldFormat: 'Час повинен бути у форматі "14:30"',
  theTimeActive: "Цей час уже активний",
  passwordNotValid: "Пароль недійсний",
  enterPassword: "Введіть пароль",
  enterEmail: "Введіть email",
  emailNotValid: "Недійсна адреса електронної пошти",
  acceptPrivacyPolicy: "Прийміть Політику конфіденційності, щоб продовжити",
  emailInUse: "Цей email вже використовується",
  passwordWeak: "Ваш пароль слабкий",
  smthWentWrong: "Щось пішло не так, спробуйте ще раз",
  passwordsDontMatch: "Паролі не співпадають",

  'scope.book.bookLessonTitle': 'Записатися на заняття з {teacherName}',
  'scope.book.studentAge': "Вік учня",
  'scope.book.chooseDateOfLesson': "Виберіть дату заняття",
  'scope.book.chooseTimeOfLesson': "Виберіть час заняття",
  'scope.book.payOnline': "Заплатити онлайн",
  'scope.book.onlyOnSite': "{teacherName} приймає тільки оплату на місці",
  'scope.book.onlyOnline': "{teacherName} приймає тільки онлайн-оплату",

  'scope.appointments.lessonStatus': "Статус заняття",
  'scope.appointments.dateOrder': "Порядок дат",
  'scope.appointments.Upcoming': "Майбутні",
  'scope.appointments.Held': "Минулі",
  'scope.appointments.All': "Всі",
  'scope.appointments.Most recent': "Найраніші",
  'scope.appointments.Least recent': "Найпізніші",
  'scope.appointments.age': "Вік",
  'scope.appointments.paid': "Оплачено",
  'scope.appointments.price': "Ціна",
  'scope.appointments.noResults': "Немає результатів пошуку",

  'scope.settings.Account': "Акаунт",
  'scope.settings.Lessons': "Заняття",
  'scope.settings.lessonSettings': "Налаштування занять",
  'scope.settings.addNewTime': "Додати час",
  'scope.settings.addLessonTimes': "Додати час занять",
  'scope.settings.paymentMethods': "Способи оплати",
  'scope.settings.paymentMethod': "Спосіб оплати",
  'scope.settings.connectPayments': "Підключити онлайн-оплати",
  'scope.settings.cardConnected': "Картка підключена",
  'scope.settings.submitBeforeConnecting': "Будь ласка, збережіть або скасуйте всі зміни, внесені до вашого профілю, перед продовженням онлайн-оплати.",
  'scope.settings.daysOfLessons': "Дні занять",
  'scope.settings.lessonTimes': "Час занять",
  'scope.settings.language': "Мова",
  'scope.settings.deleteAccConfirm': "Ви впевнені, що хочете видалити свій обліковий запис?",

  'scope.auth.forename': "Ім'я",
  'scope.auth.lastName': "Прізвище",
  'scope.auth.registerWith': "Ввійти через {provider}",
  'scope.auth.loginWith': "Ввійти через {provider}",
  'scope.auth.registerHere': "Зареєструйтесь тут",
  'scope.auth.loginHere': "Увійдіть тут",
  'scope.auth.alreadyHaveAcc': "Уже зареєстровані?",
  'scope.auth.dontHaveAcc': "Ще не зареєстровані?",
  'scope.auth.currentPassword': "Поточний пароль",
  'scope.auth.newPassword': "Новий пароль",
  'scope.auth.privacyPolicy1': "Я прочитав(ла) та згоден(на) з ",
  'scope.auth.privacyPolicy2': "Політикою конфіденційності",
  'scope.auth.signInAsTeacher': "Хочете зареєструватися як вчитель?",

  'scope.email.lessonBooking': "Бронирование занятия",
  'scope.email.teacherBookingHtml': '<p>{studentName} забронював(ла) заняття з вами {lessonDate} о {lessonTime}.</p>\n<p>З найкращими побажаннями</p>',
  'scope.email.userBookingConfirmationHtml': '<p>Ваше бронювання підтверджено, дякую за бронювання заняття з {teacherName} {lessonDate} о {lessonTime}.</p>\n  <p>Якщо у вас є якісь питання або ви хочете перенести заняття, дайте нам знати якомога раніше.</p>\n  <p>З найкращими побажаннями</p>',

} as const;
