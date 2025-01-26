const cvvInput = document.getElementById('cvv');
cvvInput.addEventListener('input', () => {
  
  cvvInput.value = cvvInput.value.replace(/\D/g, '');

  if (cvvInput.value.length > 3) {
    cvvInput.value = cvvInput.value.slice(0, 3);
  }
});

const month = document.getElementById('month');
month.addEventListener('input', () => {
  
    month.value = month.value.replace(/\D/g, '');

  if (month.value.length > 2) {
    month.value = month.value.slice(0, 2);
  }
});

const year = document.getElementById('year');
year.addEventListener('input', () => {
  
    year.value = year.value.replace(/\D/g, '');

  if (year.value.length > 4) {
    year.value = year.value.slice(0, 4);
  }
});

const creditCardInput = document.getElementById('creditCard');
creditCardInput.addEventListener('input', (e) => {
  
  const value = e.target.value.replace(/\D/g, '');

  const formattedValue = value.replace(/(\d{4})(?=\d)/g, '$1 ');

  creditCardInput.value = formattedValue;

  if (creditCardInput.value.length > 19) {
    creditCardInput.value = creditCardInput.value.slice(0, 19);
  }
});

const inputs = document.querySelectorAll('input[required]');

inputs.forEach((input) => {
  let wasValid = false; 

  input.addEventListener('input', () => {
    if (input.validity.valid) {
     
      input.classList.add('valid');
      input.classList.remove('error');
      wasValid = true; 
    } else if (wasValid && input.value.trim() === '') {
      
      input.classList.remove('valid');
      input.classList.add('error');
    } else {
      
      input.classList.remove('valid', 'error');
    }
  });
});