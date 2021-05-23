function displayModal() {

  document.getElementById('modal').style.display = "none";
  const modalbg = document.querySelector('.bground');
  modalbg.style.display = 'block';
  modalbg.innerHTML = `
    <div class="content" role="document" >
    <h2>Contactez-moi</h2>
    <h3 class="content__name"></h3>
    <h2 id="name"></h2>
    <span aria-label="Fermer" class="closeee"  title="Fermer cette fenêtre modale" data-dismiss="dialog"></span>
    <div class="modal-body">
      <form
        id="thx" 
        name="contact"
        method="GET"
        onsubmit="return false"
        role="form"
      >
        <div
          class="formData">
          <label for="first" >Prénom</label><br>
          <input
            class="text-control"
            type="text"
            id="first"
            name="first"
            required
          />
        </div>
        <div
          class="formData">
          <label for="last">Nom</label><br>
          <input
            class="text-control"
            type="text"
            id="last"
            name="last"
            required
            />
        </div>
        <div
          class="formData">
          <label for="email">E-mail</label><br>
            <input
              class="text-control"
              type="email"
              id="email"
              name="email"
              required
            />
        </div>
        <div
        class="formData--msg">
          <label for="msg">Votre message</label>
          <textarea name="msg" id="msg" cols="33" rows="5" >
          </textarea>
        </div>
        <button
          class="sendd"
          value="Envoyer"
          aria-label="Envoyer"
          onclick="send()"
        ><span>Envoyer</span></button>
      </form>
    </div>
  </div>
    `;

  const closeBtn = document.querySelector('.closeee');
  closeBtn.addEventListener('click', closeModal);
  document.getElementById('body').id = 'body--modal';
  document.querySelector('.custom-select-wrapper').style.zIndex = '-1';
}

function closeModal() {
  const modalbg = document.querySelector('.bground');
  modalbg.style.display = 'none';
  document.getElementById('modal').style.display = "block";
  document.getElementById('body--modal').id = 'body';
  document.querySelector('.custom-select-wrapper').style.zIndex = '1';
}

function send() {
  const form = document.contact;
  const email = document.getElementById('email').value;
  if (form.first.value !== '' && form.last.value !== '' && checkEmail(email)) {
    const User = {
        prenom:  form.first.value,
        Nom     : form.last.value,
        Email   : form.email.value
    }
    console.log(User);
    alert('Merci ' + User.prenom +"!")
    closeModal();
    }
    else {
      alert('formulaire incorrects');
  }

}
// f test address mail input with REGEX.
function checkEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}