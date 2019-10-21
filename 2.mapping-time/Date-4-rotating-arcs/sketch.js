
function setup() {
  // set the width & height of the sketch
  createCanvas(400, 400)

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

  fill('red')
  rect(0, 0, width*now.progress.season, 400)

  circle(200, 200, 10)


  fill('green')
  arc(200, 200, 250, 250, 0, TWO_PI*now.progress.year, PIE)

  fill('yellow')
  arc(200, 200, 200, 200, 0, TWO_PI*now.progress.month, PIE)

  fill('blue')
  arc(200, 200, 150, 150, 0, TWO_PI*now.progress.week, PIE)



  

  

}