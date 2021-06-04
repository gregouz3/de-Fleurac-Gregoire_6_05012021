  mybutton = document.getElementById("upBtn");
  // When the user scrolls down 20px from the top of the document, show the button
  document.body.onscroll = function() {scrollFunction()};
 
  function scrollFunction() {
    var btn = document.querySelector('#button');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)  {
      mybutton.style.display = "none";
      btn.className = 'show';
    } else {
      mybutton.style.display = "block";
      btn.className = '';
    }
  }
  
  function goTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTo(0, 0); // For Chrome,
  }

  function mainFunction() {
    let headH = parseInt(document.querySelector('.header').clientHeight) + 80;
    console.log(headH)
    document.body.scrollTop = headH; // For Safari
    document.documentElement.scrollTop = headH; // For Chrome,
}
