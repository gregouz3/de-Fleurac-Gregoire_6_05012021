import Media from "./Media.js";
import getMedias from "./photographerWork.js";

export async function trie() {
  const trie = document.getElementById('trie');
  var cardWork = document.querySelector('.lists-tof');
  const {media} = await getMedias();
  if (trie.textContent == 'Popularité') {
      media.sort((a, b) => (a.likes > b.likes ? -1 : b.likes > a.likes ? 1 : 0));
      cardWork.innerHTML = "";
      media.forEach(mediaa => {
        if (mediaa.photographerId ==  window.location.search.substring(4)) {
          let mediaaa = new Media(mediaa);
          cardWork.innerHTML += mediaaa.picturesOrVid;
        }
      })
  }
  if (trie.textContent == 'Date') {
    media.sort((a, b) => (a.date > b.date ? -1 : b.date > a.date ? 1 : 0));
    cardWork.innerHTML = "";
      media.forEach(mediaa => {
        if (mediaa.photographerId ==  window.location.search.substring(4)) {
          let mediaaa = new Media(mediaa);
          cardWork.innerHTML += mediaaa.picturesOrVid;
        }
      })
  }
  if (trie.textContent == 'Titre') {
    media.sort(function compare(a, b) {
      if ((a.title || a.title) < (b.title || b.title)) return -1;
      if ((a.title || a.title) > (b.title || b.title)) return 1;
      return 0;
    });
    cardWork.innerHTML = "";
    media.forEach(mediaa => {
      if (mediaa.photographerId ==  window.location.search.substring(4)) {
        let mediaaa = new Media(mediaa);
        cardWork.innerHTML += mediaaa.picturesOrVid;
      }
    })
  }
}

function compare(a, b) {
  return a - b;
}

function menuWrap() {
  document
    .querySelector('.custom-select-wrapper')
    .addEventListener('click', function () {
      this.querySelector('.custom-select').classList.toggle('open');
      // this.style.display = "none";
      let select = document.getElementById('trie').textContent;

      for (const option of document.querySelectorAll('.custom-option')) {
        if (option.textContent == select) {
          option.style.display = 'none';
        } else {
          option.style.display = 'block';
        }
      }
    });
  for (const option of document.querySelectorAll('.custom-option')) {
    option.addEventListener('click', function () {
      if (!this.classList.contains('selected')) {
        this.parentNode
          .querySelector('.custom-option.selected')
          .classList.remove('selected');
        this.classList.add('selected');
        option.style.display = 'block';
        this.closest('.custom-select').querySelector(
          '.custom-select__trigger span'
        ).textContent = this.textContent;
        trie();
      }
    });
  }
  window.addEventListener('click', function (e) {
    const select = document.querySelector('.custom-select');
    if (!select.contains(e.target)) {
      select.classList.remove('open');
    }
  });
}

menuWrap();
trie();
