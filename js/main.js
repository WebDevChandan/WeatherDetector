const weatherApi = {
	key: "c2dfc526698683ea92a05493015a5ab7",
	baseUrl: "https://api.openweathermap.org/data/2.5/weather"
}

const searchInputBox = document.getElementById('input-box');

// Event Listner funciton on keypress
searchInputBox.addEventListener('keypress',(event) =>{
	
if(event.keyCode == 13) {
	getWeatherReport(searchInputBox.value);
	console.log(searchInputBox.value);
	document.querySelector('.weather-body').style.display = "block";
	// document.querySelector('.message').style.display = "none";
	
if (searchInputBox.value === "") {

	document.querySelector('.weather-body').style.display = "none";

}	
if((searchInputBox.value.length<=2)||(searchInputBox.value.length>20)){
	document.querySelector('.weather-body').style.display = "none";	
}

	}
});


//Let's get Weather Report

function getWeatherReport (city){
	fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
	.then(weather => {
		return weather.json();
	}).then(showWeatherReport);
}

//Show Weather Report
function showWeatherReport (weather){
	console.log(weather);

	let city = document.getElementById('city');
	city.innerText = `${weather.name}, ${weather.sys.country}`;

	let temperature = document.getElementById('temp');
	temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

	let minMaxTemp = document.getElementById('min-max');
	minMaxTemp.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C (min) / ${Math.ceil(weather.main.temp_max)}&deg;C (max)`;

	let weatherType = document.getElementById('weather');
	weatherType.innerText = `${weather.weather[0].main}`;

	let date = document.getElementById('date');
	let todayDate = new Date();
	date.innerText = dataManage(todayDate);

	if(weatherType.textContent == 'Clear'){
		document.body.style.backgroundImage = "url('image/clear.webp')";
	}else if(weatherType.textContent == 'Haze'){
		document.body.style.backgroundImage = "url('image/haze.webp')";
	}else if(weatherType.textContent == 'Clouds'){
		document.body.style.backgroundImage = "url('image/cloudy.webp')";
	}else if(weatherType.textContent == 'Rain'){
		document.body.style.backgroundImage = "url('image/rainy.webp')";
	}else if(weatherType.textContent == 'Overcast'){
		document.body.style.backgroundImage = "url('image/overcast.webp')";
	}else if(weatherType.textContent == 'Snow'){
		document.body.style.backgroundImage = "url('image/snow.webp')";
	}else if(weatherType.textContent == 'Drizzle'){
		document.body.style.backgroundImage = "url('image/drizzle.webp')";
	}else if(weatherType.textContent == 'Stormy'){
		document.body.style.backgroundImage = "url('image/stormy.webp')";
	}else if(weatherType.textContent == 'Thunderstorm'){
		document.body.style.backgroundImage = "url('image/thunderstorm.webp')";
	}else if(weatherType.textContent == 'Fog'){
		document.body.style.backgroundImage = "url('image/fog.webp')";
	}else if(weatherType.textContent == 'Sandstorm'){
		document.body.style.backgroundImage = "url('image/sandstorm.webp')";
	}else if(weatherType.textContent == 'Mist'){
		document.body.style.backgroundImage = "url('image/mist.webp')";
	}else if(weatherType.textContent == 'Dust'){
		document.body.style.backgroundImage = "url('image/dust.webp')";
	}else if(weatherType.textContent == 'Smoke'){
		document.body.style.backgroundImage = "url('image/mist.webp')";
	} 
}

// Date Manage
function dataManage(dateArg){

	let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

	let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

	let year = dateArg.getFullYear();
	let month = months[dateArg.getMonth()];
	let date = dateArg.getDate();
	let day = days[dateArg.getDay()];

	return `${day} ${date} ${month}, ${year}`;
}
