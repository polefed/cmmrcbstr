// ===================================================================================================================================================================================================================================================================================================================================================================================================================================
// ===================================================================================================================================================================================================================================================================================================================================================================================================================================

// change class on scroll

window.addEventListener('scroll', function () {
  const myHeader = document.querySelector('#header');
  myHeader.classList.toggle('__scrolled', window.scrollY > 0)
})