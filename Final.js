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
  "Aries": "As the first sign of the zodiac,  you have a lot of energy in you. Does energy May manifest in outward ways or inwardly.  Weirdly, you may be the first to start and the first to finish whatever you may set out to do.  You always want to get it done. You have a lot of feisty energy in you, and that can be straightforward or complicated.  You may expect others to have the same passion for life as you do and maybe baffled when you don't get that passion in return. Inwardly the body seems to come first.  Be a natural-born athlete, at the very least; your inclination is to your body to get things done. Talking with your hands, very passionate and energetic, is your natural state.  Because of this natural tendency to so much passion, planning is simply not in your nature.  This may turn into impatience for tedious tasks, and it is good to note that impatience can be a downfall for you.  But as any downfall comes up,  it also shows a sign of strength Innovation pushing forward is a massive strength for you. You love to start anything new, and you have trouble sitting still.  This may manifest in inward restlessness. It may be an outward extrovert.  But you are a Pioneer in whatever you set out to do, and there is a quality of Bravery that is unmistakable. You generally know what you want, and you made take shortcuts to work smarter, not harder. Boldness is just your style. Even if you identify as the quiet type,  there is an unmistakable quality about the way you see the world.  You have a brave outlook on life, and independence is your Birthright. Nothing gets you going more than a blank slate, a brand new day, or the promise of a fresh start.  Keep moving forward. Keep challenging yourself. It's in your nature.",
  "Pisces": "Pisces paragraph",
  "Taurus": "There is something substantially solid about you.  You have an unmistakable strength that shines through your tough build. You are usually the most dependable out of a given group. Your friends may rely on you or outwardly say you are the designated “mom or dad of the group,” This strength in you is not something you need to work towards, but more of a trait or habit formed within out of wanting to help.  You may find yourself defining yourself as the sensitive type, well this joy of feeling extends to all areas of your life: you love delighting in the sensual pleasures of life: Such as indulging in food, the things that make you feel most comfortable, even the smells you pick up. You live life through your senses. When you work, you commit to a steady pace to ensure you separate work and leisure. You work hard and love to end work with play. You have a rootedness in your commitments; you love to own things, and possessiveness in you is a beautiful quality about you that adds to your sense of security.",
  "Gemini": "You are both interesting and interested. Your love for information is unmistakable. With your son in this sign, you are a flexible, changeable person you love collecting information just as much as you love sharing. You love The Exchange of thoughts or ideas. You have a natural ability to be quick and clever. You may have a strong whit, and usually, you enjoy intellectual conversations much more than surface-level talk. You may even get bored easily without enough mental stimulation. Often you may find yourself fitting in with others, and you can quickly adopt the moods of those around you. You may have friends from all walks of life, and you may be seen as an approachable person.  This depends on if you are for interior or exterior with your observation objective thoughts. You are excellent at making objective observations but a little hard to get close to because of this tendency to observe and review possibilities before deciding. This can lead to feeling like decisions are just too hard to make. You may be a little scatterbrained or nervous at times, but this uneasy are leads to a very intuitive, trusting person within you.",
  "Cancer": "As the crab represents, you have a strong survival Instinct with your outer shell and the soft sensitive interior. You have a natural sense of survival and to protect those that you love.  Depending on how strong your outer shell has grown throughout your life, you are sensitive interior caring air to it.  I can almost feel how much you care.  You have a reputation for moodiness, and although this trait fluctuates,  you still have a caution for sharing your inner self with the rest of the world.   There is a strong need for you to feel out the environment before trusting it.  You may have developed the ability to manipulate others to get what you want, and you almost always deal with conflict indirectly in order to avoid confrontation.  You have a softness about you when you're in the right mood, the most hospitable among all of the signs when you allow yourself to be.  You are a very caring soul and able to be dependable. Once you allow yourself to open up, you are a warm, thoughtful, and loving person.",
  "Leo": "As the lion represents, you have a mighty roar. People feel your energy when you walk into the room, and you love to be noticed.  This may come off as conceited or narcissistic, but you just want to make the world a better place when channeled selflessly. You love making people happy, and you love the good things in life you tend to work hard for, but it's often tricky for you into that mind state.  You have a fix, which means that you may hold onto situations or words for long periods, and you may forgive but not forget.  You are naturally a warm, happy person, and there is a side of you that gets very hurt. When people accuse you of having bad intentions, you get very shutdown when people do not appreciate your efforts.  But there is a certain idealistic or romantic point of view that you want to maintain. Often you have a very Noble enter code of which you must answer to period on the surface, you may appear relatively confident,  But that is your self-importance.  Find everything almost anything important, including reputation and other surface-level things which may make you come across as arrogant or self-absorbed show-off. However, hone into your selflessness and Let Your Love Shine through.",
  "Virgo": "You may have a natural tendency to be nit-picky in your surroundings. Whether this shows perfectionism or judgment, you generally have a way of making things fall in line. You are usually in the know just because you love knowledge, and you love knowing how you may have a natural purity to your spirit that keeps you self-sufficient and self-contained.  Is Purity may only be on the surface as you have a very high sensitivity to your surroundings to get embarrassed quite easily. You may be quite hesitant when faced with anything new or anyone new. However, once you feel comfortable, you can talk up a storm.  You may not be too keen on the Limelight, but you have a strong desire to feel appreciated. You have a strong sense of responsibility. Even when you're trying to be irresponsible, you just can't help yourself from worrying.  You may feel a vague feeling of discontentment, and this may show as becoming a workaholic or simply just being restless or nervous.  Have a fear of underperforming, which drives you to do everything well.  You may have a deep feeling of perfection that needs to be attained will feel incomplete until you have achieved your idealistic goal. You may be stuck in the practical or material world as almost tunnel vision for how to achieve and attain perfection. But, you must let go of some pressure you put on yourself to allow your spirit to wander.",
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