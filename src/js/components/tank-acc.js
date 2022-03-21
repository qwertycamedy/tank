if(document.querySelector('.tank-acc__portion-outer')) {
  let topBtn = document.querySelectorAll('.top-btn'),
    bottomBtn = document.querySelectorAll('.bottom-btn');

  topBtn.forEach(function(item) {

    item.addEventListener('click', function(e){
      let self = e.currentTarget;
      topBtn.forEach(function(item) {
        item.classList.remove('active')
      });
      self.classList.add('active');
    });
  });

  bottomBtn.forEach(function(item) {

    item.addEventListener('click', function(e){
      let self = e.currentTarget;
      bottomBtn.forEach(function(item) {
        item.classList.remove('active')
      });
      self.classList.add('active');
    });
  });
}
