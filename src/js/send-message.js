import emailjs from '@emailjs/browser';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

(function () {
  emailjs.init('2np3E1HG1gcX8Tapf');
})();

const callback = function (event) {
  event.preventDefault();

  emailjs
    .sendForm(
      'service_02rwk5r',
      'template_csnhoym',
      '#email-form',
      '2np3E1HG1gcX8Tapf'
    )
    .then(
      function (response) {
        Notify.success('Успішно надіслано');
      },
      function (error) {
        Notify.failure('Щось пішло не так!');
      }
    );
}

const regularForm = document.getElementById('contact-form');
regularForm.addEventListener('submit', callback);

const mobileMenu = document.querySelector('[data-menu]');
const mobileForm = mobileMenu.querySelector('.contact_form');
mobileForm.id = "contact-form-mobile";

mobileForm.addEventListener('submit', callback);