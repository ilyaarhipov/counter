const RE = /^[0-9]$/; // Регулярное выражение для проверки формата хэштега

const counterForm = document.querySelector('.counter__form');
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

console.log('dsdsdsd');

const validateAge = (value) => {
  if (value === '') {
    return true;
  }
  if (!RE.test(value)) {
    return false;
  }
  return false;
};

pristine.addValidator(age, validateAge, 'Неверно указан возраст');

