//DOM Element
let generateBtn = document.getElementById('generate')

function randomNum() {
    //DOM Elements
    let min = document.getElementById('min')
    let max = document.getElementById('max')

    //Variables
    let minValue = Number(min.value)
    let maxValue = Number(max.value)
    if(minValue > maxValue) {
        minValue = maxValue + minValue;
        maxValue = minValue - maxValue;
        minValue = minValue - maxValue;
        min.value = minValue;
        max.value = maxValue;
    }
}

//Event listeners
window.addEventListener('load', randomNum())
generateBtn.addEventListener('click', randomNum)