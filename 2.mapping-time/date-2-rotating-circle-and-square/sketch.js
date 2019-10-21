
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

  background('white')
  rectMode(CENTER)

  // check the clock for the current time and unpack some of its fields to generate a time-string
  var now = clock()
  var origin = {x:width/2, y:height/2}
  //var radius = now.season/4

  fill(0, 150, 150)
  circle(origin.x, origin.y, 100*now.season/4)
   
  fill(205, 204, 0)
  circle(origin.x, origin.y, 10)

  // set the background to 'white' – you can also specify colors use integers, hex-color strings and more.
  // note that setting the background also clears the canvas from our previous round of drawing
  fill(150, 0, 150)
  var yearAngle = map(now.progress.year, 0, 1, 0, 360)
  var yearLocation = pointAt(origin.x, origin.y, yearAngle, 200)
  //circle(width/2, height/2, 100)
  circle(yearLocation.x, yearLocation.y, 80*now.season/4)


  var monthAngle = map(now.progress.month, 0, 1, 0, 360)
  var monthLocation = pointAt(yearLocation.x, yearLocation.y, monthAngle, 100)
  //var otherLocation =  pointAt(monthLocation.x, monthLocation.y, -monthAngle, 30)

  var weekAngle = map(now.progress.week, 0, 1, 0, 360)
  var weekLocation = pointAt(monthLocation.x, monthLocation.y, weekAngle, 50)
  //var otherLocationrotate = pointAt(rotaterectlocation.x, rotaterectlocation.y, rectAngle, 30)

  fill(20, 80, 200)
  circle(monthLocation.x, monthLocation.y, 30)
  //rect(otherLocation.x, otherLocation.y, 10, 10)
  fill(180, 50, 50)
  rect(weekLocation.x, weekLocation.y, 10, 10)

  stroke(4)
  line(monthLocation.x, monthLocation.y)

  



}