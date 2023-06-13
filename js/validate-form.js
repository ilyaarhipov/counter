import { updateCalculation } from './counter-result.js';
import { updateResetButtonState } from './reset-form.js';

const RE_AGE = /^(?:1(?:00?|\d)|[2-5]\d|[6-9]\d?)$/; // Регулярное выражение для проверки возраста
const RE_HEIGHT_WEIGHT = /^\d{2,3}$/; // Регулярное выражение для проверки роста и веса

const counterForm = document.querySelector('.counter__form');
const inputFields = counterForm.querySelectorAll('input');
const calculateButton = counterForm.querySelector('.form__submit-button');
const age = counterForm.querySelector('#age');
const height = counterForm.querySelector('#height');
const weight = counterForm.querySelector('#weight');

// Создаем экземпляр Pristine для валидации формы
const pristine = new Pristine(counterForm, {
  classTo: 'input__wrapper',
  errorClass: 'input__wrapper--invalid',
  successClass: 'input__wrapper--valid',
  errorTextParent: 'input__wrapper',
  errorTextTag: 'p',
  errorTextClass: 'input__error-text'
});

const validateAge = (value) => {
  if (value === '') {
    return true;
  }
  if (!RE_AGE.test(value)) {
    return false;
  }
  return true;
};

pristine.addValidator(age, validateAge, 'Неверно указан возраст');

const validateHeightAndWeight = (value) => {
  if (value === '') {
    return true;
  }
  if (!RE_HEIGHT_WEIGHT.test(value)) {
    return false;
  }
  return true;
};

pristine.addValidator(height, validateHeightAndWeight, 'Неверно указан рост');

pristine.addValidator(weight, validateHeightAndWeight, 'Неверно указан вес');

// Обработчик события ввода в полях ввода
const handleInputAndSubmit = () => {
  inputFields.forEach((input) => {
    input.addEventListener('input', () => {
      updateResetButtonState();
      if (pristine.validate(inputFields)) {
        calculateButton.removeAttribute('disabled');
        // Обработчик события отправки формы
        counterForm.addEventListener('submit', (evt) => {
          evt.preventDefault();
          if (pristine.validate(inputFields)) {
            updateCalculation();
          }
        });
      } else {
        calculateButton.setAttribute('disabled', true);
      }
    });
  });
};

export {handleInputAndSubmit};
