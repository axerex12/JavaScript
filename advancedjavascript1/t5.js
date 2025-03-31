import {fetchData} from '../lib/fetchData.js';
import {restaurantRow} from './components.js';

const apiUrl = 'https://media2.edu.metropolia.fi/restaurant/api/v1';
const taulukko = document.querySelector('#target');
const modal = document.querySelector('#modal');
let restaurants = [];

//html functiot
const createRestaurantCells = ({name, address, city}, tr) => {
  //nimi solu
  const nameTd = document.createElement('td');
  nameTd.innerText = name;
  //osoitesolu
  const addressTd = document.createElement('td');
  addressTd.innerText = address;
  //kaupunki soluh
  const cityTd = document.createElement('td');
  cityTd.innerText = city;
  tr.append(nameTd, addressTd, cityTd);
};

const createModalHtml = ({name, address, phone}, modal) => {
  const nameP = document.createElement('h3');
  nameP.innerText = name;
  const addressP = document.createElement('p');
  addressP.innerText = address;
  const phoneP = document.createElement('p');
  if (phone === '-') {
    phoneP.innerText = 'Ei puhelinta';
  } else {
    phoneP.innerText = 'Puhelin: ' + phone;
  }

  modal.append(nameP, addressP, phoneP);
};

const createMenuHtml = (courses) => {
  let html = '';
  for (const course of courses) {
    html += `
  <article class = "course">
  <p><strong>${course.name}</strong></p>,
  Hinta: ${course.price},
  Ruokavaliot: ${course.diets}</p>
  </article>
  `;
  }
  return html;
};

//hakee daily menun
const getDailyMenu = async (id, lang) => {
  try {
    return await fetchData(apiUrl + '/restaurants/daily/' + id + '/' + lang);
  } catch (error) {
    console.error('An error occurred:', error);
  }
};

const getRestaurants = async () => {
  try {
    restaurants = await fetchData(apiUrl + '/restaurants');
  } catch (error) {
    console.error('An error occurred:', error);
  }
};

const sortRestaurants = () => {
  restaurants.sort(function (a, b) {
    return a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1;
  });
};

const createTable = () => {
  for (const restaurant of restaurants) {
    //rivi
    const tr = restaurantRow(restaurant);
    tr.addEventListener('click', async function () {
      try {
        for (const elem of document.querySelectorAll('.highlight')) {
          elem.classList.remove('highlight');
        }
        tr.classList.add('highlight');

        const courseResponse = await getDailyMenu(restaurant._id, 'fi');

        const menuHtml = createMenuHtml(courseResponse.courses);

        await getDailyMenu(restaurant._id, 'fi');

        modal.innerHTML = '';
        modal.showModal();
        createModalHtml(restaurant, modal);
        modal.insertAdjacentHTML('beforeend', menuHtml);
      } catch (error) {
        console.error('An error occurred:', error);
      }
    });

    //lisätään solut riviin
    createRestaurantCells(restaurant, tr);
    taulukko.append(tr);
  }
};
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
