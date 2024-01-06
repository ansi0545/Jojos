

import axios from 'https://cdn.skypack.dev/axios';

axios.defaults.withCredentials = false;

export async function fetchData() {
  const cachedData = localStorage.getItem('data');

  if (cachedData) {
    return JSON.parse(cachedData);
  }

  const options = {
    method: 'GET',
    url: 'https://the-birthday-cake-db.p.rapidapi.com/',
    headers: {
      'X-RapidAPI-Key': 'bb0f072e33msh9b8505f3757ae89p1564cdjsn263ae25cacaf',
      'X-RapidAPI-Host': 'the-birthday-cake-db.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    localStorage.setItem('data', JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}