import './css/styles.css';
import { fetchCountries } from './fetchCountries'
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 500;
let markUp = ``;

const refs = {
    input: document.querySelector('#search-box'),
    ul: document.querySelector(`.country-list`)
}


refs.input.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY))

function onInput() {
    const requestedCountry = refs.input.value.trim();
    if (!requestedCountry ) {return}
    fetchCountries(requestedCountry)
        .then(data => {
            console.log(data)
            markUpCountries(data)})
        .catch(error => Notiflix.Notify.failure('Oops, there is no country with that name'));
    
}


console.log(3);

function markUpCountries(arrayOfCountries) {
    // const {}
    
    if (arrayOfCountries.length > 10)
    {Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
    }else  if (arrayOfCountries.length === 1) {
        markUp = arrayOfCountries.map(({ capital, flags, languages, name, population}) => `<li><div class="wrapper">
        <img src="${flags.svg}" alt="Country flag" width="40" height='40' /><h1>${name.official}</h1></div>
        <p><b>Capital:</b> ${capital}</p>
        <p><b>Population:</b> ${population}</p>
        <p><b>Languages:</b> ${Object.values(languages)}</p>
      </li>`).join(``)
        return refs.ul.innerHTML = markUp;
    }
    
} 
