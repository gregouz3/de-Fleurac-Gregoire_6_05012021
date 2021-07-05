document.body.onscroll = function () {
  //show or hide btn with scroll
  scrollFunction();
};

function scrollFunction() {
  const mybutton = document.getElementById('upBtn');
  const btn = document.querySelector('#button');

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = 'none';
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
  //scroll en dessous du header
  let headH = parseInt(document.querySelector('.header').clientHeight) + 80;
  console.log(headH);
  document.body.scrollTop = headH; // For Safari
  document.documentElement.scrollTop = headH; // For Chrome,
  const foc = document.getElementsByClassName('block-list');
  foc[0].childNodes[1].focus();
}
