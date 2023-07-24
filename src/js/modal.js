const refs = {
  modal: document.querySelector('[data-modal]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modalContainer: document.querySelectorAll('[data-modal-open-target]'),
  body: document.querySelectorAll('body'),
  backdrop: document.querySelector('.backdrop'),
};

refs.closeModalBtn.addEventListener('click', closeModal);
refs.backdrop.addEventListener('click', closeModal);

document.addEventListener('click', function (e) {
  const clickedElement = e.target.closest('[data-modal-open-path]'); 
  
  if (clickedElement) {
    let target = clickedElement.dataset.modalOpenPath;
    let modalContainer = document.querySelector(`[data-modal-open-target="${target}"]`);

    refs.body.forEach(target => target.classList.add('no-scroll'));
    modalContainer.classList.add('is-open');
    refs.modal.classList.remove('is-hidden');
    
    return;
  };
});

document.addEventListener('keydown', (e) => {   
  if (e.code === 'Escape') {   
    closeModal();
  };
});

function toggleModal() {
  refs.modal.classList.toggle('is-hidden');
};

function closeModal() {
  refs.body.forEach(target => target.classList.remove('no-scroll'));
  refs.modalContainer.forEach(item => { item.classList.remove('is-open') });
  refs.modal.classList.add('is-hidden');
};