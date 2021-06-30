import getPhotographers from "./index.js";
import Photographer from "./Photographer.js";

async function displayPhotographerBanner() {
  let id_pro = location.search.substring(4);
  const { photographers } = await getPhotographers();
  const banner = document.getElementById("list");
  const price = document.getElementById("lists-ban-likeAndPrice_price");
  focus();
  photographers.forEach((photographer) => {
    if (photographer.id == id_pro) {
      let photograph = new Photographer(photographer);
      banner.innerHTML = photograph.photographerBanner;
      price.innerHTML = `${photograph.price}€/jour`;
      price.setAttribute("aria-label", `${photograph.price} euro par jour`);
      document.getElementById("title").textContent = photograph.name;
      let id = photograph.id;
      for (let tagz of photograph.tags) {
        let tagid = document.getElementById("tags" + id);
        let tagg = document.createElement("a");
        tagg.setAttribute("href", "tag.html?tag=" + `${tagz}`);
        tagg.setAttribute("aria-label", "catégorie" + `${tagz}`);
        tagid.appendChild(tagg).innerHTML = "#" + tagz;
      }
    }
  });
}

function focus() {
  const focusIndex = ["img", "button", "a", "span"];
  const focusIndexEls = document.querySelectorAll(focusIndex);
  const firstForcusIndexEl = focusIndexEls[0];

  // return if no focusable element
  if (!firstForcusIndexEl) {
    return;
  }
  window.setTimeout(() => {
    firstForcusIndexEl.focus();
    console.log(focusIndexEls);
  }, 100);
}
displayPhotographerBanner();
