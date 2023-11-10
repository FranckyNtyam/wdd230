let day = new Date(document.lastModified);
let year = day.getFullYear();
let time = day.getHours() + ":" + day.getMinutes() + ":" + day.getSeconds();
let date = day.getMonth() + 1 +"/" + day.getDate() + "/" + day.getFullYear();
document.querySelector('#year').innerHTML = year;
document.querySelector('#lastModified').innerHTML = "last modification: " + date + " " + time;

// create hamburger button

const hamburgerButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamburgerButton.addEventListener('click', () => {

    navigation.classList.toggle('open');
    hamburgerButton.classList.toggle('open');
})

const darkModeButton = document.querySelector('#dark-mode');
const main = document.querySelector('main');

darkModeButton.addEventListener('click', () => {
    main.classList.toggle('dark-mode');
    darkModeButton.classList.toggle('light-mode');
});
