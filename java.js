// seclected your html class id and tage

let search_btn = document.querySelector("#search_btn");
console.log(search_btn);
let input = document.querySelector("#input");
console.log(input);
console.log(search_btn);
let weather_img = document.querySelector(".warther_img");
console.log(weather_img);
let temperature = document.querySelector(".temperature");
console.log(temperature);
let description =document.querySelector(".description");
console.log(description);
let humidity =document.getElementById("humidity");
console.log(humidity);
let wind_speed = document.getElementById("wind_speed")
console.log(wind_speed);


// my weather data function start

async function waether_data(city){
    const api_key = "a06bcbb7028bf23d9db1b6f9df940203";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const api_data = await fetch(url).then(response => response.json());
    
    temperature.innerText = `${Math.round(api_data.main.temp - 273.15)}°C`;
    wind_speed.innerText = `${api_data.wind.speed}km/h`;
    humidity.innerText =    `${api_data.main.humidity}%`;
    description.innerText = `${api_data.weather[0].description}`;
    console.log(api_data);

    if(api_data.weather[0].main == "Clear"){
        weather_img.src = "clear.jpg";
    }
    else if(api_data.weather[0].description == "overcast clouds"){
        weather_img.src = "overcastcloud.jpg";
    }else{
        description.innerText = "not found"
    }


}

// my weather data function end
  

// function call

search_btn.addEventListener("click", ()=>{
    waether_data(input.value);
})
















// const search_btn = document.getElementById("search_btn");
// console.log(search_btn);
// const search_input = document.getElementById("input");
// console.log(search_input);

// const temperature = document.querySelector(".temperature");
// console.log(temperature);

// const discription = document.querySelector(".description");
// console.log(discription);

// const humidity = document.getElementById("humidity");
// console.log(humidity);

// const wind_speed = document.getElementById("wind_speed");
// console.log(wind_speed);

// const warther_img = document.querySelector(".warther_img");
// console.log(warther_img);


//  async function checkweather(city){
//     const apl_key = "a06bcbb7028bf23d9db1b6f9df940203";

//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apl_key}`;
    
//     const waether_data = await fetch(`${url}`).then(response => response.json());

    

//     temperature.innerHTML  = `${Math.round(waether_data.main.temp - 273.15)}°C`;

//     wind_speed.innerHTML = `${waether_data.wind.speed}`;


//     discription.innerHTML = `${waether_data.weather[0].description}`;

//     humidity.innerHTML = `${waether_data.main.humidity}%`;

//     switch(waether_data.weather[0].main){

//         case "Clear":
//             warther_img.src = "clear.jpg";
//             break;
//         case "Clouds":
//             warther_img.src = "cloud.jpg";
//             break;
//         case "Rain": 
//         warther_img.src = "rain.jpg"
//     }
//     console.log(waether_data);
    
// }

// search_btn.addEventListener('click', ()=>{
//     checkweather(search_input.value);
//     
    
// })
  









