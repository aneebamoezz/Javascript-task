//Question: Write a function that takes two numbers as arguments and returns their sum. If no arguments are provided, return 0.

function sumNumber(a = 0, b = 0) {
    return a + b
}
console.log(sumNumber(10 + 40));
console.log(sumNumber(40 + 70));
console.log(sumNumber());

//Question: Create a button that changes the background color of the page to a random color when clicked.

const btn = document.querySelector("#my-btn");
const body = document.querySelector("body");

btn.addEventListener("click", () => {
  const randomColor = `#${Math.floor(Math.random() * 23456543)}`
  document.body.style.backgroundColor = randomColor;
});


//Question: Build a counter that increments or decrements a number when respective buttons are clicked.
let counter = document.querySelector("#counter")
let inBtn = document.querySelector("#increment")
let deBtn = document.querySelector("#decrement")
let resetBtn = document.querySelector("#reset")

let counts = 0;

function countUpdat() {
  counter.textContent = counts;
}

inBtn.addEventListener("click", () => {
 counts++
 countUpdat()
})

deBtn.addEventListener("click", () => {
 counts--
 countUpdat()
})

resetBtn.addEventListener("click", () => {
  counts = 0
  countUpdat()
 })
 
 