var mp = false;


function setup () {
  createCanvas(windowWidth,windowHeight)
  rectMode(CENTER)
  textAlign(CENTER)

}



//  ======= Example 1. mouseX & mouseY ========
/*
function draw () {
  background(249, 94, 67)
  strokeWeight(0)
  fill(32, 195, 255)
  ellipse(mouseX,mouseY,400,400)
}
*/

// ====== Example 2. pmouseX & pmouseY =======

// function draw () {
//   background(249, 94, 67)
//   strokeWeight(0)
//   fill(32, 195, 255)
//   line(mouseX,mouseY,pmouseX,pmouseY)
//   ellipse(mouseX,mouseY,pmouseX,pmouseY)
//   text("👌", mouseX, mouseY)
//   textSize(mouseX/6)
// }

// ====== Example 2. mouse + conditional =======


// function draw () {
//   background(249, 94, 67)
//   strokeWeight(0)
//   fill(32, 195, 255)
//   text("👌", mouseX, mouseY)
//   textSize(mouseX/6)
//
//   if (mouseX > width/2) {
//     ellipse(mouseX,mouseY,300,300)
//   }else {
//     rect(mouseX,mouseY,200,200)
//   }
// }

// ====== Example 2. mouse + conditional =======


// function draw () {
//   background(249, 94, 67)
//   strokeWeight(0)
//   fill(32, 195, 255)
//
//   textSize(100)
//
//   if (mouseIsPressed == true) {
//     text("💯", mouseX, mouseY)
//   }else {
//     text("🚫", mouseX, mouseY)
//
//   }
// }

// function draw () {
//   background(249, 94, 67)
//   strokeWeight(0)
//   fill(32, 195, 255)
//
//   textSize(100)
//
//   if (keyIsPressed == 'F') {
//     text("🔥", mouseX, mouseY)
//     textSize(200)
//   if (key === 'G') {
//     text("👵🏻", mouseX,mouseY)
//   }}else {
//     text("🌋", mouseX, mouseY)
//     textSize(100)
//     console.log(key);
//
//   }
// }

// ===== MOUSE PRESSED EXAMPLE ====
function mousePressed(){
  mp==true;
  console.log("mouse pressed");
}

function draw(){
  background(249, 94, 67)
  if (mp == true){
  text("👵🏻", width/2,height/2)
  textSize(100)

}}
