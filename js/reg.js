const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});
iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});

const inputEmail = document.querySelector('input[type="email"]');

inputEmail.addEventListener('input', () => {
  if (inputEmail.value.trim() !== '') {
    inputEmail.classList.add('not-empty');
  } else {
    inputEmail.classList.remove('not-empty');
  }
});

const inputFields = document.querySelectorAll('.input-box input');

inputFields.forEach((input) => {
  input.addEventListener('input', () => {
    if (input.value.trim() !== '') {
      input.classList.add('not-empty');
    } else {
      input.classList.remove('not-empty');
    }
  });
});
