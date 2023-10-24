const buttonA = document.querySelector(".button-a");
const buttonB = document.querySelector(".button-b");
const buttonC = document.querySelector(".button-c");
const hideA = document.querySelector("#hide-a");
const hideB = document.querySelector("#hide-b");
const hideC = document.querySelector("#hide-c");

buttonA.addEventListener("click", (e) => {
  document.querySelector(".image-a").style.opacity = 100;
});

buttonB.addEventListener("click", (e) => {
  document.querySelector(".image-b").style.opacity = 100;
});

buttonC.addEventListener("click", (e) => {
  document.querySelector(".image-c").style.opacity = 100;
});

buttonC.addEventListener("click", (e) => {
  document.querySelector(".image-c").style.opacity = 100;
});

hideA.addEventListener("click", (e) => {
  document.querySelector(".image-a").style.opacity = 0;
});

hideB.addEventListener("click", (e) => {
  document.querySelector(".image-b").style.opacity = 0;
});

hideC.addEventListener("click", (e) => {
  document.querySelector(".image-c").style.opacity = 0;
});
