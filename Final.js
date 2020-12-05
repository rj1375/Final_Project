let input, button, greeting;
let star = []; //star array

function setup() {
  createCanvas(600, 600)
    
  for (var i = 0; i < 400; i++) {
    //make a star array, and the array is a star function.
    star[i] = new Star();
  }
  
  // input from user
  input = createInput();
  input.position(width/2-100, 400);
  
  // submit button
  button = createButton('submit');
  button.position(width/2, 400);
  button.mousePressed(greet);
  
  // greeting is title
  textAlign(CENTER);
  textSize(50);
  
  
  greeting = createElement('h2', 'What is your birthday? (mm/dd/yyyy)');
  greeting.style('color', '#E6E6FA');
  greeting.style('font-size', '30px');
  greeting.position(width/2-100, height/2);
  
}

function draw() {
  //background change
  var blue = map(mouseY, 0, height, 54, 14);
  background(26, 28, blue);

  //call the star twinkle function
  push();
  translate(width / 2, height / 2);
  for (var i = 0; i < star.length; i++) {
    star[i].twinkle();
  }
  pop();

}


function greet() {
  const birthday = input.value();
  greeting.html('hello, your birthday is ' + birthday + '!');
  input.value('');
}

function Star() {
  //make main variables
  this.x = random(-width, width);
  this.y = random(-height, height);
  this.z = random(width);

  //this funtion draw the stars and make them move
  this.twinkle = function() {
    //make the speed change with the mouseX
    this.speed = 5;
    this.z = this.z - this.speed;

    //when stars come to the front, draw more stars.
    if (this.z < 1) {
      this.z = width;
      this.x = random(-width, width);
      this.y = random(-height, height);
    }

     //draw the stars & add its move
     fill(255);
     noStroke();
     this.r = map(this.z, 0, width, 8, 0);
     ellipse(this.x, this.y, this.r, this.r);
  }
    
  this.show = function() {
    //make the speed change with the mouseX
    this.speed = 50;
    this.z = this.z - this.speed;

    //when stars come to the front, draw more stars.
    if (this.z < 1) {
      this.z = width;
      this.x = random(-width, width);
      this.y = random(-height, height);
    }

     //draw the stars & add its move
     fill(255);
     noStroke();
     this.sx = map(this.x / this.z, 0, 1, 0, width);
     this.sy = map(this.y / this.z, 0, 1, 0, height);
     this.r = map(this.z, 0, width, 8, 0);
     ellipse(this.sx, this.sy, this.r, this.r);
    }
  
}