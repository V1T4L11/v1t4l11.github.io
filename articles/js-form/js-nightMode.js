// const select = document.querySelector('select');
const html = document.querySelector('.main');
const getCheckbox = document.getElementById('checkNightMode');
const setText = document.querySelector('.night-mode__text-set');

getCheckbox.onclick = function() {
  let choice = getCheckbox.checked;
  let bgColor;
  let textColor;
  let textContentMode;

  switch (choice) {
    case false:
      bgColor = '#fff';
      textColor = '#000000';
      textContentMode = 'OFF';
      break;
    case true:
      bgColor = '#000000';
      textColor = '#fff';
      textContentMode = 'ON';
      break;
    default:
      break;
  }
  update(bgColor, textColor, textContentMode);
}

function update(bgColor, textColor, textContentMode) {
    html.style.backgroundColor = bgColor;
    html.style.color = textColor;
    setText.textContent = textContentMode;
}