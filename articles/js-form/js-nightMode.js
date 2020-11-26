const html = document.querySelector('.body');
const getCheckbox = document.getElementById('checkNightMode');
const setText = document.querySelector('.night-mode__text-set');


function cssVar(name,value){
  if(name[0]!='-') name = '--'+name
  if(value) document.documentElement.style.setProperty(name, value)
  return getComputedStyle(document.documentElement).getPropertyValue(name);
}


getCheckbox.addEventListener('change', e => {

  let choice = e.target.checked;
  let bgColor;
  let textColor;
  let textContentMode;

  if (choice == true) {
    bgColor = cssVar('black-color');
    textColor = cssVar('white-color');
    textContentMode = 'ON';
  } else {
    bgColor = cssVar('white-color');
    textColor = cssVar('black-color');
    textContentMode = 'OFF';
  }

  update(bgColor, textColor, textContentMode);
})


function update(bgColor, textColor, textContentMode) {
    html.style.backgroundColor = bgColor;
    html.style.color = textColor;
    setText.textContent = textContentMode;
}