/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector(
    ".topleftsuit"
  ).innerHTML = `${arrayOfSuitsinHTML[numForSuit]}`;

  document.querySelector(
    ".bottomrightsuit"
  ).innerHTML = `${arrayOfSuitsinHTML[numForSuit]}`;

  document.querySelector(
    ".middlenumber"
  ).innerHTML = `${arrayofValuesforCard[randomIndex]}`;
};

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var numForSuit = randomInt(0, 3);
var randomIndex = randomInt(0, 12);
var arrayOfSuitsinHTML = ["&#9830", "&#9827", "&#9824", "&#9829"];
var arrayofValuesforCard = [2, 3, 4, 5, 6, 7, 8, 9, 10, "K", "Q", "J", "A"];

if (randomInt(1, 2) == 1) {
  document.querySelector(".topleftsuit").style.color = "red";
  document.querySelector(".bottomrightsuit").style.color = "red";
} else {
  document.querySelector(".topleftsuit").style.color = "black";
  document.querySelector(".bottomrightsuit").style.color = "black";
}
