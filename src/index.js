import './style.css';
import getLike from './modules/getLike.js';
import postLike from './modules/postLike.js';
import homePage from './modules/homePage.js';
import getMovie from './modules/getMovies.js';

const addEvents = () => {
  const likeIcon = document.querySelectorAll('.fa-heart');
  likeIcon.forEach((element) => {
    element.addEventListener('click', () => {
      postLike(element.dataset.id);
    });
  });
};

window.addEventListener('load', async () => {
  const shows = await getMovie();
  homePage(shows);
  addEvents();
  getLike();
});
