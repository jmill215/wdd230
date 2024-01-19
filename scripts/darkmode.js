const modeButton = document.querySelector('#mode');
const main = document.querySelector("main");


modeButton.addEventListener("click", function() {
    if (modeButton.textContent.includes ("🌘")) {
        main.style.background = "#000000";
        main.style.color = "#fff";
        modeButton.textContent = "🔅";
    } else {
        main.style.background = "#fff";
        main.style.color = "#000000";
        modeButton.textContent = "🌘"
    }
})