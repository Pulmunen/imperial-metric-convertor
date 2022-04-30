const inputValue = document.getElementById("input-value")
const conversionValue = document.getElementById("conversion-value")
const feet = document.getElementById("feet")
const metres = document.getElementById("metres")
const gallons = document.getElementById("gallons")
const litres = document.getElementById("litres")
const pounds = document.getElementById("pounds")
const kilograms = document.getElementById("kilograms")

const userInput = document.querySelectorAll(".user-input")
computeButton = document.getElementById("compute-button")

computeButton.addEventListener("click", myFunction)



function myFunction() {
userInput.forEach(input => {
    input.innerHTML = inputValue.value;
  })
  metresToFeet()
  feetToMetres()
  poundsToKilograms()
  kilogramsToPounds()
  gallonsToLitres()
  litresToGallons()
}

function metresToFeet(){
    let formattedFeet = inputValue.value*3.28;
    feet.innerHTML = formattedFeet.toFixed(2)
}

function feetToMetres(){
    let formattedMetres= inputValue.value/3.28;
    metres.innerHTML = formattedMetres.toFixed(2)
}

function kilogramsToPounds(){
    let formattedPounds= inputValue.value*2.2046;
    pounds.innerHTML = formattedPounds.toFixed(2)
}

function poundsToKilograms(){
    let formattedKilograms=inputValue.value/2.2046;
    kilograms.innerHTML = formattedKilograms.toFixed(2)
}

function gallonsToLitres(){
    let formattedLitres = inputValue.value/0.264
    litres.innerHTML = formattedLitres.toFixed(2)
}

function litresToGallons(){
    let formattedGallons = inputValue.value*0.264
    gallons.innerHTML = formattedGallons.toFixed(2)
}