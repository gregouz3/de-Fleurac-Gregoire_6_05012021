
const triggers = document.querySelectorAll('[aria-haspopup="dialog"]');
const doc = document.querySelector('.js-document');
const focusableElementsArray = [
  '[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])', 
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
];
const keyCodes = {
  tab: 9,
  enter: 13,
  escape: 27,
};
const open = function (dialog) {
    document.querySelector(
    '.content__name'
  ).textContent = document.getElementById('name').textContent;
  const focusableElements = dialog.querySelectorAll(focusableElementsArray);
  const firstFocusableElement = focusableElements[0];
  const lastFocusableElement = focusableElements[focusableElements.length - 1];

  dialog.setAttribute('aria-hidden', false);
  doc.setAttribute('aria-hidden', true);
  console.log(focusableElements);
  // return if no focusable element
  if (!firstFocusableElement) {
    return;
  }
  window.setTimeout(() => {
    firstFocusableElement.focus();
    // trapping focus inside the dialog
    focusableElements.forEach((focusableElement) => {
      if (focusableElement.addEventListener) {
        focusableElement.addEventListener('keydown', (event) => {
          const tab = event.which === keyCodes.tab;
          if (!tab) {
            return;
          }
          if (event.shiftKey) {
            if (event.target === firstFocusableElement) { // shift + tab
              event.preventDefault();
              lastFocusableElement.focus();
            }
          } else if (event.target === lastFocusableElement) { // tab
            event.preventDefault();
            firstFocusableElement.focus();
          }
        });
      }
    });
  }, 100);
};

const close = function (dialog, trigger) {
  dialog.setAttribute('aria-hidden', true);
  doc.setAttribute('aria-hidden', false);
  // restoring focus
  trigger.focus();
};
triggers.forEach((trigger) => {
  const dialog = document.getElementById(trigger.getAttribute('aria-controls'));
  const dismissTriggers = dialog.querySelectorAll('[data-dismiss]');
  // open dialog
  trigger.addEventListener('click', (event) => {
    event.preventDefault();
    open(dialog);
  });
  trigger.addEventListener('keydown', (event) => {
    if (event.which === keyCodes.enter) {
      event.preventDefault();
      open(dialog);
    }  
  });
  // close dialog
  dialog.addEventListener('keydown', (event) => {
    if (event.which === keyCodes.escape){

      close(dialog, trigger);
    }      
    
  });

  dismissTriggers.forEach((dismissTrigger) => {
    const dismissDialog = document.getElementById(dismissTrigger.dataset.dismiss);

    dismissTrigger.addEventListener('click', (event) => {
      event.preventDefault();

      close(dismissDialog, trigger);
    });
  });
  window.addEventListener('click', (event) => {
    if (event.target === dialog) {
      close(dialog, trigger);
    }
  }); 
});

function send() {
  const form = document.contact;
  const email = document.getElementById('email').value;
  if (form.first.value !== '' && form.last.value !== '' && checkEmail(email)) {
    const User = {
        prenom  :  form.first.value,
        Nom     : form.last.value,
        Email   : form.email.value,
        Message : form.msg.value
    }
    console.log(User);
    const pro = document.getElementById('name').textContent;
    alert('Merci ' + User.prenom + ', ' + pro + " a bien re\u00e7u votre message.", );
    window.location.reload();
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