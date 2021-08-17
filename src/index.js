import './css/styles.css';
import './js/fetchCountries.js';
import countryListTpl from './templates/countries.hbs';
import countryCardTpl from './templates/country.hbs';
import debounce from 'lodash.debounce';

fetch('https://pixabay.com/api/?key=22969021-19f1494240440c9eacf690dfa&image_type=illustration&orientation=vertical')
.then(response => response.json())
.then(data => console.log(data.hits))
.catch(err => console.log(err));