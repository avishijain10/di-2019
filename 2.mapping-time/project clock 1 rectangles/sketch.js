
function setup() {
  // set the width & height of the sketch
  createCanvas(800, 600)

  // print the time to the console once at the beginning of the run. try opening up the
  // web inspector and poking around to see the various values the clock function gives you
  print('starting time:', clock())

}

function draw(){
  var now = clock()
  
  if (now.pm){
    background(0)
  }else{
    background(255)
  }


  // check the clock for the current time and unpack some of its fields to generate a time-string
  

  var hour = now.progress.hour
  fill(200, 0, 0)
  rect(0,20, width*hour, 550)


  var min = now.progress.min
  fill(220, 80, 0)
  rect(0,80, width*min, 480)

  var sec = now.progress.sec
  fill(255, 204, 0)
  rect(0,140, width*sec, 410)

}

  
  
  

  
