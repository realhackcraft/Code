var ctx = "game".getContext("2d");

function MouseDownHandler(Event) {
  if (Event.which == 1) mouseDown = true;
    rect = draw.getBoundingClientRect();
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

    "game".addEventListener("mousedown", MouseDownHandler);
    "game".addEventListener("mouseup", MouseUpHandler);
    "game".addEventListener("mousemove", MouseMoveHandler);
