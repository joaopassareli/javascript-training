import { createListItem } from './scripts/createListItem.js';
import updateEmptyListMessage from './scripts/updateEmptyListMessage.js';

const shoppingList = document.getElementById("shopping-list");
const addButton = document.getElementById("add-item");

addButton.addEventListener('click', (event) => {
    event.preventDefault();
    const listItem = createListItem();
    shoppingList.appendChild(listItem);
    updateEmptyListMessage(shoppingList);
});

updateEmptyListMessage(shoppingList);
