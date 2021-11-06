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
  if (Event.keyCode == 37 && x_pos > 0) x_pos = x_pos - 10;   //left
  if (Event.keyCode == 38 && y_pos > 0) {y_pos = y_pos - 10;}   //up
  if (Event.keyCode == 39 && x_pos + Img.width < game.width) {x_pos = x_pos + 10;}   //right
  if (Event.keyCode == 40 && y_pos + Img.height < game.height) {y_pos = y_pos + 10;}   //down
  Event.preventDefault()
}

setInterval(Timer, 40);
addEventListener("keydown", KeyDownHandler);
