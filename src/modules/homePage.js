const showContainer = document.querySelector('.movie-section');

const homePage = async (shows) => {
  showContainer.innerHTML = '';
  shows.forEach((item) => {
    showContainer.innerHTML += `
        <li id="show-${item.id}" class="single-movie">
        <img src=${item.image.medium} alt="movie-image" class="image-pic" />
        <div class="desc">
          <p class="movie-title">${item.name}</p>
          <div class="likes">
            <i class="fa-sharp fa-regular fa-heart" data-id=${item.id}></i>            
            <p data-id = "${item.id}"> <span class="like-count"></span> likes</p>
          </div>
        </div>
        <button class="comments-btn" id=${item.id}>Comments</button>
      </li>
    `;
  });
};

export default homePage;
