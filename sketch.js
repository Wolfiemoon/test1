//var diologue=0
talkval=0
var intro=1
var battlemode=3
var voidwor=5
var flippedlever=2
var gameState=3
var pressStart;





function preload(){
down=loadAnimation("Down1.png", "Down2.png", "Down3.png", "Down4.png")
up = loadAnimation("Up1.png", "Up2.png","Up3.png","up4.png")
right = loadAnimation("Right1.png","Right2.png")
left = loadAnimation("Left1.png", "Left2.png")
VoidCit1 = loadImage("KkgLeverLeft.png")
LeverFlip = loadImage("BkgLeverRight.png")
pressStart = loadFont("PressStart2P-Regular.ttf")
SongOfTheVoid = loadSound("Void.wav")
battleTheme = loadSound("Basic Battle.wav")
stairImg = loadImage("Stairs.png")
Fig2Idle=loadAnimation("Idle2Fi2.png", "IdleFi2.png")
//VoidCit2 = loadImage("")
//left=loadAnimation("Left1.png", "Left2.png")



//Animation

//Sounds

//PNG FILES
//
}

function setup() {
	createCanvas(windowWidth, windowHeight);

    //water=createSprite(400,500,100,150)
    //water.shapeColor="blue"
    Guide=createSprite(350,500, 10, 100)
    Guide.shapeColor="orange"
    player=createSprite(500,500,50,50)
    player.addAnimation("down", down)
    player.addAnimation("left", left)
    player.addAnimation("right", right)
    player.addAnimation("up", up)
    player.scale=5

    //NPC//Enemy
    Figure1=createSprite(-30, 100, 50, 100)
    
    //Maintheme
    //SongOfTheVoid.loop();
    //battleTheme.loop()


    //water=createSprite(500, 650, 300, 100)

    reflection=createSprite(player.x, player.y, 50,50)
    reflection.addAnimation("down", down)
    reflection.addAnimation("left", left)
    reflection.addAnimation("right", right)
    reflection.addAnimation("up", up)
    reflection.scale=5
    reflection.visible=false
    playerColid=createSprite(player.x, player.y, player.width/2+20, 120)
    playerColid.visible=false
    


    //enemy=createSprite(500, 500, 50,50)
    //enemy.shapeColor="red"
    //enemytracker=createSprite(enemy.x, enemy.y,150,150)
    //battle=new Battle();
    //appform=new Form();
}


function draw() {  



    //Font
    textFont(pressStart)
        //Gamestate5
    if(gameState==5){
    
    background(VoidCit1);
    
    if(player.x < 350){
    Figure1.attractionPoint(0.1, 250, 100)
    }
    if(Figure1.x > 150){
        Figure1.setVelocity(0,0)
        textbox()
        textSize(14)
        text("Hello Distant Traveler...", 650, 600)
        }
    }
    text("Position of Figure1:" + Figure1.x + "," + Figure1.y, 100, 100)
    //Gamestate 5
    
    if(gameState==2){
    background(LeverFlip)

    //Moving Stairs
    stair=createSprite(455,388,500,500)
    stair.addImage(stairImg)
    stair.scale=1.8
    collider4str=createSprite(stair.x+0, stair.y+50, 550, 20)
    collider4str.rotation=45
    collider4str.visible=false
    player.collide(collider4str)
        
    

    //Interaction
    if(player.isTouching(Figure1)){
    textbox()


    }
    if(gameState==1){
        background(0)
        player.visible=false
    }
    







    }

    //BATTLE MODE
    if(gameState==3){
        background(104,56,108)
        Guide.visible=false
        figure2=createSprite(750, 400, 500, 500)
        figure2.scale=3
        figure2.addAnimation("Fig2Idle", Fig2Idle)
        
        player.setVelocity(0,0)
        player.visible=false
    }




    //Battle Mode

    
    playerColid.x=player.x
    playerColid.y=player.y

    
    //fill("blue")
    //text("350 X", 350, 440)


    //REFLECTION
    //reflection.mirrorY(-1)
    //player.collide(water)
    //if(reflection.isTouching(water)){
    //reflection.visible=true    
    //} else {
    //    reflection.visible=false
    //}

    //reflection.x=player.x
    //reflection.y=player.y+160



    text("talkval:" + talkval, 100, 50)
    
    player.debug=true
    
    //player.mirrorY(-1)

    //DEFAULT OPTIONS FOR PLAYER
    player.setVelocity(0,0)
    player.frameDelay = 15

    if(keyDown("UP_ARROW")){
        player.changeAnimation("up", up)
        player.velocityY=-5
        reflection.changeAnimation("up", up)
    }
    if(keyDown("RIGHT_ARROW")){
        player.changeAnimation("right", right)
        player.velocityX=5
        reflection.changeAnimation("right", right)
    }
    if(keyDown("DOWN_ARROW")){
        player.changeAnimation("down", down)
        player.velocityY=5
        reflection.changeAnimation("down", down)
    }
    if(keyDown("LEFT_ARROW")){
        player.changeAnimation("left", left)
        player.velocityX=-5
        reflection.changeAnimation("left", left)
    }
    
    

    drawSprites();
    
}


    

function textbox(){
        fill(0)
        blackbox=rect(windowWidth/2-240, 500, 600, 200)
        fill("white")
        
        //Edges
        noStroke();
        rect(windowWidth/2-240, 500, 10, 200)
        rect(windowWidth/2+350, 500, 10, 200)
        rect(windowWidth/2-240, 500, 600, 10)
        rect(windowWidth/2-240, 700, 600, 10)

        Next=createSprite(1100, 680, 20, 20)

        //Text
        textSize(30)
        textFont(pressStart)
        
        //Interactive Clicking
        if(keyDown("ENTER")){
        talkval=talkval+1
        }
        if(talkval==1){
            text("It is Nice to meet you...", 100, 100)
        }
        if(talkval==2){
            text("You new to this area...?", 100, 100)
        }
        if(talkval==3){
            text("Oh, thats Interesting.", 100, 100)
        }
        if(talkval==4){
            text("I will flip this lever and you can come Up...", 100, 100)
        }
        if(talkval==4 && keyDown("ENTER")){
        gameState=2
        talkval=talkval+1
        }
        if(talkval==5){
        text
        }

    }