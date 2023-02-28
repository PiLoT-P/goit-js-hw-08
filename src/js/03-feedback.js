import throttle from 'lodash.throttle';

const formSubmit = document.querySelector('.feedback-form');
const valueJSON = JSON.stringify();

const inform =  {
    email: '',
    message: '',
}
const parseInform = JSON.parse(localStorage.getItem('feedback-form-state'));

if (!parseInform) {
    formSubmit.email.value = inform.email;
    formSubmit.message.value = inform.message;
} else {
    inform.email = parseInform.email;
    formSubmit.email.value = inform.email;
    inform.message = parseInform.message;
    formSubmit.message.value = inform.message;
}

function submitInputValue(event) {
    event.preventDefault();
    if (formSubmit.email.value === '' && formSubmit.message.value === '') {
        return alert('Write your email and message')
    }
    localStorage.clear();
    console.log(inform);
    event.currentTarget.reset();
}

function getInputValue (event) {
    inform[event.target.name] = event.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(inform));
}

formSubmit.addEventListener('input', throttle(getInputValue, 500));
formSubmit.addEventListener('submit', submitInputValue);