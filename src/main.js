// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

const form = document.querySelector('.form');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const query = form.elements['search-text'].value.trim();
  if (!query) {
    iziToast.warning({
      message: 'Please enter a search query!',
      position: 'topRight',
    });
    return;
  }
  clearGallery();
  showLoader();

  getImagesByQuery(query)
    .then(images => {
      if (images.length === 0) {
        iziToast.error({
          title:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      }
      createGallery(images);
    })
    .catch(error => {
      iziToast.error({
        message: 'Something went wrong. Try again!',
        position: 'topRight',
      });
      console.error(error);
    })
    .finally(() => hideLoader());
});
