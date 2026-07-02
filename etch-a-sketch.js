const container = document.querySelector(".container");

for (let i = 0; i < 4; i++) {
    const tileRow = document.createElement("div");
    tileRow.className = "tileRow";
    container.appendChild(tileRow)

    for (let j = 0; j < 4; j++) {
        const tile = document.createElement("div");
        tile.className = "tile";
        tileRow.appendChild(tile);
    }

}