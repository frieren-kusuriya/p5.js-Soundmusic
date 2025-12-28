p5.disableFriendlyErrors = true;

let file1;
let file2;
let click1 = 0;
let click2 = 0;
let load1 = false;
let load2 = false;

function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(30);

    // 音声読み込み
    file1 = loadSound("frieren_op1.mp3", () => {
        console.log("file1 loaded");
        load1 = true;
    });
    file2 = loadSound("kusuriya_op2.mp3", () => {
        console.log("file2 loaded");
        load2 = true;
    });
}

function draw() {
    background(255);
    textSize(28);
    fill(0);
    textAlign(CENTER);

    // 中央に読み込み状態を表示
    if (!load1 || !load2) {
        text("読み込み中", width / 2, height / 2 - 80);
    } else {
        text("読み込み完了", width / 2, height / 2 - 80);
    }

    drawCenteredRectAndText();
}

function drawCenteredRectAndText() {
    let rectWidth = 225;
    let rectHeight = 72;

    // rect の左上座標（中央揃え）
    let x = width / 2 - rectWidth / 2;

    // 1つ目の四角
    fill(click1 == 1 ? color(65, 105, 225) : 255);
    rect(x, height / 2 + 20, rectWidth, rectHeight);

    fill(click1 == 1 ? 255 : color(0, 0, 255));
    text("frieren op1", width / 2, height / 2 + 65);

    // 2つ目の四角
    fill(click2 == 1 ? color(65, 105, 225) : 255);
    rect(x, height / 2 + 120, rectWidth, rectHeight);

    fill(click2 == 1 ? 255 : color(0, 0, 255));
    text("kusuriya op2", width / 2, height / 2 + 165);
}

function mouseClicked() {
    let rectWidth = 225;
    let rectHeight = 72;
    let x = width / 2 - rectWidth / 2;

    // 1つ目の四角
    if (
        mouseX >= x &&
        mouseX <= x + rectWidth &&
        mouseY >= height / 2 + 20 &&
        mouseY <= height / 2 + 20 + rectHeight
    ) {
        click1 = 1 - click1;
        if (click1 == 1) file1.play();
        else file1.pause();
    }

    // 2つ目の四角
    if (
        mouseX >= x &&
        mouseX <= x + rectWidth &&
        mouseY >= height / 2 + 120 &&
        mouseY <= height / 2 + 120 + rectHeight
    ) {
        click2 = 1 - click2;
        if (click2 == 1) file2.play();
        else file2.pause();
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
