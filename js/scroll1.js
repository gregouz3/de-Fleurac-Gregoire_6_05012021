const mybutton = document.getElementById('upBtn');
document.body.onscroll = function () {
  // show or hide btn with scroll
  scrollFunction();
};

function scrollFunction() {
  const mybutton = document.getElementById('upBtn');

  const btn = document.querySelector('#button');
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = 'none';
    btn.style.left = '10px';
    btn.className = 'show';
  } else {
    mybutton.style.display = 'block';
    btn.className = '';
  }
}

function goTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTo(0, 0); // For Chrome,
}

function mainFunction() {
  // scrool en dessous de la banniere
  const headH = parseInt(document.querySelector('.header').clientHeight) + 80;
  const banH = parseInt(document.querySelector('.list-ban').clientHeight);
  const Ht = banH + headH;
  document.body.scrollTop = Ht; // For Safari
  document.documentElement.scrollTop = Ht; // For Chrome,
  const foc1 = document.querySelector('#dropMenu');
  foc1.focus();
}
