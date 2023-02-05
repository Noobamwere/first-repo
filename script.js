let button = document.querySelector("button");
let body = document.querySelector("body");

button.addEventListener("click", function() {
  let color = getRandomColor();
  body.style.backgroundColor = color;
});

function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}