(function() {
  const btnOpen = document.querySelector('#open');
  const body = document.querySelector('body');
  const nav = document.querySelector('.wrapper-nav');
  const btnClose = document.querySelector('#close');
  function openNav() {
    nav.classList = 'nav-open';
    body.style.overflow = 'hidden';
  }
  function closeNav() {
    nav.className = 'wrapper-nav';
    body.style.overflow = 'initial'
  }
  btnOpen.addEventListener('click', openNav);
  btnClose.addEventListener('click', closeNav);
}())
