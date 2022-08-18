document.addEventListener('DOMContentLoaded', event => 
  appendBreweries()
)

function fetchBreweriesByLocation() {
  fetch('https://api.openbrewerydb.org/breweries')
  .then(resp => resp.json())
  .then(data => console.log(data))
}



