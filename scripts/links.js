const baseURL = "https://jmill215.github.io/wdd230/";
const Activities = document.querySelector("#activity-display")
const LinksURL = "https://jmill215.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(LinksURL);
    const data = await response.json();
    //console.log(data);
    keys = Object.keys(data)
    displayLinks(data, keys);
}

function displayLinks(data, keys) {
    keys.forEach(key => {
        const li = document.createElement("li")
        li.textContent = key + ": "
        data[key].forEach(link => {
            const anchor = document.createElement("a")
            anchor.setAttribute("href", link.link);
            anchor.setAttribute("target", "_blank");
            anchor.textContent = link.name + " | "
            li.appendChild(anchor)
        })
        Activities.appendChild(li);
    })
}

getLinks();