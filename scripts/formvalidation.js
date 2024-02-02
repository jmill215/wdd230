var password1 = document.getElementById("password1");
var password2 = document.getElementById("password2");
var message = document.getElementById("message");
var validatebutton = document.getElementsByClassName("submitBtn")

function validatepassword() {
    if (password1.value != "" & password2 != ""){
        if (password1.value == password2.value) {
            password1.style.backgroundColor = "green"
            password2.style.backgroundColor = "green"
            message.textContent = ""
        } else {
            password1.style.backgroundColor = "red"
            password2.style.backgroundColor = "red"
            message.textContent = "Passwords do not match"
        }
    }
    
}

password1.onkeyup = validatepassword;
password2.onkeyup = validatepassword;