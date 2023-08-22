//siapkan canvas
const mycanvas = document.getElementById('mycanvas');

mycanvas.width = window.innerWidth;
mycanvas.height = window.innerHeight;

const c = mycanvas.getContext("2d");

//manipulasi canvas

//membuat rectangle / kotak
/*c.fillStyle = "pink";
c.strokeStyle = "#999";
c.lineWidth = "5";

c.rect(50, 50, 300, 300);
c.fill();
c.stroke();

//membuat lingkaran / circle / arc
c.fillStyle = "red";
c.beginPath();
c.arc(550, 200, 150, 0, 2 * Math.PI);
c.fill();
c.stroke();*/

let x = 300;
let y = 200;
let speedx= 5;
let speedy = 5;
let radius = 150;

function draw(){
    window.requestAnimationFrame(draw);
    c.clearRect(0, 0, innerWidth,innerHeight)
    c.fillStyle = "red";
    c.beginPath();
    c.arc(x, y, radius, 0, 2 * Math.PI);
    c.fill();
    c.stroke();

    if(x + radius> innerWidth || x -radius< 0){
        speedx = -speedx;
    }

    if(y + radius> innerHeight || y -radius< 0){
        speedy = -speedy;
    }

    x += speedx;
    y += speedy;

}

draw();
