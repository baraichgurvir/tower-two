const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var gameState = "";
var polygon;

var rope;
var platforms_one;
var platforms_two;
var boxes = [];

function preload() {

}

function setup() {
    createCanvas(1200, 800);
    engine = Engine.create();
    world = engine.world;



    platforms_one = new Platform(900, 400, 300, 20);
    platforms_two = new Platform(500, 600, 300, 20);

    polygon = new Polygon(100, 250, 35, 35)

    boxes[0] = new Box(900, -150, 30, 30)
    boxes[1] = new Box(900, -150, 30, 30)
    boxes[2] = new Box(900, -150, 30, 30)
    boxes[3] = new Box(900, -150, 30, 30)
    boxes[4] = new Box(900, -150, 30, 30)
    boxes[5] = new Box(900, -150, 30, 30)
    
    boxes[6] = new Box(931, -150, 30, 30)
    boxes[7] = new Box(931, -150, 30, 30)
    boxes[8] = new Box(931, -150, 30, 30)
    boxes[9] = new Box(931, -150, 30, 30)
    boxes[10] = new Box(931, -150, 30, 30)
    
    boxes[11] = new Box(869, -150, 30, 30)
    boxes[12] = new Box(869, -150, 30, 30)
    boxes[13] = new Box(869, -150, 30, 30)
    boxes[14] = new Box(869, -150, 30, 30)
    boxes[15] = new Box(869, -150, 30, 30)
    
    boxes[16] = new Box(838, -150, 30, 30)
    boxes[17] = new Box(838, -150, 30, 30)
    boxes[18] = new Box(838, -150, 30, 30)
    boxes[19] = new Box(838, -150, 30, 30)
    
    boxes[20] = new Box(807, -150, 30, 30)
    boxes[21] = new Box(807, -150, 30, 30)
    boxes[22] = new Box(807, -150, 30, 30)
    
    boxes[23] = new Box(962, -150, 30, 30)
    boxes[24] = new Box(962, -150, 30, 30)
    boxes[25] = new Box(962, -150, 30, 30)
    boxes[26] = new Box(962, -150, 30, 30)
    
    boxes[27] = new Box(993, -150, 30, 30)
    boxes[28] = new Box(993, -150, 30, 30)
    boxes[29] = new Box(993, -150, 30, 30)

    boxes[30] = new Box(500, -150, 30, 30)
    boxes[31] = new Box(500, -150, 30, 30)
    boxes[32] = new Box(500, -150, 30, 30)
    boxes[33] = new Box(500, -150, 30, 30)
    boxes[34] = new Box(500, -150, 30, 30)
    boxes[35] = new Box(500, -150, 30, 30)
    
    boxes[36] = new Box(531, -150, 30, 30)
    boxes[37] = new Box(531, -150, 30, 30)
    boxes[38] = new Box(531, -150, 30, 30)
    boxes[39] = new Box(531, -150, 30, 30)
    boxes[40] = new Box(531, -150, 30, 30)
    6
    boxes[41] = new Box(469, -150, 30, 30)
    boxes[42] = new Box(469, -150, 30, 30)
    boxes[43] = new Box(469, -150, 30, 30)
    boxes[44] = new Box(469, -150, 30, 30)
    boxes[45] = new Box(469, -150, 30, 30)
    
    boxes[46] = new Box(438, -150, 30, 30)
    boxes[47] = new Box(438, -150, 30, 30)
    boxes[48] = new Box(438, -150, 30, 30)
    boxes[49] = new Box(438, -150, 30, 30)
    
    boxes[50] = new Box(407, -150, 30, 30)
    boxes[51] = new Box(407, -150, 30, 30)
    boxes[52] = new Box(407, -150, 30, 30)
    
    boxes[53] = new Box(562, -150, 30, 30)
    boxes[54] = new Box(562, -150, 30, 30)
    boxes[55] = new Box(562, -150, 30, 30)
    boxes[56] = new Box(562, -150, 30, 30)
    
    boxes[57] = new Box(593, -150, 30, 30)
    boxes[58] = new Box(593, -150, 30, 30)
    boxes[59] = new Box(593, -150, 30, 30)
    
    rope = new Rope(polygon.body, {x: 200 , y:200})
}

function draw() {
    background("lightblue");
    Engine.update(engine);

    platforms_one.display()
    platforms_two.display()

    polygon.display()

    for (box in boxes) {
        boxes[box].display()
    }

    rope.display()

    drawSprites();
}



function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    rope.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
        gameState = "onSling";
        Matter.Body.setPosition(polygon.body, {x: 200, y: 200})
        rope.attach(polygon.body);
    }
}

















































class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 25
        }
        this.pointB = pointB
        this.sling = Matter.Constraint.create(options);
        World.add(world, this.sling);
    }
    attach(body){
        this.sling.bodyA = body;
    }
    
    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var red = Math.floor(random(0, 255))
            var green = Math.floor(random(0, 255))
            var blue = Math.floor(random(0, 255))
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            
            strokeWeight(5);
            stroke(red, green, blue)
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            }            
            pop();
    }    
}