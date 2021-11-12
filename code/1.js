var ctx = game.getContext("2d");

var y_pos = 0;
var x_pos = 0;
var Img = new Image();
Img.src = "https://s2js.com/img/etc/cat_grumpy.png";

function Timer () {
  ctx.clearRect(0, 0, game.width, game.height);
  ctx.drawImage(Img, x_pos, y_pos);
}

function KeyDownHandler (Event) {
  switch (Event.keyCode) {
    case 37:
      left();
      break;
    case 38:
      up();
      break;
    case 39:
      right();
      break;
    case 40:
      down();
      break;
    default:
  }
  Event.preventDefault()
}

function left() {
  if (x_pos > 0) {
  x_pos = x_pos - 10;
  }
}

function up() {
  if (y_pos > 0) {
  y_pos = y_pos - 10;
  }
}

function right() {
  if (x_pos + Img.width < game.width) {
  x_pos = x_pos + 10;
  }
}

function down() {
  if (y_pos + Img.height < game.height) {
    y_pos = y_pos + 10;
  }
}

setInterval(Timer, 1);
addEventListener("keydown", KeyDownHandler);
