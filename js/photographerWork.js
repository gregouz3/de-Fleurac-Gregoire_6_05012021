import Media from "./Media.js";

export default async function getMedias() {
  let url="./../ressources/data-json/media.json";
  return await fetch(url, {mode: 'no-cors'})
    .then(response => response.json())
}

async function displayWorkPhotographer() {
  var cardWork = "";
  var cardWork = document.querySelector('.lists-tof');
  const {media} = await getMedias();
  media.forEach(mediaa => {
    if (mediaa.photographerId ==  window.location.search.substring(4)) {
      let mediaaa = new Media(mediaa);
      cardWork.innerHTML += mediaaa.picturesOrVid;
    }
  })
}
