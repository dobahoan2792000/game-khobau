var game = document.getElementById("game")
var context = game.getContext("2d")
var imgPlayer  = document.createElement("img");
imgPlayer.src = "./image/hero.png"
var imgKhoBau = document.createElement("img");
imgKhoBau.src = "./image/khobau.png"
var imgTrap = document.createElement("img")
imgTrap.src = "./image/trap.png"
function clearScreen(ctx)
{
    ctx.fillStyle = "white"
    ctx.fillRect(0,0,500,500)
}
function drawLineCol()
{
    for(var i = 1 ; i < 10 ; i++)
{
    context.strokeStyle = "black"
    context.moveTo(50*i,0);
    context.lineTo(50*i,500)
    context.stroke()
    context.beginPath()
}
}
function drawLineRow()
{
    for(var i = 1 ; i < 10 ; i++)
    {
        context.strokeStyle = "black"
        context.moveTo(0,50*i);
        context.lineTo(500,50*i)
        context.stroke()
        context.beginPath()
    }
}

var hero ={
    x : 0,
    y : 0,
    width : 50,
    height : 50,
    img : imgPlayer,
    context : context,
    draw() {
        context.drawImage(this.img,this.x,this.y,this.width,this.height);

    },
    moveRight()
    {
        this.x +=50;
    },
    moveLeft()
    {
        this.x -=50;
    },
    moveTop()
    {
        this.y -=50;
    },
    moveBottom()
    {
        this.y += 50;
    },
    timKhoBau() {
        var bay1 = new bay(350,300,imgTrap)
        if(this.x == bay1.x && this.y ==bay1.y)
            {
                var setTime = setInterval(() => {
                    context.fillStyle = "black"
                    context.font = "30px Arial"
                    context.fillText("You lose",200,250)
                    
                },1)
                setTimeout(() => {
                    clearTimeout(setTime)
                },500)
            setTimeout(() => {
                this.x = this.y = 0
            },0)
            }
        else if(this.x==450 && this.y ==450)
            {
                   var setTime = setInterval(() => {
                        context.fillStyle = "black"
                        context.font = "30px Arial"
                        context.fillText("You Win",200,250)
                        
                    },1)
                    setTimeout(() => {
                        clearTimeout(setTime)
                    },500)
                setTimeout(() => {
                    this.x = this.y = 0
                },1000)
            }
    }

}
function bay(a,b,c) {
    this.x = a;
    this.y = b;
    this.img = c;
}
var khobau = {
    x : 450,
    y : 450,
    width : 50,
    height : 50,
    img : imgKhoBau,
    draw() {
        context.drawImage(this.img,this.x,this.y,this.width,this.height);

    }
}
window.onload = () => {
    setInterval(() => {
        clearScreen(context);
        drawLineCol();
        drawLineRow();
        hero.draw();
        khobau.draw()
        
    }, 1);
    // hero.draw()
}
window.addEventListener("keydown",(event) => {
    switch(event.keyCode)
    {
        case 37:
            if(hero.x>=50)
            hero.moveLeft();
            // clearScreen(context)
            hero.draw();
            break;
        case 38:
            if(hero.y>=50)
            hero.moveTop();
            // clearScreen(context);
            hero.draw();
            break;
        case 39:
            if(hero.x<=400)
            // hero.clearScreenRight()
            hero.moveRight()
            // hero.clearScreenRight()
            // clearScreen(context)
            hero.draw();
           
            break;
        case 40:
            if(hero.y<=400)
            hero.moveBottom()
            // clearScreen(context)
            hero.draw();
            break;
            
    }
    hero.timKhoBau()
      
})

