document.addEventListener('DOMContentLoaded', event => {
  getCityAndState()
})

function getCityAndState() {
  const form = document.getElementById('city-state-form')
  form.addEventListener('submit', event => {
    event.preventDefault()
    const cityInput = document.getElementById('city')
    const stateInput = document.getElementById('state')
    let city = encodeURIComponent(cityInput.value.toLowerCase())
    let state = encodeURIComponent(stateInput.value.toLowerCase())
    if(city === '') {
      city = null
    } else {
      city
    }
    if(state === '') {
      state = null
    } else {
      state
    }
    fetchBreweries(city, state)
    form.reset()
  })
}

function fetchBreweries(city, state) {
  fetch(`https://api.openbrewerydb.org/breweries?by_city=${city}&by_state=${state}&per_page=50`)
  .then(resp => resp.json())
  .then(breweries => appendBreweries(breweries))
}

function appendBreweries(breweries) {
  const ul = document.getElementById('brewery-list')
  while(ul.firstChild) {
    ul.removeChild(ul.firstChild)
  }
  breweries.forEach(brewery => {
    let name = document.createElement('li')
    let street = document.createElement('p')
    let type = document.createElement('p')
    let likeBtn = document.createElement('button')
    let dislikeBtn = document.createElement('button')
    likeBtn.textContent = 'Gulp'
    dislikeBtn.textContent = 'Belch'
    name.textContent = `Name: ${brewery.name}`
    if(brewery.street === null) {
      street.textContent = ''
    } else {
      street.textContent = `Street: ${brewery.street}`
    }
    type.textContent = `Type: ${brewery.brewery_type}`
    ul.append(name, street, type, likeBtn, dislikeBtn)
    likeButtons(likeBtn, dislikeBtn)
    highlightBreweryInfo(name, street, type)
    unhighlightBreweryInfo(name, street, type)
  })
}

function likeButtons(likeBtn, dislikeBtn) {
  likeBtn.addEventListener('click', event => {
    if(event.target.innerText === 'Gulp') {
      likeBtn.disabled = true
      dislikeBtn.disabled = false
      likeBtn.style.color = 'green'
      dislikeBtn.style.color = 'black'
    }
  })
  dislikeBtn.addEventListener('click', event => {
    if(event.target.innerText === 'Belch') {
      likeBtn.disabled = false
      dislikeBtn.disabled = true
      dislikeBtn.style.color = 'red'
      likeBtn.style.color = 'black'
    }
  })
}

function highlightBreweryInfo(name, street, type) {
  name.addEventListener('mouseover', event => {
    event.target.style.color = 'darkgoldenrod'
  })
  street.addEventListener('mouseover', event => {
    event.target.style.color = 'goldenrod'
  })
  type.addEventListener('mouseover', event => {
    event.target.style.color = 'orange'
  })
}

function unhighlightBreweryInfo(name, street, type) {
  name.addEventListener('mouseout', event => {
    event.target.style.color = 'black'
  })
  street.addEventListener('mouseout', event => {
    event.target.style.color = 'black'
  })
  type.addEventListener('mouseout', event => {
    event.target.style.color = 'black'
  })
}


/////////////////////// FUTURE ADDITIONS ////////////////////////

// function getPageNum() {
//   let pageNum = 1
//   const nextBtn = document.getElementById('next')
//   const backBtn = document.getElementById('back')
//   nextBtn.addEventListener('click', event => {
//     pageNum++
//     console.log(pageNum)
//   })
//   backBtn.addEventListener('click', event => {
//     pageNum--
//     console.log(pageNum)
//   })
//   console.log(pageNum)
//   getCityAndState(pageNum)
// }
