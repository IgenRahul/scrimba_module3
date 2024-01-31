// javascript
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  onValue,
  remove,
} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-database.js";

const endorsementInputFieldEl = document.getElementById(
  "endorsement-input-field"
);
const fromInputFieldEl = document.getElementById("from-input-field");
const toInputFieldEl = document.getElementById("to-input-field");
const publishButtonEl = document.getElementById("publish-btn");
const containerEl = document.getElementsByClassName("container")[0];
const endorsementListEl = document.getElementById("endorsement-list");
const appSettings = {
  databaseURL:
    "https://realtime-database-875f8-default-rtdb.asia-southeast1.firebasedatabase.app/",
};
const app = initializeApp(appSettings);
const database = getDatabase(app);
const endorsementsInDB = ref(database, "endorsements");

onValue(endorsementsInDB, function (snapshot) {
  if (!snapshot.exists()) {
    endorsementListEl.textContent = "No endorsements yet";
    return;
  }
  clearList();
  const data = Object.entries(snapshot.val());
  for (let i = 0; i < data.length; i++) {
    appendToList(data[i]);
  }
});

publishButtonEl.addEventListener("click", publishButtonElClickHandler);

containerEl.addEventListener("keydown", function (e) {
  if (e.code === "Enter") {
    publishButtonElClickHandler();
  }
});

function publishButtonElClickHandler() {
  const endorsement = {
    endorsement: endorsementInputFieldEl.value,
    from: fromInputFieldEl.value,
    to: toInputFieldEl.value,
  };
  if (
    endorsement.endorsement === "" ||
    endorsement.from === "" ||
    endorsement.to === ""
  ) {
    alert("Please fill in all fields");
    return;
  } else {
    push(endorsementsInDB, endorsement);
    clearInputFields();
  }
}
function appendToList(endorsement) {
  const key = endorsement[0];
  const value = endorsement[1];
  const listEl = document.createElement("li");

  listEl.innerHTML = `<h4>To ${value.to}</h4>
  <p>${value.endorsement}
  </p>
  <div class="list-bottom">
    <h4>${value.from}</h4>
    <p class="heart">🖤 ${randomGenerator()}</p>
  </div>`;

  listEl.addEventListener("click", function () {
    remove(ref(database, `endorsements/${key}`));
  });
  endorsementListEl.append(listEl);
}

function clearInputFields() {
  endorsementInputFieldEl.value = "";
  fromInputFieldEl.value = "";
  toInputFieldEl.value = "";
}

function clearList() {
  endorsementListEl.innerHTML = "";
}

function randomGenerator() {
  return Math.floor(Math.random() * 10);
}
