var id = document.getElementById('game')
var ctx = id.getContext("2d"); // Get the drawing context for the canvas
var FPS = 40;                        // How many frames per second
var Speed = 3;                   // How quick he goes, when he's going



function Sprite (url) {
       this.x = 0;
       this.y = 0;
       this.visible = true;
       this.velocity_x = 0;
       this.velocity_y = 0;
       this.Img = new Image();
       this.Img.src = url;
       this.Img.size = 50;
       }


   Sprite.prototype.Update = function() {

       // only apply velocities if not moving the sprite further off-screen

       if ((this.velocity_x < 0) && (this.x > 0))  this.x += this.velocity_x;
       if ((this.velocity_x > 0) && (this.x + this.Img.size < id.width )) this.x += this.velocity_x;
       if ((this.velocity_y < 0) && (this.y > 0))  this.y +=  this.velocity_y;
       if ((this.velocity_y > 0) && (this.y + this.Img.size < id.height)) this.y += this.velocity_y;

       if (this.visible) ctx.drawImage(this.Img, this.x, this.y, this.Img.size, this.Img.size);  // draw it
       }

var player = new Sprite("../Img/player.png"); // The player

function Frame () {
   ctx.clearRect(0, 0, id.width, id.height);     // clear the background
   ctx.font = "20px arial";
   ctx.fillText("player x=" + player.x + " y=" + player.y, 0, 20); // show player coordinates
   player.Update();                                   // player
   }

function KeyUpHandler (Event) {
  if (Event.keyCode == 37 || Event.keyCode == 39) {player.velocity_x= 0}; // not left or right
  if (Event.keyCode == 38 || Event.keyCode == 40) {player.velocity_y= 0}; // not up or down
  }

function KeyDownHandler (Event) {
  switch (Event.keyCode) {
    case 37:
      player.velocity_x=  -Speed // left
      break;
    case 38:
      player.velocity_y=  -Speed // up
      break;
    case 39:
      player.velocity_x=   Speed // right
      break;
    case 40:
      player.velocity_y=   Speed // down
      break;
    default:
  }
  Event.preventDefault();
  }

  function TouchHandler (Event) {
     var rect = id.getBoundingClientRect();           // where is our canvas
     player.velocity_y = 0;
     player.velocity_x = 0;                                    // zero out velocity

     for (var i = 0; i < Event.touches.length; i++) {
         var x = Event.touches[i].clientX - rect.left;    // get x & y coords
         var y = Event.touches[i].clientY - rect.top;     // relative to canvas

         // Add velocity depending on which thirds we see touch

         if (x > id.width * 0.66) player.velocity_x = player.velocity_x + Speed;
         if (x < id.width * 0.33) player.velocity_x = player.velocity_x - Speed;
         if (y > id.height * 0.66) player.velocity_y = player.velocity_y + Speed;
         if (y < id.height * 0.33) player.velocity_y = player.velocity_y - Speed;
         }
     Event.preventDefault();
     }

     addEventListener("keydown", KeyDownHandler);           // listen for keystrokes
     addEventListener("keyup", KeyUpHandler);               // listen for keys released
     id.addEventListener("touchstart", TouchHandler);
     id.addEventListener("touchmove", TouchHandler);  // listen for anything about touches
     id.addEventListener("touchend", TouchHandler);
     setInterval(Frame, 1000/FPS);                  // set my frame renderer

     id.width = window.innerWidth - 40;            // fill the entire browser width
     id.height = window.innerHeight - 250;          // fill the entire browser height
