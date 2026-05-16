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
        makeRainbowSquares(e.target);
    }        
});

gridContainer.addEventListener("pointerover", (e) => {
    if (drawing && e.target.classList.contains("square")) {
        e.target.classList.add("hover");
        darkenSquares(e.target);
        makeRainbowSquares(e.target);
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
    if (isNaN(gridSize) || gridSize > 100 || gridSize < 2) return;

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
    let opacity = parseFloat(element.dataset.opacity) || 0;

    if (opacity < 1) {
        opacity = (opacity + 0.1).toFixed(1);
        element.dataset.opacity = opacity; 
        element.style.setProperty("--opacity", opacity);
    }
}

function makeRainbowSquares(element) {
    const randomColor = `#${Math.floor(Math.random() * 16777215)
        .toString(16).padStart(6, '0')}`;
    element.style.setProperty("--color", randomColor);
}

createGrid();
