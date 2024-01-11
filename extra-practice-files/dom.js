const body = document.body;
const div = document.createElement("div");
div.innerText = "Hello World";
const div2 = document.createElement("div");
div2.textContent = "I am a page.";

body.append(div);
body.append(div2);

const container = document.querySelector("#container");
const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const btn = document.querySelector("#btn");
/*
btn.addEventListener("click", () => {
  alert("You have a free ticket to a concert!!!!");
});
*/

btn.addEventListener("click", function (e) {
  e.target.style.background = "blue";
});

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    alert(button.id);
  });
});

let canDraw = false;

document.body.onclick = () => {
  if (canDraw === false) {
    canDraw = true;
  } else {
    canDraw = false;
  }
  console.log(canDraw);
};

const buts = document.querySelectorAll(".square");

buts.forEach((but) => {
  but.addEventListener("mouseover", function (e) {
    if (canDraw) {
      e.target.style.background = "red";
    }
  });
});
