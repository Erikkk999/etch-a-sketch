const gridContainer = document.querySelector(".grid-container");
const gridCount = 256;

for (let i = 0; i < gridCount; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    gridContainer.appendChild(square);
}

gridContainer.addEventListener("mouseover", (e) => {
    if (e.target.classList.contains("square")) {
        e.target.classList.add("hover");
    }
});