import { errorMessage } from './errorMessage.js'
import { getWeatherData } from './getWeatherData.js'
import { updateFlag } from './updateFlag.js'


export async function showWeatherData(city){
   const data = await getWeatherData(city)
   
   if(data.cod === 200){
      document.querySelector('#error-container').classList.add('hide')
      document.querySelector('#weather-datas').classList.remove('hide')

      document.querySelector('#city-name').textContent = data.name
      document.querySelector('#temperature span').textContent = parseInt(data.main.temp)
      document.querySelector('#weather-description').textContent = data.weather[0].description
      document.querySelector('#thermal-sensation span').textContent = parseInt(data.main.feels_like)
      document.querySelector('#wind-speed span').textContent = parseInt(data.wind.speed)
      document.querySelector('#pressure span').textContent = data.main.pressure
      document.querySelector('#humidity span').textContent = data.main.humidity

      document.querySelector('#description-icon').setAttribute('src', `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`)

      updateFlag(data.sys.country)
   }else{
      errorMessage()
   }
}
