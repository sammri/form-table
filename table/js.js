
function saveData() {
  for (let i = 1; i <= 20; i++) {
    for (let j = 1; j <= 8; j++) {
      let cellId = cell-${i}-${j};
      let cellValue = document.getElementById(cellId).value;
      localStorage.setItem(cellId, cellValue);
    }
  }
}

function loadData() {
  for (let i = 1; i <= 20; i++) {
    for (let j = 1; j <= 8; j++) {
      let cellId = cell-${i}-${j};
      let savedValue = localStorage.getItem(cellId);
      if (savedValue) {
        document.getElementById(cellId).value = savedValue;
      }
    }
  }
}

document.addEventListener("DOMContentLoaded", function() {
  loadData();
});

let saveButton = document.getElementById("save-button");
saveButton.addEventListener("click", saveData);

let table = document.getElementById("data-table");
table.addEventListener("input", function(event) {
  let cellId = event.target.id;
  let cellValue = event.target.value;
  localStorage.setItem(cellId, cellValue);
});


// JavaScript-сохранение данных
const inputs = document.querySelectorAll('.table-input');

// При загрузке страницы заполняем поля ввода сохраненными значениями
inputs.forEach(input => {
  const key = input.dataset.key;
  const value = localStorage.getItem(key);
  if (value) {
    input.value = value;
  }
});

// Добавляем обработчик события input для каждого поля ввода
inputs.forEach(input => {
  input.addEventListener('input', event => {
    const key = event.target.dataset.key;
    const value = event.target.value;
    localStorage.setItem(key, value);
  });
});

