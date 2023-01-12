export { fetchCountries };
import Notiflix from 'notiflix';

function fetchCountries(name) {
    const BASE_URL = `https://restcountries.com/v3.1/name/`;
  
   return fetch(`${BASE_URL}${name}?fields=name,capital,population,flags,languages`)
       .then(response => {
           
           if(response.status === 404 && !response.ok) { throw new Error }
           
           return response.json()
       })
       
}