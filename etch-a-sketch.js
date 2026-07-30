const lengthLower = 1; /* Minimum grid length */
const lengthUpper = 100; /* Maximum grid length */
const sketchCanvas = document.querySelector("#sketch-canvas");
let tiles = document.querySelectorAll(".tile");

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

createNewGrid(16); /* Create a default 16x16 grid */

const button = document.querySelector("button");

button.addEventListener('click', (e) => {
    let userInput = parseInt(prompt(`Resize grid [${lengthLower}, ${lengthUpper}]`, 16));

    if (lengthLower <= userInput && userInput <= lengthUpper) {
        createNewGrid(userInput);
    }
});