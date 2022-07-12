window.onload = function () {
  console.log("Page loaded");
  let speechBubbleElement = document.createElement("div");
  speechBubbleElement.classList.add("speech-bubble");
  let messageBox = document.createElement("p");
  messageBox.innerText = " ...";
  messageBox.id = "message-box";
  speechBubbleElement.appendChild(messageBox);

  let outputElement = document
    .getElementById("output")
    .appendChild(speechBubbleElement);
};

function showMessage() {
  let userInput = document.getElementById("message-text").value;
  let userName = document.getElementById("name-text").value;
  document.getElementById(
    "message-box"
  ).innerText = `${userInput}  - ${userName}`;
}
