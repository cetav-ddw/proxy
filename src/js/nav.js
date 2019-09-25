(function navegation() {
  const btnOpen = document.querySelector('.btn-nav');
  const nav = document.querySelector('.wrapper-nav');
  function openNav() {
    nav.classList.toggle('nav-open');
    btnOpen.classList.toggle('btn-nav--close');
  }
  btnOpen.addEventListener('click', openNav);
}());
