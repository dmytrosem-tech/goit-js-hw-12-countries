import './css/styles.css';
import fCountries from './js/fetchCountries.js';
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
    .catch(errResult);
}

function renderResultOfSearch(result) {
  if (result.length > 1 && result.length <= 10) {
    const markup = countryListTpl(result.map(item => item.name));
    refs.container.innerHTML = markup;
    return;
  } else if (result.length === 1) {
    const markup = countryCardTpl(result[0]);
    refs.container.innerHTML = markup;
    return;
  } else if (result.length > 10) {
    refs.container.innerHTML = '';
    const errNote = error({
      text: 'Too many countries found. Please enter a more specific query',
      delay: 2000,
      addClass: 'notify-err',
      closer: false,
      sticker: false,
    });
  } else if (result.status === 404) {
    refs.container.innerHTML = '';
    const errNotify = error({
      text: 'No countries found. Please enter a more specific query',
      delay: 2000,
      addClass: 'notify-err',
      closer: false,
      sticker: false,
    });
  } else {
    refs.container.innerHTML = '';
  }
}

function errResult(result) {
  refs.container.innerHTML = '';
  console.log('err', error);
}
