
const triggers = document.querySelectorAll('[aria-haspopup="dialogg"]');
const doc = document.querySelector('.body');
const focusableElementsArray = [
  '[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])', 
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
  'image:not([disabled])'
];
const keyCodes = {
  tab: 9,
  enter: 13,
  escape: 27,
  next: '', 
  prev: ''
};
const open = function (dialogg) {

  const focusableElements = dialog.querySelectorAll(focusableElementsArray);
  const firstFocusableElement = focusableElements[0];
  const lastFocusableElement = focusableElements[focusableElements.length - 1];

  dialogg.setAttribute('aria-hidden', false);
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

const close = function (dialogg, trigger) {
  dialogg.setAttribute('aria-hidden', true);
  doc.setAttribute('aria-hidden', false);
  // restoring focus
  trigger.focus();
};
triggers.forEach((trigger) => {
  const dialogg = document.getElementById(trigger.getAttribute('aria-controls'));
  const dismissTriggers = dialog.querySelectorAll('[data-dismiss]');
  // open dialog
  trigger.addEventListener('click', (event) => {
    event.preventDefault();
    open(dialogg);
  });
  trigger.addEventListener('keydown', (event) => {
    if (event.which === keyCodes.enter) {
      event.preventDefault();
      open(dialogg);
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

