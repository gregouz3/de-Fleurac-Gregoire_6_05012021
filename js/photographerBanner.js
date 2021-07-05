import getPhotographers from './index.js';
import Photographer from './Photographer.js';

async function displayPhotographerBanner() {
  const id_pro = location.search.substring(4);
  const {photographers} = await getPhotographers();
  const banner = document.getElementById('list');
  const price = document.getElementById('lists-ban-likeAndPrice_price');
  focus();
  photographers.forEach((photographer) => {
    if (photographer.id == id_pro) {
      const photograph = new Photographer(photographer);
      banner.innerHTML = photograph.photographerBanner;
      price.innerHTML = `${photograph.price}€/jour`;
      price.setAttribute('aria-label', `${photograph.price} euro par jour`);
      document.getElementById('title').textContent = photograph.name;
      const {id} = photograph;
      for (const tagz of photograph.tags) {
        const tagid = document.getElementById(`tags${id}`);
        const tagg = document.createElement('a');
        tagg.setAttribute('href', 'tag.html?tag=' + `${tagz}`);
        tagg.setAttribute('aria-label', 'Aller à la catégorie' + `${tagz}`);
        tagid.appendChild(tagg).innerHTML = `#${tagz}`;
      }
    }
  });
}

function focus() {
  const focusIndex = ['img', 'button', 'a', 'span'];
  const focusIndexEls = document.querySelectorAll(focusIndex);
  const firstForcusIndexEl = focusIndexEls[0];

  // return if no focusable element
  if (!firstForcusIndexEl) {
    return;
  }
  window.setTimeout(() => {
    firstForcusIndexEl.focus();
  }, 100);
}
displayPhotographerBanner();
