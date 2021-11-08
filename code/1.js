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
  if (Event.keyCode == 37) left();   //left
  if (Event.keyCode == 38) up();    //up
  if (Event.keyCode == 39) right();   //right
  if (Event.keyCode == 40) down;   //down
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
