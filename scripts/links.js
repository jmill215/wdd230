const baseURL = "https://jmill215.github.io/wdd230/";

const LinksURL = "https://jmill215.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.weeks)
}

function displayLinks(weeks) {
    const list = document.querySelector(".activity");

    weeks.forEach((week) => {
        const listElement = document.createElement('li');
        listElement.textContent = `${week.week}`;

        week.links.forEach((link) => {
            let anchor = document.createElement('a');
            anchor.setAttribute("href", link.url)

            listElement.appendChild(anchor)
        })
        list.appendChild(listElement);
    })
}



//function displayLinks(data,keys) {
//    keys.forEach(key => {
//        const li = document.createElement("li");
//        li.textContent = key + ": ";
//        data[key].forEach(link => {
 //           const a = document.createElement("a");
//            a.setAttribute("href", link.link);
//            a.setAttribute("target", "_blank");
//            a.textContent = link.name + " | ";
//            li.appendChild(a);
 //       });
//        ActivitiesElement.appendChild(li);
//    });
//}

getLinks();