(function navegation() {
  const btnOpen = document.querySelector('.btn-nav');
  const nav = document.querySelector('.wrapper-nav');
  const body = document.querySelector('body');
  const textBtn = document.querySelector('.btn-nav__text');
  let state = true;
  function openNav() {
    nav.classList.toggle('nav-open');
    if (state === true) {
      textBtn.innerHTML = 'cerrar';
      body.style.overflow = 'hidden';
      state = false;
    } else if (state === false) {
      textBtn.innerHTML = 'menú';
      body.style.overflow = 'initial';
      state = true;
    }
  }
  btnOpen.addEventListener('click', openNav);
}());
