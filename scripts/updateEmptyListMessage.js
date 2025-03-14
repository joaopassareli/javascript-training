const emptyListMessage = document.querySelector('.empty-list-message');

function updateEmptyListMessage(shoppingList) {
    const listItems = shoppingList.querySelectorAll('li');
    emptyListMessage.style.display = listItems.length === 0 ? 'block' : 'none';
}

export default updateEmptyListMessage;