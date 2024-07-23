
function calculateBMI(){

var weight = document.getElementById("weight").value;
var height = document.getElementById("height").value;

heightinMeter = (height/100);

var bmi = (weight/(heightinMeter * heightinMeter));
var result = "Your BMI is " + bmi;
document.getElementById("result").innerText = result;

}