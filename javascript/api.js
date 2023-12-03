
// In this code, before making a request to the API, we first try to get the data from localStorage. 
//If the data is there, we parse it from JSON and return it. If the data is not in localStorage, we fetch it from the API, store it in localStorage for future use, and then return it.

// Please note that localStorage has a size limit (usually 5MB), and it only works on the same domain. 
//If you need to store more data or share data between different domains, you might need to use a different solution, like IndexedDB or a service worker with a Cache API.


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