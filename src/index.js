import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import _ from 'lodash';

const DEBOUNCE_DELAY = 300;

const input = document.querySelector('input');

function countriesFilter(event) {
  let inputText = document.querySelector('input');

  const name = inputText.value;
  fetchCountries(name);
}

input.addEventListener('input', _.debounce(countriesFilter, DEBOUNCE_DELAY));
