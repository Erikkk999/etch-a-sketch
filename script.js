const gridContainer = document.querySelector(".grid-container");
const resizeBtn = document.querySelector(".resize");

let drawing = false;

gridContainer.addEventListener("pointerdown", (e) => {
    e.preventDefault();
    e.target.releasePointerCapture(e.pointerId);

    if (e.target.classList.contains("square")) {
        drawing = true;
        e.target.classList.add("hover");
        darkenSquares(e.target);
    }        
});

gridContainer.addEventListener("pointerover", (e) => {
    if (drawing && e.target.classList.contains("square")) {
        e.target.classList.add("hover");
        darkenSquares(e.target);
    }    
});

window.addEventListener("pointerup", () => {
    drawing = false;
});

resizeBtn.addEventListener("click", () => {
    const input = prompt("Enter a number between 2 - 100");
    if (input === null) return;
    createGrid(input);
});

function createGrid(input = 64) {
    const gridSize = parseInt(input);
    if (isNaN(gridSize) || gridSize > 100 || gridSize <= 1) return;

    gridContainer.replaceChildren();
    gridContainer.style.setProperty("--column", gridSize);

    const fullGrid = gridSize * gridSize;

    for (let i = 0; i < fullGrid; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        gridContainer.appendChild(square);
    }
}

function darkenSquares(element) {
    if (!element.style.opacity) element.style.opacity = "0";

    let opacity = parseFloat(element.style.opacity);
    if (opacity < 1) {
        element.style.opacity = opacity + 0.1;
    }
}

createGrid();
