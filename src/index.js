import './style.css';

const url = 'https://api.tvmaze.com/shows';

const fetchApi = async () => {
  const req = new Request(url);
  const res = await fetch(req);
  const result = await res.json();
  const scrs = result.slice(1, 7);
  return scrs;
};

fetchApi();