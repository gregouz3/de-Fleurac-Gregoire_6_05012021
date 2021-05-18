import Media from "./Media.js";

function openModal() {
  if (document.getElementById('body'))
    document.getElementById('body').id = 'body--modal';
  document.getElementById('modalThumb').style.display = 'block';
  document.querySelector('.custom-select-wrapper').style.zIndex = '-1';
  closeModal();
}

function closeModal() {
  const closeBtn = document.querySelector('#close');
  closeBtn.addEventListener('click', () => {
    if ( document.getElementById('body--modal')) 
      document.getElementById('body--modal').id = 'body';
    document.querySelector('.custom-select-wrapper').style.zIndex = '1';
    modalThumb.style.display = 'none';
    document.getElementById('modal').style.display = "block";
    localStorage.removeItem('indexLightbox');
})}

export default function lightbox(i, tab) {
  openModal();
  console.log(tab[i])
  let mediaBox = new Media(tab[i]);
  let img = document.querySelector('.modalThumb-img');
  img.innerHTML = "";
  img.innerHTML = mediaBox.picturesOrVidLightbox;
  const prevel = document.querySelector('.prev');
  const nextel = document.querySelector('.next');
  prevel.addEventListener('click', () => {
    img.innerHTML = "";
    if (i == 0) {
      i = tab.length - 1;
      let mediaBoxPrev = new Media(tab[i]);
      img.innerHTML = mediaBoxPrev.picturesOrVidLightbox;
    } else {
      i = i - 1;
      let mediaBoxPrev = new Media(tab[i]);
      img.innerHTML = mediaBoxPrev.picturesOrVidLightbox;
    }
  });
  nextel.addEventListener('click', () => {
    img.innerHTML = "";
    if (i == tab.length - 1) {
      i = 0;
      let mediaBoxPrev = new Media(tab[i]);
      img.innerHTML = mediaBoxPrev.picturesOrVidLightbox;
    } else {
      i = i + 1;
      let mediaBoxPrev = new Media(tab[i]);
      img.innerHTML = mediaBoxPrev.picturesOrVidLightbox;
    }
  });
}