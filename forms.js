const form = document.querySelector('.form');
const userName = document.getElementById('name');
const userEmail = document.getElementById('email');
const userMessage = document.getElementById('message');

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.textContent = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success');
  setTimeout(() => {
    errorDisplay.textContent = '';
    inputControl.classList.remove('error');
  }, 3000);
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.textContent = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
};

const isValidEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
  const nameValue = userName.value.trim();
  const emailValue = userEmail.value.trim();
  const messageValue = userMessage.value.trim();

  if (nameValue === '') {
    setError(userName, 'Your name is required!');
  } else {
    setSuccess(userName);
  }

  if (emailValue === '') {
    setError(userEmail, 'Your email is required!');
  } else if (!isValidEmail(emailValue)) {
    setError(userEmail, 'Provide a valid email address.');
  } else {
    setSuccess(userEmail);
  }

  if (messageValue === '') {
    setError(userMessage, 'Write your message here!');
  } else {
    setSuccess(userName);
  }
};

form.addEventListener('submit', (e) => {
  e.preventDefault();

  validateInputs();
});
