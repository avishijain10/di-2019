
function setup() {
  // set the width & height of the sketch
  createCanvas(800, 800)

  // print the time to the console once at the beginning of the run. try opening up the
  // web inspector and poking around to see the various values the clock function gives you
  print('starting time:', clock())

}

function coordsAt(cx, cy, angle, dist){
  var theta = angle/360 * TWO_PI
  return [cx+cos(theta) * dist, 
          cy+sin(theta) * dist]
}

function pointAt(cx, cy, angle, dist){
  var theta = angle/360 * TWO_PI
  return {x:cx+cos(theta) * dist, 
          y:cy+sin(theta) * dist}
}

function draw() {
  // check the clock for the current time and unpack some of its fields to generate a time-string
  var now = clock()

  // set the background to 'white' – you can also specify colors use integers, hex-color strings and more.
  // note that setting the background also clears the canvas from our previous round of drawing
  background('white')

  //circle(width/2, height/2, 10)

  var seasonAngle = map(now.progress.season, 0, 1, 0, 360)
  var seasonLocation = pointAt(400, 400, seasonAngle, 280)

  fill(255*now.progress.season)
  noStroke()
  triangle(seasonLocation.x, seasonLocation.y, 400, 400, 400, 120)


  
  var yearAngle = map(now.progress.year, 0, 1, 0, 360)
  var yearLocation = pointAt(400, 400, yearAngle, 250)

  fill('LightSeaGreen')
  circle(yearLocation.x, yearLocation.y, 80*now.month/12)

  var weekAngle = map(now.progress.week, 0, 1, 0, 360)
  var weekLocation = pointAt(yearLocation.x, yearLocation.y, weekAngle, 100)

  var weekday = now.weekday
   var color
   if(weekday==1) color= 'red'
   if(weekday==2) color= 'aqua'
   if(weekday==3) color= 'Teal'
   if(weekday==4) color= 'gold'
   if(weekday==5) color= 'purple'
   if(weekday==6) color= 'orange'
   if(weekday==7) color= 'black'

  fill(color)
  circle(weekLocation.x, weekLocation.y, 100)

  
 
  fill('green')
  arc(weekLocation.x, weekLocation.y, 80, 80, 0, TWO_PI*now.progress.hour, PIE)

  fill('yellow')
  arc(weekLocation.x, weekLocation.y, 60, 60, 0, TWO_PI*now.progress.min, PIE)

  fill('blue')
  arc(weekLocation.x, weekLocation.y, 40, 40, 0, TWO_PI*now.progress.sec, PIE)





}