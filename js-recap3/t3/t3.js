const bodyElement = document.querySelector('#target');

var userAgent = navigator.userAgent;

var newP = document.createElement('p');
newP.textContent = userAgent;
bodyElement.appendChild(newP);

var Os = navigator.platform;

var newP = document.createElement('p');
newP.textContent = Os;
bodyElement.appendChild(newP);

const screenHeightAndWidth = window.screen.width + 'x' + window.screen.height;
newP = document.createElement('p');
newP.textContent = screenHeightAndWidth;
bodyElement.appendChild(newP);

const availScreenHeightAndWidth = window.screen.availWidth + 'x' + window.screen.availHeight;
newP = document.createElement('p');
newP.textContent = 'Available screen space: ' + availScreenHeightAndWidth;
bodyElement.appendChild(newP);

const currentDate = new Date().toLocaleString('fi-FI');
newP = document.createElement('p');
newP.textContent = 'Current date and time: ' + currentDate;
bodyElement.appendChild(newP);



