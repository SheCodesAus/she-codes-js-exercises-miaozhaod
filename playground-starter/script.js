console.log("Hello, world!");

// function showName() {
//   let inputField = document.getElementById("name-text");
//   console.log("inputField", inputField.value);
//   //   console.dir(inputField);
//   alert("Hello, " + inputField.value);
// }

// let pets = ["Chilli", "Rex", "Roary", "Fleur"];
// for (let index = 0; index < pets.length; index++) {
//   console.log("Found index", pets[index]);
// }
// pets.pop();
// pets.push("Bella");
// console.log("Found pets", pets);

let pets = ["Chilli", "Rex", "Roary", "Fleur", "Bella"];
for (let index = 0; index < pets.length; index++) {
  console.log("Found index", pets[index]);
}

pets.forEach(pet => {
  console.log(pet);
});
