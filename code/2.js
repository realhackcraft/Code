var ctx = draw.getContext("2d");
var rect;
var mouseDown = false;

ctx.lineJoin = "round";
ctx.lineCap = "round"

function SetColor(c) {
   ctx.strokeStyle = c;
}

function SetWidth(n) {
   ctx.lineWidth = n;
   display.innerHTML = "Width: " + ctx.lineWidth + " px"
}

function Erase () {
   ctx.clearRect(0, 0, draw.width, draw.height);
}


function MouseDownHandler(Event) {
   if (Event.which == 1) mouseDown = true;
   rect = draw.getBoundingClientRect();
   ctx.moveTo(Event.clientX - rect.left, Event.clientY - rect.top);
   ctx.beginPath();
}

function MouseUpHandler(Event) {
   if (Event.which == 1) mouseDown = false;
}

function TouchMoveHandler(Event) {
  ctx.lineTo(Event.clientX - rect.left, Event.clientY - rect.top);
  ctx.stroke();
  Event.preventDefault()
  }

function MouseMoveHandler(Event) {
   if (mouseDown) {
     ctx.lineTo(Event.clientX - rect.left, Event.clientY - rect.top);
     ctx.stroke();
   }
}

draw.addEventListener("touchmove", TouchMoveHandler);
draw.addEventListener("mousedown", MouseDownHandler);
draw.addEventListener("mouseup", MouseUpHandler);
draw.addEventListener("mousemove", MouseMoveHandler);
