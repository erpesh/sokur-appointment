console.log('Loaded EN');

export default {
  logIn: "Log in",
  register: "Register",
  password: "Password",
  confirmPassword: "Confirm password",
  bookLessonFirst: 'Book',
  bookLessonSecond: 'a lesson',
  submit: "submit",
  time: "time",
  studentName: "Student name",
  telNumber: "Telephone number",
  update: "Update",
  deleteAccount: "Delete account",
  cancelChanges: "Cancel changes",
  fullName: "Full Name",
  lessonDuration: "Lesson Duration",
  lessonPrice: "Lesson Price",
  '30 min': "30 min",
  '1 hour': "1 hour",
  '2 hours': "2 hours",
  'Monday': "Monday",
  'Tuesday': "Tuesday",
  'Wednesday': "Wednesday",
  'Thursday': "Thursday",
  'Friday': "Friday",
  'Saturday': "Saturday",
  'Sunday': "Sunday",
  'online': "Online",
  'on-site': "On-site",
  'both': "Both",
  appointments: "Appointments",
  settings: "Settings",

  // warnings and messages
  timeShouldFormat: 'Time should be in "14:30"-like format',
  theTimeActive: "This time is already active",
  passwordNotValid: "Password is not valid",
  enterPassword: "Enter password.",
  enterEmail: "Enter email.",
  emailNotValid: "Email is not valid",
  acceptPrivacyPolicy: "Accept Privacy Policy to proceed",
  emailInUse: "This email is already in use",
  passwordWeak: "Your password is weak",
  smthWentWrong: "Something went wrong, try again",
  passwordsDontMatch: "Passwords don't match",

  'scope.book.bookLessonTitle': 'Book a lesson with {teacherName}',
  'scope.book.studentAge': "Student age",
  'scope.book.chooseDateOfLesson': "Choose date of the lesson",
  'scope.book.chooseTimeOfLesson': "Choose time of the lesson",
  'scope.book.payOnline': "Pay online",
  'scope.book.onlyOnSite': "{teacherName} accepts only on-site payments",
  'scope.book.onlyOnline': "{teacherName} accepts only online payments",

  'scope.appointments.lessonStatus': "Lesson status",
  'scope.appointments.dateOrder': "Date order",
  'scope.appointments.Upcoming': "Upcoming",
  'scope.appointments.Held': "Held",
  'scope.appointments.All': "All",
  'scope.appointments.Most recent': "Most recent",
  'scope.appointments.Least recent': "Least recent",
  'scope.appointments.age': "Age",
  'scope.appointments.paid': "Paid",
  'scope.appointments.price': "Price",
  'scope.appointments.noResults': "No search results",

  'scope.settings.Account': "Account",
  'scope.settings.Lessons': "Lessons",
  'scope.settings.lessonSettings': "Lesson settings",
  'scope.settings.addNewTime': "Add new time",
  'scope.settings.addLessonTimes': "Add lesson times",
  'scope.settings.paymentMethods': "Payment methods",
  'scope.settings.paymentMethod': "Payment method",
  'scope.settings.connectPayments': "Connect online payments",
  'scope.settings.cardConnected': "Card connected",
  'scope.settings.submitBeforeConnecting': "Please submit or cancel any changes made to your profile before proceeding with online payments.",
  'scope.settings.daysOfLessons': "Days of lessons",
  'scope.settings.lessonTimes': "Lesson times",
  'scope.settings.language': "Language",
  'scope.settings.deleteAccConfirm': "Are you sure you want to delete your account?",

  'scope.auth.forename': "Forename",
  'scope.auth.lastName': "Last name",
  'scope.auth.registerWith': "Register with {provider}",
  'scope.auth.loginWith': "Log in with {provider}",
  'scope.auth.registerHere': "Register here",
  'scope.auth.loginHere': "Log in here",
  'scope.auth.alreadyHaveAcc': "Already have an account?",
  'scope.auth.dontHaveAcc': "Don't have an account?",
  'scope.auth.currentPassword': "Current password",
  'scope.auth.newPassword': "New password",
  'scope.auth.privacyPolicy1': "I have read and agree to the ",
  'scope.auth.privacyPolicy2': "Privacy Policy",
  'scope.auth.signInAsTeacher': "Do you want to register as a teacher?",

  'scope.email.lessonBooking': "Lesson booking",
  'scope.email.teacherBookingHtml': '<p>{studentName} booked a lesson with you on {lessonDate} at {lessonTime}.</p>\n<p>Best regards</p>',
  'scope.email.userBookingConfirmationHtml': '<p>Thank you for booking a lesson with {teacherName} on {lessonDate} at {lessonTime}. Your booking has been confirmed, and we look forward to seeing you at the lesson.</p>\n  <p>If you have any questions or need to reschedule, please let us know as soon as possible.</p>\n  <p>Best regards</p>',
} as const;