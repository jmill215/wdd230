const modeButton = document.querySelector('#mode');
const main = document.querySelector("main");

modeButton.addEventListener("click", function() {
    if (modeButton.textContent.includes ("🌘")) {
        main.classList.toggle('dark')
        modeButton.textContent = "🔅";
    } else {
        main.classList.toggle('dark')
        modeButton.textContent = "🌘"
    }
})