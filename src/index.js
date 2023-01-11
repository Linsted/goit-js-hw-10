import './css/styles.css';
import {fetchCountries} from './fetchCountries'

const DEBOUNCE_DELAY = 300;

const refs = {
    input: document.querySelector('#search-box')
}

// fetchCountries(name)
    refs.input.addEventListener('input', onInput)

function onInput() {
    const requestedCountry = refs.input.value;
    fetchCountries(requestedCountry)
}


console.log(1);


