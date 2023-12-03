import { fetchData } from './api.js';

class FoodWidget {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
  }

  async render() {
    try {
      const data = await fetchData();

      if (data && Array.isArray(data)) {
        this.container.innerHTML = `<h2>Featured Cakes</h2>`;
        const cakeList = document.createElement('ul');
        cakeList.innerHTML = data.map(cake => `
          <li>
            <h3>${cake.title}</h3>
            <p>Difficulty: ${cake.difficulty}</p>
            <img src="${cake.image}" alt="${cake.title}">
          </li>
        `).join('');
        this.container.appendChild(cakeList);
      } else {
        this.container.innerHTML = '<p>Error loading data.</p>';
      }
    } catch (error) {
      console.error('Error rendering widget:', error);
    }
  }
}

export default FoodWidget;