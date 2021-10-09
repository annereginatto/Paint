screen = document.querySelector("canvas");
brush = screen.getContext("2d");

brush.fillStyle = "transparent";
brush.fillRect(0, 0, 600, 400);

function drawSquare(x, y, size, color) {
    brush.fillStyle = color;
    brush.fillRect(x, y, size, size);
    brush.fill();
}

function drawCircle(x, y, radius, color) {
    brush.fillStyle = color;
    brush.beginPath();
    brush.arc(x, y, radius, 0, 2 * Math.PI);
    brush.fill();
}

var xRed = 0;
var xGreen = 50;
var xLime = 100;
var xBlue = 150;
var xCyan = 200;
var xYellow = 250;
var xOrange = 300;
var xMagenta = 350;
var xPurple = 400;
var xIndigo = 450;
var xBlack = 500;
var xWhite = 550;
var xPallete = 600;
var ySquare = 0;
var sizeSquare = 50;

function colorsPallete() {
    drawSquare(xRed, ySquare, sizeSquare, "red");
    drawSquare(xGreen, ySquare, sizeSquare, "green");
    drawSquare(xLime, ySquare, sizeSquare, "lime");
    drawSquare(xBlue, ySquare, sizeSquare, "blue");
    drawSquare(xCyan, ySquare, sizeSquare, "cyan");
    drawSquare(xYellow, ySquare, sizeSquare, "yellow");
    drawSquare(xOrange, ySquare, sizeSquare, "orange");
    drawSquare(xMagenta, ySquare, sizeSquare, "magenta");
    drawSquare(xPurple, ySquare, sizeSquare, "purple");
    drawSquare(xIndigo, ySquare, sizeSquare, "indigo");
    drawSquare(xBlack, ySquare, sizeSquare, "black");
    drawSquare(xWhite, ySquare, sizeSquare, "silver");
}
        

var draw = false;

 //              0       1       2        3      4         5        6          7     
var colors = ["red", "green", "lime", "blue", "cyan", "yellow", "orange", "magenta", 
//  8         9        10       11
"purple", "indigo", "black", "silver"];
var currentColor = 0;

function chooseColors(event) {
    var x = event.pageX - screen.offsetLeft;
    var y = event.pageY - screen.offsetTop;
    if (y > ySquare && y < ySquare + sizeSquare) {
        if (x >= xRed && x < xRed + sizeSquare) {
            currentColor = 0;
        } else if (x >= xGreen && x < xGreen + sizeSquare) {
            currentColor = 1;
        } else if (x >= xLime && x < xLime + sizeSquare) {
            currentColor = 2;
        } else if (x >= xBlue && x < xBlue + sizeSquare) {
            currentColor = 3;
        } else if (x >= xCyan && x < xCyan + sizeSquare) {
            currentColor = 4;
        } else if (x >= xYellow && x < xYellow + sizeSquare) {
            currentColor = 5;
        } else if (x >= xOrange && x < xOrange + sizeSquare) {
            currentColor = 6;
        } else if (x > xMagenta && x < xMagenta + sizeSquare) {
            currentColor = 7;
        } else if (x >= xPurple && x < xPurple + sizeSquare) {
            currentColor = 8;
        } else if (x >= xIndigo && x < xIndigo + sizeSquare) {
            currentColor = 9;
        } else if (x > xBlack && x < xBlack + sizeSquare) {
            currentColor = 10;
        } else if (x > xWhite && x < xWhite + sizeSquare) {
            currentColor = 11;
        }
     }
}

function mouseMove(event) {
    var x = event.pageX - screen.offsetLeft;
    var y = event.pageY - screen.offsetTop;

    if (x >= 0 && x <= xPallete && y >= ySquare && y <= sizeSquare) {
        draw = false
    } else if (draw) {
        drawCircle(x, y, 5, colors[currentColor]);
    }
}

function toDraw(event) {
    draw = true;
}

function stopDraw() {
    draw = false;
}

colorsPallete(); //mostra os quadados de seleção de cores;

screen.onclick = chooseColors;

screen.onmousemove = mouseMove;
screen.onmousedown = toDraw;
screen.onmouseup = stopDraw;