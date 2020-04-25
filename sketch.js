// TODO: Difficulty options
const gridWidth = 9;
const gridHeight = 11;
const cellSize = 50;
const grid = make2DGrid();
let points = 0;

function setup() {
    createCanvas((gridWidth + 1) * cellSize, (gridHeight + 1) * cellSize);
    loopGrid((x, y) => {
        grid[x][y] = new Cell(x, y, cellSize);
    });
}

function draw() {
    background(125);

    for (col of grid) {
        collapsedArr = collapseColumn(col)
    }

    translate(cellSize, cellSize);
    loopGrid((x, y) => {
        grid[x][y].show();
    });
}

function mouseReleased(event) {
    let clickedOn = grid[floor((mouseX - cellSize) / cellSize)][floor((mouseY - cellSize) / cellSize)];

    if (mouseButton === LEFT) {
        clickedOn.onLeftClick();
    }

    if (mouseButton === RIGHT) {
        clickedOn.onRightClick();
    }
}

// FIXME: For some reason ignoring the last few cells in column
function collapseColumn(col) {
    let result = []
    let localSum = 0;
    for (i of col.map(i => i.isObjective)) {
        if (i) {
            localSum += i;
        } else {
            result += localSum
            localSum = 0
        }
    }
    return result;
}

function deductPoint() {
    points--;
    console.log(`Points reduced to ${points}`);

    // If points < maxPoints: you lose
}

function make2DGrid() {
    var output = [];
    for (let i = 0; i < gridWidth; i++) {
        output[i] = [];
    }
    return output;
}

function loopGrid(callback) {
    for (let i = 0; i < gridWidth; i++) {
        for (let j = 0; j < gridHeight; j++) {
            callback(i, j);
        }
    }
}

document.addEventListener("contextmenu", (event) => event.preventDefault());
