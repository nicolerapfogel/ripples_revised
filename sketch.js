let drops = [];
let ripples_num = 5;
let ripples = [];
let water;
let a = 0;
let speed = 2.5;
let z = 0;

function preload(){
    water = loadImage('images/water.png')
    cloud = loadImage('images/cloud.png')
}

function setup(){
    createCanvas(windowWidth, windowHeight);
    stroke(124, 184, 193);
    noFill();
    ellipseMode(CENTER);
}

function draw(){
    if(keyIsPressed){
        console.log("pressed!!!!!!!xxxxxxxx")
        background(0);
    }else{
        background(130, 222, 237);
    }
    for(let c=0; c<drops.length; c++){
        drops[c].move();
    }
    for(let c=0; c<drops.length; c++){
        drops[c].showRipple();
    }  
    image(cloud, mouseX, mouseY-400, 200, 90)
}

function mousePressed(){
    let d = new Drop(mouseX, mouseY-400, 50, 50);
    drops.push(d)
    for(let c=0; c<drops.length; c++){
        drops[c].clicked(mouseX, mouseY);
    }
    
}

class Ripple{
    constructor(tempX, tempY, tempW, tempH){
        this.x = tempX;
        this.y = tempY;
        this.w = tempW;
        this.h = tempH;
        this.isclicked = false;
    }
    
    clicked(){
        //this.isclicked is true when mouse is clicked
        if(mouseIsPressed){
            this.isclicked=true;
        }else{
            this.isclicked=false;
        }
    }
   
    display(){
        ellipse(this.x, this.y, this.w, this.h);
   }

    iterate(){
        //create ripples that increase the w and h by magnitude of 10 on all ripple arrays when mouse is clicked
        push();
        if(this.isclicked){
            ellipse(this.x, this.y, 10, 10);
            ellipse(this.x, this.y, 30, 30);
            ellipse(this.x, this.y, 50, 50);
            ellipse(this.x, this.y, 70, 70);
            ellipse(this.x, this.y, 90, 90);
            /*for(let z=0; z<1; z++){
                let new_w= this.w+z
                let new_h = this.h+z
                ellipse(this.x, this.y, new_w, new_h);
            }*/
        }
         pop();
    }
}

class Drop{
    constructor(tempX, tempY, tempW, tempH){
        this.x = tempX;
        this.y = tempY;
        this.w = tempW;
        this.h = tempH;
        this.isclicked = false;
        //this.r =
    }

    move(){
        if(this.isclicked){
            let speed = 2.5;
            this.y += speed;
            if(this.y > windowHeight/2){
                speed = 0;
        }
      }
    }

    clicked(){
    if(mouseIsPressed){
        this.isclicked=true;
        }else{
            this.isclicked=false;
        }
    }
    
    showRipple(){
        //if the water droplet reaches a certain point on the screen, it will ripple
        if(keyIsPressed){
            console.log("pressed!!!!!!!yyyyyyyyyyy")
            stroke(random(0, 255), random(0, 255), random(0, 255));
        }else{
            stroke(124, 184, 193);
        }
        if(this.y > 7*windowHeight/8 - 20){
            ellipse(this.x, 7*windowHeight/8, 10, 10/3);
            ellipse(this.x, 7*windowHeight/8, 30, 30/3);
            ellipse(this.x, 7*windowHeight/8, 50, 50/3);
            ellipse(this.x, 7*windowHeight/8, 70, 70/3);
            ellipse(this.x, 7*windowHeight/8, 90, 90/3);
            /*let r =  new Ripple(this.x, this.y, this.w, this.h);
            ripples.push(r);
            for(let i=0; i<ripples.length; i++){
                ripples[i].display();
                ripples[i].clicked(mouseX, mouseY);
                ripples[i].iterate();
             }*/
            /*for(a=0; a<ripples_num; a++){
                this.w += a;
                this.h += a;
            }*/
        }else{
            image(water, this.x, this.y, this.w, this.h);
        }
    }
}