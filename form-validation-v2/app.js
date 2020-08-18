const form = document.querySelector('#login-form');

let username = form.elements.namedItem('username');
let password = form.elements.namedItem('password');

const passReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

username.addEventListener('input', validate);
password.addEventListener('input', validate);

form.addEventListener('submit', e => {
    e.preventDefault();

    alert('Submitted!')
});

function validate({ target }) {
    if (target.name === 'username') {
        // invalid if shortner than 3 and has whitespaces
        if (target.value.length > 3 && !/\s/g.test(target.value)) {
            target.classList.add('valid');
            target.classList.remove('invalid');
        } else {
            target.classList.add('invalid');
            target.classList.remove('valid');
        }
    } else if (target.name === 'password') {
        if (passReg.test(target.value)) {
            target.classList.add('valid');
            target.classList.remove('invalid');
        } else {
            target.classList.add('invalid');
            target.classList.remove('valid');
        }
    }

    if (username.classList.contains('valid') && password.classList.contains('valid')) {
        document.body.classList.add('valid');
    } else {
        document.body.classList.remove('valid');
    }
};