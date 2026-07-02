const container = document.querySelector(".container");

for (let i = 0; i < 16; i++) {
    const tileRow = document.createElement("div");
    tileRow.className = "tileRow";
    container.appendChild(tileRow)

    for (let j = 0; j < 16; j++) {
        const tile = document.createElement("div");
        tile.className = "tile";
        tileRow.appendChild(tile);
    }
}

const tiles = document.querySelectorAll(".tile");

tiles.forEach((tile) => {
    tile.addEventListener('mouseenter', (e) => {
        e.target.setAttribute("style", "background: cornflowerblue;");
    })
});

const button = document.querySelector("button");

button.addEventListener('click', (e) => {
    prompt("Resize grid", 16);
});