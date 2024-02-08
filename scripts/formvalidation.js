var password1 = document.getElementById("password1");
var password2 = document.getElementById("password2");
var message = document.getElementById("message");
var validatebutton = document.getElementsByClassName("submitBtn")

function validatepassword() {
    if (password1.value != "" & password2 != ""){
        if (password1.value == password2.value) {
            message.textContent = ""
        } else {
            message.style.color = "red";
            message.textContent = "Passwords do not match"
            password1.value = ""
            password2.value = ""
            password1.focus();
        }
    }
    
}

validatebutton.onclick(validatepassword);