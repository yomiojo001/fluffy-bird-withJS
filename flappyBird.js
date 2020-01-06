var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");


// variables to load images
var bird = new Image();
var bg = new Image();
var fg = new Image();
var pipeNorth = new Image();
var pipeSouth = new Image();


bird.src = "images/bird.png";
bg.src = "images/bg.png";
fg.src = "images/fg.png";
pipeNorth.src = "images/pipeNorth.png";
pipeSouth.src = "images/pipeSouth.png";


// declaring height changes
var gap = 85;
var constant = pipeNorth.height+gap;

// setting bird position to variables
var bX = 10;
var bY = 150;

var gravity = 1.5;

// on key down
document.addEventListener("keydown", moveUp)
function moveUp(){
    bY -= 30
}

// pipe dymaics
var pipe = [];

pipe[0] = {
    x: cvs.width,
    y: 0
}

// function to set game foreground

window.onload = function draw(){
    ctx.drawImage(bg,0,0);

    for(var i= 0;i < pipe.length;i++){
        ctx.drawImage(pipeNorth,pipe[i].x,pipe[i].y);
        ctx.drawImage(pipeSouth,pipe[i].x,pipe[i].y+constant);
        
        pipe[i].x--;

        if(pipe[i].x == 125){
            pipe.push({    
                x: cvs.width,
                y: Math.floor(Math.random()*pipeNorth.height) - pipeNorth.height
            })
        }
        
    }

    ctx.drawImage(fg, 0,cvs.height - fg.height);
    
    ctx.drawImage(bird, bX, bY);

    bY += gravity;

    requestAnimationFrame(draw);

}
// window.onload = draw();