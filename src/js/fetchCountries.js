export default function fetchCountries(nameInInput, countryParams) {
    const BASE_API = 'https://restcountries.eu/rest/v2/name/';
  
    let CREATED_API = BASE_API + nameInInput + `?fields=${countryParams.join(';')}`;
  
    return fetch(CREATED_API)
      .then(res => res.json())
      .catch(error => console.log(error));
  }
