import emailjs from '@emailjs/browser';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

(function () {
  emailjs.init('2np3E1HG1gcX8Tapf');
})();

// const contactForm = document
//   .getElementById('contact-form')
//   .addEventListener('submit', function (event) {
//     event.preventDefault();

//     emailjs
//       .sendForm(
//         'service_02rwk5r',
//         'template_p886z4c',
//         '#contact-form',
//         '2np3E1HG1gcX8Tapf'
//       )
//       .then(
//         function (response) {
//           alert('SUCCESS!');
//         },
//         function (error) {
//           alert('FAILED...');
//         }
//       );
//   });

const allForm = document.querySelectorAll('.contact_form');

// allForm.forEach(element => {
//   element.addEventListener('submit', function (event) {
//     event.preventDefault();

//     emailjs
//       .sendForm(
//         'service_02rwk5r',
//         'template_p886z4c',
//         '.contact_form',
//         '2np3E1HG1gcX8Tapf'
//       )
//       .then(
//         function (response) {
//           alert('SUCCESS!');
//         },
//         function (error) {
//           alert('FAILED...');
//         }
//       );
//   });
// });

const mailForm = document
  .getElementById('email-form')
  .addEventListener('submit', function (event) {
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
  });
