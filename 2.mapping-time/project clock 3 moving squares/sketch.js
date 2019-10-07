
function setup() {
  // set the width & height of the sketch
  createCanvas(1000, 1000)

  // print the time to the console once at the beginning of the run. try opening up the
  // web inspector and poking around to see the various values the clock function gives you
  print('starting time:', clock())

}

function draw() {
  // check the clock for the current time and unpack some of its fields to generate a time-string
  var now = clock()

  // set the background to 'white' – you can also specify colors use integers, hex-color strings and more.
  // note that setting the background also clears the canvas from our previous round of drawing
  background('white')

  
  var min = now.min 
  var hour = now.hour
  var sec = now.sec 
  
  //fill(0, 0, 200*min)
 //rect(0, 100, width*min, 200)
 var cx, cy;
 cx = 500
 cy = 500
 r = 250
 rectMode(CENTER)
 
 fill(170, 0, 0)
 circle(cx, cy, r*2)

 

  strokeWeight(2)
  stroke('white')
  beginShape(POINTS)
  //for (var a = 0; a < 360; a+=6) {
    
    var minangle = radians(min*6)
    var minx = cx + r*cos(minangle) 
    var miny = cy + r*sin(minangle) 
    fill(0, 0, 200)
    rect(minx, miny, 40, 40)

    var secangle = radians(sec*6)
    var secx = cx + r*cos(secangle) 
    var secy = cy + r*sin(secangle) 
    fill(0, 200, 0)
    rect(secx, secy, 20, 20)

    var hourangle = radians(hour*30)
    var hourx = cx + r*cos(hourangle) 
    var houry = cy + r*sin(hourangle) 
    fill(255, 150, 0)
    rect(hourx, houry, 60, 60)



  //}

 //rect(300, 200, 20, 20)

 //line(200, 200, 200*now.sec/60, 300*now.sec/60)
 
 

}