// get zodiac function reference:
// https://github.com/tindoductran/zodiac/blob/master/getZodiac2.html


let input, button, greeting;
let star = []; //star array
let mainText;
let numberOfStars = 400;
let zodiacSign;
let showSignText = false;
let isMoving = false;

let signs = {
  "Capricorn": "Capricorn paragraph",
  "Aquarius": "Aquarius paragraph",
  "Aries": "Aries paragraph",
  "Pisces": "Pisces paragraph",
  "Taurus": "Taurus paragraph",
  "Gemini": "Gemini paragraph",
  "Cancer": "Cancer paragraph",
  "Leo": "Leo paragraph",
  "Virgo": "Virgo paragraph",
  "Libra": "Libra paragraph",
  "Scorpio": "Scorpio paragraph",
  "Sagittarius": "Sagittarius paragraph",
};


function setup() {
  createCanvas(600, 600)

  //make a star array, and the array is a star function.
  for (var i = 0; i < numberOfStars; i++) {
    star[i] = new Star();
  }

  // input from user
  input = createInput();
  input.position(width * 0.5 - 150, height * 0.9);

  // submit button
  button = createButton('submit');
  button.position(width * 0.5, height * 0.9);
  button.mousePressed(greet);

  mainText = "What is your birthday? (mm/dd/yyyy)";
}

function draw() {
  //background change
  var blue = map(mouseY, 0, height, 54, 14);
  background(26, 28, blue);

  textSize(24);
  textAlign(CENTER, CENTER);
  fill(255);
  noStroke();
  text(mainText, width * 0.5, height * 0.8);


  //call the star twinkle function
  push();
  translate(width / 2, height / 2);
  for (var i = 0; i < star.length; i++) {
    star[i].twinkle();
    // check if user pressed button
    if (isMoving) {
      star[i].show();
    }
  }
  pop();

  if (showSignText) {
    textAlign(CENTER, CENTER);
    text(signs[zodiacSign], width / 2, height / 2);
  }
}


function greet() {
  const birthday = input.value();
  let birthdayCorrect = checkBirthday(birthday);
  let tokens = birthday.split("/");
  console.log(birthdayCorrect);
  if (birthdayCorrect) {
    let day = tokens[1];
    let month = tokens[0];
    let year = tokens[2];
    displayParagraph(month, day);
    isMoving = true;
    mainText = "Your birthday is: " + month + "/" + day + "/" + year;
  } else {
    mainText = "Please enter in the following format: mm/dd/yyyy";
  }
  input.value('');
}

function displayParagraph(mm, dd) {
  zodiacSign = getZodiac(mm, dd);
  console.log("ZS: " + zodiacSign);
  showSignText = true;
  textAlign(LEFT, TOP);
  text(signs[zodiacSign], width / 2, height / 2);
}

function getZodiac(month, day) {
  month = int(month);
  day = int(day);

  var datecode = month * 100 + day; //this will give us a number represent month and day
  if (datecode <= 120) { // Jan 20
    return "Capricorn";
  } else if (datecode <= 219) { // Feb 19
    return "Aquarius";
  } else if (datecode <= 320) { // Mar 20
    return "Pisces";
  } else if (datecode <= 420) { // Apr 20
    return "Aries";
  } else if (datecode <= 520) { // May 20
    return "Taurus";
  } else if (datecode <= 621) { // Jun 21
    return "Gemini";
  } else if (datecode <= 722) { // Jul 22
    return "Cancer";
  } else if (datecode <= 822) { // Aug 22 -- Wikipedia says that it's Aug 23 but then
    //           but then it starts again with Aug 23 so I
    // don't know what's up with that.
    return "Leo";
  } else if (datecode <= 921) { // Sept 21
    return "Virgo";
  } else if (datecode <= 1022) { // Oct 22
    return "Libra";
  } else if (datecode <= 1121) { // Nov 21
    return "Scorpio";
  } else if (datecode <= 1221) { // Dec 21
    return "Sagittarius";
  } else { //if we hit this case it means we hava greater date code than Dec 21
    return "Capricorn";
  }
}

function checkBirthday(bday) {
  var tokens = bday.split("/");
  if (tokens.length < 3) {
    return false;
  }
  if (tokens[0].length != 2 && tokens[0].length != 2 && tokens[2].length != 4) {
    return false;
  }
  if (int(tokens[0]) > 12) {
    return false;
  }
  return true;

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