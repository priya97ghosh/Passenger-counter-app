// document.getElementById("count-el").innerText = 5

// Initialize the count as 0
// Listen for clicks on the increment button
// Increment the count variable when the button is clicked
// Change the count-el in the HTML to reflect the new count

let countEl = document.getElementById("count-el");
let count = 0;
let saveEl = document.getElementById("save-el");
console.log(saveEl);

function increment() {
  count = count + 1;
  countEl.textContent = count;
}

function save() {
  let countStr = count + " - ";
  saveEl.textContent += countStr; // textContent returns every element in the node like 5 - 6 - 7
  countEl.textContent = 0;
  count = 0;
}
