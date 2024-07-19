// Write your code here!
const mainElement = document.querySelector('#main');
mainElement.remove();

const newHeader = document.createElement("h1");
newHeader.textContent = "Carlos is the champion";
newHeader.id = "victory";