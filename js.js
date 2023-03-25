const form = document.querySelector('.box');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const errorMessage = document.querySelector('#error-message');

const users = [
  { name: 'Sanders Chub', password: '09102004' },
  { name: 'Samir Chub', password: '29072007' },
  { name: 'Viktoria Chub', password: '09102004' },
  { name: 'Vlad Chub', password: '13092010' },
];

form.addEventListener('submit', (event) => {
  event.preventDefault(); // отменяем отправку формы по умолчанию

  const enteredName = username.value;
  const enteredPassword = password.value;

  // Проверяем, есть ли введенное имя пользователя и пароль в нашем списке допустимых
  const user = users.find((user) => {
    return user.name === enteredName && user.password === enteredPassword;
  });

  if (user) {
    // Если пользователь найден, переходим на следующую страницу
    window.location.href = 'table/index1.html';
  } else {
    // Если пользователь не найден, показываем сообщение об ошибке
    errorMessage.textContent = 'There was an error in the username or password.';
  }
});