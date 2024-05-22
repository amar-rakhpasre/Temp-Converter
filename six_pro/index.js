const userText = document.getElementById("userText");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const Result = document.getElementById("Result");
let temp;


function Convert(){

    if(toFahrenheit.checked){
        temp = userText.value;
        temp = Number(temp);
        temp = temp * 9 / 5 + 32;
        Result.textContent = temp + "°F";


    }else if(toCelsius.checked){
        temp = Number(userText.value);
        temp = Number(temp);
        temp = (temp - 32) * (5/9);
        Result.textContent = temp.toFixed(1) + "°C";

    }else{
        Result.textContent = "Select a unit";
    }

}