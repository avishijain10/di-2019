
function setup() {
  // set the width & height of the sketch
  createCanvas(600, 600)

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

  
  
   var weekday = now.weekday
   var color
   if(weekday==1) color= 'red'
   if(weekday==2) color= 'blue'
   if(weekday==3) color= 'green'
   if(weekday==4) color= 'yellow'
   if(weekday==5) color= 'purple'
   if(weekday==6) color= 'orange'
   if(weekday==7) color= 'black'

   fill(color)

   //circle(width/2, height/2, 200)

   circle(width/2, height/2, 10)

  var monthAngle = map(now.progress.month, 0, 1, 0, 360)
  var monthLocation = pointAt(width/2, height/2, monthAngle, 180)

  fill(color)
  circle(monthLocation.x, monthLocation.y, 120)

  

  var yearAngle = map(now.progress.year, 0, 1, 0, 360)
  var yearLocation = pointAt(300, 300, yearAngle, 120)

  fill(255*now.progress.season)
  triangle(yearLocation.x, yearLocation.y, 300, 300, 320, 150)

  //triangle(280, 20, yearLocation.x, yearLocation.y, 320, 20)


  }
  
  
  
