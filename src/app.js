/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const palos = [`♦`, `♥`, `♠`, `♣`];
  const values = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "j",
    "q",
    "k",
    "a"
  ];

  let cornerdivtophtml = document.querySelector("#cornerdivtop");
  let cornerspantophtml = document.querySelector("#cornerspantop");
  let cornerspanbothtml = document.querySelector("#cornerspanbot");
  let cornerdivbothtml = document.querySelector("#cornerdivbot");
  let midspannumberhtml = document.querySelector("#midspannumber");
  let randomPalo = palos[Math.floor(Math.floor(Math.random() * palos.length))];
  let randomvalue =
    values[Math.floor(Math.floor(Math.random() * values.length))];
  cornerspantophtml.textContent = `${randomPalo}`;
  cornerspanbothtml.textContent = `${randomPalo}`;
  midspannumberhtml.textContent = `${randomvalue}`;
  if (randomPalo === "♥" || randomPalo === "♦") {
    cornerdivbothtml.classList.add("cornerred");
    cornerdivtophtml.classList.add("cornerred");
  }
};
