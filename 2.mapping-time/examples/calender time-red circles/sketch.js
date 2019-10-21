
function setup() {
  // set the width & height of the sketch
  createCanvas(400, 400)

  // print the time to the console once at the beginning of the run. try opening up the
  // web inspector and poking around to see the various values the clock function gives you
  print('starting time:', clock())

}



  // set up typography & drawing-color
  //var x = map(now.progress.min, 0, 1, 100, width)

  //var smooth = map(now.progress.min, 0, 1, 0, width)
  //var radius = map(now.progress.day, 0, 1, 2, 100)

 // var circColor = color(map(now.sec, 0, 60, 0, 255))

  //var src = color(218, 165, 320)
  //var dst = color(72, 61, 139)

  //fill(circColor)

  //circle(smooth, height*.33, radius)

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

  circle(width/2, height/2, 10)

  var weekAngle = map(now.progress.week, 0, 1, 0, 360)
  var weekLocation = pointAt(width/2, height/2, weekAngle, 120)

  fill('red')
  circle(weekLocation.x, weekLocation.y, 20)

  
  
}




