import MediaFactory from "./mediaFactory.js";

export default function lightbox(i, tab) {
  openModal();
  prev(i, tab);
  next(i, tab);
  let img = document.querySelector('.modalThumb-img');
  img.innerHTML = "";
  let mediaBox = new MediaFactory(tab[i]);
  if (tab[i].image !== undefined) {
    let mediaBoxx = mediaBox.createMedia('image');
    img.innerHTML = mediaBoxx.pictureLightbox;
  } else if (tab[i].video !== undefined) {
    let mediaBoxx = mediaBox.createMedia('video');
    img.innerHTML = mediaBoxx.videoLightbox;
  }
}

function prev(i, tab) {
  let img = document.querySelector('.modalThumb-img');
  const prevel = document.querySelector('.prev');
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
}

function next(i, tab) {
  let img = document.querySelector('.modalThumb-img');
  const nextel = document.querySelector('.next');
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
function openModal() {
  document.getElementById('modalThumb').style.display = 'block';
  closeModal();
}

function closeModal() {
  const closeBtn = document.querySelector('#close');
  closeBtn.addEventListener('click', () => {
    modalThumb.style.display = 'none';
})}
