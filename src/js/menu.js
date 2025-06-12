(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    menuLinks: document.querySelectorAll('.mob-menu-a'), // Додаємо всі посилання меню
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  // Додаємо закриття меню при кліку на будь-яке посилання
  refs.menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      refs.modal.classList.remove('is-open');
    });
  });

  function toggleModal() {
    refs.modal.classList.toggle('is-open');
  }
})();
