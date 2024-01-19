const burgerButton = document.querySelector('#myButton')
var menu = document.getElementsByClassName('.menulinks')

burgerButton.addEventListener('click', () => {
    if (burgerButton.textContent.includes ("☰")) {
        menu.style.display = 'flex';
        burgerButton.textContent = "❌";
    } else {
        burgerButton.textContent = '☰';
        menu.style.display = 'none';
    }
})