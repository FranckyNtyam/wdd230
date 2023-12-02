const currentTemp = document.querySelector('#current-temp'); 

const weatherIcon = document.querySelector('#weather-icon');

const captionDesc = document.querySelector('figcaption');

const url ='https://api.openweathermap.org/data/2.5/weather?lat=49.773281&lon=6.635785&units=imperial&appid=97e376ece890dc55e4b12dd2017ec611';

async function apiFetch() {
  try {  
  const response = await fetch(url);
  if (response.ok){
    const data = await response.json();
    displayResults(data);

    console.log(data);
  }else {
    throw Error(await response.text());
  }
  
  }
    catch (error) {
        console.log(error);
    }
    
  }
  


apiFetch();

const displayResults = (data) => {

    currentTemp.textContent = `${data.main.temp} &deg;F`;
    const iconsrc =`https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('width', '120');
    weatherIcon.setAttribute('height', '120');
    captionDesc.textContent = `${desc}`;
    
}