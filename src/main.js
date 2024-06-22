import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchGallery } from './js/pixabay-api';
import { galleryTemplate } from './js/render-function';

const refs = {
  formElem: document.querySelector('.form'),
  ulElem: document.querySelector('.js-gallery'),
  loader: document.querySelector('.loader'),
};

let query = '';
let currentPage = 1;
let maxPage = 1;
const perPage = 15;

refs.formElem.addEventListener('submit', requestImgGallery);

async function requestImgGallery(e) {
  e.preventDefault();

  query = e.target.elements.searchField.value.trim();
  currentPage = 1;
  showLoader();
  try {
    const data = await fetchGallery(query, currentPage);
    console.log(data);
    if (data.total === 0) {
      showError();
    }
    const markup = galleryTemplate(data.hits);
    refs.ulElem.innerHTML = markup;
    lightbox.refresh();
  } catch {
    warningError();
  }
  hideLoader();
  refs.formElem.reset();
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

lightbox.refresh();

function showLoader() {
  refs.loader.classList.remove('hidden');
}

function hideLoader() {
  refs.loader.classList.add('hidden');
}

function showError() {
  iziToast.error({
    title: '',
    message:
      'Sorry, there are no images matching your search query. Please try again!',
    messageLineHeight: '1.5',
    messageSize: '16',
    messageColor: '#fff',
    position: 'topRight',
    backgroundColor: '#ef4040',
    icon: false,
  });
}

function warningError() {
  iziToast.warning({
    title: '',
    message: 'Sorry! There was a problem with the server!',
    messageLineHeight: '1.5',
    messageSize: '16',
    messageColor: '#fff',
    position: 'topRight',
    backgroundColor: '#ef4040',
    icon: false,
  });
}
