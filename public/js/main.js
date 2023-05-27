let day = document.getElementById('day');
let date = document.getElementById('date');
let subBtn = document.getElementById('submitBtn');
let inputCity = document.getElementById('inputCity');
let output = document.getElementById('output');
let cityName = document.getElementById('cityName');
let tempStatus = document.getElementById('status');
let degree = document.getElementById('degree');
let skyDesc = document.getElementById('skyDesc');



let days = ["Monday" , "Tuesday" , "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let months = ["Jan", "Feb", "March", "Aprail", "May" , "June" , "July" , "August" ,"Sept", "Oct", "Nov", "Dec"];

day.innerText = days[ new Date().getDay() ];
date.innerText = `${ new Date().getDate()},${months[new Date().getMonth()]}`

const getWeather = async (e) => {
    e.preventDefault();
    if(inputCity.value.length === 0){
        output.innerHTML = "<small>Please Enter a City Name</small>";
        tempStatus.style.display = "none";
    }
    else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity.value}&units=metric&appid=0907e85ff3b54cc160a56bf164a01586`;
        let weather = await fetch(url).
        then((data) => data.json()).
        then((res) => res);

        output.style.display = "block";
        output.innerText = `${weather.name},${weather.sys.country}`;
        tempStatus.style.display = "flex";

        degree.style.display = "block";
        degree.innerHTML = `<h2>${weather.main.temp}<sup>o</sup>C</h2>`;

        if(weather.weather[0].main == "Clouds"){
            skyDesc.innerHTML = `<i style="color:skyblue;" class="fa-solid fa-cloud"></i>`;
        }
        else if(weather.weather[0].main == "Rain"){
            skyDesc.innerHTML = `<i style="color:#97bcddb5;" class="fa-solid fa-cloud-showers-heavy"></i>`;
        }
        else{
            skyDesc.innerHTML = `<i style="color:#ffe632;" class="fa-regular fa-sun"></i>`;
        }
        }
        catch{
            output.innerHTML = "<small>Please Enter Correct City Name</small>";
            tempStatus.style.display = "none";
        }
        
        
    }
}


subBtn.addEventListener('click' , getWeather);