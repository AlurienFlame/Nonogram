// TODO: Difficulty options
// TODO: Sound
// TODO: Distinguish shapes as well as colors (sorry color blind people!)
const gridWidth = 3;
const gridHeight = 3;
const cellSize = 50;
const grid = make2DGrid();
const maxStrikes = 3;
let strikes = 0;
let gameIsOver = false;

function setup() {
    createCanvas((gridWidth + 1) * cellSize, (gridHeight + 1) * cellSize);
    loopGrid((x, y) => {
        grid[x][y] = new Cell(x, y, cellSize);
    });

    topNums = grid.map((col) => [collapseArray(col), col[0].xPx]);

    sideNums = [];
    for (let i = 0; i < gridHeight; i++) {
        row = grid.map((col) => col[i]);
        sideNums.push([collapseArray(row), row[0].yPx]);
    }
}

function draw() {
    background(125);

    translate(cellSize, cellSize);

    fill("black");
    textSize(14);
    for (num of topNums) {
        text(num[0], num[1], -5);
    }

    for (num of sideNums) {
        text(num[0], 5 - cellSize, num[1] + cellSize / 2);
    }

    loopGrid((x, y) => {
        grid[x][y].show();
    });
}

function mouseReleased() {
    let clickedOn = grid[floor((mouseX - cellSize) / cellSize)][floor((mouseY - cellSize) / cellSize)];

    if (mouseButton === LEFT) {
        clickedOn.onLeftClick();
    }

    if (mouseButton === RIGHT) {
        clickedOn.onRightClick();
    }
}

function collapseArray(cellArr) {
    let arr = cellArr.map((i) => i.isObjective);
    let result = [];
    let localSum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            localSum++;
            if (!arr[i + 1]) {
                result.push(localSum);
                localSum = 0;
            }
        }
    }
    return result.join("-");
}

function strike() {
    strikes++;
    if (strikes >= maxStrikes) {
        setTimeout(lose, 100);
    }
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

function win() {
    if (confirm("You win! Play again?")) {
        location.reload();
    }
}

function lose() {
    if (confirm(`You lose! You missed an objective ${maxStrikes} times. Play again?`)) {
        location.reload();
    }
    location.reload();
}

function cheat() {
    loopGrid((x, y) => {
        if (grid[x][y].isObjective) {
            grid[x][y].isCorrect = true;
        }
    });
}

document.addEventListener("contextmenu", (event) => event.preventDefault());
