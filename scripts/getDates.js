let day = new Date(document.lastModified);
let year = day.getFullYear();
let time = day.getHours() + ":" + day.getMinutes() + ":" + day.getSeconds();
let date = day.getMonth() + 1 +"/" + day.getDate() + "/" + day.getFullYear();
document.querySelector('#year').innerHTML = year;
document.querySelector('#lastModified').innerHTML = "last modification: " + date + " " + time;

// rating

const rangevalue = document.getElementById('rangevalue');
const range = document.getElementById('rate');

range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue(){
    rangevalue.innerHTML = range.value;
}

// Check password

const password1 = document.getElementById('password');
const password2 = document.getElementById('password-repeated');
const message = document.getElementById('messagedisplay');
password2.addEventListener('focusout', checkSame);

// Create function checkSame

function checkSame() {
    if (password1.value !== password2.value){
        message.textContent = "Password is not the same!"
        message.style.visibility = "show";
        password2.style.backgroundColor = "red";
        password2.value = "";
        password2.focus();
    } else {
        message.style.display = "none";
        password2.style.backgroundColor = "#fff";
        password2.style.color = "#000";
    }
}
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
let firstVisit ="This is your first in our website. Welcome!";

if (numberOfVisits !== 0) {
    displayVisitsNumber.textContent = numberOfVisits;
}else {
    displayVisitsNumber.textContent = firstVisit;
}

// increment number of visits by one.

numberOfVisits++;

// store the new visit total into localStorage key equal numberOfVisitsLocalStorage.

localStorage.setItem("numberOfVisitsLocalStorage", numberOfVisits);

