import getPhotographers from "./fetchJson.js";
import Photographer from "./Photographer.js";

async function displayCardsPhotographersTag() {
  const urlParams = new URLSearchParams(window.location.search);
  const tag = urlParams.get('tag');
  const {photographers} = await getPhotographers();
  var card = document.querySelector('.block');
  card.innerHTML = '';
  photographers.forEach(photographer => {
    if (photographer.tags.includes(tag)) {
      let photograph = new Photographer(photographer);
      card.innerHTML += photograph.photographerCard;
      let id = photograph.id;
      for (let tagz of photograph.tags) {
        let tagid = document.getElementById('tags'+ id);
        let tagg = document.createElement("a");
        tagg.setAttribute("href", "tag.html?tag=" + `${tagz}`);
        tagg.setAttribute("aria-label", "catégorie" + `${tagz}`);
        tagid.appendChild(tagg).innerHTML = "#" + tagz;
      }
    }
  })
}

displayCardsPhotographersTag();