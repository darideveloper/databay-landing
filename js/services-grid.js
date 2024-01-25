// Horizon scroll for services grid in mobile

// Links who require scroll
const servicesGrid = document.querySelector('.services-grid .container-lg')
let leftLinks = []
let middileLinks = []

function refreshLinks() {
  // Reload links elemnts and listeners
  leftLinks = document.querySelectorAll('.services-grid .container-lg [data-id]')
  middileLinks = document.querySelectorAll('#parte2 li')

  // Add listener to each left link
  leftLinks.forEach(link => {
    link.addEventListener('click', () => {
      console.log('click left link')
      // scroll to middle (30%)
      servicesGrid.scrollLeft = servicesGrid.scrollWidth * 0.3 

      // Recursive update elements and listeners
      refreshLinks()
    })
  })

  // Add listener to each middle link
  middileLinks.forEach(link => {
    link.addEventListener('click', () => {
      console.log('click middle link')
      // scroll to end (100%)
      servicesGrid.scrollLeft = servicesGrid.scrollWidth 

      // Recursive update elements and listeners
      refreshLinks()
    })
  })
}
  
// Initial refresh
refreshLinks ()
