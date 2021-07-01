import MediaFactory from './mediaFactory.js';
import lightbox from './lightbox.js';

async function getMedias() {
  let url =
    'https://gregouz3.github.io/de-Fleurac-Gregoire_6_05012021/medias.json';
  return await fetch(url).then((response) => response.json());
}

async function trie() {
  // init tab  qui contiendra les réalisations du photographe avec les likes à jour grâce au localstorage
  let tab = [];
  const {media} = await getMedias();

  media.forEach((mediaa) => {
    /*
    if (mediaa.image !== undefined) {
      Object.defineProperty(mediaa, 'alt-text', {
        value: 'image de ' + mediaa.title,
        enumerable: true,
      });
    } else {
      Object.defineProperty(mediaa, 'alt-text', {
        value: 'video de ' + mediaa.title,
        enumerable: true,
      });
    }*/
    //ajoût proprieté alt-text et creation du fichier .json en copiant le log de la console.

    if (mediaa.photographerId == window.location.search.substring(4)) {
      let mediaaa = new MediaFactory(mediaa);
      if (mediaa.image !== undefined) {
        let mediaaaa = mediaaa.createMedia('image');

        // récupération des  likes des medias correspondant
        if (localStorage.getItem('media_' + mediaaaa.id)) {
          let toff = JSON.parse(localStorage.getItem('media_' + mediaaaa.id));
          mediaaaa.likes = toff.likes;
        }
        tab.push(mediaaaa);
      } else if (mediaa.video !== undefined) {
        let mediaaaa = mediaaa.createMedia('video');

        if (localStorage.getItem('media_' + mediaaaa.id)) {
          let toff = JSON.parse(localStorage.getItem('media_' + mediaaaa.id));
          mediaaaa.likes = toff.likes;
        }
        tab.push(mediaaaa);
      }
    }
  });
  //console.log(JSON.stringify(media));
  localStorage.setItem(
    'tof_pro_' + location.search.substring(4),
    JSON.stringify(tab)
  );
  triee();
}

export async function triee() {
  let id_pro = location.search.substring(4);
  const media = JSON.parse(localStorage.getItem('tof_pro_' + id_pro));
  const trie = document.getElementById('trie');
  if (trie.textContent == 'Popularité') {
    media.sort((a, b) => (a.likes > b.likes ? -1 : b.likes > a.likes ? 1 : 0));
    displayWithSort(media);
  }
  if (trie.textContent == 'Date') {
    media.sort((a, b) => (a.date > b.date ? -1 : b.date > a.date ? 1 : 0));
    displayWithSort(media);
  }
  if (trie.textContent == 'Titre') {
    media.sort(function compare(a, b) {
      if ((a.title || a.title) < (b.title || b.title)) return -1;
      if ((a.title || a.title) > (b.title || b.title)) return 1;
      return 0;
    });
    displayWithSort(media);
  }
}

function displayWithSort(media) {
  let tab = [];
  var cardWork = document.querySelector('.lists-tof');
  var likePhotograph = document.getElementById('likePhotograph');
  var img = document.getElementsByClassName('img');
  let likes = document.getElementsByClassName('like');
  let idTof = document.getElementsByClassName('id');
  cardWork.innerHTML = '';
  let likeTotal = 0;
  let like = 0;
  media.forEach((mediaa) => {
    let mediaaa = new MediaFactory(mediaa);
    like = mediaa.likes;
    likeTotal += like;
    likePhotograph.textContent = likeTotal;
    localStorage.setItem('likesPhotograph', likeTotal);
    if (mediaa.image !== undefined) {
      let mediaaaa = mediaaa.createMedia('image');
      tab.push(mediaaaa);
      cardWork.innerHTML += mediaaaa.pictureCard;
    } else if (mediaa.video !== undefined) {
      let mediaaaa = mediaaa.createMedia('video');
      tab.push(mediaaaa);
      cardWork.innerHTML += mediaaaa.videoCard;
    }
    for (let i = 0; i < img.length; i++) {
      img[i].addEventListener('click', () => {
        lightbox(i, tab);
      });
      img[i].addEventListener('keydown', (event) => {
        if (event.which === keyCodes.enter) {
          event.preventDefault();
          lightbox(i, tab);
        }
      });
    }
    for (let i = 0; i < likes.length; i++) {
      likes[i].addEventListener('click', () => {
        if (tab[i].id == idTof[i].textContent) {
          tab[i].likes += 1;
          likes[i].innerHTML = tab[i].likes;
          localStorage.setItem(
            'media_' + idTof[i].textContent,
            JSON.stringify(tab[i])
          );
          likeTotal++;
          if (document.getElementById('trie').textContent == 'Popularité') {
            if (tab[i - 1] !== undefined && tab[i].likes > tab[i - 1].likes) {
              trie();
            }
          }
          likePhotograph.textContent = likeTotal;
          localStorage.setItem('likesPhotograph', likeTotal);
        }
      });
      likes[i].addEventListener('keydown', (event) => {
        if (event.which === keyCodes.enter) {
          event.preventDefault();
          if (tab[i].id == idTof[i].textContent) {
            tab[i].likes += 1;
            likes[i].innerHTML = tab[i].likes;
            localStorage.setItem(
              'media_' + idTof[i].textContent,
              JSON.stringify(tab[i])
            );
            likeTotal++;
            if (document.getElementById('trie').textContent == 'Popularité') {
              if (tab[i - 1] !== undefined && tab[i].likes > tab[i - 1].likes) {
                trie();
              }
            }
            likePhotograph.textContent = likeTotal;
            localStorage.setItem('likesPhotograph', likeTotal);
          }
        }
      });
      localStorage.setItem(
        'tof_pro_' + location.search.substring(4),
        JSON.stringify(tab)
      );
    }
  });
}

function menuWrap() {
  document
    .querySelector('.custom-select-wrapper')
    .addEventListener('click', function () {
      this.querySelector('.custom-select').classList.toggle('open');
      // this.style.display = "none";
      let select = document.getElementById('trie').textContent;
      for (const option of document.querySelectorAll('.custom-option')) {
        if (option.textContent == select) {
          option.style.display = 'none';
        } else {
          option.style.display = 'block';
        }
      }
    });
  document
    .querySelector('.custom-select-wrapper')
    .addEventListener('keydown', function (event) {
      if (event.which === keyCodes.enter) {
        this.querySelector('.custom-select').classList.toggle('open');
        // this.style.display = "none";
        let select = document.getElementById('trie').textContent;
        for (const option of document.querySelectorAll('.custom-option')) {
          if (option.textContent == select) {
            option.style.display = 'none';
          } else {
            option.style.display = 'block';
          }
        }
      }
    });
  for (const option of document.querySelectorAll('.custom-option')) {
    option.addEventListener('click', function () {
      if (!this.classList.contains('selected')) {
        this.parentNode
          .querySelector('.custom-option.selected')
          .classList.remove('selected');
        this.classList.add('selected');
        option.style.display = 'block';
        this.closest('.custom-select').querySelector(
          '.custom-select__trigger span'
        ).textContent = this.textContent;
        trie();
      }
    });
    option.addEventListener('keydown', function (event) {
      if (event.which === keyCodes.enter) {
        if (!this.classList.contains('selected')) {
          this.parentNode
            .querySelector('.custom-option.selected')
            .classList.remove('selected');
          this.classList.add('selected');
          option.style.display = 'block';
          this.closest('.custom-select').querySelector(
            '.custom-select__trigger span'
          ).textContent = this.textContent;
          trie();
        }
      }
    });
  }
  window.addEventListener('click', function (e) {
    const select = document.querySelector('.custom-select');
    if (!select.contains(e.target)) {
      select.classList.remove('open');
    }
  });
}

menuWrap();
trie();
