let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let previousPosition = null;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function onMouseDown(e){
    canvas.addEventListener("mousemove",onMouseMove);
    canvas.addEventListener("mouseup",onMouseUp)
    previousPosition = [e.clientX, e.clientY];  
}

function onMouseMove(e){
   let currentPosition = [e.clientX, e.clientY];
   ctx.beginPath();
   ctx.moveTo(...previousPosition);
   ctx.lineTo(...currentPosition);
   ctx.strokeStyle = colorPicker.value;
   ctx.lineWidth = 2;
   ctx.stroke();
   ctx.closePath();
   previousPosition = currentPosition; 
}

function onMouseUp(){
    canvas.removeEventListener("mousemove",onMouseMove);
}