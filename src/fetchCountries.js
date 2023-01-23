

function fetchCountries(name) {

    const list = document.querySelector('.country-list')
    const info = document.querySelector('.country-info')

    fetch(`https://restcountries.com/v3.1/name/${name}`)
    .then (response => response.json())
    .then (data => {
        const mappedData = data.map(item => {
            return {
                name: item.name.official,
                capital: item.capital,
                population: item.population,
                flag: item.flags.svg,
                languages: item.languages,
            }
        });
        console.log(mappedData)

        if (mappedData.length > 10) {
          //  window.alert('To many matches')
          list.innerHTML = '' 
          info.innerHTML = ''
        }
        if (mappedData.length >= 2 && mappedData.length <= 10) {
            list.innerHTML = '' 
            info.innerHTML = ''
            for (let i = 0; i < mappedData.length; i++) {

                const element = mappedData[i];
                const country = document.createElement("li")
                country.classList.add("country-item")
                country.innerHTML =`<img class="country-flag"  src=${element.flag}> ${element.name}`
                list.append(country)
            }
        }
        if (mappedData.length === 1) {
            list.innerHTML = '' 
            const countryInfo = mappedData[0]
            console.log(countryInfo)
            info.innerHTML = `<ul class="country-info-list">
            <li><img class="country-flag-info"  src=${countryInfo.flag}> <span class="country-info-name">${countryInfo.name}</span></li>
            <li><strong>Capital:</strong> ${countryInfo.capital}</li>
            <li><strong>Population:</strong> ${countryInfo.population}</li>
            <li><strong>Languages:</strong> ${countryInfo.languages}</li>
          </ul>`

            
        }
    })
    .catch (error => {
        console.log('errors')
        list.innerHTML = ''
        info.innerHTML = ''
    })
}


export { fetchCountries };