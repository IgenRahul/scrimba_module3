const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];
let theme = "dark";
setTheme();
function setTheme() {
  if (theme === "light") {
    document.documentElement.style.setProperty("--h1-color", "#2b283a");
    document.documentElement.style.setProperty("--password-color", "white");
    document.documentElement.style.setProperty("--bg", "#ECFDF5");
    document.documentElement.style.setProperty("--divider", "#d5d4d8");
  } else {
    document.documentElement.style.setProperty("--h1-color", "white");
    document.documentElement.style.setProperty("--password-color", "#55f991");
    document.documentElement.style.setProperty("--bg", "#1f2937");
    document.documentElement.style.setProperty("--divider", "#2f3e53");
  }
}

function themeToggleHandler() {
  theme = theme === "dark" ? "light" : "dark";
  setTheme();
}
const passwordElFirst = document.getElementById("password-el-first");
const passwordElSecond = document.getElementById("password-el-second");
const generateBtn = document.getElementById("generate");
function generatePassword() {
  let password = "";
  for (let i = 0; i < 15; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}
function renderPasswords() {
  let passwordOne = generatePassword();
  let passwordTwo = generatePassword();
  passwordElFirst.textContent = passwordOne;
  passwordElSecond.textContent = passwordTwo;
}
