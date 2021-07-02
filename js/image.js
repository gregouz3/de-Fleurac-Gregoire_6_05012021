export default class Image {
  constructor(data) {
    this.id = data.id;
    this.photographerId = data.photographerId;
    this.title = data.title;
    this.image = data.image;
    this.tags = data.tags;
    this.likes = data.likes;
    this.date = data.date;
    this.price = data.price;
    this.alt = data.alt;
  }
  get pictureCard() {
    if (localStorage.getItem('media_' + this.id)) {
      let toff = JSON.parse(localStorage.getItem('media_' + this.id));
      this.likes = toff.likes;
    }
    return `
        
              <li class="lists-tof-img">
        <span class="id" >${this.id}</span>
          <img 
              src="ressources/sample-photos/${this.image}" 
              alt="${this.alt}" 
              class="img"
              type="button" 
             tabindex="0"

              aria-haspopup="dialog" aria-controls="modalThumb" 
              title="Ouvrir ${this.title} en vue lightbox"
             
          /> 
          <div class="lists-tof-img_dscr">
            <p  class="lists-tof-img_dscr__title" role="text">${this.title}</p>
            <div type="button" class="lists-tof-img_dscr__like">
                    <span role="button"  tabindex="0" class="like" aria-label="Ajouter un like${this.title}">${this.likes}</span>                 <svg xmlns="http://www.w3.org/2000/svg"       width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                    </svg>
            </div type="button">
          </div>
        </li>
        `;
  }
  get pictureLightbox() {
    return `
    <div>
      <img 
          src="ressources/sample-photos/${this.image}" 
          alt="${this.alt}" 
          class="modalThumb-img-img"
          
          
      />
      <p id="modalThumb-title"  class="modalThumb-img__title" role="text" >${this.title}</p>
     
    </div>
    `;
  }
}
