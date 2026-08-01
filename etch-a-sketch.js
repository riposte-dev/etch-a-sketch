const LENGTH_LOWER = 1; /* Minimum grid length */
const LENGTH_UPPER = 100; /* Maximum grid length */

const buttons = document.querySelectorAll("button");
const sketchCanvas = document.querySelector("#sketch-canvas");
const resizeCanvasButton = document.querySelector("#resize");
const whiteTilesCounter = document.querySelector("#white-tiles-counter");
const blackTilesCounter = document.querySelector("#black-tiles-counter");
let tiles = document.querySelectorAll(".tile");

let gridLength = 16; /* Start with a 16x16 grid by default */
let whiteTiles = 16 * 16;
let blackTiles = 0;

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
            tile.setAttribute("style", "background: white");
            tileRow.appendChild(tile);
        }
    }

    tiles = document.querySelectorAll(".tile");

    whiteTiles = length * length;
    blackTiles = 0;
    resizeCanvasButton.innerHTML = `Resize Canvas<br><br>${gridLength}x${gridLength}`
    whiteTilesCounter.innerHTML = `White Tiles<br><br>${whiteTiles}`;
    blackTilesCounter.innerHTML = `Black Tiles<br><br>${blackTiles}`;

    tiles.forEach((tile) => {
        tile.addEventListener('mouseenter', (e) => {
            /* Run if and only if the tile is to be painted */
            if (e.target.style.backgroundColor == "white") {
                e.target.setAttribute("style", "background: black;");
                whiteTiles -= 1;
                blackTiles += 1;
                whiteTilesCounter.innerHTML = `White Tiles<br><br>${whiteTiles}`;
                blackTilesCounter.innerHTML = `Black Tiles<br><br>${blackTiles}`;
            } 
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