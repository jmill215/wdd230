const baseURL = "https://jmill215.github.io/wdd230/";
const Activities = document.querySelector("#activity-display")
const LinksURL = "https://jmill215.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(JsonLink);
    const data = await response.json();
    displayLinks(data.weeks)
}

const displayLinks = (weeks) => {
    weeks.foreach((week) => {
    let weekNum = document.createElement("li");

    weekNum.textContent = `${week.week}:  `;
    Activities.appendChild(weekNum);

    week.links.foreach((link) => 
    {
        let anchor = document.createElement("a");

        anchor.textContent = link.title;
        anchor.setAttribute("href", baseURL + link.url);

        weekNum.appendChild(anchor);
    })
});

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