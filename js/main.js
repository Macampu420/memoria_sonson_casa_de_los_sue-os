import Modal from 'bootstrap/js/dist/modal';

const handleFlayerButtonClick = (event) => {
  if (event.target.nodeName !== 'BUTTON') return

  const buttonId = event.target.id;
  const modalContent = document.getElementById(`modal${buttonId}`);

  const modal = new Modal(modalContent);
  modal.show();
}

document.getElementById("rowFlayerButtons").addEventListener("click", handleFlayerButtonClick)

if (window.innerWidth < 768) {
  window.addEventListener('scroll', function () {
    const buttons = document.querySelectorAll('.flayerButonContainer');

    buttons.forEach(function (button) {
      button.classList.remove('hover')
    })

    buttons.forEach(function (button) {
      const buttonPosition = button.getBoundingClientRect().top;
      const startActiveZone = window.innerHeight * 0.4;
      const endActiveZone = window.innerHeight * 0.6;

      if (buttonPosition >= startActiveZone && buttonPosition <= endActiveZone) {
        button.classList.add('hover');
      } else {
        button.classList.remove('hover');
      }
    });
  });
}