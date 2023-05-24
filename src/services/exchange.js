export function fetchExchange(inputValue) {
  return fetch(`https://api.exchangerate.host/latest?base=${inputValue}`)
    .then((response) => response.json())
    .then((result) => {
      const { base } = result;
      if (base !== inputValue.toUpperCase()) {
        throw new Error('Moeda não existente!');
      }
      return result;
    });
}
