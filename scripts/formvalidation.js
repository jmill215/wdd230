var password1 = document.getElementById("password1");
var password2 = document.getElementById("password2");
var message = document.getElementById("message");
var form = document.getElementById["#form1"];
var validatebutton = document.getElementsByClassName("submitBtn");

validatebutton.addEventListener("click", function(event)) {
    if (password1.value != "" & password2 != ""){
        if (password1.value == password2.value) {
            message.textContent = ""
        } else {
            form.preventDefault()
            password1.value = "";
            password2.value = "";
            message.textContent = "Passwords do not match";
            password1.focus();
        }
    }
    
}



