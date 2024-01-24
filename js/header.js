// Elements
const headerButtons = document.querySelectorAll('.header-button')
const nav = document.querySelector('nav')

// Events
headerButtons.forEach(button => {
  button.addEventListener('click', () => {
    console.log('click header button')
    nav.classList.toggle('open')
  })
})