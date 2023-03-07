"use strict";

// const name = prompt("Ismingizni kiriting?", "");

// Regular expression
// const regex = /\d/g;

// console.log(name.match(regex));
const name = document.querySelector(".name"),
  form = document.querySelector("form");

// const ism = name.value;

const regex = /dir/gi;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (regex.test(name.value)) {
    console.log("admin xush kelibsiz");
  } else {
    console.log("Siz admin emassiz");
  }
});
