import Photographer from "./Photographer.js";

export default async function getPhotographers()  {
    let url="./../ressources/data-json/photographers.json";
    return await fetch(url, {mode: 'no-cors'})
      .then(response => response.json())
}

async function displayCardPhotographer() {
  const {photographers} = await getPhotographers();
  var card = document.querySelector('.block');
  if (card !== null) {
    card.innerHTML ='';
    photographers.forEach(photographer => {
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
    })
  }
}

displayCardPhotographer();