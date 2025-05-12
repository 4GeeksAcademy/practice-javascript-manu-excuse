import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  const who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  const action = ['ate', 'peed on', 'crushed', 'broke'];
  const what = ['my homework', 'my phone', 'the car', 'my sandwich'];
  const when = ['before class', 'while I was exercising', 'during my lunch', 'while I was sleeping'];

  const generateExcuse = () => {
    const excuse =
      `${who[Math.floor(Math.random() * who.length)]} ` +
      `${action[Math.floor(Math.random() * action.length)]} ` +
      `${what[Math.floor(Math.random() * what.length)]} ` +
      `${when[Math.floor(Math.random() * when.length)]}.`;

    document.getElementById("excuse").innerText = excuse;
  };

  // booton evento
  document.getElementById("generateBtn").addEventListener("click", generateExcuse);

  // Generar una excusa al cargar
  generateExcuse();
};