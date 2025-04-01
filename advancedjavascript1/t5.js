import {baseUrl} from './variables.js';
import {fetchData} from './utils.js';
import {restaurantRow, restaurantModal} from './components.js';

const taulukko = document.querySelector('#target');
const modal = document.querySelector('#modal');
const sodexoButton = document.getElementById('sodexoB')
const compassButton = document.getElementById('compassB');
let currentFilter = null;
let restaurants = [];

// Fetches the daily menu for a restaurant
const getDailyMenu = async (id, lang) => {
  try {
    return await fetchData(`${baseUrl}/restaurants/daily/${id}/${lang}`);
  } catch (error) {
    console.error('An error occurred:', error);
  }
};

// Fetches the list of restaurants
const getRestaurants = async () => {
  try {
    restaurants = await fetchData(`${baseUrl}/restaurants`);
  } catch (error) {
    console.error('An error occurred:', error);
  }
};

// Sorts restaurants alphabetically by name
const sortRestaurants = () => {
  restaurants.sort(({name: nameA}, {name: nameB}) =>
    nameA.toUpperCase() > nameB.toUpperCase() ? 1 : -1
  );
};

// Creates the table of restaurants
const createTable = (restaurantsToShow = restaurants) => {
  // Clear the table first
  taulukko.innerHTML = '';

  for (const restaurant of restaurantsToShow) {
    const {_id} = restaurant;
    const tr = restaurantRow(restaurant);

    tr.addEventListener('click', async function () {
      try {
        // Remove existing highlights
        for (const elem of document.querySelectorAll('.highlight')) {
          elem.classList.remove('highlight');
        }
        tr.classList.add('highlight');

        // Fetch and display the daily menu
        const courseResponse = await getDailyMenu(_id, 'fi');
        modal.innerHTML = restaurantModal(restaurant, courseResponse);
        modal.showModal();
      } catch (error) {
        console.error('An error occurred:', error);
      }
    });

    taulukko.append(tr);
  }
};

// Event listeners for the buttons
sodexoButton.addEventListener('click', () => {
  if (currentFilter === 'sodexo') {
    // If Sodexo is already active, remove filter
    currentFilter = null;
    sodexoButton.classList.remove('active');
    createTable(restaurants);
  } else {
    // Apply Sodexo filter
    currentFilter = 'sodexo';
    sodexoButton.classList.add('active');
    compassButton.classList.remove('active');
    const filtered = restaurants.filter(r => r.company.toLowerCase() === 'sodexo');
    createTable(filtered);
  }
});

compassButton.addEventListener('click', () => {
  if (currentFilter === 'compass')  {
    // If Compass is already active, remove filter
    currentFilter = null;
    compassButton.classList.remove('active');
    createTable(restaurants);
  } else {
    // Apply Compass filter
    currentFilter = 'compass';
    compassButton.classList.add('active');
    sodexoButton.classList.remove('active');
    const filtered = restaurants.filter(r => r.company.toLowerCase() === 'compass group');
    createTable(filtered);
  }
});

// Main function to initialize the app
async function main() {
  try {
    await getRestaurants();
    sortRestaurants();
    createTable();
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

main();
