const TEXT_DISPLAY_VALUE = document.getElementById('text-display-value');
const BUTTON_INCREMENT = document.getElementById('button-increment');
const BUTTON_DECREMENT = document.getElementById(`button-decrement`);
const INPUT_VALUE = document.getElementById(`input-value`);

BUTTON_INCREMENT.addEventListener('click', () => { incrementValue(); });
BUTTON_DECREMENT.addEventListener('click', () => { decrementValue(); });

let value = 0;

function incrementValue(){
  value += parseInt(INPUT_VALUE.value);
  updateValue();
}

function decrementValue(){
  value -= parseInt(INPUT_VALUE.value);
  updateValue();
}

function updateValue(){
  TEXT_DISPLAY_VALUE.innerText = value;
  value < 0 ? TEXT_DISPLAY_VALUE.style.color = 'red' : TEXT_DISPLAY_VALUE.style.color = 'black';
}


