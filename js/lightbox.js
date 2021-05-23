import MediaFactory from "./mediaFactory.js";

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
  let img = document.querySelector('.modalThumb-img');
  const prevel = document.querySelector('.prev');
  const nextel = document.querySelector('.next');
  img.innerHTML = "";

  let mediaBox = new MediaFactory(tab[i]);
  if (tab[i].image !== undefined) {
    let mediaBoxx = mediaBox.createMedia('image');
    img.innerHTML = mediaBoxx.pictureLightbox;
  } else if (tab[i].video !== undefined) {
    let mediaBoxx = mediaBox.createMedia('video');
    img.innerHTML = mediaBoxx.videoLightbox;
  }
  prevel.addEventListener('click', () => {
    img.innerHTML = "";
    if (i == 0) {
      i = tab.length - 1;
      let mediaBox = new MediaFactory(tab[i]);
      if (tab[i].image !== undefined) {
        let mediaBoxx = mediaBox.createMedia('image');
        img.innerHTML = mediaBoxx.pictureLightbox;
      } else if (tab[i].video !== undefined) {
        let mediaBoxx = mediaBox.createMedia('video');
        img.innerHTML = mediaBoxx.videoLightbox;
      }
    } else {
      i = i - 1;
      let mediaBox = new MediaFactory(tab[i]);
      if (tab[i].image !== undefined) {
        let mediaBoxx = mediaBox.createMedia('image');
        img.innerHTML = mediaBoxx.pictureLightbox;
      } else if (tab[i].video !== undefined) {
        let mediaBoxx = mediaBox.createMedia('video');
        img.innerHTML = mediaBoxx.videoLightbox;
      }
    }
  });
  nextel.addEventListener('click', () => {
    img.innerHTML = "";
    if (i == tab.length - 1) {
      i = 0;
      let mediaBox = new MediaFactory(tab[i]);
      if (tab[i].image !== undefined) {
        let mediaBoxx = mediaBox.createMedia('image');
        img.innerHTML = mediaBoxx.pictureLightbox;
      } else if (tab[i].video !== undefined) {
        let mediaBoxx = mediaBox.createMedia('video');
        img.innerHTML = mediaBoxx.videoLightbox;
      }
    } else {
      i = i + 1;
      let mediaBox = new MediaFactory(tab[i]);
      if (tab[i].image !== undefined) {
        let mediaBoxx = mediaBox.createMedia('image');
        img.innerHTML = mediaBoxx.pictureLightbox;
      } else if (tab[i].video !== undefined) {
        let mediaBoxx = mediaBox.createMedia('video');
        img.innerHTML = mediaBoxx.videoLightbox;
      }
    }
  });
}