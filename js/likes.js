import Photographer from "./Photographer.js";
import Media from "./Media.js";
import getPhotographers from "./index.js";
import getMedias from "./photographerWork.js";

async function PhotographerPriceAndLikes() {
  let id_pro = location.search.substring(4);
  const price = document.getElementById('lists-ban-likeAndPrice_price');
  const likePhotograph = document.getElementById('likePhotograph');
  let likes = document.getElementsByClassName('like');
  price.innerHTML = '';
  let likeTotal = 0;
  let like = 0;
  const {photographers} = await getPhotographers();
  photographers.forEach(photographer => {
    if (photographer.id == id_pro ) {
      let photograph = new Photographer(photographer);
      price.innerHTML = `${photograph.price}€/jour`;
      price.setAttribute('aria-label', `${photograph.price} euro par jour`);
      for (let i = 0; i < likes.length; i++) {
        like = parseInt(likes[i].textContent);
        likeTotal += like;
      }
      if (localStorage.getItem("likesPhotograph"+id_pro)) {
        likePhotograph.textContent = JSON.parse(localStorage.getItem("likesPhotograph" + id_pro));
      } else {
        likePhotograph.textContent = likeTotal;
        localStorage.setItem('likesPhotograph'+ id_pro, likeTotal);
      }
    }
  })
  likeMedias();
}

async function likeMedias() {
  let id_pro = location.search.substring(4);
  const likePhotograph = document.getElementById('likePhotograph');
  let likeTotal = JSON.parse(localStorage.getItem("likesPhotograph" + id_pro));
  let like = document.getElementsByClassName('like');
  let idMedia = document.getElementsByClassName('id');
  const {media} = await getMedias();
  media.forEach(mediaa => {
    if (mediaa.photographerId ==  window.location.search.substring(4)) {
      let mediaaa = new Media(mediaa);
      for (let i = 0; i < like.length; i++) {
        like[i].addEventListener('click', () => {
          if (mediaaa.id == idMedia[i].textContent) {
            if (localStorage.getItem( 'media_' + idMedia[i].textContent)) {
              let med = JSON.parse
              (localStorage.getItem( 'media_' + idMedia[i].textContent));
              med.likes++;
              localStorage.setItem('media_' + idMedia[i].textContent,JSON.stringify(med));
            } else {
              mediaaa.likes++;
              localStorage.setItem('media_' + idMedia[i].textContent,JSON.stringify(mediaaa));
            }
            let med = JSON.parse
            (localStorage.getItem( 'media_' + idMedia[i].textContent));
            like[i].innerHTML = med.likes;
            likeTotal++;
            likePhotograph.textContent = likeTotal;
            localStorage.setItem('likesPhotograph'+id_pro, likeTotal);
          }
        });
      }
    }
  })
}

PhotographerPriceAndLikes();
