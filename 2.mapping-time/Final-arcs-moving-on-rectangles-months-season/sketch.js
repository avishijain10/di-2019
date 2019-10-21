
function setup() {
  // set the width & height of the sketch
  createCanvas(900, 900)

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

  var season = now.season
  var color 
  if(season==1) color='red'
  if(season==2) color='blue'
  if(season==3) color='green'
  if(season==4) color='yellow'

  fill(color)
  
  rect(0, 0, 900, 1300)

  fill(204, 204, 0)
  
  var rectcolorred = 21
  var rectcolorgreen = 50
  var rectcolorblue = 100
  
  for (var i=0; i<=11; i++)
  {
    
    fill(rectcolorred*i, rectcolorgreen*i, rectcolorblue*i)
    rect(i*75, 60, 75, 700)
    
  }

  //var stepwise = map(now.month/12, 0, 1, 0, width)
  
  //var radius = map(now.progress.day, 0, 1, 2, 100)

  //circle(stepwise-25, height*.66, radius)

  fill('green')
  arc(75*now.month-37.5, 700-20*now.day, 80, 80, 0, TWO_PI*now.progress.hour, PIE)

  fill('yellow')
  arc(75*now.month-37.5, 700-20*now.day, 60, 60, 0, TWO_PI*now.progress.min, PIE)

  fill('orange')
  arc(75*now.month-37.5, 700-20*now.day, 40, 40, 0, TWO_PI*now.progress.sec, PIE)



}