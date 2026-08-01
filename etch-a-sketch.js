const LENGTH_LOWER = 1; /* Minimum grid length */
const LENGTH_UPPER = 100; /* Maximum grid length */

const buttons = document.querySelectorAll("button");
const sketchCanvas = document.querySelector("#sketch-canvas");
let tiles = document.querySelectorAll(".tile");

let gridLength = 16; /* Start with a 16x16 grid by default */

function createNewGrid(length) {
    /* Remove all tileRows from sketch canvas */
    document.querySelectorAll(".tileRow").forEach((tileRow) => {
        tileRow.remove();
    })

    /* Divide grid into rows as flex containers */
    for (let i = 0; i < length; i++) {
        const tileRow = document.createElement("div");
        tileRow.className = "tileRow";
        sketchCanvas.appendChild(tileRow)

        /* In each row, create flex items */
        for (let j = 0; j < length; j++) {
            const tile = document.createElement("div");
            tile.className = "tile";
            tileRow.appendChild(tile);
        }
    }

    tiles = document.querySelectorAll(".tile");

    tiles.forEach((tile) => {
        tile.addEventListener('mouseenter', (e) => {
            e.target.setAttribute("style", "background: black;");
        });
    });
}

createNewGrid(gridLength);

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        if (button.id == "resize") {
            gridLength = parseInt(prompt(`Resize grid [${LENGTH_LOWER}, ${LENGTH_UPPER}]`, 16));
        }

        if (LENGTH_LOWER <= gridLength && gridLength <= LENGTH_UPPER) {
            createNewGrid(gridLength);
        }
    })
});