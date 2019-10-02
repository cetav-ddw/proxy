(function navegation() {
  const btnOpen = document.querySelector('.btn-nav');
  const nav = document.querySelector('.wrapper-nav');
  const body = document.querySelector('body');
  const text_btn = document.querySelector('.btn-nav__text');
  let state = true;
  function openNav() {
    nav.classList.toggle('nav-open');
    if (state == true){ 
      text_btn.innerHTML = 'cerrar';
      body.style.overflow = 'hidden';
      state = false;
    }else if (state == false) {
      text_btn.innerHTML = 'menú';
      body.style.overflow = 'initial';
      state = true;
    }
  }
  btnOpen.addEventListener('click', openNav);
}());
