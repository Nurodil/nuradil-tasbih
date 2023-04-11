"use strict";

const countEL = document.getElementById("count-el");
const resetBtn = document.getElementById("reset-btn");
const saveEl = document.getElementById("save-el");

let count = 0;
const increment = () => {
  count++;
  countEL.innerText = count;
};

const reset = () => {
  count = 0;
  countEL.innerText = count;
  saveEl.innerText = "🕌Previous zikr count: ";
};

// const save = () => {
function save() {
  let countStr = count + " - ";
  saveEl.textContent += countStr;
}

countEL.addEventListener("click", count - el);
resetBtn.addEventListener("click", reset - btn);
saveEl.addEventListener("click", save - btn);
