ctx.fillStyle = "#000000";
ctx.strokeStyle = "blue";
ctx.lineWidth = 4;
ctx.strokeRect(105, 105, 100, 100);
ctx.fillRect(0, 0, 100, 100);

ctx.fillStyle = "rgba(255, 0, 0, 0.5)";
ctx.fillRect(0, 50, 100, 100);
// ctx.clearRect(0, 0, 100, 100);

ctx.fillStyle = "yellow";
ctx.beginPath();
ctx.moveTo(110, 50);
ctx.lineTo(210, 0);
ctx.lineTo(210, 100);
ctx.fill();

ctx.beginPath();
ctx.arc(250, 150, 50, 0, Math.PI / 3 , false);
// ctx.arc(250, 150, 50, 0, Math.PI / 3 , true);
ctx.fill();

ctx.lineWidth = 10;
ctx.lineCap = "round";
ctx.beginPath();
ctx.moveTo(10, 250);
ctx.lineTo(250, 250);
ctx.stroke();

ctx.lineCap = "square";
ctx.beginPath();
ctx.moveTo(10, 270);
ctx.lineTo(250, 270);
ctx.stroke();

ctx.lineCap = "butt";
ctx.beginPath();
ctx.moveTo(10, 290);
ctx.lineTo(250, 290);
ctx.lineTo(200, 400);
ctx.stroke();

ctx.lineWidth = 1;
ctx.strokeStyle = "black";

ctx.beginPath();
ctx.arc(400, 100, 70, 0, 2*Math.PI, true);
ctx.moveTo(450, 100);
ctx.arc(400, 100, 50, 0,  Math.PI, false);
ctx.moveTo(386, 75);
ctx.arc(380, 75, 6, 0, 2*Math.PI, false);
ctx.moveTo(426, 75);
ctx.arc(420, 75, 6, 0, 2*Math.PI, false);
ctx.stroke();


img = new Image();
img.src = "example1.jpg";
img.onload = function() {
    ctx.drawImage(this, 100, 0, 400, 300);
};


function drawRect(rect) {
    ctx.fillRect(rect1.x, rect1.y, rect1.width, rect1.height);
}
