let shoppingListItems = ["Milk", "Bread", "Cheese"];

window.onload = function () {
  updateItems();
};
function addItem() {
  let itemInput = document.getElementById("new-item-text").value;
  //   let newListItem = document.createElement("li");
  //   newListItem.innerText = itemInput;
  //   console.log("test adding", newListItem);
  //   shoppingList.appendChild(newListItem);
  if (itemInput) {
    shoppingListItems.push(itemInput);
  }
  console.log("test adding", shoppingListItems);
  updateItems();
}

function updateItems() {
  let shoppingList = document.getElementById("shopping-list-items");
  shoppingList.innerHTML = "";
  shoppingListItems.forEach(item => {
    let listItem = document.createElement("li");
    listItem.innerText = item;
    shoppingList.appendChild(listItem);
  });
}

function clearItems() {
  console.log("test clear");
  shoppingListItems.splice(0, shoppingListItems.length);
  console.log(shoppingListItems);
  let shoppingList = document.getElementById("shopping-list-items");
  shoppingList.innerHTML = "";
  shoppingListItems.forEach(item => {
    let listItem = document.createElement("li");
    listItem.innerText = item;
    shoppingList.appendChild(listItem);
  });
}
