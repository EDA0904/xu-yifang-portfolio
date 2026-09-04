const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#site-nav');

if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && nav.classList.contains('open')) {
      nav.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.focus();
    }
  });
}

const comicLaunch = document.querySelector('.comic-launch');
const videoModal = document.querySelector('#comic-video-modal');
const modalClose = document.querySelector('.modal-close');
const comicVideo = document.querySelector('#comic-bgm-video');

if (comicLaunch && videoModal && modalClose && comicVideo) {
  const closeVideo = () => {
    if (videoModal.open) videoModal.close();
  };

  comicLaunch.addEventListener('click', () => {
    videoModal.showModal();
    document.body.classList.add('modal-open');
    comicVideo.play().catch(() => {});
  });

  modalClose.addEventListener('click', closeVideo);

  videoModal.addEventListener('click', event => {
    if (event.target === videoModal) closeVideo();
  });

  videoModal.addEventListener('cancel', event => {
    event.preventDefault();
    closeVideo();
  });

  videoModal.addEventListener('close', () => {
    comicVideo.pause();
    document.body.classList.remove('modal-open');
    comicLaunch.focus();
  });
}

document.querySelector('#year').textContent = new Date().getFullYear();
