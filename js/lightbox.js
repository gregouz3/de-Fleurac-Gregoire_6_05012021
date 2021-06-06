import MediaFactory from "./mediaFactory.js";

export default function lightbox(i, tab) {
  Modal();
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
  prevNext(i, tab);
 // prevkey(i, tab);
 // nextkey(i, tab);
}

function prevNext(i, tab) {

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
  prevNextKey(i, tab)
}

function prevNextKey(i, tab) {
  const keyss = {
    tab: 9,
    enter: 13,
    escape: 27,
    right: 39,
    left: 37
  };
  let img = document.querySelector('.modalThumb-img');

  window.addEventListener('keydown', (event) => {
    if (event.which === keyss.right) {
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
    }
    if (event.which === keyss.left) {
      console.log("prev")

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
      }
  })
}

function Modal() {
  const triggerss = document.getElementsByClassName('img');
  const modal = document.querySelector('.modalThum');
  const closeBtn = document.querySelector('.close');
  const keys = {
    tab: 9,
    enter: 13,
    escape: 27,
    right: 39,
    left: 37
  };
    modal.setAttribute('aria-hidden', false);
    doc.setAttribute('aria-hidden', true);
  for(let i=0;i< triggerss.length;i++) {
  
  
      closeBtn.addEventListener('click', (event) => {
        event.preventDefault();
        closee(modal);
      })
      window.addEventListener('keydown', (event) => {
        if (event.which === keys.escape) {
          closee(modal);
        }      
      });
      window.addEventListener('click', (event) => {
        if (event.target === modal) {
          closee(modal);
        }
      });
    }
}

function openn(modal) {
  const elLightbox = [
    'img',
    'span',
   '[tabindex]:not([tabindex="-1"])'

  ];
 
  modal.setAttribute('aria-hidden', false);
  doc.setAttribute('aria-hidden', true);
 
}

function closee(modal) {
  modal.setAttribute('aria-hidden', true);
  doc.setAttribute('aria-hidden', false);

}