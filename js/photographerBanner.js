import Photographer from "./Photographer.js";
import getPhotographers from "./index.js";

async function displayPhotographerBanner() {
  let id_pro = location.search.substring(4);
  const {photographers} = await getPhotographers();
  const banner = document.getElementById('list');
  photographers.forEach(photographer => {
    if (photographer.id == id_pro ) {
      let photograph = new Photographer(photographer);
      banner.innerHTML = photograph.photographerBanner;
      document.getElementById('title').textContent = photograph.name;
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

displayPhotographerBanner()