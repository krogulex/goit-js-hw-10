import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import _ from 'lodash';


const DEBOUNCE_DELAY = 300;

const input = document.querySelector('input')
//const list = document.querySelector('.country-list')

function countriesFilter(event) {
    const name = event.currentTarget.value.trim()
    fetchCountries(name)
}
//Nie rozumiem czemu poniższy debounce nie działa?
 //input.addEventListener('input', _.debounce(countriesFilter, DEBOUNCE_DELAY))

input.addEventListener('input', countriesFilter)