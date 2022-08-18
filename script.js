document.addEventListener('DOMContentLoaded', event => {
  fetchBreweries()
})

function fetchBreweries() {
  fetch('https://api.openbrewerydb.org/breweries')
  .then(resp => resp.json())
  .then(breweries => appendBreweries(breweries))
}

function appendBreweries(breweries) {
  const ul = document.getElementById('brewery-list')
  breweries.forEach(brewery => {
    // console.log(brewery)
    // console.log(brewery.name)
    // console.log(brewery.brewery_type)
    let li = document.createElement('li')
    let p = document.createElement('p')
    li.textContent = `Name: ${brewery.name}`
    p.textContent = `Type: ${brewery.brewery_type}`
    ul.append(li, p)
  })
}
