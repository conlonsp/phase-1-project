document.addEventListener('DOMContentLoaded', event => {
  getPageNum()
})

function getPageNum() {
  let pageNum = 1
  const nextBtn = document.getElementById('next')
  const backBtn = document.getElementById('back')
  nextBtn.addEventListener('click', event => {
    pageNum++
    console.log(pageNum)
  })
  backBtn.addEventListener('click', event => {
    pageNum--
    console.log(pageNum)
  })
  console.log(pageNum)
  getCityAndState(pageNum)
}

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

function fetchBreweries(city, state, pageNum) {
  fetch(`https://api.openbrewerydb.org/breweries?by_city=${city}&by_state=${state}&per_page=50&`)
  .then(resp => resp.json())
  .then(breweries => appendBreweries(breweries))
}

function appendBreweries(breweries) {
  const ul = document.getElementById('brewery-list')
  while(ul.firstChild) {
    ul.removeChild(ul.firstChild)
  }
  breweries.forEach(brewery => {
    let li = document.createElement('li')
    let p = document.createElement('p')
    let likeBtn = document.createElement('button')
    let dislikeBtn = document.createElement('button')
    likeBtn.textContent = 'Gulp'
    dislikeBtn.textContent = 'Belch'
    li.textContent = `Name: ${brewery.name}`
    p.textContent = `Type: ${brewery.brewery_type}`
    ul.append(li, p, likeBtn, dislikeBtn)
    likeButton(likeBtn, dislikeBtn)
    highlightBreweryAndType(li, p)
  })
}

function likeButton(likeBtn) {

}

function highlightBreweryAndType(li, p) {
  console.log(li, p)
  li.addEventListener('mouseover', event => {
    event.target.style.color = 'gold'
    setTimeout(() => {
      event.target.style.color = ''
    }, 1000)
  })
  p.addEventListener('mouseover', event => {
    event.target.style.color = 'orange'
    setTimeout(() => {
      event.target.style.color = ''
    }, 1000)
  })
}


