let day = new Date(document.lastModified);
let year = day.getFullYear();
let time = day.getHours() + ":" + day.getMinutes() + ":" + day.getSeconds();
let date = day.getMonth() + 1 +"/" + day.getDate() + "/" + day.getFullYear();
document.querySelector('#year').innerHTML = year;
document.querySelector('#lastModified').innerHTML = "last modification: " + date + " " + time;

// create hamburger button

const hamburgerButton = document.querySelector('#buttonMenu');
const navigation = document.querySelector('.navigation');

hamburgerButton.addEventListener('click', () => {

    navigation.classList.toggle('open');
    hamburgerButton.classList.toggle('open');
})

const darkModeButton = document.querySelector('#buttonDarkMode');
const main = document.querySelector('main');

darkModeButton.addEventListener('click', () => {
    main.classList.toggle('dark-mode');
    darkModeButton.classList.toggle('light-mode');
});
// here is determine and display visits in our website.

// initialize the variable displayVisitsNumber.
const displayVisitsNumber = document.querySelector('.visits-site');

// Get the stored value for the number of visits in local storage key.

let numberOfVisits = Number(window.localStorage.getItem('numberOfVisitsLocalStorage')) || 0;

// We determine if is the first visit or display the number of visits.

if (numberOfVisits !== 0) {
    displayVisitsNumber.textContent = numberOfVisits;
}else {
    displayVisitsNumber.textContent = `This is your first in our website. Welcome!`;
}

// increment number of visits by one.

numberOfVisits++;

// store the new visit total into localStorage key equal numberOfVisitsLocalStorage.

localStorage.setItem("numberOfVisitsLocalStorage", numberOfVisits);