/* Choosing cars */

chooseCar();

function chooseCar () {

    document.getElementById("car-select").addEventListener('change', function(event){
        carNumber = event.target.options.selectedIndex;

        if (carNumber === 0) {
            document.querySelector(".main-boxes").classList.add(".main-boxes");
            document.querySelector(".main-boxes").classList.remove("main-boxes-visible");
            document.querySelector(".carimg").setAttribute("src", ""); 
            document.querySelector(".carimg").classList.remove("carimgvisible");
            document.querySelector(".comment-on-range").classList.remove("comment-on-range-visible");
            document.querySelector(".temperature-slider").value = 30;
            document.querySelector(".weather-temperature p").textContent = "°C";
            document.querySelector(".state-of-charge-switch p").textContent = "%";
            document.querySelector(".fiftykmh").classList.remove("speed-button-clicked");
            document.querySelector(".ninetykmh").classList.remove("speed-button-clicked");
            document.querySelector(".onehundredandthirtykmh").classList.remove("speed-button-clicked");
            currentSpeed = 50;
            emptyCharging();  
            emptyInfo();
            document.querySelector(".info-boxes").classList.remove("info-boxes-visible");
            document.querySelector(".info-boxes").classList.add("info-boxes");
            document.querySelector(".first-hr").classList.remove("first-hr-visible");
            document.querySelector(".first-hr").classList.add("first-hr");
            document.querySelector(".second-hr").classList.remove("second-hr-visible");
            document.querySelector(".second-hr").classList.add("second-hr");
            

         } else  if (carNumber === 1) {
            document.querySelector(".main-boxes").classList.remove(".main-boxes");
            document.querySelector(".main-boxes").classList.add("main-boxes-visible");
            document.querySelector(".carimg").setAttribute("src", "images/renault_twingo.png");
            document.querySelector(".carimg").classList.add("carimgvisible");
            document.querySelector(".comment-on-range").classList.add("comment-on-range-visible");
            document.querySelector(".temperature-slider").value = 30;
            document.querySelector(".weather-temperature p").textContent = "20°C"
            document.querySelector(".charge-state-slider").value = 100;
            document.querySelector(".state-of-charge-switch p").textContent = "100%"
            document.querySelector(".fiftykmh").classList.add("speed-button-clicked");
            document.querySelector(".ninetykmh").classList.remove("speed-button-clicked");
            document.querySelector(".onehundredandthirtykmh").classList.remove("speed-button-clicked");
            currentSpeed = 50;
            document.querySelector("#number-of-age").value = 0;
            ageOfTheCar = 0;
            twingoCharging();
            twingoInfo();
            document.querySelector(".info-boxes").classList.add("info-boxes-visible");
            document.querySelector(".first-hr").classList.add("first-hr-visible");
            document.querySelector(".second-hr").classList.add("second-hr-visible");
            document.querySelector("#switchh").checked = false;
            document.querySelector(".weather-temperature").classList.remove("weather-temperature-unvisible");
            document.querySelector(".weather-with-api").classList.remove("weather-with-api-visible");
            document.querySelector(".weather").classList.remove("weatherafter");
            stateOfTemperature = 20;
            stateOfCharge = 100;
            rangeCalculator();
            
            
         } else  if (carNumber === 2) {
            document.querySelector(".main-boxes").classList.remove(".main-boxes");
            document.querySelector(".main-boxes").classList.add("main-boxes-visible");
            document.querySelector(".carimg").setAttribute("src", "images/renault_zoe.png");
            document.querySelector(".carimg").classList.add("carimgvisible");
            document.querySelector(".comment-on-range").classList.add("comment-on-range-visible");
            document.querySelector(".temperature-slider").value = 30;
            document.querySelector(".weather-temperature p").textContent = "20°C"
            document.querySelector(".charge-state-slider").value = 100;
            document.querySelector(".state-of-charge-switch p").textContent = "100%"
            document.querySelector(".fiftykmh").classList.add("speed-button-clicked");
            document.querySelector(".ninetykmh").classList.remove("speed-button-clicked");
            document.querySelector(".onehundredandthirtykmh").classList.remove("speed-button-clicked");
            currentSpeed = 50;
            document.querySelector("#number-of-age").value = 0;
            ageOfTheCar = 0;
            zoeCharging();
            zoeInfo();
            document.querySelector(".info-boxes").classList.add("info-boxes-visible");
            document.querySelector(".first-hr").classList.add("first-hr-visible");
            document.querySelector(".second-hr").classList.add("second-hr-visible");
            document.querySelector("#switchh").checked = false;
            document.querySelector(".weather-temperature").classList.remove("weather-temperature-unvisible");
            document.querySelector(".weather-with-api").classList.remove("weather-with-api-visible");
            document.querySelector(".weather").classList.remove("weatherafter");
            stateOfTemperature = 20
            stateOfCharge = 100;
            rangeCalculator();
            

         } else  if (carNumber === 3) {
            document.querySelector(".main-boxes").classList.remove(".main-boxes");
            document.querySelector(".main-boxes").classList.add("main-boxes-visible");
            document.querySelector(".carimg").setAttribute("src", "images/peugeot_e208.png");
            document.querySelector(".carimg").classList.add("carimgvisible");
            document.querySelector(".comment-on-range").classList.add("comment-on-range-visible");
            document.querySelector(".temperature-slider").value = 30;
            document.querySelector(".weather-temperature p").textContent = "20°C"
            document.querySelector(".charge-state-slider").value = 100;
            document.querySelector(".state-of-charge-switch p").textContent = "100%"
            document.querySelector(".fiftykmh").classList.add("speed-button-clicked");
            document.querySelector(".ninetykmh").classList.remove("speed-button-clicked");
            document.querySelector(".onehundredandthirtykmh").classList.remove("speed-button-clicked");
            currentSpeed = 50;
            document.querySelector("#number-of-age").value = 0
            ageOfTheCar = 0;
            peugeotCharging();
            peugeotInfo();
            document.querySelector(".info-boxes").classList.add("info-boxes-visible");
            document.querySelector(".first-hr").classList.add("first-hr-visible");
            document.querySelector(".second-hr").classList.add("second-hr-visible");
            document.querySelector("#switchh").checked = false;
            document.querySelector(".weather-temperature").classList.remove("weather-temperature-unvisible");
            document.querySelector(".weather-with-api").classList.remove("weather-with-api-visible");
            document.querySelector(".weather").classList.remove("weatherafter");
            stateOfTemperature = 20
            stateOfCharge = 100;
            rangeCalculator(); 
            }
})
}




   /* Speed buttons */

 var currentSpeed = 50;

document.querySelector(".fiftykmh").addEventListener("click", function() {
    document.querySelector(".fiftykmh").classList.add("speed-button-clicked");
    document.querySelector(".ninetykmh").classList.remove("speed-button-clicked");
    document.querySelector(".onehundredandthirtykmh").classList.remove("speed-button-clicked");
    currentSpeed = 50;
    rangeCalculator();
})

document.querySelector(".ninetykmh").addEventListener("click", function() {
    document.querySelector(".ninetykmh").classList.add("speed-button-clicked");
    document.querySelector(".fiftykmh").classList.remove("speed-button-clicked");
    document.querySelector(".onehundredandthirtykmh").classList.remove("speed-button-clicked");
    currentSpeed = 90;
    rangeCalculator();
})

document.querySelector(".onehundredandthirtykmh").addEventListener("click", function() {
    document.querySelector(".onehundredandthirtykmh").classList.add("speed-button-clicked");
    document.querySelector(".fiftykmh").classList.remove("speed-button-clicked");
    document.querySelector(".ninetykmh").classList.remove("speed-button-clicked");
    currentSpeed = 130;
    rangeCalculator();
})


/* Battery degradation */ 

var ageOfTheCar = Number(document.querySelector("#number-of-age").value) 

document.querySelector(".age-button-minus").addEventListener("click", function() {
    if (ageOfTheCar > 0) {
    ageOfTheCar = ageOfTheCar - 1
    document.querySelector("#number-of-age").value = ageOfTheCar
    rangeCalculator();
}
})

document.querySelector(".age-button-plus").addEventListener("click", function() {
    
    if (ageOfTheCar < 40) {
    ageOfTheCar = ageOfTheCar + 1
    document.querySelector("#number-of-age").value = ageOfTheCar
    console.log(finalEstimatedRange);
    rangeCalculator();
}
})


/* Switch to change weather/temperature mode */

weatherSwitch();

function weatherSwitch () {

document.querySelector("#switchh").addEventListener("change", function() {
    var switchState = document.querySelector("#switchh").checked;   
    
    if (switchState === true) {
            stateOfTemperature = (document.querySelector(".weather-temperature p").textContent.replace("°C", ""));
            rangeCalculator();
            document.querySelector(".weather-temperature").classList.add("weather-temperature-unvisible");
            document.querySelector(".weather-with-api").classList.add("weather-with-api-visible");
        } else if (switchState === false) {
            stateOfTemperature = (document.querySelector(".weather-temperature p").textContent.replace("°C", ""));
            rangeCalculator();
            document.querySelector(".weather-temperature").classList.remove("weather-temperature-unvisible");
            document.querySelector(".weather-with-api").classList.remove("weather-with-api-visible");
            document.querySelector(".weather").classList.remove("weatherafter");
        }
      })
}


/* OpenWeather API */



var weather = {

    "apiKey": "45d19a1b907e045a99ba3d9fcba93673",
    fetchWeather: function(city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apiKey)
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },

    displayWeather: function(data){
        const { name } = data;
        const { temp } = data.main;
        const { country } = data.sys;
        const { icon } = data.weather[0];
        console.log(name, temp, country, icon);
        document.querySelector(".city").textContent = "Weather in " + name + ", " + country
        document.querySelector(".temp").textContent = Math.round(temp) + "°C"
        document.querySelector(".icon").setAttribute("src", "https://openweathermap.org/img/wn/" + icon + ".png") 
        document.querySelector(".weather").classList.add("weatherafter");
        
        if (Math.round(temp) >= -20 && Math.round(temp) <= -10) {
            stateOfTemperature = -15;
        } else if (Math.round(temp) >= -9 && Math.round(temp) <= 0) {
            stateOfTemperature = -5;
        } else if (Math.round(temp) >= 1 && Math.round(temp) <= 12) {
            stateOfTemperature = 5;
        } else if (Math.round(temp) >= 13 && Math.round(temp) <= 27) {
            stateOfTemperature = 20;
        } else if (Math.round(temp) >= 28 && Math.round(temp) <= 40) {
            stateOfTemperature = 35;
        }
        
        rangeCalculator();
    },

    search: function() {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }

}

document.querySelector(".searchbutton").addEventListener("click", function(){
    weather.search();
    
    }
)

document.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            weather.search();
        }
}
)



/* Temperature slider value */

var stateOfTemperature

document.querySelector(".temperature-slider").addEventListener("change", function (){
    if (this.value === "0") {
        stateOfTemperature = "-15";
        document.querySelector(".weather-temperature p").textContent = stateOfTemperature + "°C"
        rangeCalculator();
    } else if (this.value === "10") {
        stateOfTemperature = -5;
        document.querySelector(".weather-temperature p").textContent = stateOfTemperature + "°C"
        rangeCalculator();
    } else if (this.value === "20") {
        stateOfTemperature = 5;
        document.querySelector(".weather-temperature p").textContent = stateOfTemperature + "°C"
        rangeCalculator();
    } else if (this.value === "30") {
        stateOfTemperature = 20;
        document.querySelector(".weather-temperature p").textContent = stateOfTemperature + "°C"
        rangeCalculator();
    } else if (this.value === "40") {
        stateOfTemperature = 35;
        document.querySelector(".weather-temperature p").textContent = stateOfTemperature + "°C"
        rangeCalculator();
    }
    
})


/* State of charge slider value */

var stateOfCharge

document.querySelector(".charge-state-slider").addEventListener("change", function (event){
    stateOfCharge = this.value;
    document.querySelector(".state-of-charge-switch p").textContent = this.value + "%"
    rangeCalculator();
    }
)


function rangeCalculator() {

var estimatedRange

switch (carNumber) {
    case 1:
        if (currentSpeed === 50 && Number(stateOfTemperature) === -15) {
            estimatedRange = 117 * (Number(stateOfCharge) / 100)
            agePercent(estimatedRange, ageOfTheCar);
        } else if (currentSpeed === 50 && Number(stateOfTemperature) === -5) {
            estimatedRange = 133 * (Number(stateOfCharge) / 100)
            agePercent(estimatedRange, ageOfTheCar);
        } else if (currentSpeed === 50 && Number(stateOfTemperature) === 5) {
            estimatedRange = 136 * (Number(stateOfCharge) / 100)
            agePercent(estimatedRange, ageOfTheCar);
        } else if (currentSpeed === 50 && Number(stateOfTemperature) === 20) {
            estimatedRange = 168 * (Number(stateOfCharge) / 100)
            agePercent(estimatedRange, ageOfTheCar);
        } else if (currentSpeed === 50 && Number(stateOfTemperature) === 35) {
            estimatedRange = 163 * (Number(stateOfCharge) / 100)
            agePercent(estimatedRange, ageOfTheCar);
        }
        
        else if (currentSpeed === 90 && Number(stateOfTemperature) === -15) {
            estimatedRange = 96 * (Number(stateOfCharge) / 100)
            agePercent(estimatedRange, ageOfTheCar);
        } else if (currentSpeed === 90 && Number(stateOfTemperature) === -5) {
            estimatedRange = 108 * (Number(stateOfCharge) / 100)
            agePercent(estimatedRange, ageOfTheCar);
        } else if (currentSpeed === 90 && Number(stateOfTemperature) === 5) {
            estimatedRange = 122 * (Number(stateOfCharge) / 100)
            agePercent(estimatedRange, ageOfTheCar);
        } else if (currentSpeed === 90 && Number(stateOfTemperature) === 20) {
            estimatedRange = 137 * (Number(stateOfCharge) / 100)
            agePercent(estimatedRange, ageOfTheCar);
        } else if (currentSpeed === 90 && Number(stateOfTemperature) === 35) {
            estimatedRange = 127 * (Number(stateOfCharge) / 100)
            agePercent(estimatedRange, ageOfTheCar);
        }

        else if (currentSpeed === 130 && Number(stateOfTemperature) === -15) {
            estimatedRange = 88 * (Number(stateOfCharge) / 100)
            agePercent(estimatedRange, ageOfTheCar);
        } else if (currentSpeed === 130 && Number(stateOfTemperature) === -5) {
            estimatedRange = 91 * (Number(stateOfCharge) / 100)
            agePercent(estimatedRange, ageOfTheCar);
        } else if (currentSpeed === 130 && Number(stateOfTemperature) === 5) {
            estimatedRange = 104 * (Number(stateOfCharge) / 100)
            agePercent(estimatedRange, ageOfTheCar);
        } else if (currentSpeed === 130 && Number(stateOfTemperature) === 20) {
            estimatedRange = 106 * (Number(stateOfCharge) / 100)
            agePercent(estimatedRange, ageOfTheCar);
        } else if (currentSpeed === 130 && Number(stateOfTemperature) === 35) {
            estimatedRange = 105 * (Number(stateOfCharge) / 100)
            agePercent(estimatedRange, ageOfTheCar);
        }
        break;






    case 2:
        if (currentSpeed === 50 && Number(stateOfTemperature) === -15) {
            estimatedRange = 152 * (Number(stateOfCharge) / 100)
            agePercent(estimatedRange, ageOfTheCar);
        } else if (currentSpeed === 50 && Number(stateOfTemperature) === -5) {
            estimatedRange = 193 * (Number(stateOfCharge) / 100)
            agePercent(estimatedRange, ageOfTheCar);
        } else if (currentSpeed === 50 && Number(stateOfTemperature) === 5) {
            estimatedRange = 239 * (Number(stateOfCharge) / 100)
            agePercent(estimatedRange, ageOfTheCar);
        } else if (currentSpeed === 50 && Number(stateOfTemperature) === 20) {
            estimatedRange = 275 * (Number(stateOfCharge) / 100)
            agePercent(estimatedRange, ageOfTheCar);
        } else if (currentSpeed === 50 && Number(stateOfTemperature) === 35) {
            estimatedRange = 259 * (Number(stateOfCharge) / 100)
            agePercent(estimatedRange, ageOfTheCar);
        }
        
        else if (currentSpeed === 90 && Number(stateOfTemperature) === -15) {
            estimatedRange = 143 * (Number(stateOfCharge) / 100)
            agePercent(estimatedRange, ageOfTheCar);
        } else if (currentSpeed === 90 && Number(stateOfTemperature) === -5) {
            estimatedRange = 167 * (Number(stateOfCharge) / 100)
            agePercent(estimatedRange, ageOfTheCar);
        } else if (currentSpeed === 90 && Number(stateOfTemperature) === 5) {
            estimatedRange = 190 * (Number(stateOfCharge) / 100)
            agePercent(estimatedRange, ageOfTheCar);
        } else if (currentSpeed === 90 && Number(stateOfTemperature) === 20) {
            estimatedRange = 216 * (Number(stateOfCharge) / 100)
            agePercent(estimatedRange, ageOfTheCar);
        } else if (currentSpeed === 90 && Number(stateOfTemperature) === 35) {
            estimatedRange = 215 * (Number(stateOfCharge) / 100)
            agePercent(estimatedRange, ageOfTheCar);
        }

        else if (currentSpeed === 130 && Number(stateOfTemperature) === -15) {
            estimatedRange = 131 * (Number(stateOfCharge) / 100)
            agePercent(estimatedRange, ageOfTheCar);
        } else if (currentSpeed === 130 && Number(stateOfTemperature) === -5) {
            estimatedRange = 138 * (Number(stateOfCharge) / 100)
            agePercent(estimatedRange, ageOfTheCar);
        } else if (currentSpeed === 130 && Number(stateOfTemperature) === 5) {
            estimatedRange = 146 * (Number(stateOfCharge) / 100)
            agePercent(estimatedRange, ageOfTheCar);
        } else if (currentSpeed === 130 && Number(stateOfTemperature) === 20) {
            estimatedRange = 162 * (Number(stateOfCharge) / 100)
            agePercent(estimatedRange, ageOfTheCar);
        } else if (currentSpeed === 130 && Number(stateOfTemperature) === 35) {
            estimatedRange = 172 * (Number(stateOfCharge) / 100)
            agePercent(estimatedRange, ageOfTheCar);
        }
        break;








    case 3:
        if (currentSpeed === 50 && Number(stateOfTemperature) === -15) {
            estimatedRange = 283 * (Number(stateOfCharge) / 100)
            agePercent(estimatedRange, ageOfTheCar);
        } else if (currentSpeed === 50 && Number(stateOfTemperature) === -5) {
            estimatedRange = 312 * (Number(stateOfCharge) / 100)
            agePercent(estimatedRange, ageOfTheCar);
        } else if (currentSpeed === 50 && Number(stateOfTemperature) === 5) {
            estimatedRange = 338 * (Number(stateOfCharge) / 100)
            agePercent(estimatedRange, ageOfTheCar);
        } else if (currentSpeed === 50 && Number(stateOfTemperature) === 20) {
            estimatedRange = 375 * (Number(stateOfCharge) / 100)
            agePercent(estimatedRange, ageOfTheCar);
        } else if (currentSpeed === 50 && Number(stateOfTemperature) === 35) {
            estimatedRange = 356 * (Number(stateOfCharge) / 100)
            agePercent(estimatedRange, ageOfTheCar);
        }
        
        else if (currentSpeed === 90 && Number(stateOfTemperature) === -15) {
            estimatedRange = 222 * (Number(stateOfCharge) / 100)
            agePercent(estimatedRange, ageOfTheCar);
        } else if (currentSpeed === 90 && Number(stateOfTemperature) === -5) {
            estimatedRange = 241 * (Number(stateOfCharge) / 100)
            agePercent(estimatedRange, ageOfTheCar);
        } else if (currentSpeed === 90 && Number(stateOfTemperature) === 5) {
            estimatedRange = 259 * (Number(stateOfCharge) / 100)
            agePercent(estimatedRange, ageOfTheCar);
        } else if (currentSpeed === 90 && Number(stateOfTemperature) === 20) {
            estimatedRange = 285 * (Number(stateOfCharge) / 100)
            agePercent(estimatedRange, ageOfTheCar);
        } else if (currentSpeed === 90 && Number(stateOfTemperature) === 35) {
            estimatedRange = 288 * (Number(stateOfCharge) / 100)
            agePercent(estimatedRange, ageOfTheCar);
        }

        else if (currentSpeed === 130 && Number(stateOfTemperature) === -15) {
            estimatedRange = 137 * (Number(stateOfCharge) / 100)
            agePercent(estimatedRange, ageOfTheCar);
        } else if (currentSpeed === 130 && Number(stateOfTemperature) === -5) {
            estimatedRange = 146 * (Number(stateOfCharge) / 100)
            agePercent(estimatedRange, ageOfTheCar);
        } else if (currentSpeed === 130 && Number(stateOfTemperature) === 5) {
            estimatedRange = 156 * (Number(stateOfCharge) / 100)
            agePercent(estimatedRange, ageOfTheCar);
        } else if (currentSpeed === 130 && Number(stateOfTemperature) === 20) {
            estimatedRange = 170 * (Number(stateOfCharge) / 100)
            agePercent(estimatedRange, ageOfTheCar);
        } else if (currentSpeed === 130 && Number(stateOfTemperature) === 35) {
            estimatedRange = 178 * (Number(stateOfCharge) / 100)
            agePercent(estimatedRange, ageOfTheCar);
        }
        break;

    default:
        console.log("Error occurred. Please contact webpage owner.")
        break;
}

}



/*agePercen(estimatedRange, ageOfTheCar);*/

var finalEstimatedRange

function agePercent (estimatedRange, ageOfTheCar) {
    finalEstimatedRange = estimatedRange * (Math.pow(0.985, ageOfTheCar));
    document.querySelector(".final-estimated-range-text").textContent = Math.round(finalEstimatedRange) + "km";
    }


/* Charging info */

function emptyCharging () {
    document.querySelector(".hundred").textContent = "";
    document.querySelector(".fifty").textContent = "";
    document.querySelector(".twentytwo").textContent = "";
    document.querySelector(".eleven").textContent = "";
    document.querySelector(".seven").textContent = "";
    document.querySelector(".three").textContent = "";
    document.querySelector(".two").textContent = "";
}

function twingoCharging () {
    document.querySelector(".hundred").textContent = "-";
    document.querySelector(".fifty").textContent = "-";
    document.querySelector(".twentytwo").textContent = "01h 30m";
    document.querySelector(".eleven").textContent = "-";
    document.querySelector(".seven").textContent = "04h 00m";
    document.querySelector(".three").textContent = "08h 00m";
    document.querySelector(".two").textContent = "15h 00m";
}

function zoeCharging () {
    document.querySelector(".hundred").textContent = "-";
    document.querySelector(".fifty").textContent = "01h 05m";
    document.querySelector(".twentytwo").textContent = "02h 01m";
    document.querySelector(".eleven").textContent = "-";
    document.querySelector(".seven").textContent = "06h 17m";
    document.querySelector(".three").textContent = "14h 10m";
    document.querySelector(".two").textContent = "28h 13m";
    }

function peugeotCharging () {
    document.querySelector(".hundred").textContent = "01h 13m";
    document.querySelector(".fifty").textContent = "01h 35m";
    document.querySelector(".twentytwo").textContent = "05h 04m";
    document.querySelector(".eleven").textContent = "05h 04m";
    document.querySelector(".seven").textContent = "07h 33mm";
    document.querySelector(".three").textContent = "15h 07m";
    document.querySelector(".two").textContent = "24h 21m";
    }



/* Car info */

function emptyInfo () {
    document.querySelector(".battery-size").textContent = "";
    document.querySelector(".acceleration").textContent = "";
    document.querySelector(".top-speed").textContent = "";
    document.querySelector(".power").textContent = "";
    document.querySelector(".weight").textContent = "";
    
    document.querySelector(".charge-port").textContent = "";
    document.querySelector(".charge-power").textContent = "";
    document.querySelector(".fast-charge-port").textContent = "";
    document.querySelector(".fast-charge-power").textContent = "";
}

function twingoInfo () {
    document.querySelector(".battery-size").textContent = "22kWh";
    document.querySelector(".acceleration").textContent = "12.9s";
    document.querySelector(".top-speed").textContent = "135km/h";
    document.querySelector(".power").textContent = "60kW, 82PS";
    document.querySelector(".weight").textContent = "1208KG";
    
    document.querySelector(".charge-port").textContent = "Type 2";
    document.querySelector(".charge-power").textContent = "22kW AC";
    document.querySelector(".fast-charge-port").textContent = "-";
    document.querySelector(".fast-charge-power").textContent = "-";
}

function zoeInfo () {
    document.querySelector(".battery-size").textContent = "41kWh";
    document.querySelector(".acceleration").textContent = "11.4km/h";
    document.querySelector(".top-speed").textContent = "135km/h";
    document.querySelector(".power").textContent = "80kW, 108PS";
    document.querySelector(".weight").textContent = "1502KG";
    
    document.querySelector(".charge-port").textContent = "Type 2";
    document.querySelector(".charge-power").textContent = "22kW AC";
    document.querySelector(".fast-charge-port").textContent = "CCS";
    document.querySelector(".fast-charge-power").textContent = "45kW DC";
}

function peugeotInfo () {
    document.querySelector(".battery-size").textContent = "50kWh";
    document.querySelector(".acceleration").textContent = "8.1s";
    document.querySelector(".top-speed").textContent = "150km/h";
    document.querySelector(".power").textContent = "100kW, 136PS";
    document.querySelector(".weight").textContent = "1530KG";
    
    document.querySelector(".charge-port").textContent = "Type 2";
    document.querySelector(".charge-power").textContent = "11kW AC";
    document.querySelector(".fast-charge-port").textContent = "CCS";
    document.querySelector(".fast-charge-power").textContent = "100kW DC";
}