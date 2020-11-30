var database;
var game,form,player;
var everyone;
var count = 0,state = 0;
 function setup()
 {
     createCanvas(800,800)
    database = firebase.database();
    game = new GameStates();
    game.readState()
    game.check();
} 

function draw(){
    background("white");
    if (count===4)
    {
        game.updateState();
    }
if (state===1)
{
  game.gamePlay();
}
}

/* function Read(d)
{
   p = d.val()
   console.log(p)
   ball.x = p.X;
   ball.y = p.Y;
}

function Backup()
{
    console.log("error here")
}

function Update(f,v)
{ 
  database.ref('ball/position').set({
      'X':p.X + v,
      'Y':p.Y + f
  });

} */
/*     if(keyDown(LEFT_ARROW)){
       Update(0,-2);
    }
    else if(keyDown(RIGHT_ARROW)){
        Update(0,2);
    }
    else if(keyDown(UP_ARROW)){
        Update(-2,0);
    }
    else if(keyDown(DOWN_ARROW)){
        Update(2,0);
    }
    drawSprites(); */