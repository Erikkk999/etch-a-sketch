const gridContainer = document.querySelector(".grid-container");
const resizeBtn = document.querySelector(".resize");

let drawing = false;

gridContainer.addEventListener("mousedown", (e) => {
    e.preventDefault();
    if (e.target.classList.contains("square")) {
        drawing = true;
        e.target.classList.add("hover");
    }
});

gridContainer.addEventListener("mouseover", (e) => {
    if (drawing && e.target.classList.contains("square")) {
        e.target.classList.add("hover");
    }
});

window.addEventListener("mouseup", () => {
    drawing = false;
});

resizeBtn.addEventListener("click", () => {
    const input = prompt("Enter a number between 2 - 100");
    if (input === null) return;

    const gridSize = parseInt(input);
    if (isNaN(gridSize) || gridSize > 100 || gridSize <= 1) return;

    gridContainer.innerHTML = "";
    gridContainer.style.setProperty("--column", gridSize);

    const fullGrid = gridSize * gridSize;

    for (let i = 0; i < fullGrid; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        gridContainer.appendChild(square);
    }   
});