import { pristine } from './validate-form.js';

// Получаем все поля ввода и кнопку "Рассчитать"
const form = document.querySelector('.counter__form');
const inputFields = form.querySelectorAll('input');
const calculateButton = form.querySelector('.form__submit-button');

// Получаем блок с информацией о калориях
const counterResult = document.querySelector('.counter__result');

// Функция для обновления расчетов и отображения блока с информацией о калориях
function updateCalculation() {
  // Обновляем расчеты
  // ...

  // Отображаем блок с информацией о калориях
  counterResult.classList.remove('counter__result--hidden');
}

// Обработчик события ввода в полях ввода
inputFields.forEach((input) => {
  input.addEventListener('input', () => {
    if (pristine.validate(inputFields)) {
      calculateButton.removeAttribute('disabled');
    } else {
      calculateButton.setAttribute('disabled', true);
    }
  });
});

// Обработчик события отправки формы
form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (pristine.validate(inputFields)) {
    updateCalculation();
  }
});
