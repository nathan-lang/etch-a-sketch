const body = document.body;

const div1 = document.createElement("div");
const header = document.createElement("h1");
header.textContent = "Etch-a-Sketch";
div1.append(header);
body.append(div1);

const div = document.createElement("div");

for (let i = 0; i < 16; i++) {
  let row = document.createElement("div");
  row.style.height = "25px";
  for (let j = 0; j < 16; j++) {
    const tile = document.createElement("div");
    tile.style.width = "25px";
    tile.style.height = "25px";
    tile.style.border = "1px solid black";
    tile.style.display = "inline-block";
    row.append(tile);
  }
  div.append(row);
}

body.append(div);
