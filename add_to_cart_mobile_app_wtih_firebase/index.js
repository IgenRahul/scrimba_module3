import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  onValue,
  remove,
} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-database.js";
const inputFieldEl = document.getElementById("input-field");
const addButtonEl = document.getElementById("add-button");
const shoppingListEl = document.getElementById("shopping-list");

const appSettings = {
  databaseURL:
    "https://realtime-database-875f8-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

const app = initializeApp(appSettings);
const database = getDatabase(app);
const shoppingListInDB = ref(database, "shopping-list");

onValue(shoppingListInDB, function (snapshot) {
  if (!snapshot.exists()) {
    shoppingListEl.textContent = "No items in the list";
    return;
  }
  clearList();
  const data = Object.entries(snapshot.val());
  for (let i = 0; i < data.length; i++) {
    appendToList(data[i]);
  }
});

addButtonEl.addEventListener("click", addButtonElClickHandler);
inputFieldEl.addEventListener("keydown", function (e) {
  if (e.code === "Enter") {
    addButtonElClickHandler();
  }
});

function addButtonElClickHandler() {
  let inputValue = inputFieldEl.value;
  appendToList(inputValue);
  push(shoppingListInDB, inputValue);
  clearInputField();
}

function clearList() {
  shoppingListEl.innerHTML = "";
}

function appendToList(item) {
  const key = item[0];
  const value = item[1];
  const listEl = document.createElement("li");
  listEl.innerText = value;
  listEl.addEventListener("click", function () {
    // listEl.remove(); FROM DATABASE AND UI
    remove(ref(database, `shopping-list/${key}`));
  });
  shoppingListEl.append(listEl);
}

function clearInputField() {
  inputFieldEl.value = "";
}
