window.onload = function () {
  let meme = document.createElement("img");
  meme.id = "meme-image";
  let topText = document.createElement("h2");
  topText.id = "top-text";
  let bottomText = document.createElement("h2");
  bottomText.id = "bottom-text";
  let memeWrapper = document.getElementById("meme-image-wrapper");
  memeWrapper.append(topText, bottomText, meme);
};

function showMeme() {
  let memeUrl = document.getElementById("image-url").value;
  console.log(memeUrl);
  document.getElementById("meme-builder").style.display = "block";
  document.getElementById("meme-image").src = memeUrl;

  let topInput = document.createElement("input");
  topInput.id = "top-input";
  topInput.setAttribute("type", "text");
  topInput.setAttribute("placeholder", "Put some text to show on the top ...");
  let topInputSubmit = document.createElement("input");
  topInputSubmit.setAttribute("type", "button");
  topInputSubmit.setAttribute("value", "Submit");
  topInputSubmit.setAttribute("onclick", "showTopText()");

  document.getElementById("top-text-wrapper").append(topInput, topInputSubmit);

  let bottomInput = document.createElement("input");
  bottomInput.id = "bottom-input";
  bottomInput.setAttribute("type", "text");
  bottomInput.setAttribute(
    "placeholder",
    "Put some text to show on the bottom ..."
  );
  let bottomInputSubmit = document.createElement("input");
  bottomInputSubmit.setAttribute("type", "button");
  bottomInputSubmit.setAttribute("value", "Submit");
  bottomInputSubmit.setAttribute("onclick", "showBottomText()");

  document
    .getElementById("bottom-text-wrapper")
    .append(bottomInput, bottomInputSubmit);
}

function showTopText() {
  let topUserInput = document.getElementById("top-input").value;
  document.getElementById("top-text").innerHTML = topUserInput;
}

function showBottomText() {
  let bottomUserInput = document.getElementById("bottom-input").value;
  document.getElementById("bottom-text").innerHTML = bottomUserInput;
}
