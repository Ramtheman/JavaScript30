const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

const prom = fetch(endpoint)
  .then(response => response.json())
  .then(data => cities.push(...data));

const input = document.querySelector(".search");
const value = input.value;

input.addEventListener('input', updateValue);

const updateValue = function(e) {
  value = e.target.value;
}


const filtered_prom = cities.filter(place => place.city.includes(value));
