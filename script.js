let password = document.getElementById('password');
let confirmPassword = document.getElementById('confirmPassword');

let message = document.querySelector('small.message');

confirmPassword.addEventListener('input', () =>
{
    if (password.value != confirmPassword.value)
    {
        message.classList.add("error");
        message.classList.remove("hidden");
    }
    if (password.value === confirmPassword.value)
    {
        message.classList.remove("error");
        message.classList.add("hidden");
    }
})