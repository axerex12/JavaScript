export const restaurantRow = ({ name, company }) => {
  // Create a new table row element
  const tr = document.createElement('tr');

  tr.innerHTML = `
    <td>${name}</td>
    <td>${company}</td>
  `;

  return tr;
};

export const restaurantModal = ({ name, address, postalCode }, { courses }) => {
  // Generate the restaurant details HTML
  const restaurantDetails = `
    <h3>${name}</h3>
    <p>${address}</p>
    <p>${postalCode}</p>
  `;

  // Generate the menu items HTML
  let menuHtml = '';
  courses.forEach((course) => {
    menuHtml += `
      <article class="course">
        <p><strong>${course.name}</strong></p>
        <p>Hinta: ${course.price}</p>
        <p>Ruokavaliot: ${course.diets}</p>
      </article>
    `;
  });

  // Combine restaurant details and menu HTML
  const completeHtml = `
    <section>
      ${restaurantDetails}
      <div class="menu">
        ${menuHtml}
      </div>
    </section>
  `;

  // Return the complete HTML content
  return completeHtml;
};
