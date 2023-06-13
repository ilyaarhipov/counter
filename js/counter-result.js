import { getNumberCalories } from './calculation.js';

// Получаем блок с информацией о калориях
const counterResult = document.querySelector('.counter__result');
const caloriesNorm = counterResult.querySelector('#calories-norm');
const caloriesMinimal = counterResult.querySelector('#calories-minimal');
const caloriesMaximal = counterResult.querySelector('#calories-maximal');

// Функция для обновления расчетов и отображения блока с информацией о калориях
const updateCalculation = () => {
  // Обновляем расчеты
  const calories = getNumberCalories();
  caloriesNorm.textContent = parseInt(calories, 10);
  caloriesMinimal.textContent = parseInt((calories - (calories * 0.15)), 10);
  caloriesMaximal.textContent = parseInt((calories + (calories * 0.15)), 10);

  // Отображаем блок с информацией о калориях
  counterResult.classList.remove('counter__result--hidden');
};

export {updateCalculation};
