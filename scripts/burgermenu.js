const burgerButton = document.querySelector('#myButton');
var menu = document.querySelector('.menulinks');

burgerButton.addEventListener('click', () => {
    menu.classList.toggle('open');
    burgerButton.classList.toggle('open');
    
    if (burgerButton.textContent.includes ("❌")){
        burgerButton.textContent = "☰";
    } else {
        burgerButton.textContent = "❌";
    }
    
    
})

