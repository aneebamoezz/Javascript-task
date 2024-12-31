//Question: Write a function that takes two numbers as arguments and returns their sum. If no arguments are provided, return 0.

function sumNumber(a = 0, b = 0) {
  return a + b;
}
console.log(sumNumber(10 + 40));
console.log(sumNumber(40 + 70));
console.log(sumNumber());

//Question: Create a button that changes the background color of the page to a random color when clicked.

const btn = document.querySelector("#my-btn");
const body = document.querySelector("body");

btn.addEventListener("click", () => {
  const randomColor = `#${Math.floor(Math.random() * 23456543)}`;
  document.body.style.backgroundColor = randomColor;
});

//Question: Build a counter that increments or decrements a number when respective buttons are clicked.
let counter = document.querySelector("#counter");
let inBtn = document.querySelector("#increment");
let deBtn = document.querySelector("#decrement");
let resetBtn = document.querySelector("#reset");

let counts = 0;

function countUpdat() {
  counter.textContent = counts;
}

inBtn.addEventListener("click", () => {
  counts++;
  countUpdat();
});

deBtn.addEventListener("click", () => {
  counts--;
  countUpdat();
});

resetBtn.addEventListener("click", () => {
  counts = 0;
  countUpdat();
});

//Question: Given an array of numbers, write a function that filters out odd numbers and returns only even numbers.

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

let newArr = nums.filter((val) => {
  return val % 2 === 0;
});

console.log(newArr);

//Question: Fetch a random joke from an Array of jokes and display it in a <p> tag when a button is clicked.

import { fakeJokes } from "./data.js";


let jokeBtn = document.getElementById("jokeButton");
const jokeDisplay = document.getElementById("jokeDisplay");

jokeBtn.addEventListener("click", () => {
  console.log("click");
  const myStr = fakeJokes[Math.floor(Math.random() * fakeJokes.length)];
  jokeDisplay.innerHTML = `<strong>Q: ${myStr.question}</strong>  <br> <strong>A:</strong> ${myStr.answer}`;
});

//Question: Write a function that divides two numbers and handles the error if the divisor is 0.

function divideNums(a, b) {
  if (b === 0) {
    return "Error the divisor is 0";
  } else {
    return a / b
  }
}

console.log(divideNums(2, 0))

//Question: Save a user's name in localStorage and display it when they revisit the page.

let myLocalStorageName = document.getElementById("myName")
localStorage.setItem("name", "Aneeba")



const getItems = localStorage.getItem("name")

myLocalStorageName.innerText = getItems;

//decimal

