p5.disableFriendlyErrors = true

let file1;
let file2;
let click1 = 0;
let click2 = 0;
let load1 = false;
let load2 = false;
function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(30);
    file1 = loadSound("frieren_op1.mp3",() => {
      console.log("file1 loaded");
      load1 = true;
    });
    file2 = loadSound("kusuriya_op2.mp3",() => {
      console.log("file2 loaded");
      load2 = true;
    });
    
}

function draw() {
    background(255);
    textSize(28);
    fill(0);
    if(!load1||!load2){
      text("読み込み中", width/2,256);
    }else{
      text("読み込み完了",width/2,256);
    }
    if (click1 == 1) {
        fill(65, 105, 225);
    }else{
        fill(255);
    }
        rect(75, 316, 225, 72);
        fill(click1 == 1? 255:color(0,0,255));
        textSize(28);
        textAlign(CENTER);
        text("frieren op1", 191, 365);
    
    if (click2 == 1) {
        fill(65, 105, 225);
    }else{
        fill(255);
    }
        rect(75, 424, 225, 72);
        fill(click2 == 1? 255:color(0,0,255));
        textSize(28);
        textAlign(CENTER);
        text("kusuriya op2", 191, 470);
    
}
function mouseClicked() {
    if (
        mouseX >= 75 &&
        mouseX <= 300 &&
        mouseY >= 316 &&
        mouseY <= 388 ) {
      click1 = 1 - click1;
      if(click1 == 1){
        file1.play();
      }else{
        file1.pause();
      }
    }
    if (
        mouseX >= 75 &&
        mouseX <= 300 &&
        mouseY >= 424 &&
        mouseY <= 496 ){
      click2 = 1 - click2;
      if(click2 == 1){
        file2.play();
      }else{
        file2.pause();
      }
    }
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight); 
}
