var canvas = document.getElementById("canvas");
canvas.width = canvas.innerWidth;
canvas.height = canvas.innerHeight;
var context = canvas.getContext("2d");


function draw() {
    var background = new Image();
    background.src = "nyanbg.jpg";
background.onload = function () {
    ctx.drawImage(0, 0, canvas.width, canvas.height);
}


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