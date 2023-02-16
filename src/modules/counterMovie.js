const movieCounter = () => {
  const movieCounter = document.querySelector('.main-section');
  const count = movieCounter.childElementCount;
  return count;
};

export default movieCounter;
