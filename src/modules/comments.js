const addComment = (id, name, msg) => {
  if (name.value !== '' && msg.value !== '') {
    // if name and msg not empty add New
    // eslint-disable-next-line no-use-before-define
    addnewComent(id, name.value, msg.value);
    name.value = '';
    msg.value = '';
  }
};

const formComment = (commentId, node) => {
  const commentTitle = document.createElement('div');
  commentTitle.classList.add('form-container');
  commentTitle.innerHTML = '<h4> Add a Comment </h4>';
  const form = document.createElement('form');
  form.classList.add('form-content');
  form.innerHTML = `<input type="text" class="username" placeholder="Your name" required >
   <textarea class="msg" name="msg" id="" cols="20" rows="6" placeholder="Your Comment" required ></textarea>
   <button class="btncomment" type="button">Comment</button>`;
  const btncomment = form.querySelector('.btncomment');
  const username = form.querySelector('.username');
  const msg = form.querySelector('.msg');
  btncomment.addEventListener('click', (e) => {
    e.preventDefault();
    addComment(commentId, username, msg);
  });
  commentTitle.appendChild(form);
  node.appendChild(commentTitle);
};

// counter for number of comments for a single item
const counter = (comment) => {
  let commentCounter = comment.length;
  if (comment.error) {
    commentCounter = 0;
  }
  return commentCounter;
};

// function to Display comments given for a single item
const showComment = (data, element) => {
  element.innerHTML = '';
  const head = document.createElement('h4');
  head.innerHTML = `Comments (${counter(data)})`;
  element.appendChild(head);
  const commentitem = document.createElement('div');
  commentitem.classList.add('comment-items');
  if (!data.error) {
    data.forEach((element) => {
      const item = document.createElement('p');
      item.innerHTML = `<span class="data-comment"><small> ${element.creation_date} </small>${element.username}: ${element.comment}</span>`;
      commentitem.appendChild(item);
    });
  }
  element.appendChild(commentitem);
};

// address for comments API
const link = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Z6mlbf0VYcyGDmGWWyyR/comments?item_id=';

// get number of comments from the given API
const getAddedComments = async (id) => {
  const request = new Request(link + id);
  const response = await fetch(request);
  const comment = await response.json();
  return comment;
};

const addnewComent = async (id, name, msg) => {
  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Z6mlbf0VYcyGDmGWWyyR/comments';
  const request = new Request(url);
  await fetch(request, {
    method: 'POST',
    body: JSON.stringify({ item_id: id, username: name, comment: msg }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const arr = await getAddedComments(id);
  const dataCard = document.querySelector('.comments-container');

  showComment(arr, dataCard);
};

module.exports = {
  counter, formComment, showComment, getAddedComments,
};