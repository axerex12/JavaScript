import {baseUrl} from './variables.js';
import {fetchData} from './utils.js';
import {restaurantRow, restaurantModal} from './components.js';

const taulukko = document.querySelector('#target');
const modal = document.querySelector('#modal');
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
const createTable = () => {
  for (const restaurant of restaurants) {
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
