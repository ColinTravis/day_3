var y = 0;
var ok = false;

function setup () {
  createCanvas(windowWidth,windowHeight)
  rectMode(CENTER)
}


/*
function draw() {
  // Example 1. if/thenm
 background(59, 40, 136)
  stroke(111, 252, 168)
  strokeWeight(6)
  line(100,y, 500,y)

  y = y + 2;
  // y ++ ;

  // if (conditional) {
  //   do something
  // }

// < > <= >= =

if (y > height) {
    y = 0;
}
}
*/



// ================ EXAMPLE 2 NOT IN THE MIDDLE ===============
/*
function draw(){
background(59,40,136)
y++;

if (y<200) {
  rect(width/2, y,145,145)
  console.log("y is less than 200");
}

if (y>500) {
  ellipse(width/2,y,200,200)
  console.log("y is greater than 500");
}

if (y > height) {
  y = 0
  console.log("reset");
}

console.log("y value:" + y);

}
*/

// ============= EXAMPLE 3. if/then/else
/*
function draw() {
  background(30,600,20)
  y++ //increase Y by one
  if (y < height/2) {
    fill(300,50,20)
    ellipse(width/2,y,100,100)
  }else{
    fill(100,300,600)
    rect(width/2,y,200,200)
  }
  if (y > height) {
    y = 0;

  }
}

*/


// =========== EXAMPLE 4. Nested Conditionals
/*
function draw() {
  background(59, 40, 136)
  y++;
  ellipse(width/2,y,50,50)
  strokeWeight(0)
  if (y < height/2) {
    fill(192, 255, 121)
    if (y < height/4) {
      fill(20,300,400)
    }
  }else {
    fill(145, 144, 207)
  }

  if (y > height) {
    y=0;
  }
}
*/


// ============= EXAMPLE 5. detour (if/then/elseif/then)
/*
function draw(){
  background(59,40,126)

  y++

if (y < height/4) {
  fill(230,200,10)
}else if (y > height/4*2) {
  fill(30,220,220)
}else {
  fill(30,30,30)
}

if (y > height) {
  y=0;
}
  ellipse(width/2,y,200,200)
}
*/

// ============ EXAMPLE 6. && operator =========
/*
function draw(){
  background(50,40,126)
  fill(221, 25, 148)

  y++

  if (y>300 && y < 500) {
    // ellipse(width/2,y,100,100)
    text("👽",width/2,y)
  }

  if (y>height) {
    y = 0;
  }
}
*/

// ========= EXAMPLE 7. Logical || (or) operator =====
/*
  function draw(){
    background(50,40,126)
    fill(221, 25, 148)

    y++

    if (y < 300 || y > 500) {
      // ellipse(width/2,y,100,100)
      textSize(100)
      text("🌮",width/2,y)
    }

    if (y>height) {
      y = 0;
    }
  }
  */

  // ======== EXAMPLE 8. Booleans ======

  function draw(){
    background(50,40,126)
    y++;
    if (ok === true) {
      text("👌",width/2,y)
      textSize(100)
    }
    if (y > height/2) {
      ok = true;
    }else {
      ok = false;
    }

    if (y > height) {
      y = 0;
    }
    console.log(ok);
  }
