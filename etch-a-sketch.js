const container = document.querySelector(".container");

for (let i = 0; i < 16; i++) {
    const tile = document.createElement("div");
    tile.className = "tile";
    container.appendChild(tile);
}