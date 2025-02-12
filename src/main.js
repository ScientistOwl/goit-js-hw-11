import { fetchImages } from './js/pixabay-api';
import {
  renderImages,
  showNotification,
  clearGallery,
} from './js/render-functions';

const searchForm = document.querySelector('#search-form');
let currentPage = 1;
let currentQuery = '';

searchForm.addEventListener('submit', async event => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const query = form.get('searchQuery').trim();

  if (!query) {
    showNotification('Please enter a search query.', 'warning');
    return;
  }

  currentQuery = query;
  currentPage = 1;
  clearGallery();
  showNotification('Loading...', 'info');

  try {
    const data = await fetchImages(query);
    if (data.hits.length === 0) {
      showNotification(
        'Sorry, there are no images matching your search query. Please try again!',
        'error'
      );
    } else {
      renderImages(data.hits);
      showNotification('Images loaded successfully!', 'success');
    }
  } catch (error) {
    showNotification('Something went wrong. Please try again later.', 'error');
  }
});
