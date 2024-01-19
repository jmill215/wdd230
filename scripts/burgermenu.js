const burgerButton = document.querySelector('#myButton')
var menu = document.querySelector('.menulinks')

burgerButton.addEventListener('click', () => {
    if (burgerButton.textContent.includes ("☰")) {
        menu.style.display = 'grid';
        burgerButton.textContent = "❌";
    } else {
        burgerButton.textContent = '☰';
        menu.style.display = 'none';
    }
})