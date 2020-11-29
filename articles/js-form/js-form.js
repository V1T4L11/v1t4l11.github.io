const usernameEl = document.querySelector('#username');
const emailEl = document.querySelector('#email');
const userphoneEl = document.querySelector('#phone');

const form = document.querySelector('#signup');

form.addEventListener('submit', function (e) {
  e.preventDefault();
});

const isRequired = value => value === '' ? false : true;

const isBetween = (length, min, max) => length < min || length > max ? false : true;

const isEmailValid = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(email);
};

const isPhoneValid = (phone) => {
  const re = /^(\+|00)\d{3}\d{2}\d{3}\d{2}\d{2}$/;

  return re.test(phone);
};



const showError = (input, message) => {
  const formField = input.parentElement;

  formField.classList.remove('success');
  formField.classList.add('error');

  const error = formField.querySelector('small');
  error.textContent = message;
}

const showSuccess = (input) => {
  const formField = input.parentElement;

  formField.classList.remove('error');
  formField.classList.add('success');

  const error = formField.querySelector('small');
  error.textContent = '';
}

const checkUsername = () => {

  let valid = false;
  const min = 3,
      max = 25;
  const username = usernameEl.value.trim();

  if (!isRequired(username)) {
    showError(usernameEl, 'Username cannot be blank.');
  } else if (!isBetween(username.length, min, max)) {
    showError(usernameEl, `Username must be between ${min} and ${max} characters.`)
  } else {
    showSuccess(usernameEl);
    valid = true;
  }
  console.log(valid);
  return valid;
}

const checkEmail = () => {
  let valid = false;
  const email = emailEl.value.trim();

  if (!isRequired(email)) {
    showError(emailEl, 'Email cannot be blank.');
  } else if (!isEmailValid(email)) {
    showError(emailEl, 'Email is not valid.')
  } else {
    showSuccess(emailEl);
    valid = true;
  }
  return valid;
}

const checkPhone = () => {
  let valid = false;
  const phone = userphoneEl.value.trim();

//   phone.onclick = function() {
//     phone.value = "+";
//   }

// var old = 0;

// phone.onkeydown = function() {
//     var curLen = phone.value.length;
    
//     if (curLen < old){
//       old--;
//       return;
//       }
    
//     if (curLen == 2) 
//     	phone.value = phone.value + "(";
      
//     if (curLen == 6)
//     	phone.value = phone.value + ")-";
      
//      if (curLen == 11)
//     	phone.value = phone.value + "-"; 
      
//      if (curLen == 14)
//     	phone.value = phone.value + "-";  
      
//      if (curLen > 16)
//     	phone.value = phone.value.substring(0, phone.value.length - 1);
      
//      old++;
// }

  if (!isRequired(phone)) {
    showError(userphoneEl, 'Phone number cannot be blank.');
  } else if (!isPhoneValid(phone)) {
    showError(userphoneEl, 'Phone number is not valid.')
  } else {
    showSuccess(userphoneEl);
    valid = true;
  }
  return valid;
}


form.addEventListener('input', function (e) {
  switch (e.target.id) {
    case 'username':
      checkUsername();
      break;
    case 'email':
      checkEmail();
      break;
    case 'phone':
      checkPhone();
      break;
  }
});