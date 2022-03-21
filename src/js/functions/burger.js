(function(){
  const burger = document?.querySelector('[data-burger]');
  const menu = document?.querySelector('[data-menu]');
  const sign = document?.querySelector('[data-sign]');
  const loggedSmart = document?.querySelector('[data-logged]');

  burger?.addEventListener('click', (e) => {
    burger?.classList.toggle('active');
    menu?.classList.toggle('active');
    sign?.classList.toggle('active');
    loggedSmart?.classList.toggle('active');
    document.body.classList.toggle('overflow-h');
  });
})();
