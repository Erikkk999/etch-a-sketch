const divContainer = document.querySelector(".grid-container");
const gridCount = 256;

for (let i = 0; i < gridCount; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    divContainer.appendChild(square);
}