import Swal from 'sweetalert2';

import { renderCoins } from './components';
import { fetchExchange } from './services/exchange';

import './style.css';
import './reset.style.css';

const buttonElement = document.querySelector('header form button');

buttonElement.addEventListener('click', () => {
  const inputElement = document.querySelector('header form input');
  const inputValue = inputElement.value;
  if (!inputValue) {
    Swal.fire({
      title: 'Erro!',
      text: 'Você precisa digitar uma moeda!',
      icon: 'error',
      confirmButtonText: 'OK',
    });
    return;
  }
  fetchExchange(inputValue)
    .then((exchange) => {
      const { base } = exchange;
      const { rates } = exchange;
      const ratesArray = Object.entries(rates);
      const ratesArrayToObject = ratesArray.map((rateCoin) => {
        const [name, value] = rateCoin;
        return {
          name,
          value,
        };
      });
      renderCoins(ratesArrayToObject, base);
    })
    .catch((error) => {
      Swal.fire({
        title: 'Erro!',
        text: error.message,
        icon: 'error',
        confirmButtonText: 'OK',
      });
    });
});
