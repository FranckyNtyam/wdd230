// create hamburger button
const hambergerButton = document.querySelector('#buttonMenu');
const navigation = document.querySelector('.navigation');

hambergerButton.addEventListener('click', () => {

    navigation.classList.toggle('open');
    hambergerButton.classList.toggle('open');
})

// last modification 
let day = new Date(document.lastModified);
let year = day.getFullYear();
let time = day.getHours() + ":" + day.getMinutes() + ":" + day.getSeconds();
let date = day.getMonth() + 1 + "/" + day.getDate() + "/" + day.getFullYear();
document.querySelector('#year').innerHTML = year;
document.querySelector('#lastModified').innerHTML = "last modification: " + date + " " + time;


// Member information

const url = "https://franckyntyam.github.io/wdd230/chamber/data/members.json";

const cards = document.querySelector('.cards');
const spotlights = document.querySelector('.spotlights');
const spotlightArray = [];
async function getCompanyData(url) {
    const response = await fetch(url);
    const data = await response.json();
    displaySpotlight(data.companies);
    displayCompany(data.companies);
}

const displayCompany = (companies) => {
    companies.forEach((company) => {
        let card = document.createElement('section');
        let companyName = document.createElement('h2');
        let adress = document.createElement('p');
        let phoneNumber = document.createElement('p');
        let images = document.createElement('img');
        let website = document.createElement('p');
        let membersLevel = document.createElement('p');
        let location = document.createElement('p');

        companyName.textContent = ` ${company.name}`;
        adress.textContent = `Adress: ${company.adress}`;
        phoneNumber.textContent = `Phone Numbers: ${company.phone}`;
        website.innerHTML = `Website : ${company.website}`;
        membersLevel.innerHTML = `Member Level: ${company.level}`;
        location.textContent = `Location: ${company.location}`;
        images.setAttribute('src', company.image);
        images.setAttribute('alt', `Portrait of ${company.name} `);
        images.setAttribute('loading', 'lazy');
        images.setAttribute('width', '300');
        images.setAttribute('height', '400');
        card.appendChild(images);
        card.appendChild(companyName);
        card.appendChild(adress);
        card.appendChild(phoneNumber);
        card.appendChild(website);
        card.appendChild(membersLevel);
        card.appendChild(location);
        cards.appendChild(card);



    });
}


const displaySpotlight = (companies) => {
    companies.forEach((company) => {
        let card = document.createElement('section');
        let companyName = document.createElement('h2');
        let adress = document.createElement('p');
        let phoneNumber = document.createElement('p');
        let images = document.createElement('img');
        let website = document.createElement('p');
        let membersLevel = document.createElement('p');
        let location = document.createElement('p');

        companyName.textContent = ` ${company.name}`;
        adress.textContent = `Adress: ${company.adress}`;
        phoneNumber.textContent = `Phone Numbers: ${company.phone}`;
        website.innerHTML = `Website : ${company.website}`;
        membersLevel.innerHTML = `Member Level: ${company.level}`;
        location.textContent = `Location: ${company.location}`;
        images.setAttribute('src', company.image);
        images.setAttribute('alt', `Portrait of ${company.name} `);
        images.setAttribute('loading', 'lazy');
        images.setAttribute('width', '300');
        images.setAttribute('height', '400');
        card.appendChild(images);
        card.appendChild(companyName);
        card.appendChild(adress);
        card.appendChild(phoneNumber);
        card.appendChild(website);
        card.appendChild(membersLevel);
        card.appendChild(location);


        let level = company.level;





        if (level == "Silver Member" || level == "Gold Member") {

            spotlightArray.push(card);
            spotlights.innerHTML = "";
            console.log(spotlightArray);
            for (let i = spotlightArray.length - 1; i > 0; i--) {
                let ran = Math.floor(Math.random() * (i + 1));
                let j = spotlightArray[i];
                spotlightArray[i] = spotlightArray[ran];
                spotlightArray[ran] = j;
                console.log(spotlightArray);
            }

            spotlightArray.forEach(spotlight => {
                spotlights.appendChild(spotlight);
            });



        }



    });
}
getCompanyData(url);

// Toggle grid or list

const gridButton = document.querySelector('#grid');
const listButton = document.querySelector('#list');
const display = document.querySelector('.cards');

gridButton.addEventListener('click', () => {
    display.classList.add("cards");
    display.classList.remove("list");
});

listButton.addEventListener('click', showList);

function showList() {
    display.classList.add("list");
    display.classList.remove("cards");
}



// here is determine and display visits in our website.

// initialize the variable displayVisitsNumber.
const displayVisitsNumber = document.querySelector('.visits-site');

// Get the stored value for the number of visits in local storage key.

let numberOfVisits = Number(window.localStorage.getItem('numberOfVisitsLocalStorage')) || 0;

// We determine if is the first visit or display the number of visits.

if (numberOfVisits == 0) {
    displayVisitsNumber.textContent = `Welcome! Let us know if you have any questions.`;

} else if (numberOfVisits !== 0 && numberOfVisits < Date.now()) {

    // displayVisitsNumber.textContent ="Back so soon! Awesome!";

} else {
    if (numberOfVisits == Date.now()) {
        displayVisitsNumber.textContent = `You last visited ${numberOfVisits} day ago.`;
    } else {
        displayVisitsNumber.textContent = `You last visited ${numberOfVisits} days ago.`;
    }

}

// increment number of visits by one.

numberOfVisits++;

// store the new visit total into localStorage key equal numberOfVisitsLocalStorage.

localStorage.setItem("numberOfVisitsLocalStorage", numberOfVisits);

// Weather

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const descOfCurrentCondition = document.querySelector('#desc-condition');
const cityName = document.querySelector('.city-name');

const urlWeather = 'https://api.openweathermap.org/data/2.5/weather?lat=3.866667&lon=11.516667&units=imperial&appid=97e376ece890dc55e4b12dd2017ec611';

async function apiFetch() {
    try {
        const response = await fetch(urlWeather);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);

            console.log(data);
        } else {
            throw Error(await response.text());
        }

    } catch (error) {
        console.log(error);
    }

}



apiFetch();

const displayResults = (data) => {


    cityName.innerHTML = `${data.name}`;
    currentTemp.innerHTML = `${data.main.temp} &deg;F`;

    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;

    descOfCurrentCondition.textContent = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('width', '60');
    weatherIcon.setAttribute('height', '60');
}

const urlForecast = 'https://api.openweathermap.org/data/2.5/forecast?lat=3.866667&lon=11.516667&units=imperial&appid=97e376ece890dc55e4b12dd2017ec611';

const forecast = document.querySelector('.forecast');
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

async function getForecastData() {
    const response = await fetch(urlForecast);
    const data = await response.json();

    displayForecast(data);
}

const displayForecast = (data) => {

    let forecastSeconday = document.createElement('p');
    let forecastThirday = document.createElement('p');
    let forecastForthday = document.createElement('p');


    const daysF1 = new Date(data.list[4].dt_txt);
    const daysF2 = new Date(data.list[12].dt_txt);
    const daysF3 = new Date(data.list[20].dt_txt);

    forecastSeconday.innerHTML = `${weekday[daysF1.getDay()]}: ${data.list[4].main.temp} &deg;F`;
    forecastThirday.innerHTML = `${weekday[daysF2.getDay()]}: ${data.list[12].main.temp} &deg;F`;
    forecastForthday.innerHTML = `${weekday[daysF3.getDay()]}: ${data.list[20].main.temp} &deg;F`;

    forecast.appendChild(forecastSeconday);
    forecast.appendChild(forecastThirday);
    forecast.appendChild(forecastForthday);

}

getForecastData();

// Create banner

const banner = document.getElementById('banner');
const currentDate = new Date();
const weekDay = currentDate.getDay();

const closeBanner = () => {
    banner.style.display = 'none';
};

if (weekDay >= 1 && weekDay <= 3) {
    banner.style.display = 'block';
}