
function setup() {
  // set the width & height of the sketch
  createCanvas(420, 220)

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

  // set up typography & drawing-color
  //var x = map(now.progress.min, 0, 1, 100, width)
  var season = now.season
  var color 
  if(season==1) color='red'
  if(season==2) color='blue'
  if(season==3) color='green'
  if(season==4) color='yellow'

  


  fill(color)
  
  rect(0, 0, 420, 250)

  fill(204, 204, 0)
  
  var rectcolorred = 21
  var rectcolorgreen = 50
  var rectcolorblue = 100
  
  for (var i=0; i<=11; i++)
  {
    
    fill(rectcolorred*i, rectcolorgreen*i, rectcolorblue*i)
    rect(i*35, 40, 35, 150)
    
  }
  

  var stepwise = map(now.month/12, 0, 1, 0, width)
  
  var radius = map(now.progress.day, 0, 1, 2, 100)

 // var circColor = color(map(now.sec, 0, 60, 0, 255))

  //var src = color(218, 165, 320)
  //var dst = color(72, 61, 139)

  //fill(circColor)

  circle(stepwise-17.5, height*.33, radius)


}