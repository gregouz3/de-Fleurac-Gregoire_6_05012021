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
      Object.defineProperty(mediaa, 'alt', {
        value: 'image de ' + mediaa.title,
        enumerable: true,
      });
    } else {
      Object.defineProperty(mediaa, 'alt', {
        value: 'video de ' + mediaa.title,
        enumerable: true,
      });
    }*/
    //ajoût proprieté alt-text

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
  //creation du fichier .json en copiant le log de la console
  //console.log(JSON.stringify(media));
  localStorage.setItem(
    'tof_pro_' + location.search.substring(4),
    JSON.stringify(tab)
  );
  triee();
}

function triee() {
  let id_pro = location.search.substring(4);
  //on utlise le localstorage pour la maj des likes
  const media = JSON.parse(localStorage.getItem('tof_pro_' + id_pro));
  let btn = document.getElementById('dropMenu');
  const sb = document.querySelector('#dropMenu');
  console.log(sb.options);
  media.sort((a, b) => (a.likes > b.likes ? -1 : b.likes > a.likes ? 1 : 0));
  displayWithSort(media);
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const selectedValues = [].filter
      .call(sb.options, (option) => option.selected)
      .map((option) => option.text);
    console.log(selectedValues[0]);
    if (selectedValues[0] == 'Popularité') {
      console.log('ha');
      media.sort((a, b) =>
        a.likes > b.likes ? -1 : b.likes > a.likes ? 1 : 0
      );
      displayWithSort(media);
    }
    if (selectedValues[0] == 'Date') {
      media.sort((a, b) => (a.date > b.date ? -1 : b.date > a.date ? 1 : 0));
      displayWithSort(media);
    }
    if (selectedValues[0] == 'Titre') {
      media.sort(function compare(a, b) {
        if ((a.title || a.title) < (b.title || b.title)) return -1;
        if ((a.title || a.title) > (b.title || b.title)) return 1;
        return 0;
      });
      displayWithSort(media);
    }
  });

  //enter key
  btn.addEventListener('keydown', (e) => {
    if (event.which === 13) {
      e.preventDefault();
      const selectedValues = [].filter
        .call(sb.options, (option) => option.selected)
        .map((option) => option.text);
      console.log(selectedValues[0]);
      if (selectedValues[0] == 'Popularité') {
        console.log('ha');
        media.sort((a, b) =>
          a.likes > b.likes ? -1 : b.likes > a.likes ? 1 : 0
        );
        displayWithSort(media);
      }
      if (selectedValues[0] == 'Date') {
        media.sort((a, b) => (a.date > b.date ? -1 : b.date > a.date ? 1 : 0));
        displayWithSort(media);
      }
      if (selectedValues[0] == 'Titre') {
        media.sort(function compare(a, b) {
          if ((a.title || a.title) < (b.title || b.title)) return -1;
          if ((a.title || a.title) > (b.title || b.title)) return 1;
          return 0;
        });
        displayWithSort(media);
      }
    }
  });
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
    // likes total du photographe récupérés à chaque nouveau trie avec le localstorage
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
    //lightbox init
    for (let i = 0; i < img.length; i++) {
      img[i].addEventListener('click', () => {
        lightbox(i, tab);
      });
      //ouverture lightbox avec "enter"
      img[i].addEventListener('keydown', (event) => {
        if (event.which === keyCodes.enter) {
          event.preventDefault();
          lightbox(i, tab);
        }
      });
    }
    //likes
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
          // reload "medias"si une réalisation dépasse en popularité une autre pour la cohérence du trie
          console.log(document.querySelector('#dropMenu').value);
          if (document.querySelector('#dropMenu').value == 'popularite') {
            if (tab[i - 1] !== undefined && tab[i].likes > tab[i - 1].likes) {
              trie();
            }
          }
          likePhotograph.textContent = likeTotal;
          localStorage.setItem('likesPhotograph', likeTotal);
        }
      });
      //likes avec "enter"
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
            //refresh trie si un media depasse en popularité un autre media pour la cohérence du trie
            if (
              document.getElementById('dropMenu').textContent == 'Popularité'
            ) {
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

trie();
