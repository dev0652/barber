import emailjs from '@emailjs/browser';

(function () {
  emailjs.init('2np3E1HG1gcX8Tapf');
})();

window.onload = function () {
  document
    .getElementById('contact-form')
    .addEventListener('submit', function (event) {
      event.preventDefault();

      emailjs
        .sendForm(
          'service_02rwk5r',
          'template_p886z4c',
          '#contact-form',
          '2np3E1HG1gcX8Tapf'
        )
        .then(
          function (response) {
            alert('SUCCESS!');
          },
          function (error) {
            alert('FAILED...');
          }
        );
    });
};
