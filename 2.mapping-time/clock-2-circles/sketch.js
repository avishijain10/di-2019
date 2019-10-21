
function setup() {
  // set the width & height of the sketch
  createCanvas(1000, 600)

  // print the time to the console once at the beginning of the run. try opening up the
  // web inspector and poking around to see the various values the clock function gives you
  print('starting time:', clock())

}

function draw() {
  // check the clock for the current time and unpack some of its fields to generate a time-string
  var now = clock()
  

// numerical values for elements of current time
now.hours // hour in 0–23 'military' time
now.hour  // hour in 1–12 'am/pm' time
now.min   // minute
now.sec   // seconds

  // set the background to 'white' – you can also specify colors use integers, hex-color strings and more.
  // note that setting the background also clears the canvas from our previous round of drawing
  background('white')

  


  //circle(100*now.sec/60, 100, 50)

  fill(255*now.sec/60, 0, 0)
  circle(800, 300, 120*now.sec/60)

fill(0, 255*now.min/60, 0)
  circle(500, 300, 200*now.min/60)

fill(0, 0, 255*now.hour/12)
  circle(200, 300, 300*now.hour/12)


  var now = clock()
now.hours // hour in 0–23 'military' time
now.hour  // hour in 1–12 'am/pm' time
now.min   // minute
now.sec   // seconds

//circle(200*now.hours/24, 200, 150)
//ellipse(100*now.hours/24, 100, 50)

fill(255)
}