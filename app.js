const API_KEY = `9bb2714ca9afec975bac5fd8b00b2af5`;
const searchTemp = () =>{
    const city = document.getElementById("city-name").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;


    fetch(url)
    .then(res => res.json())
    .then(data=>displayTemp(data));



}

const setInnerText = (id,text) => {
    document.getElementById(id).innerText =text;
}


const displayTemp = temperature =>{

    setInnerText("city",temperature.name);
    setInnerText("temp",temperature.main.temp);
    setInnerText("condition",temperature.weather[0].main);
    
    //set icon
    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`

    const imgIcon = document.getElementById("weather-icon");

    imgIcon.setAttribute('src',url)
}
