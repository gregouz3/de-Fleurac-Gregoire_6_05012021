import MediaFactory from './mediaFactory.js';

export default function lightbox(i, tab) {
  const img = document.querySelector('.modalThumb-img');
  img.innerHTML = '';
  const mediaBox = new MediaFactory(tab[i]);
  if (tab[i].image !== undefined) {
    const mediaBoxx = mediaBox.createMedia('image');
    img.innerHTML = mediaBoxx.pictureLightbox;
  } else if (tab[i].video !== undefined) {
    const mediaBoxx = mediaBox.createMedia('video');
    img.innerHTML = mediaBoxx.videoLightbox;
  }
  prevNext(i, tab);
  // focus and close
  Modal();
}

// nav  - clic + enter fleche gauche droite
function prevNext(i, tab) {
  const img = document.querySelector('.modalThumb-img');
  const prevel = document.querySelector('.prev');
  prevel.addEventListener('keydown', (event) => {
    if (event.which === keyCodes.enter) {
      img.innerHTML = '';
      if (i == 0) {
        i = tab.length - 1;
        const mediaBox = new MediaFactory(tab[i]);
        if (tab[i].image !== undefined) {
          const mediaBoxx = mediaBox.createMedia('image');
          img.innerHTML = mediaBoxx.pictureLightbox;
        } else if (tab[i].video !== undefined) {
          const mediaBoxx = mediaBox.createMedia('video');
          img.innerHTML = mediaBoxx.videoLightbox;
        }
      } else {
        i -= 1;
        const mediaBox = new MediaFactory(tab[i]);
        if (tab[i].image !== undefined) {
          const mediaBoxx = mediaBox.createMedia('image');
          img.innerHTML = mediaBoxx.pictureLightbox;
        } else if (tab[i].video !== undefined) {
          const mediaBoxx = mediaBox.createMedia('video');
          img.innerHTML = mediaBoxx.videoLightbox;
        }
      }
    }
  });
  prevel.addEventListener('click', () => {
    img.innerHTML = '';
    if (i == 0) {
      i = tab.length - 1;
      const mediaBox = new MediaFactory(tab[i]);
      if (tab[i].image !== undefined) {
        const mediaBoxx = mediaBox.createMedia('image');
        img.innerHTML = mediaBoxx.pictureLightbox;
      } else if (tab[i].video !== undefined) {
        const mediaBoxx = mediaBox.createMedia('video');
        img.innerHTML = mediaBoxx.videoLightbox;
      }
    } else {
      i -= 1;
      const mediaBox = new MediaFactory(tab[i]);
      if (tab[i].image !== undefined) {
        const mediaBoxx = mediaBox.createMedia('image');
        img.innerHTML = mediaBoxx.pictureLightbox;
      } else if (tab[i].video !== undefined) {
        const mediaBoxx = mediaBox.createMedia('video');
        img.innerHTML = mediaBoxx.videoLightbox;
      }
    }
  });

  const nextel = document.querySelector('.next');
  nextel.addEventListener('click', () => {
    img.innerHTML = '';
    if (i == tab.length - 1) {
      i = 0;
      const mediaBox = new MediaFactory(tab[i]);
      if (tab[i].image !== undefined) {
        const mediaBoxx = mediaBox.createMedia('image');
        img.innerHTML = mediaBoxx.pictureLightbox;
      } else if (tab[i].video !== undefined) {
        const mediaBoxx = mediaBox.createMedia('video');
        img.innerHTML = mediaBoxx.videoLightbox;
      }
    } else {
      i += 1;
      const mediaBox = new MediaFactory(tab[i]);
      if (tab[i].image !== undefined) {
        const mediaBoxx = mediaBox.createMedia('image');
        img.innerHTML = mediaBoxx.pictureLightbox;
      } else if (tab[i].video !== undefined) {
        const mediaBoxx = mediaBox.createMedia('video');
        img.innerHTML = mediaBoxx.videoLightbox;
      }
    }
  });
  nextel.addEventListener('keydown', (event) => {
    if (event.which === keyCodes.enter) {
      img.innerHTML = '';
      if (i == 0) {
        i = tab.length - 1;
        const mediaBox = new MediaFactory(tab[i]);
        if (tab[i].image !== undefined) {
          const mediaBoxx = mediaBox.createMedia('image');
          img.innerHTML = mediaBoxx.pictureLightbox;
        } else if (tab[i].video !== undefined) {
          const mediaBoxx = mediaBox.createMedia('video');
          img.innerHTML = mediaBoxx.videoLightbox;
        }
      } else {
        i -= 1;
        const mediaBox = new MediaFactory(tab[i]);
        if (tab[i].image !== undefined) {
          const mediaBoxx = mediaBox.createMedia('image');
          img.innerHTML = mediaBoxx.pictureLightbox;
        } else if (tab[i].video !== undefined) {
          const mediaBoxx = mediaBox.createMedia('video');
          img.innerHTML = mediaBoxx.videoLightbox;
        }
      }
    }
  });
  prevNextKey(i, tab);
}

// prev next juste avec les fleches du clavier
function prevNextKey(i, tab) {
  const keyss = {
    tab: 9,
    enter: 13,
    escape: 27,
    right: 39,
    left: 37,
  };
  const img = document.querySelector('.modalThumb-img');
  window.addEventListener('keydown', (event) => {
    if (event.which === keyss.right) {
      img.innerHTML = '';
      if (i == tab.length - 1) {
        i = 0;
        const mediaBox = new MediaFactory(tab[i]);
        if (tab[i].image !== undefined) {
          const mediaBoxx = mediaBox.createMedia('image');
          img.innerHTML = mediaBoxx.pictureLightbox;
        } else if (tab[i].video !== undefined) {
          const mediaBoxx = mediaBox.createMedia('video');
          img.innerHTML = mediaBoxx.videoLightbox;
        }
      } else {
        i += 1;
        const mediaBox = new MediaFactory(tab[i]);
        if (tab[i].image !== undefined) {
          const mediaBoxx = mediaBox.createMedia('image');
          img.innerHTML = mediaBoxx.pictureLightbox;
        } else if (tab[i].video !== undefined) {
          const mediaBoxx = mediaBox.createMedia('video');
          img.innerHTML = mediaBoxx.videoLightbox;
        }
      }
    }
    if (event.which === keyss.left) {
      console.log('prev');

      img.innerHTML = '';
      if (i == 0) {
        i = tab.length - 1;
        const mediaBox = new MediaFactory(tab[i]);
        if (tab[i].image !== undefined) {
          const mediaBoxx = mediaBox.createMedia('image');
          img.innerHTML = mediaBoxx.pictureLightbox;
        } else if (tab[i].video !== undefined) {
          const mediaBoxx = mediaBox.createMedia('video');
          img.innerHTML = mediaBoxx.videoLightbox;
        }
      } else {
        i -= 1;
        const mediaBox = new MediaFactory(tab[i]);
        if (tab[i].image !== undefined) {
          const mediaBoxx = mediaBox.createMedia('image');
          img.innerHTML = mediaBoxx.pictureLightbox;
        } else if (tab[i].video !== undefined) {
          const mediaBoxx = mediaBox.createMedia('video');
          img.innerHTML = mediaBoxx.videoLightbox;
        }
      }
    }
  });
}

// gestion focus
function Modal() {
  const triggerss = document.getElementsByClassName('img');
  const modal = document.querySelector('.modalThum');
  const closeBtn = document.querySelector('.close');
  const keys = {
    tab: 9,
    enter: 13,
    escape: 27,
    right: 39,
    left: 37,
  };

  const focusableElementsArray = ['span:not([disabled])'];
  const focusableElements = modal.querySelectorAll(focusableElementsArray);
  console.log(focusableElements);
  const firstFocusableElement = focusableElements[0];
  const lastFocusableElement = focusableElements[focusableElements.length - 1];
  if (!firstFocusableElement) {
    return;
  }
  window.setTimeout(() => {
    firstFocusableElement.focus();
    // trapping focus inside the dialog
    focusableElements.forEach((focusableElement) => {
      if (focusableElement.addEventListener) {
        focusableElement.addEventListener('keydown', (event) => {
          const tab = event.which === keyCodes.tab;
          if (!tab) {
            return;
          }
          if (event.shiftKey) {
            if (event.target === firstFocusableElement) {
              // shift + tab
              event.preventDefault();
              lastFocusableElement.focus();
            }
          } else if (event.target === lastFocusableElement) {
            // tab
            event.preventDefault();
            firstFocusableElement.focus();
          }
        });
      }
    });
  }, 100);

  modal.setAttribute('aria-hidden', false);
  doc.setAttribute('aria-hidden', true);
  for (let i = 0; i < triggerss.length; i++) {
    closeBtn.addEventListener('click', (event) => {
      event.preventDefault();
      closee(modal, i);
    });
    closeBtn.addEventListener('keydown', (event) => {
      if (event.which === keys.enter) {
        event.preventDefault();
        closee(modal, i);
      }
    });
    window.addEventListener('keydown', (event) => {
      if (event.which === keys.escape) {
        closee(modal, i);
      }
    });
    window.addEventListener('click', (event) => {
      if (event.target === modal) {
        closee(modal, i);
      }
    });
  }
}

function closee(modal) {
  modal.setAttribute('aria-hidden', true);
  doc.setAttribute('aria-hidden', false);
  document.querySelector('.img').focus();
}
