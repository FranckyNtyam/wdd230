const baseURL = "https://franckyntyam.github.io/wdd230/";
const linksUrl = "https://franckyntyam.github.io/wdd230/data/links.json";

const listItem = document.querySelector('#listItem');

async function linksData() {
    const response = await fetch(linksUrl);
    const data = await response.json();
    console.log(data.weeks);
    getLinks(data.weeks);
}

linksData();

const getLinks = (weeks) => {
    weeks.forEach(weekNum => {
        let difWeek = document.createElement('li');


        difWeek.innerHTML = `${weekNum.week}:`;
        listItem.appendChild(difWeek);
        weekNum.links.forEach(function (link) {
            let hyperRef = document.createElement('a');
            let span = document.createElement('span');
            let linkhref = link.url;
            span.innerHTML = `  ${link.title} |`;
            hyperRef.setAttribute('href', linkhref);
            difWeek.appendChild(hyperRef);
            hyperRef.appendChild(span);
        });







    })
}