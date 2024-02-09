const baseURL = "https://jmill215.github.io/wdd230/";
const activities = document.querySelector(".activity")
const linksURL = `https://jmill215.github.io/wdd230/data/links.json`;

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();

    //MDN: returns an array of given object's own enumarable string-keyed property names
    //In other words, use to easily iterate later...hopefully.
    keys = Object.keys(data);
    displayLinks(data, keys);
}

function displayLinks(data, keys) {
    keys.forEach(key => {
        const listItem = document.createElement("li")
        listItem.textContent = key + ":  ";
        data[key].forEach(link => {
            const anchor = document.createElement("a");
            anchor.setAttribute("href", link.link);
            anchor.setAttribute("target", "_blank")
            anchor.textContent(link.name + " | ")
            listItem.appendChild(anchor);
        });
        activities.appendChild(listItem);
    })
}

getLinks();