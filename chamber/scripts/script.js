
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


// here is determine and display visits in our website.

// initialize the variable displayVisitsNumber.
const displayVisitsNumber = document.querySelector('.visits-site');

// Get the stored value for the number of visits in local storage key.

let numberOfVisits = Number(window.localStorage.getItem('numberOfVisitsLocalStorage')) || 0;

// We determine if is the first visit or display the number of visits.

if (numberOfVisits == 0) {
    displayVisitsNumber.textContent = `Welcome! Let us know if you have any questions.`;
    
}
else if (numberOfVisits !== 0 && numberOfVisits < Date.now() ){

    displayVisitsNumber.textContent = `Back so soon! Awesome!`;

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