const container = document.querySelector("#container");
const resizeBtn = document.querySelector("#resize");

// Function to create a grid
function createGrid(size) {
container.innerHTML = ""; // clear old grid

const squareSize = 600 / size; // 600px container / number of squares per row

for (let i = 0; i < size * size; i++) {
const square = document.createElement("div");
square.classList.add("square");
square.style.width = `${squareSize}px`;
square.style.height = `${squareSize}px`;

// Hover effect: turn black when mouse passes
square.addEventListener("mouseenter", () => {
square.style.backgroundColor = "black";
});

container.appendChild(square);
}
}

// Resize grid when button clicked
resizeBtn.addEventListener("click", () => {
let newSize = parseInt(prompt("Enter grid size (max 100):"));
if (newSize && newSize > 0 && newSize <= 100) {
createGrid(newSize);
} else {
alert("Invalid size. Please enter a number between 1 and 100.");
}
});

// Initial grid
createGrid(16);
