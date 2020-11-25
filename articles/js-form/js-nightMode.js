const html = document.querySelector('.body');
const getCheckbox = document.getElementById('checkNightMode');
const setText = document.querySelector('.night-mode__text-set');

getCheckbox.addEventListener('change', e => {

  let choice = e.target.checked;
  let bgColor;
  let textColor;
  let textContentMode;

  if (choice == true) {
    bgColor = '#000000';
    textColor = '#fff';
    textContentMode = 'ON';
  } else {
    bgColor = '#fff';
    textColor = '#000000';
    textContentMode = 'OFF';
  }

  update(bgColor, textColor, textContentMode);
})

function update(bgColor, textColor, textContentMode) {
    html.style.backgroundColor = bgColor;
    html.style.color = textColor;
    setText.textContent = textContentMode;
}