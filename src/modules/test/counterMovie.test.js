import movieCounter from '../counterMovie.js';

describe('movieCounter', () => {
  test('returns the number of child elements in .main-section', () => {
    document.body.innerHTML = `
      <ul class="main-section">
        <li></li>
        <li></li>
      </ul>
    `;
    expect(movieCounter()).toBe(2);
  });
});
