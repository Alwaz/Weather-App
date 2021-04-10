// ACCESSING ALL THE HTML COMPONENTS REQUIRED TO PERFORM ACTIONS ON.
let button = document.querySelector('.button')
let inputvalue = document.querySelector('.inputValue')
let nameVal = document.querySelector('.name');
let temp = document.querySelector('.temp');
let desc = document.querySelector('.desc');


// ADDING EVENT LISTENER TO SEARCH BUTTON  
button.addEventListener('click', function(){

    // Fection data from open weather API
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputvalue.value}&units=metric&appid=108dd9a67c96f23039937fe6f3c91963`)
    .then(response => response.json())
    .then(
        displayData)
    .catch(err => alert('Wrong City name')); 

})

// Function to diplay weather on html document
const displayData=(weather)=>{
    temp.innerText=`${weather.main.temp}°C`
    desc.innerText=`${weather.weather[0].main}`

}

    
