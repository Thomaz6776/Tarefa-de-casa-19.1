var background, aviao, gameover;

var backgroundIMG, aviaoIMG, gameoverIMG, pedraBaixoIMG, pedraAltaIMG, nuvemPequenaIMG;

var JOGO = 1;


function preload(){
    backgroundIMG = loadImage("background.png");
    aviaoIMG = loadImage("planeYellow1.png");
    gameoverIMG = loadImage("textGameOver.png");
    pedraBaixoIMG = loadImage("rockSnow.png");
    pedraAltaIMG = loadImage("rockSnowDown.png");
    pnuvemPequenaIMG = loadImage("puffSmall.png");
}

function setup() {

    createCanvas(600, 400);

    obstaclesGroup = createGroup();

    background = createSprite(300, 200);
    background.addAnimation("Fundo", backgroundIMG);

    aviao = createSprite(140, 200);
    aviao.addAnimation("personagem", aviaoIMG);
    aviao.scale = 0.8;

    gameover = createSprite(300, 200);
    gameover.addAnimation("derrota", gameoverIMG);
}

function draw() {
    
    if (JOGO === 1) {
        aviao.velocityY = 6.8;
        gameover.visible = false;

        obstacleBaixo();
        obstacleAlto();

        if (keyIsDown(UP_ARROW)){
            aviao.velocityY = -13;
        }
    
        if (obstaclesGroup.isTouching(aviao)) {
            JOGO = 0 ;
        }

        if (aviao.y > 425) {
           JOGO = 0 ;
        }

        if (aviao.y < 0) {
            JOGO = 0 ;
         }
    }

    else if (JOGO === 0) {
        gameover.visible = true;
        aviao.y = aviao.y;
    }


    drawSprites();
}


function obstacleAlto () {
    if (frameCount % 60 === 0){
        var obstacle1 = createSprite(600, Math.round(random(100, -50)));
        obstacle1.addAnimation("pedraAlta", pedraAltaIMG);

        obstacle1.velocityX = -6;
        
        obstacle1.lifetime = 300;
   
        obstaclesGroup.add(obstacle1);
        }
}

function obstacleBaixo () {
    if (frameCount % 80 === 0){
        var obstacle = createSprite(600, Math.round(random(350, 450)));
        obstacle.addAnimation("pedraBaixa", pedraBaixoIMG);

        obstacle.velocityX = -6;
        
        obstacle.lifetime = 300;
   
        obstaclesGroup.add(obstacle);
        }
}