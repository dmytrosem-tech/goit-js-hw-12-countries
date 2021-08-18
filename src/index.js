import './css/styles.css';
<<<<<<< HEAD
import countryListTpl from './templates/countries.hbs';
import countryCardTpl from './templates/country.hbs';
import debounce from 'lodash.debounce';
import { alert, info, success, error } from '../node_modules/@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/BrightTheme.css';

const countryParams = ['name', 'capital', 'population', 'languages', 'flag'];

const refs = {
  container: document.querySelector('.countries'),
  inputField: document.querySelector('.input-field'),
};

refs.inputField.addEventListener('input', debounce(onEnterName, 1000));

function onEnterName(e) {
  const inputValue = e.target.value;

  fCountries(inputValue, countryParams)
    .then(renderResultOfSearch)
    .catch(err => console.log(err));
}
// console.log('lol');

function renderResultOfSearch(result) {
  if (result.length > 1 && result.length <= 10) {
    const markup = countryListTpl(result.map(item => item.name));
    refs.container.innerHTML = markup;
  } else if (result.length === 1) {
    const markup = countryCardTpl(result[0]);
    refs.container.innerHTML = markup;
  }
}

=======
import './js/fetchCountries.js';
import countryListTpl from './templates/countries.hbs';
import countryCardTpl from './templates/country.hbs';
import debounce from 'lodash.debounce';
>>>>>>> parent of 150f73b (almost)
