const refs = {
  modal: document.querySelector('[data-modal]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modalContainer: document.querySelectorAll('[data-modal-open-target]'),
};

refs.closeModalBtn.addEventListener('click', closeModal);

document.addEventListener('click', function (e) {
  const clickedElement = e.target.closest('[data-modal-open-path]'); 
  
  if (clickedElement) {
    let target = clickedElement.dataset.modalOpenPath;
    let modalContainer = document.querySelector(`[data-modal-open-target="${target}"]`);

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
  refs.modalContainer.forEach(item => { item.classList.remove('is-open') });
  refs.modal.classList.add('is-hidden');
};


// stopped here
// Додати закриття модального вікна при кліку по backdrop
// Додати неможливість прокручування основної сторінки коли відкрите модальне вікно




// INITIAL

// (() => {
//   const refs = {
//     modal: document.querySelector('[data-modal]'),
//     closeModalBtn: document.querySelector('[data-modal-close]'),
//     openModalBtn: document.querySelector('[data-modal-open]'),
//   };

//   refs.closeModalBtn.addEventListener('click', toggleModal);
//   refs.openModalBtn.addEventListener('click', toggleModal);

//   function toggleModal() {
//     refs.modal.classList.toggle('is-hidden');
//   };
// })();