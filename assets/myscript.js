var canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var context = canvas.getContext("2d");
var background = new Image();
background.src = "nyanbg.jpg";


function draw() {
    background.onload = function () {
        ctx.drawImage(0, 0, canvas.width, canvas.height);
    }
}

function update () {
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