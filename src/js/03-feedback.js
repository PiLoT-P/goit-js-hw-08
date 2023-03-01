import throttle from 'lodash.throttle';

const formSubmit = document.querySelector('.feedback-form');

const inform =  {
    email: '',
    message: '',
}
const parseInform = JSON.parse(localStorage.getItem('feedback-form-state'));

if (parseInform) {
    inform.email = parseInform.email;
    formSubmit.email.value = parseInform.email;
    inform.message = parseInform.message;
    formSubmit.message.value = parseInform.message;
}

function submitInputValue(event) {
    event.preventDefault();
    if (inform.email === '' || inform.message === '') {
        return alert('Write your email and message')
    }
    localStorage.clear();
    console.log(inform);
    event.currentTarget.reset();
    inform.email = '';
    inform.message = '';
}

function getInputValue (event) {
    inform[event.target.name] = event.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(inform));
}

formSubmit.addEventListener('input', throttle(getInputValue, 500));
formSubmit.addEventListener('submit', submitInputValue);