import getPhotographers from "./index.js";
import getMedias from "./fetchJson.js";
import Photographer from "./Photographer.js";
import MediaFactory from "./mediaFactory.js";

async function PhotographerPriceAndLikes() {
  let id_pro = location.search.substring(4);
  const price = document.getElementById('lists-ban-likeAndPrice_price');
  const likePhotograph = document.getElementById('likePhotograph');
  let likes = document.getElementsByClassName('like');
  price.innerHTML = '';
  let likeTotal = 0;
  console.log("1");
  const {photographers} = await getPhotographers();
  photographers.forEach(photographer => {
    console.log("2");
    if (photographer.id == id_pro ) {
      let photograph = new Photographer(photographer);
      price.innerHTML = `${photograph.price}€/jour`;
      price.setAttribute('aria-label', `${photograph.price} euro par jour`);
      for (let i = 0; i < likes.length; i++) {
        let like = parseInt(likes[i].textContent);
        likeTotal += like;
      }
      if (localStorage.getItem("likesPhotograph"+id_pro)) {
        likePhotograph.textContent = JSON.parse(localStorage.getItem("likesPhotograph" + id_pro));
        if (likePhotograph.textContent == 0) {
          localStorage.removeItem('likesPhotograph'+ id_pro);
          window.location.reload();
          return;
        }
      } else {
        likePhotograph.textContent = likeTotal;
        localStorage.setItem('likesPhotograph'+ id_pro, likeTotal);
        if (likePhotograph.textContent == 0) {
          localStorage.removeItem('likesPhotograph'+ id_pro);
          window.location.reload();
          return;
        }
      }
    }
  })
  likeMedias();
}

export default async function likeMedias() {
  
  const {media} = await getMedias();
  console.log(media)
  media.forEach(mediaa => {
    if (mediaa.photographerId ==  window.location.search.substring(4)) {
      if (mediaa.image !== undefined) {
        let mediaaa = new MediaFactory(mediaa);
        let mediaaaa = mediaaa.createMedia("image");
        likesLocalstorage(mediaaaa);
      } else if (mediaa.video !== undefined) {
        let mediaaa = new MediaFactory(mediaa);
        let mediaaaa = mediaaa.createMedia("video");
        likesLocalstorage(mediaaaa);

      }
    }
  })
}

function likesLocalstorage(mediaaaa) {
  let id_pro = location.search.substring(4);

  const likePhotograph = document.getElementById('likePhotograph');
  let likeTotal = JSON.parse(localStorage.getItem("likesPhotograph" + id_pro));
  let like = document.getElementsByClassName('like');
  let idMedia = document.getElementsByClassName('id');
  for (let i = 0; i < like.length; i++) {
    like[i].addEventListener('click', () => {
      if (mediaaaa.id == idMedia[i].textContent) {
        if (localStorage.getItem( 'media_' + idMedia[i].textContent)) {
          let med = JSON.parse
          (localStorage.getItem( 'media_' + idMedia[i].textContent));
          med.likes++;
          localStorage.setItem('media_' + idMedia[i].textContent,JSON.stringify(med));
        } else {
          mediaaaa.likes++;
          localStorage.setItem('media_' + idMedia[i].textContent,JSON.stringify(mediaaaa));
        }
        let med = JSON.parse
        (localStorage.getItem( 'media_' + idMedia[i].textContent));
        like[i].innerHTML = med.likes;
        likeTotal++;
        if (document.getElementById('trie').textContent == 'Popularité')
          window.location.reload();
        likePhotograph.textContent = likeTotal;
        localStorage.setItem('likesPhotograph'+id_pro, likeTotal);
      }
    });
  }
}
PhotographerPriceAndLikes();
