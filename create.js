const body = document.body;
body.height = "100vh";
body.style.position = "absolute";
body.style.top = "50%";
body.style.left = "50%";
body.style.transform = "translate(-50%, -50%)";

const div1 = document.createElement("div");
const header = document.createElement("h1");
header.textContent = "Etch-a-sketch";
header.style.fontFamily = "Poppins";
div1.append(header);
body.append(div1);

const div2 = document.createElement("div");
const header2 = document.createElement("h2");
header2.innerHTML = "Draw Mode: Off";
header2.style.fontFamily = "Poppins";
body.append(header2);

let canDraw = false;

document.body.onclick = () => {
  if (canDraw === false) {
    canDraw = true;
    header2.innerHTML = "Draw Mode: On";
  } else {
    canDraw = false;
    header2.innerHTML = "Draw Mode: Off";
  }
  console.log(canDraw);
};

for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    const tile = document.createElement("div");
    tile.classList.add("square");
    tile.style.width = "25px";
    tile.style.height = "25px";
    tile.style.border = "1px solid black";
    tile.style.margin = "0px";
    tile.style.display = "inline-block";
    body.append(tile);
  }
  const br = document.createElement("br");
  body.append(br);
}

const btns = document.querySelectorAll(".square");

btns.forEach((btn) => {
  btn.addEventListener("mouseover", function (e) {
    if (canDraw) {
      e.target.style.background = "red";
    }
  });
});
