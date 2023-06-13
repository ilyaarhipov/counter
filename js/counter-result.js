// Получаем блок с информацией о калориях
const counterResult = document.querySelector('.counter__result');

// Функция для обновления расчетов и отображения блока с информацией о калориях
const updateCalculation = () => {
  // Обновляем расчеты
  // ...

  // Отображаем блок с информацией о калориях
  counterResult.classList.remove('counter__result--hidden');
};

export {updateCalculation};
