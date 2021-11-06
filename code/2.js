var ctx = draw.getContext("2d");

function Draw(Where) {
 var rect = draw.getBoundingClientRect();
 ctx.beginPath();
 ctx.arc(Where.clientX - rect.left, Where.clientY - rect.top, 5, 0, Math.PI * 2);
 ctx.fill();
 }

 function TouchMoveHandler(Event) {
   for (var i = 0; i < Event.touches.length; i++) {
     Draw(Event.touches[i]);
   }
 Event.preventDefault()
 }

 var mouseDown = false;

 function MouseDownHandler(Event) {
    if (Event.which == 1) mouseDown = true;
  }

 function MouseUpHandler(Event) {
    if (Event.which == 1) mouseDown = false;
  }

 function MouseMoveHandler(Event) {
    if (mouseDown) Draw(Event);
  }
  
  draw.addEventListener("mousedown", MouseDownHandler);
  draw.addEventListener("mouseup", MouseUpHandler);
  draw.addEventListener("touchmove", TouchMoveHandler);
  draw.addEventListener("mousemove", MouseMoveHandler);
