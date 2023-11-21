
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
let date = day.getMonth() + 1 +"/" + day.getDate() + "/" + day.getFullYear();
document.querySelector('#year').innerHTML = year;
document.querySelector('#lastModified').innerHTML = "last modification: " + date + " " + time;

// create calendar
let dat = new Date()
let years = dat.getFullYear();
let month = dat.getMonth();
const days = document.querySelector(".calendar-dates");
const currentDate = document.querySelector(".calendar-current-date") ;
const previousAndNextIcon = document.querySelectorAll(".calendar-navigation span");

//  Create month array
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

// Function to generate the calendar

const manipulate = () => {
    // get the first day of the month
    let firstDay = new Date(year, month, 1).getDay();

    // get the last date of the month
    let lastDate = new Date(year, month +1, 0).getDate();

    // get the date of the last date of the month
    let dayEnd = new Date(year, month, lastDate).getDay();

    // Get the last date of the previous month
    let lastDateOfMonth = new Date(year, month, 0).setDate();

    // Declaration of variable to store the generated calendar HTML
    let li = "";

    // for loop to add the last dates of the previous month
    for (let i = firstDay; i > 0; i--) {
        li += `<li class="inactive">${lastDateOfMonth - i + 1}</li>`;
    }

    // for loop to add the date of the current month
    for (let i = 1; i <= lastDate; i++){
        // Check if the current date is today
        let isToday = i === dat.getDate() && month === new Date().getMonth() && years === new Date().getFullYear()? "active":"";
        li += `<li class="${isToday}">${i}</li>`;
    }

    // for loop to add the first dates of the next month
    for (let i = dayEnd; i < 6; i++){
        li += `<li class="inactive">${ - dayEnd + 1}</li>`;
    }

    // Update the text of the current date element

    currentDate.innerHTML = `${months[month]} ${year}`;

    // Update the HTML of the dates element
    day.innerHTML = li;
}

manipulate();

// Attach the click event listener to each icon
previousAndNextIcon.forEach(icon => {

    icon.addEventListener('click', () => {
         // check if icon is calendar previous or next
    month = icon.id === "calendar-previous" ? month - 1 : month + 1;

    // Check if the month is out of range
    if (month < 0 || month > 11) {

        // Set the date to the first day of the month with new year
        dat = new Date(year, month, new Date().getDate());

        // Set the year to the new year.
        years = dat.getFullYear();

        //  set the month to the new month.
        month = dat.getMonth();
    }
    else {

        //  Set the date to the current date
        dat = new Date();
    }

    manipulate();

    });
});