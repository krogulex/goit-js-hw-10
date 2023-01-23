import './css/styles.css';
import { fetchCountries } from './fetchCountries';

const DEBOUNCE_DELAY = 300;

const input = document.querySelector('input')
//const list = document.querySelector('.country-list')



input.addEventListener('input', (event) => {

    const name = event.currentTarget.value.trim()
    fetchCountries(name)

})
