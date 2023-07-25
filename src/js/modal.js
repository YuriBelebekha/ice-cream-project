const refs = {
  modal: document.querySelector('[data-modal]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modalContainer: document.querySelectorAll('[data-modal-open-target]'),
  body: document.querySelectorAll('body'),
  backdrop: document.querySelector('.backdrop'),
  videoplayer: document.getElementById('videoplayer'),
};

const youTubeOptions = {
  baseYoutubeSrc: 'https://www.youtube-nocookie.com/embed/LhDS2-PNiBE?controls=0',  
  autoplayOn: 'autoplay=1',
};
const { baseYoutubeSrc, controlsOff, autoplayOn } = youTubeOptions;

refs.closeModalBtn.addEventListener('click', closeModal);

refs.backdrop.addEventListener('click', (e) => {
  const click = e.composedPath()[0];

  if (click === refs.backdrop) {
    closeModal();
  };
});

document.addEventListener('click', function (e) {
  const clickedElement = e.target.closest('[data-modal-open-path]');
  
  if (clickedElement) {
    let target = clickedElement.dataset.modalOpenPath;
    let modalContainer = document.querySelector(`[data-modal-open-target="${target}"]`);

    refs.body.forEach(target => target.classList.add('no-scroll'));
    modalContainer.classList.add('is-open');
    refs.modal.classList.remove('is-hidden');
    refs.videoplayer.src = `${baseYoutubeSrc}&${autoplayOn}`;
    
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
  refs.videoplayer.src = `${baseYoutubeSrc}`;
};