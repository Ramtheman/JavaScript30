const canvas = document.querySelector("#draw");
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = "#BADA55";
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

let isDrawing = false;
let lastX = 0;
let lastY = 0;

const draw = (event) => {
  if(!isDrawing){ return; }
  console.log(event);
  ctx.beginPath();
  // starting from here
  ctx.moveTo(lastX, lastY);
  // going to here
  ctx.lineTo(event.offsetX, event.offsetY);
  ctx.stroke();
  [lastX, lastY] = [event.offsetX, event.offsetY];
};

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
