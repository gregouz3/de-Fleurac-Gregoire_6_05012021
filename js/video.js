export default class Video {
  constructor(data) {
    this.id = data.id;
    this.photographerId = data.photographerId;
    this.title = data.title;
    this.video = data.video;
    this.tags = data.tags;
    this.likes = data.likes;
    this.date = data.date;
    this.price = data.price;
  }
  get videoCard() {
    if (localStorage.getItem('media_' + this.id)) {
      let toff = JSON.parse(localStorage.getItem('media_' + this.id));
      this.likes = toff.likes;
    }
    return `
        <li class="lists-tof-vid">
        <span class="id">${this.id}</span>
          <video                aria-haspopup="dialog" aria-controls="modalThumb" 
          controls class="img" aria-label="Ouvrir ${this.title} en vue lightbox">
              <source 
                src="ressources/sample-photos/${this.video}"
                type="video/mp4"
                alt="${this.title}"
              >
              </source> 
          </video>
          <div class="lists-tof-vid_dscr">
            <p class="lists-tof-vid_dscr__title" role="text">${this.title}</p>
            <div  class="lists-tof-vid_dscr__like">
              <span role="button" tabindex="0" class="like"aria-label="add like">${this.likes}</span>        <span class="heart"><svg xmlns="http://www.w3.org/2000/svg"       width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
            </svg></span>
          </div>
          </div>
        </li>
        `;
  }
  get videoLightbox() {
    return `
      <div>
        <video  controls class="modalThumb-img_vid" >
            <source 
              src="ressources/sample-photos/${this.video}"
              type="video/mp4"
              alt="${this.title}"
            >
            </source> 
        </video>
          <p class="modalThumb-img__title"" role="text">${this.title}</p>
         
      </div>
      `;
  }
}
