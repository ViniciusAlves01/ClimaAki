
export async function updateFlag(country){
   const countryFlagUrl = `https://flagsapi.com/${country}/flat/64.png`

   document.querySelector('#country-flag').setAttribute('src', countryFlagUrl)
}