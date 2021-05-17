export default class Photographer {
  constructor(data) {
      this.name = data.name;
      this.id = data.id;
      this.city = data.city;
      this.country = data.country;
      this.tags = data.tags;
      this.tagline = data.tagline;
      this.price = data.price;
      this.portrait = data.portrait;
  }

  get photographerCard() {
    return `
    <li class="block-list">
      <a class="block-list__link" href="pro.html?id=${this.id}" aria-label="Consulter la page de ${this.name} originaire de  ${this.city}, ${this.country}  ${this.tagline} ${this.price} de taux jouralier moyen" >
      <div class="block-list__link__portrait">
        <img 
          width="200"
          src="ressources/sample-photos/PhotographersID_Photos/${this.portrait}" 
          alt="" 
        />  
      </div>
      <h2 class="block-list__link__name" >${this.name}</h2>
      </a>
      <div class=" block-list__info">
        <p class=" block-list__info--location" aria-label="originaire de  ${this.city}, ${this.country}"  role="text">
          ${this.city}, ${this.country}
        </p>
        <p class=" block-list__info--tagline" role="text">
          ${this.tagline}
        </p>
        <p class=" block-list__info--prix" aria-label="${this.price} de taux jouralier moyen" role="text">
          ${this.price}€/jour
        </p>
      </div>
      <div class=" block-list__tag" id="tags${this.id}">
      </div>
    </li>`
  }
  get photographerBanner() {
    return `
    <section class="list-ban">
      <div class="list-ban-info" tabindex="0">
        <h1 class="list-ban-info__name" role="heading">
        <span id="name">${this.name}</span>
        </h1>
        <p class="list-ban-info__location" role="text">
          ${this.city}, ${this.country}
        </p>
        <p class="list-ban-info__tagline" role="text">
          ${this.tagline}
        </p>
        <ul class="list-ban-info__tag" id="tags${this.id}">
        </ul>
      </div>
      <div class="list-ban-img" role="image">
          <img 
            src="ressources/sample-photos/PhotographersID_Photos/${this.portrait}" 
            width=200
            alt="" 
            tabindex="0"
            aria-label="${this.name}"
          />
      </div>
      <input class="list-ban__modal"
             type="button"
             value="Contactez-moi"
             id="modal" 
             role="button"
             aria-haspopup="dialog"
             aria-controls="dialog"
      >
    </section>
    `;
  }
};