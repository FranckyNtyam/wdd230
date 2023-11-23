
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
