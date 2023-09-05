import { showWeatherData } from './showWeatherData.js'

document.querySelector('#search').addEventListener('click', () => {
   const city = document.querySelector('input').value

   showWeatherData(city)
})

document.querySelector('input').addEventListener("keyup", (ev) => {
   ev.preventDefault()

   if (ev.code === "Enter") {
     const city = ev.target.value
 
     showWeatherData(city)
   }
})
