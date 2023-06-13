// Получаем все поля ввода и кнопку "Очистить поля и расчёт"
const counterForm = document.querySelector('.counter__form');
const inputFields = counterForm.querySelectorAll('input');
const resetButton = counterForm.querySelector('.form__reset-button');
const calculateButton = counterForm.querySelector('.form__submit-button');


// Получаем блок с информацией о калориях
const counterResult = document.querySelector('.counter__result');

// Функция для сброса полей и скрытия блока с информацией о калориях
const resetForm = () => {
  // Очищаем числовые поля и устанавливаем плейсхолдеры на 0
  inputFields.forEach((input) => {
    if (input.type === 'text') {
      input.value = '';
      input.placeholder = '0';
    }
  });

  // Сбрасываем пол на мужской
  const genderRadio = counterForm.querySelector('input[name="gender"][value="male"]');
  genderRadio.checked = true;

  // Сбрасываем физическую активность на "минимальная"
  const activityRadio = counterForm.querySelector('input[name="activity"][value="min"]');
  activityRadio.checked = true;

  // Скрываем блок с информацией о калориях
  counterResult.classList.add('counter__result--hidden');

  // Блокируем кнопку Рассчитать
  calculateButton.setAttribute('disabled', true);
};

// Функция для проверки, есть ли заполненные числовые поля
const checkInputFields = () => {
  let hasFilledFields = false;

  inputFields.forEach((input) => {
    if (input.type === 'text' && input.value !== '') {
      hasFilledFields = true;
    }
  });

  return hasFilledFields;
};

// Обновляем состояние кнопки "Очистить поля и расчёт"
const updateResetButtonState = () => {
  if (checkInputFields()) {
    resetButton.disabled = false;
    // Обработчик события клика на кнопке "Очистить поля и расчёт"
    resetButton.addEventListener('click', (event) => {
      event.preventDefault(); // Предотвращаем отправку формы
      resetForm();
    });

  } else {
    resetButton.disabled = true;
  }
};

export {updateResetButtonState};

