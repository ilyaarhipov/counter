const counterForm = document.querySelector('.counter__form');
const genderRadio = counterForm.querySelector('input[name="gender"][value="male"]');
const age = counterForm.querySelector('#age');
const height = counterForm.querySelector('#height');
const weight = counterForm.querySelector('#weight');
const radioInputs = document.querySelectorAll('input[name="activity"]');

const getActivityCoefficient = () => {
  for (let i = 0; i < radioInputs.length; i++) {
    if (radioInputs[i].checked) {
      const selectedValue = radioInputs[i].value;

      switch (selectedValue) {
        case 'min':
          return 1.2;
        case 'low':
          return 1.375;
        case 'medium':
          return 1.55;
        case 'high':
          return 1.725;
        case 'max':
          return 1.9;
      }
    }
  }
};


const getNumberCalories = () => {
  const caloriesNumberMen = (10 * weight.value) + (6.25 * height.value) - (5 * age.value) + 5;
  const caloriesNumberWomen = (10 * weight.value) + (6.25 * height.value) - (5 * age.value) - 160;

  if (genderRadio.checked) {
    return caloriesNumberMen * getActivityCoefficient();
  }
  return caloriesNumberWomen * getActivityCoefficient();
};

export {getNumberCalories};
