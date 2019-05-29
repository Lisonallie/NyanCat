var canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var context = canvas.getContext("2d");
var image = new Image();
image.src = "https://t5.rbxcdn.com/94c4cc2c59fbe7e2941577b8f4570698";
var amountCats = 50;
var cat = [];
for(var i=0; i < amountCats; i++){
var x = Math.random()*canvas.width;
var y = Math.random()*canvas.height;
    cat[i] = new Cat(x,y);
}


function Nyan(x, y) {
    this.x = x;
    this.y = y;
    this.show = function () {
        context.drawImage(image, this.x, this.y, 200, 100);
    }
}

function draw() {
    var background = new Image();
    background.src = "../NyanCat/assets/nyanbg.jpg";

    background.onload = function () {
        context.drawImage(background, 0, 0, canvas.width, canvas.height);
    
    }
}

function update() {
    draw();
    window.requestAnimationFrame(update);
}

update();

// window.onload = function () {
//     document.getElementById('cat').style.display = 'none';
// };


// document.getElementById("Nyan").addEventListener('click', hideShow);
// function hideShow() {
//     document.getElementById("cat").style.display = "block";
// }


// document.getElementById("Nyan").addEventListener('click', nyanRain);
// function nyanRain() {
//     var elem = document.getElementById("cat");
//     var pos = -100;
//     var id = setInterval(frame, 10);
//     function frame() {
//         if (pos == 640) {
//             clearInterval(id);
//         } else {
//             pos++;
//             elem.style.top = pos + 'px';
//             elem.style.left = pos + 'px';
//         }
//     }
// }
// function hideShow() {
//     document.getElementById("cat").style.display = "block";
// }