const form = document.querySelector('.feedback-form');
// console.dir(form);

const elements = form.elements;
// console.dir(elements);

const reviewInfo = {
  email: '',
  message: '',
};

const parsedFeedback = JSON.parse(localStorage.getItem('feedback-form-state'));

if (parsedFeedback !== null) {
  elements.email.value = parsedFeedback.email || '';
  elements.message.value = parsedFeedback.message || '';
}

form.addEventListener('submit', submitListenerFunction);

form.addEventListener('input', inputListenerFunction);

function submitListenerFunction(event) {
  event.preventDefault();

  // console.log(event);

  if (elements.message.value === ''.trim()) {
    alert('All emenents should include text');
  }

  reviewInfo.email = elements.email.value.trim();
  reviewInfo.message = elements.message.value.trim();

  console.log(reviewInfo);

  localStorage.removeItem('feedback-form-state');
  form.reset();
}

function inputListenerFunction(event) {
  const formValueObject = {
    email: '',
    message: '',
  };

  formValueObject.email = elements.email.value.trim();
  formValueObject.message = elements.message.value.trim();

  localStorage.setItem('feedback-form-state', JSON.stringify(formValueObject));
}