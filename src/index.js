import './css/styles.css';
import { fetchCountries } from './fetchCountries'
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;

const refs = {
    input: document.querySelector('#search-box')
}


refs.input.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY))

function onInput() {
    const requestedCountry = refs.input.value.trim();
    if (!requestedCountry) {return}
    
    fetchCountries(requestedCountry)
        .then(data => console.log(data))
       .catch(error => console.log(`We've got an`, error));
}


console.log(2);


