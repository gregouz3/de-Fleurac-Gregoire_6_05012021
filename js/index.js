import Photographer from './Photographer.js';

export default async function getPhotographers() {
  let url =
    'https://gregouz3.github.io/de-Fleurac-Gregoire_6_05012021/photographers.json';
  return await fetch(url).then((response) => response.json());
}

async function displayCardPhotographer() {
  const {photographers} = await getPhotographers();
  var card = document.querySelector('.block');
  if (card !== null) {
    card.innerHTML = '';
    photographers.forEach((photographer) => {
      let photograph = new Photographer(photographer);
      card.innerHTML += photograph.photographerCard;
      let id = photograph.id;
      for (let tagz of photograph.tags) {
        let tagid = document.getElementById('tags' + id);
        let tagg = document.createElement('a');
        tagg.setAttribute('href', 'tag.html?tag=' + `${tagz}`);
        tagg.setAttribute('aria-label', 'Aller à la catégorie' + `${tagz}`);
        tagid.appendChild(tagg).innerHTML = '#' + tagz;
      }
    });
  }
}

displayCardPhotographer();
