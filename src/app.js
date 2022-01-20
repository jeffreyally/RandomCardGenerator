/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector(".topleftsuit").style.color = "";
  document.querySelector(".bottomrightsuit").style.color = "";
  document.querySelector(".middlenumber").innerHTML = `${getRndInteger(2, 10)}`;
};

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRndInteger(2, 10);
