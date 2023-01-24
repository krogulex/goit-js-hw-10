import Notiflix from 'notiflix';

function fetchCountries(name) {
  const list = document.querySelector('.country-list');
  const info = document.querySelector('.country-info');

  fetch(`https://restcountries.com/v3.1/name/${name}?fields=languages,name,official,population,flags`)
    .then(response => response.json())
    .then(data => {
      const mappedData = data
        console.log(mappedData)

      if (mappedData.length > 10) {
        Notiflix.Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
        list.innerHTML = '';
        info.innerHTML = '';
      }
      if (mappedData.length >= 2 && mappedData.length <= 10) {
        list.innerHTML = '';
        info.innerHTML = '';
        for (let i = 0; i < mappedData.length; i++) {
        
          const element = mappedData[i];
          const country = document.createElement('li');
          country.classList.add('country-item');
          country.innerHTML = `<img class="country-flag"  src=${element.flags.svg}> ${element.name.official}`;
          list.append(country);
        }
      }
      if (mappedData.length === 1) {
        list.innerHTML = '';
        const countryInfo = mappedData[0];
        const languages = Object.values(countryInfo.languages)

        info.innerHTML = `<ul class="country-info-list">
            <li><img class="country-flag-info"  src=${countryInfo.flags.svg}> <span class="country-info-name">${countryInfo.name.official}</span></li>
            <li><strong>Capital:</strong> ${countryInfo.capital}</li>
            <li><strong>Population:</strong> ${countryInfo.population}</li>
            <li><strong>Languages:</strong> ${languages.join(', ')}</li>
          </ul>`;
      }
    })
    .catch(error => {
      console.log('error');
      list.innerHTML = '';
      info.innerHTML = '';
      Notiflix.Notify.failure('Oops, there is no country with that name');
    });
}

export { fetchCountries };
