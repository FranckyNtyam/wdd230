
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

const url ="https://franckyntyam.github.io/wdd230/chamber/data/members.json";

const cards = document.querySelector('.cards');

async function getCompanyData(url) {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.prophets);
     displayCompany(data.companies);
}

const displayCompany = (companies) => {
    companies.forEach((company) => {
    let card = document.createElement('section');
    let companyName = document.createElement('h3');
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
    // card.style.backgroundColor = '#658ddd'
    });
}

getCompanyData(url);

// Toggle grid or list

const gridButton = document.querySelector('#grid');
const listButton = document.querySelector('#list');
const display = document.querySelector('.cards');

gridButton.addEventListener('click', () =>{
    display.classList.add("cards");
    display.classList.remove("list");
});

listButton.addEventListener('click', showList);

function showList(){
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
    displayVisitsNumber.textContent =`Welcome! Let us know if you have any questions.`;
    
}
else if (numberOfVisits !== 0 && numberOfVisits < Date.now() ){

    // displayVisitsNumber.textContent ="Back so soon! Awesome!";

}
else {
    if (numberOfVisits == Date.now()){
        displayVisitsNumber.textContent = `You last visited ${numberOfVisits} day ago.`;
    }
    else{
        displayVisitsNumber.textContent = `You last visited ${numberOfVisits} days ago.`;
    }
    
}

// increment number of visits by one.

numberOfVisits++;

// store the new visit total into localStorage key equal numberOfVisitsLocalStorage.

localStorage.setItem("numberOfVisitsLocalStorage", numberOfVisits);

