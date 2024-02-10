const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");
const message = document.getElementById("message");
const email = document.querySelector('#email')
const validatebutton = document.getElementsByClassName("submitBtn");

//looked up how to check pattern
const pattern = new RegExp('[a-zA-Z0-9._%+-]+@byui\.edu$');


password2.addEventListener("focusout", checkPass);

email.addEventListener("focusout", checkMailInput);

function checkPass() {
    if (password1.value != password2.value){
        message.textContent = "Passwords do not match!"

    password1.style.backgroundColor = "#fff0f3";
    password2.style.backgroundColor = "#fff0f3";

        password1.value = "";
        password2.value = "";

        password1.focus();

        } else {
            form.preventDefault()
            message.textContent = "";
            password1.style.backgroundColor = "#fff";
            password2.style.backgroundColor = "#fff";
        }
    }



function checkMailInput() {
    if (!pattern.test(email.value)) {
        message.textContent = "Email not valid!";
    email.style.backgroundColor("#fff0f3")
        email.value = ""
        email.focus();
    } else {
        email.style.backgroundColor = "#fff";
        email.style.color = "#000"
    }
}
    




