import './style.css';

const submit = document.getElementById('search');
const receive = document.getElementById('moeda');
const recebeMoeda = (moeda) => {
  fetch(`https://api.exchangerate.host/latest?base=${moeda}`)
    .then((response) => console.log(response));
};
submit.addEventListener('click', () => {
  recebeMoeda(receive.value);
});
