fetch("https://api.open-meteo.com/v1/forecast?latitude=46.9481&longitude=7.4474&current=temperature_2m,relative_humidity_2m,rain,weather_code")
.then((res) => res.json())
.then((data) => console.log(data));