const baseURL = "https://franckyntyam.github.io/wdd230/";
const linksUrl = "https://franckyntyam.github.io/wdd230/data/links.json";

async function linksData() {
    const response = await fetch(linksUrl);
    const data = await response.json();
    console.log(data.weeks);
    getLinks(data.weeks);
}

linksData();

const getLinks = (weeks) => {
    weeks.forEach(weekNum =>{
        let difWeek = document.querySelector('#weeks');
        let descActivity = document.querySelector('#desc-activity');
        difWeek.innerHTML =`${weekNum.week}:`;
        weekNum.links.forEach(link =>{
            descActivity.innerHTML = `${link.title}`;
            let url = document.querySelector('a');
            let links = link.url;
            url.setAttribute('href', links);
        });
        

    })
}