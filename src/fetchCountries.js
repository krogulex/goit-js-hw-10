import Notiflix from 'notiflix';

function fetchCountries(name) {
  const list = document.querySelector('.country-list');
  const info = document.querySelector('.country-info');

  fetch(`https://restcountries.com/v3.1/name/${name}`)
    .then(response => response.json())
    .then(data => {
      const mappedData = data.map(item => {
        return {
          name: item.name.official,
          capital: item.capital,
          population: item.population,
          flag: item.flags.svg,
          languages: item.languages,
        };
      });

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
          country.innerHTML = `<img class="country-flag"  src=${element.flag}> ${element.name}`;
          list.append(country);
        }
      }
      if (mappedData.length === 1) {
        list.innerHTML = '';
        const countryInfo = mappedData[0];
        info.innerHTML = `<ul class="country-info-list">
            <li><img class="country-flag-info"  src=${countryInfo.flag}> <span class="country-info-name">${countryInfo.name}</span></li>
            <li><strong>Capital:</strong> ${countryInfo.capital}</li>
            <li><strong>Population:</strong> ${countryInfo.population}</li>
            <li><strong>Languages:</strong> ${countryInfo.languages}</li>
          </ul>`;
        //spróbować value
          //Nie pokazuje mi popranwnie języka w danym kraju, gdyż ten język jest ukryty poziom niżej w obiekcie i polski ma np tablice, gdzie kluczem jest pol. A np Szwedzki ma obiekt gdzie kluczem jest swe. Wiec nie wiem co zrobić, żeby to zaglądało wgłąb tego obiektu.
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
