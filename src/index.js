import './style.css';

class Movies {
  constructor() {
    this.url = 'https://api.tvmaze.com/shows';
    this.movies = JSON.parse(localStorage.getItem('movies')) || [];
  }

  fetchApi = async () => {
    const req = new Request(this.url);
    const res = await fetch(req);
    const result = await res.json();
    this.movies = result
      .slice(0, 6)
      .map(({ id, name, image }) => ({ id, name, image }));
    return this.movies;
  };

  displayMovies = async () => {
    const moviesList = document.querySelector('.movies');
    moviesList.innerHTML = '';
    this.movies.forEach((item) => {
      const li = document.createElement('li');
      li.innerHTML = ` <img src="${item.image.medium}" alt="" srcset="">
     <div>
     <h3>${item.name}</h3>
     <div class="flex">
     <span> Likes <i class="fa-solid fa-heart"></i></span>
    <span> Comments  <i class="fa-solid fa-comment"></i></span>
   </div>
   </div>`;
      moviesList.appendChild(li);
    });
  };
}

const movies = new Movies();

movies.fetchApi().then(() => {
  movies.displayMovies();
});
