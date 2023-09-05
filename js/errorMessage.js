export function errorMessage(){
   console.log('error')
   document.querySelector('#error-container').classList.remove('hide')
   document.querySelector('#weather-datas').classList.add('hide')
}