const body = document.querySelector("body");
const hexText = document.getElementById("hexText");
const button = document.getElementById("button");

let getColor = function () {
  let hexColor = "#";
  hexColor += Math.random().toString(16).slice(2, 8);
  return hexColor;
};

let setBackground = function () {
  let backgroundColor = getColor();
  body.style.backgroundColor = backgroundColor;
  hexText.textContent = backgroundColor;
};

button.addEventListener("click", () => setBackground());

body.onkeyup = function (e) {
  if (e.keyCode == 32) {
    setBackground();
  }
};
