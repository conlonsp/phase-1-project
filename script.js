document.addEventListener('DOMContentLoaded', event => {
  fetchBreweries()
  getCityAndState()
})

function getCityAndState() {
  const form = document.getElementById('city-state-form')
  form.addEventListener('submit', event => {
    event.preventDefault()
    const cityInput = document.getElementById('city')
    const stateInput = document.getElementById('state')
    let city = cityInput.value.toLowerCase()
    let state = stateInput.value.toLowerCase()
    console.log('city: ', city, 'state: ', state)
    fetchBreweries(city, state)
  })
}

function fetchBreweries(city, state) {
  fetch(`https://api.openbrewerydb.org/breweries?by_city=${city}&by_state=${state}&per_page=100`)
  .then(resp => resp.json())
  .then(breweries => appendBreweries(breweries))
}

function appendBreweries(breweries) {
  const ul = document.getElementById('brewery-list')
  breweries.forEach(brewery => {
    let li = document.createElement('li')
    let p = document.createElement('p')
    li.textContent = `Name: ${brewery.name}`
    p.textContent = `Type: ${brewery.brewery_type}`
    ul.append(li, p)
  })
}
