"use strict";
var body = document.querySelector("body");
var hexText = document.getElementById("hexText");
var button = document.getElementById("button");
var getColor = function () {
    var hexColor = "#";
    hexColor += Math.random().toString(16).slice(2, 8);
    return hexColor;
};
var setBackground = function () {
    var backgroundColor = getColor();
    body.style.backgroundColor = backgroundColor;
    hexText.textContent = backgroundColor;
};
button.addEventListener("click", function () { return setBackground(); });
body.onkeyup = function (e) {
    if (e.keyCode == 32) {
        setBackground();
    }
};
