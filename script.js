$(document).ready(function () {

    $("#searchInput").on("keyup", function(e) {
        var cityName = e.target.value;
        const apiKey = "144a1a5515bc96dc778a119d4cf20b5a";

        $.ajax({

            url: `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`,
    
        }).done(function (weatherdata) {
            $("#profile").html(
                `
                <div class="weather-content">

            <center><img src="http://openweathermap.org/img/wn/${weatherdata.weather[0].icon}@2x.png" class="img-circle" alt="">
            <h1 class="text-dark py-3 text-uppercase">${weatherdata.name}, <small><small><small><small>${weatherdata.sys.country}</small></small></small></small></h1>
            <p><strong>Weather type: </strong><span class="text-capitalize">${weatherdata.weather[0].description}</span></p>
                <p><strong>Temprature: </strong>${weatherdata.main.temp}°C</p>
                <p><strong>Pressure: </strong>${weatherdata.main.pressure} hpa</p>
                <p><strong>Humidity: </strong>${weatherdata.main.humidity}%</p>  
                <p><strong>Wind speed: </strong>${weatherdata.wind.speed} m/s</p>
            </center>
            
            </div>
                `
            );
        });
    });
});

function reset() {
    location.reload();
}