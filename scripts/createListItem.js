import createWeekDay from './createWeekDay.js';

const inputItem = document.getElementById("input-item");
let count = 0;



export function createListItem() {
    if (inputItem.value === '') {
        alert("Please insert a valid item!");
        return;
    }
    
    const listItem = document.createElement("li");
    const itemListContainer = document.createElement("div");

    itemListContainer.classList.add("list-item-container");

    const inputCheckbox = document.createElement("input");
    inputCheckbox.type = "checkbox";
    inputCheckbox.id = "checkbox-" + count++;
    
    const itemName = document.createElement("p");
    itemName.innerText = inputItem.value;

    inputCheckbox.addEventListener('change', () => {
        if (inputCheckbox.checked) {
            itemName.style.textDecoration = "line-through";
            itemData.style.textDecoration = "line-through";
        } else {
            itemName.style.textDecoration = "none";
            itemData.style.textDecoration = "none";
        }
    });

    itemListContainer.appendChild(inputCheckbox);
    itemListContainer.appendChild(itemName);
    listItem.appendChild(itemListContainer);

    const weekDay = createWeekDay();
    const itemData = document.createElement("p");

    itemData.innerText = weekDay;
    itemData.classList.add('text-data');
    listItem.appendChild(itemData);

    return listItem;
}