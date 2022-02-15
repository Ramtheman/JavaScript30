const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

const prom = fetch(endpoint)
  .then(response => response.json())
  .then(data => cities.push(...data))


  // case sensitive filtering? Use regex
const findMatches = function(wordToMatch, cities) {
  return cities.filter(place => {
    // figure out if the city or state matches what was searched
    const regex = RegExp(wordToMatch, 'gi');
    return place.city.match(regex) || place.state.match(regex);
  });
}

const displayMatches = function() {
  const matchArray = findMatches(this.value, cities);
  const html = matchArray.map(place => {
    return `
      <li>
        <span class='name'>${place.city}, ${place.state}</span>
        <span class='population'>${place.population}</span>
      </li>
    `;
  }).join('');
  suggestions.innerHTML = html;
}

const searchInput = document.querySelector(".search");
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('keyup', displayMatches);
