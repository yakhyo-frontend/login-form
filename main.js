const elForm = document.querySelector(".form");
const elEmail = document.querySelector("#email");
const elPassword = document.querySelector("#password");

const emailError = document.querySelector(".email-error");
const passwdError = document.querySelector(".passwd-error");

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

elForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const emailValue = elForm['email'].value.trim();
    const passwordValue = elForm['password'].value.trim();

    if (emailValue === '' || passwordValue === '') return alert(`Iltimos maydonni to'ldiring`);

    if (!emailRegex.test(emailValue)) return alert(`Iltimos, to'g'ri email manzilini kiriting`);

    if (!passwordRegex.test(passwordValue)) return alert(`Iltimos, to'g'ri parolni kiriting`);

    console.log(elEmail, elPassword); 
});


elEmail.addEventListener('input', () => {
    if (emailRegex.test(elEmail.value.trim())) {
        emailError.textContent = 'Normal email';
        emailError.style.color = 'green';
    } else {
        emailError.textContent = `Iltimos, to'g'ri email manzilini kiriting`;
        emailError.style.color = 'red';
    }
});


elPassword.addEventListener('input', () => {
    if (passwordRegex.test(elPassword.value.trim())) {
        passwdError.textContent = 'Normal parol';
        passwdError.style.color = 'green';
    } else {
        passwdError.textContent = `Iltimos, to'g'ri parolni kiriting`;
        passwdError.style.color = 'red';
    }
});
