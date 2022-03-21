//modals
if(document.querySelector('.modals')) {

//small-modals
  function clicker(btn, curObj) {
    btn.addEventListener('click', () => {
      curObj.classList.add("show");

      let timer = setTimeout(function() {
        curObj.classList.remove('show');
      }, 3000);
    });
  }



  if (document.querySelector('.warning') && !document.querySelector('.header__logged')) {
    let warningModal = document.querySelector('.warning'),
      buyBtn = document?.querySelector('.tank-acc__btn');

    clicker(buyBtn, warningModal);
  }

//payment
  if (document.querySelector('.payment') && document.querySelector('.header__logged')) {
    let paymentModal = document.querySelector('.payment'),
      successModal = document.querySelector('.success'),
      headerTopUp = document.querySelector('.header__logged-top-up'),
      buyBtn = document?.querySelector('.tank-acc__btn'),
      secBuyBtn = document?.querySelector('.acc-info__btn'),
      continueBtn = document?.querySelector('.payment__btn'),
      closeBtn = document?.querySelector('.payment__close');

      paymentModal.addEventListener('click', function(e) {
        let targ = e.target;

        if(targ.classList.contains('payment')) {
          paymentModal.classList.remove('active');
        }
      });

      headerTopUp?.addEventListener('click', function(e) {
        e.preventDefault();
        paymentModal.classList.add('active');
      });

      buyBtn?.addEventListener('click', () => {
        paymentModal.classList.add('active');
      });
      secBuyBtn?.addEventListener('click', () => {
        paymentModal.classList.add('active');
      });
      continueBtn.addEventListener('click', () => {
        paymentModal.classList.remove('active');
      });
      closeBtn.addEventListener('click', () => {
        paymentModal.classList.remove('active');
      });

    if (document.querySelector('.success')) {
      clicker(continueBtn, successModal);
    }
  }

}
