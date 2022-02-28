const canvas = document.querySelector("#draw");
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = "orange";
ctx.lineJoin = "round";
ctx.lineCap = "round";
console.log(ctx);

let isDrawing = false;
let lastX = 0;
let lastY = 0;

const draw = (event) => {
  if(!isDrawing){ return; }else{ console.log(event); };
  //lastX = MouseEvent.screenX;
  //lastY = MouseEvent.screenY;
};

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', () => isDrawing = true);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
