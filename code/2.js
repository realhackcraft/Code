var id = document.getElementById('draw')
var ctx = id.getContext("2d");
var rect;
var mouseDown = false;

ctx.lineJoin = "round";
ctx.lineCap = "round"

function SetColor(c) {
   ctx.strokeStyle = c;
}

function SetWidth(n) {
   ctx.lineWidth = n;
   display.innerHTML = "Width: " + ctx.lineWidth + " px";
}

function Erase () {
   ctx.clearRect(0, 0, id.width, id.height);
}


function MouseDownHandler(Event) {
   if (Event.which == 1) mouseDown = true;
   rect = id.getBoundingClientRect();
   ctx.moveTo(Event.clientX - rect.left, Event.clientY - rect.top);
   ctx.beginPath();
}

function MouseUpHandler(Event) {
   if (Event.which == 1) mouseDown = false;
}

function MouseMoveHandler(Event) {
   if (mouseDown) {
     ctx.lineTo(Event.clientX - rect.left, Event.clientY - rect.top);
     ctx.stroke();
   }
}
id.addEventListener("mousedown", MouseDownHandler);
id.addEventListener("mouseup", MouseUpHandler);
id.addEventListener("mousemove", MouseMoveHandler);
