export { fetchCountries };

function fetchCountries(name) {
    const BASE_URL = `https://restcountries.com/v3.1/name/`;
  

  
    

   return fetch(`${BASE_URL}${name}?fields=name,capital,population,flags,languages`)
       .then(response => { return response.json() })
       .then(data => console.log(data))
       .catch(error => console.log(error));
}