const apiKey = 'fda48c59cbfb8414a4b2d9a30cdc1e67'

export async function getWeatherData(city){
   const openWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`
   const response = await fetch(openWeatherUrl)

   const data = await response.json()

   return data
}