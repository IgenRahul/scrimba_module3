const themeBtn = document.getElementById("theme-btn");
const inputEl = document.getElementById("input-el");
const convertBtn = document.getElementById("convert-btn");
const converteEls = document.getElementsByClassName("converted-el");
let theme = "dark";

themeBtn.addEventListener("click", () => {
  theme = theme === "dark" ? "light" : "dark";
  setTheme();
});

function setTheme() {
  const rootEl = document.documentElement;
  if (theme === "dark") {
    rootEl.style.setProperty("--main-bg", "#1f2937");
    rootEl.style.setProperty("--unit-bg", "#273549");
    rootEl.style.setProperty("--unit-color", "#ccc1ff");
    rootEl.style.setProperty("--unit-value-color", "#ffffff");
  } else {
    rootEl.style.setProperty("--main-bg", "#f4f4f4");
    rootEl.style.setProperty("--unit-bg", "white");
    rootEl.style.setProperty("--unit-color", "#5a537b");
    rootEl.style.setProperty("--unit-value-color", "#353535");
  }
}

convertBtn.addEventListener("click", function () {
  const input = Number(inputEl.value) || 0;
  const convertedUnits = [];
  convertedUnits[0] = `${input} meters = ${metersToFeet(
    input
  )} feet | ${input} feet = ${feetToMeters(input)} meters`;
  convertedUnits[1] = `${input} liters = ${litresToGallons(
    input
  )} gallons | ${input} gallons = ${gallonsToLitres(input)} liters`;
  convertedUnits[2] = `${input} kilos = ${kilosToPounds(
    input
  )} pounds | ${input} pounds = ${poundsToKilos(input)} kilos`;

  [...converteEls].forEach((el, idx) => {
    el.textContent = convertedUnits[idx];
  });
});

function fixedDecimals(value) {
  return value.toFixed(3);
}
function metersToFeet(meters) {
  return fixedDecimals(meters * 3.281);
}
function feetToMeters(feet) {
  return fixedDecimals(feet / 3.281);
}
function litresToGallons(litres) {
  return fixedDecimals(litres * 0.264);
}
function gallonsToLitres(gallons) {
  return fixedDecimals(gallons / 0.264);
}
function kilosToPounds(kilos) {
  return fixedDecimals(kilos * 2.205);
}
function poundsToKilos(pounds) {
  return fixedDecimals(pounds / 2.205);
}

// let convertersEl;
// function render(value){

// }
// for(let i = 0;i<3;i++){
//     let el = `

//     `
// }
