// function handleMenu(value) {
//     value === true
//       ? (openBtn.classList.add('inactive'), closeBtn.classList.remove('inactive'))
//       : (openBtn.classList.remove('inactive'), closeBtn.classList.add('inactive'))
//   }

// Ici une condition ternaire
// function handleMenu(value) {
//     value
//       ? (openBtn.classList.add('inactive'), closeBtn.classList.remove('inactive'))
//       : (openBtn.classList.remove('inactive'), closeBtn.classList.add('inactive'))
//   }

// function handleMenu(value) {
//   switch (value) {
//     case true:
//       openBtn.classList.add('inactive')
//       closeBtn.classList.remove('inactive')
//       break
//     case false:
//       openBtn.classList.remove('inactive')
//       closeBtn.classList.add('inactive')
//       break
//     default:
//       console.log("pas d'inspiration")
//   }
//   console.log('j execute une fonction en complément du switch quoi qu il arrive ')
// }
// function handleMenu(value) {
// if (value === true) {
//   openBtn.classList.add('inactive')
// closeBtn.classList.remove('inactive')
// } else {
//  openBtn.classList.remove('inactive')
//  closeBtn.classList.add('inactive')
//  }
// }

function openMenu() {
  openBtn.classList.add('inactive')
  closeBtn.classList.remove('inactive')
  navBurger.classList.remove('inactive')
  mainContent.classList.add('inactive')
}

function closeMenu() {
  openBtn.classList.remove('inactive')
  closeBtn.classList.add('inactive')
  navBurger.classList.add('inactive')
  mainContent.classList.remove('inactive')
}
