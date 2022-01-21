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
var arrayOfSuitsinHTML = ["&#9827", "&#9824", "&#9830", "&#9829"]; //24=spade,27=club,30=diamond,29=heart
var arrayofValuesforCard = [2, 3, 4, 5, 6, 7, 8, 9, 10, "K", "Q", "J", "A"];
console.log(numForSuit);
if (numForSuit == 3) {
  document.querySelector(".topleftsuit").style.color = "red";
  document.querySelector(".bottomrightsuit").style.color = "red";
}
if (numForSuit == 2) {
  document.querySelector(".topleftsuit").style.color = "red";
  document.querySelector(".bottomrightsuit").style.color = "red";
}
