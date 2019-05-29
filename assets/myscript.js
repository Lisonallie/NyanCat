var button = document.getElementById("button");
var canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var context = canvas.getContext("2d");
var img = new Image();
img.src = "../NyanCat/assets/nyan.png";
var RandomNyans = getRandomInt(50);
var NyanCats = [];
var x = 0;
var y = 0;
for (let i = 0; i < RandomNyans; i++) {
    var randomx = getRandomInt(canvas.width);
    NyanCats[i] = new Nyan(randomx, y);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function Nyan(x, y) {
    this.x = x;
    this.y = y;
    this.show = function () {
        context.drawImage(img, this.x, this.y, 50, 50);
    }
    this.fall = function (speed) {
        this.speed = speed;
        this.y += this.speed;
        this.x += this.speed;
        if (this.y > canvas.height || RandomNyans.x > canvas.width) {
            this.y = 0;
            var randomx = getRandomInt(canvas.width);
            this.x = randomx;
        }
        var dir = Math.floor(Math.random() * 5);
        if (dir == 0) {
            this.x = this.x;
        }
        if (dir == 1) {
            this.x = this.x - 1;
        }
        if (dir == 2) {
            this.x = this.x - 2;
        }
        if (dir == 3) {
            this.x = this.x + 1;
        }
        if (dir == 4) {
            this.x = this.x + 2;
        }
    }
}

function draw() {
    var background = new Image();
    background.src = "../NyanCat/assets/nyanbg.jpg";

    background.onload = function () {
        context.drawImage(background, 0, 0, canvas.width, canvas.height);

    }
    for (let i = 0; i < RandomNyans; i++) {
        NyanCats[i].show();
        NyanCats[i].fall();
    }
}

function update() {
    draw();
    window.requestAnimationFrame(update);
}

function clearrect() {
    button.style.display = 'block';
    canvas.style.display = 'none';
}
function clicky() {
    var audio = new Audio("https://ia800501.us.archive.org/33/items/nyannyannyan/NyanCatoriginal.mp3");
    audio.play();
    setTimeout(clearrect, clicky, 10000);
    update();
    button.style.display = 'none';
    canvas.style.display = 'block';
}