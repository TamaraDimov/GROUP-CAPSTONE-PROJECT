const { counter } = require('../comments.js');

describe('counter', () => {
  test('returns the number of comments', () => {
    const commentData = [
      { creation_date: '2023-02-08', username: 'NAji', comment: 'Must Watch' },
      { creation_date: '2023-02-09', username: 'Tamara', comment: 'all time favourite' },
      { creation_date: '2023-02-08', username: 'ALi', comment: 'One of my Fav' },
      { creation_date: '2023-02-09', username: 'TAmarq', comment: 'what a great anime' },
    ];
    expect(counter(commentData)).toEqual(4);
  });

  test('returns 0 when there is an error', () => {
    const errorData = { error: 'An error occurred' };
    expect(counter(errorData)).toEqual(0);
  });
});
