const lengthLower = 1; /* Minimum grid length */
const lengthUpper = 100; /* Maximum grid length */
const container = document.querySelector(".container");
let tiles = document.querySelectorAll(".tile");

function createNewGrid(length) {
    /* Divide grid into rows as flex containers */
    for (let i = 0; i < length; i++) {
        const tileRow = document.createElement("div");
        tileRow.className = "tileRow";
        container.appendChild(tileRow)

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
            e.target.setAttribute("style", "background: cornflowerblue;");
        });
    });
}

createNewGrid(16); /* Create a default 16x16 grid */

const button = document.querySelector("button");

button.addEventListener('click', (e) => {
    let userInput = parseInt(prompt(`Resize grid [${lengthLower}, ${lengthUpper}]`, 16));

    if (lengthLower <= userInput && userInput <= lengthUpper) {
        console.log("Valid number");
    }
});