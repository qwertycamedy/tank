const balance = document?.querySelector('[data-balance]');
  const takeOut = document?.querySelector('[data-take]');
  const top = document?.querySelector('[data-top]');
  const logged = document?.querySelector('[data-logged]');
  const sum = document?.querySelector('[data-sum]');

  balance?.addEventListener('click', (e) => {
    balance?.classList.toggle('active');
    takeOut?.classList.toggle('active');
    top?.classList.toggle('active');
    sum?.classList.toggle('active');
    logged?.classList.toggle('active');
  });
