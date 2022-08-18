document.addEventListener('DOMContentLoaded', event => {
  fetchBreweries()
  
})

function fetchBreweries() {
  fetch('https://api.openbrewerydb.org/breweries')
  .then(resp => resp.json())
  .then(breweries => appendBreweries(breweries))
}


