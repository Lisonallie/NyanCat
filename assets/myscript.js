var button = document.getElementById("button");
var canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var context = canvas.getContext("2d");
var image = new Image();
image.src = "https://t5.rbxcdn.com/94c4cc2c59fbe7e2941577b8f4570698";
var amountCats = 50;
var NyanCats = [];
var x = 0;
var y = 0;
for (let i = 0; i < amountCats; i++) {
    var x = Math.floor(Math.random() * canvas.width);
    var y = Math.floor(Math.random() * canvas.height);
    NyanCats[i] = new Cat(x, y);
}


function Nyan(x, y) {
    this.x = x;
    this.y = y;
    this.show = function () {
        context.drawImage(image, this.x, this.y, 200, 100);
    }
}

this.fall = function(){
    var dir = Math.floor(Math.random()*5);
    if(dir==0){
        this.x = this.x;
    }
    this.x = this.x+1;
    this.y = this.y+1;
    if(this.y > canvas.height){
        this.y = 0;
    }
    if(dir==1){
        this.x = this.x - 1;
    }
    if(dir==2){
        this.x = this.x - 2;
    }
    if(dir==3){
        this.x = this.x + 1;
    }
    if (dir==4){
        this.x = this.x + 2;
    }
}

function draw() {
    var background = new Image();
    background.src = "../NyanCat/assets/nyanbg.jpg";

    background.onload = function() {
        context.drawImage(background, 0, 0, canvas.width, canvas.height);
    
    }
    for(let i = 0; i < amountCats; i++) {
    NyanCats[i].show();
    NyanCats[i].fall();
    }  
}
 
function update() {
    draw();
    window.requestAnimationFrame(update);
}

update();