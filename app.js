const titleEl = document.querySelector(".title");
const btnEl = document.querySelector(".btn");
const addBtnEl = document.querySelector(".add-btn");
const toggleBtnEl = document.querySelector(".toggle__btn");
const addScreenEl = document.querySelector(".add__screen");
const saveNumberEl = document.querySelector("#save__number");
const cancelAddEl = document.querySelector("#cancel__add");
const newNumberInput = document.querySelector("#new-number");
const audioEl = document.querySelector(".audio");
const mainEl = document.querySelector(".main");

const TEL = [
  "+998 90 999 77 81"
];

let isDarkMode = true;

function toggleMode() {
  isDarkMode = !isDarkMode;
  mainEl.classList.toggle("dark", isDarkMode);
  mainEl.classList.toggle("light", !isDarkMode);
  toggleBtnEl.textContent = isDarkMode ? "Light Mode" : "Dark Mode";
}

function getPhone() {
  if (TEL.length === 0) {
    alert("No more numbers available!");
    return;
  }

  btnEl.setAttribute("disabled", true);
  const interval = setInterval(() => {
    let randomNumber = Math.floor(Math.random() * TEL.length);
    titleEl.textContent = TEL[randomNumber];
  }, 100);

  setTimeout(() => {
    clearInterval(interval);
    btnEl.removeAttribute("disabled");
    const index = TEL.indexOf(titleEl.textContent);
    if (index !== -1) TEL.splice(index, 1);
    audioEl.play();
  }, 3000);
}

function showAddScreen() {
  addScreenEl.style.display = "flex";
}

function hideAddScreen() {
  addScreenEl.style.display = "none";
}

function addNewPhoneNumber() {
  const newNumber = newNumberInput.value.trim();
  if (!newNumber) {
    alert("Please enter a valid phone number.");
    return;
  }

  TEL.push(newNumber); 
  newNumberInput.value = "";
  hideAddScreen(); 
  alert(`Number ${newNumber} added successfully!`);
}

btnEl.addEventListener("click", getPhone);
addBtnEl.addEventListener("click", showAddScreen);
cancelAddEl.addEventListener("click", hideAddScreen);
saveNumberEl.addEventListener("click", addNewPhoneNumber);
toggleBtnEl.addEventListener("click", toggleMode);
