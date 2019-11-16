/**
 * Setting the background colour for the navigation
 * after opening the hamburger menu.
 *
 * @param {string} cssStyle The CSS class that is added
*/
function styleNav (cssStyle) {
  const checkbox = document.querySelector('#nav-trigger')
  const parentElement = document.querySelector('nav')
  checkbox.addEventListener('change', e => {
    if (checkbox.checked) {
      parentElement.classList.add(cssStyle)
    } else {
      parentElement.classList.remove(cssStyle)
    }
  })

  console.log(checkbox)
}

styleNav('site-nav--bgcolor')
