const burgerButton = document.querySelector('#myButton');
var menu = document.querySelector('.menulinks');

burgerButton.addEventListener('click', () => {
    if (burgerButton.textContent.includes ("☰") && window.innerWidth < 1000) {
        menu.style.display = 'grid';
        burgerButton.textContent = "❌";
    } else if ((burgerButton.textContent.includes ("☰") || burgerButton.textContent.includes ("❌")) && window.innerWidth > 1000) {
        menu.style.display = 'flex'
    } else {
        burgerButton.textContent = '☰';
        menu.style.display = 'none';
    }
})