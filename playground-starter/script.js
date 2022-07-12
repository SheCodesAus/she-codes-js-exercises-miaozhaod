console.log("Hello, world!");

function showName() {
  let inputField = document.getElementById("name-text");
  console.log("inputField", inputField.value);
  //   console.dir(inputField);
  alert("Hello, " + inputField.value);
}
