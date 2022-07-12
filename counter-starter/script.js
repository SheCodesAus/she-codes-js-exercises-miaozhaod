function add(value) {
  let counter = document.getElementById("number");
  counter.innerHTML = parseInt(counter.innerHTML) + value;
  console.log(counter);
}

function subtract(value) {
  let counter = document.getElementById("number");
  counter.innerHTML = parseInt(counter.innerHTML) - value;
}

function update() {
  let counter = document.getElementById("number");
  let userInput = parseInt(document.getElementById("number-input").value);
  counter.innerHTML = parseInt(counter.innerHTML) + userInput;
}
