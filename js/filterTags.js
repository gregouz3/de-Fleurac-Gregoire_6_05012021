import getPhotographers from './index.js';
import Photographer from './Photographer.js';

async function displayCardsPhotographersTag() {
  const urlParams = new URLSearchParams(window.location.search);
  const tag = urlParams.get('tag');
  const { photographers } = await getPhotographers();
  const card = document.querySelector('.block');
  card.innerHTML = '';
  photographers.forEach((photographer) => {
    if (photographer.tags.includes(tag)) {
      const photograph = new Photographer(photographer);
      card.innerHTML += photograph.photographerCard;
      const { id } = photograph;
      for (const tagz of photograph.tags) {
        const tagid = document.getElementById(`tags${id}`);
        const tagg = document.createElement('a');
        tagg.setAttribute('href', 'tag.html?tag=' + `${tagz}`);
        tagg.setAttribute('aria-label', 'aller à la catégorie ' + `${tagz}`);
        tagid.appendChild(tagg).innerHTML = `#${tagz}`;
      }
    }
  });
}

displayCardsPhotographersTag();
