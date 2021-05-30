import MediaFactory from "./mediaFactory.js";


export default  function likeMedias() {
  let id_pro = location.search.substring(4);
  let likeTotal = 0;
  const likePhotograph = document.getElementById('likePhotograph');
  const media = JSON.parse(localStorage.getItem("tof_pro_" + id_pro));

  let like = document.getElementsByClassName('like');
  for (let i = 0; i < like.length; i++) {
    lik = parseInt(like[i].textContent);
    likeTotal += lik;
  }
  likePhotograph.textContent = likeTotal;
  localStorage.setItem('likesPhotograph', likeTotal);
  media.forEach(mediaa => {
    if (mediaa.photographerId ==  window.location.search.substring(4)) {
      let mediaaa = new MediaFactory(mediaa);
      if (mediaa.image !== undefined) {
        let mediaaaa = mediaaa.createMedia("image");
        likesLocalstorage(mediaaaa);
      } else if (mediaa.video !== undefined) {
        let mediaaaa = mediaaa.createMedia("video");
        likesLocalstorage(mediaaaa);
      }
    }
  })
}

function likesLocalstorage(mediaaaa) {
  let id_pro = location.search.substring(4);
  let like = document.getElementsByClassName('like');
  const likePhotograph = document.getElementById('likePhotograph');
  let likeTotal = JSON.parse(localStorage.getItem("likesPhotograph"));
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
      
        likePhotograph.textContent = likeTotal;
        localStorage.setItem('likesPhotograph'+id_pro, likeTotal);
      }
    });
  }
}
likeMedias();
