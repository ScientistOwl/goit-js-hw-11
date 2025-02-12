import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export function renderImages(images) {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
      <div class="photo-card">
        <a href="${largeImageURL}">
          <img src="${webformatURL}" alt="${tags}" loading="lazy" />
        </a>
        <div class="info">
          <p><b>Likes</b>: ${likes}</p>
          <p><b>Views</b>: ${views}</p>
          <p><b>Comments</b>: ${comments}</p>
          <p><b>Downloads</b>: ${downloads}</p>
        </div>
      </div>
    `
    )
    .join('');
  const lightbox = new SimpleLightbox('.gallery a');
  lightbox.refresh();
}

export function showNotification(message, type = 'info') {
  iziToast[type]({
    message,
    position: 'topRight',
  });
}

export function clearGallery() {
  document.querySelector('.gallery').innerHTML = '';
}
