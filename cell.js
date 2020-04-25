class Cell {
    isCorrect = false;
    isIncorrect = false;
    isCrossed = false;
    constructor(x, y, d) {
        this.isObjective = floor(random(2));
        this.x = x;
        this.y = y;
        this.d = d;
        this.r = d / 2;
        this.xPx = x * d;
        this.yPx = y * d;
    }

    show() {
        if (this.x % 2 == 1 && this.y % 2 == 1) {
            // x and y odd: darkest
            fill(170);
        } else if (this.x % 2 == 1 || this.y % 2 == 1) {
            // x or y odd: dark
            fill(185);
        } else {
            // x and y even: lightest
            fill(200);
        }
        rect(this.xPx, this.yPx, this.d, this.d);

        if (this.isCorrect) {
            fill("blue");
            ellipse(this.xPx + this.r, this.yPx + this.r, this.r);
        } else if (this.isIncorrect) {
            fill("red");
            ellipse(this.xPx + this.r, this.yPx + this.r, this.r);
        } else if (this.isCrossed) {
            fill("green");
            ellipse(this.xPx + this.r, this.yPx + this.r, this.r);
        } else {
            // Debug code to show objectives
            if (this.isObjective) {
                fill("gold");
                ellipse(this.xPx + this.r, this.yPx + this.r, this.r);
            }
        }
    }

    onLeftClick() {
        if (this.isObjective) {
            // If correct, flag as correct and check for victory
            this.isCorrect = true;
        } else {
            // If incorrect, flag as incorrect and check for loss
            this.isIncorrect = true;
        }
    }

    onRightClick() {
        this.isCrossed = true;
    }
}
