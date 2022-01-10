//declare variable for canvas
var canvasWidth =650
var canvasHeight =350

//declare height and width of image
var spriteWidth =864
var spriteheight =280

//split image into two rows for right and left button , 8 cloumns -> for frames
var rows = 2
var column = 8

//temp varibale to ckeck img go in correct direction
var trackRight = 0
var trackLeft = 1

//each frame has different width and height
var width = spriteWidth / column
var height = spriteheight / rows

//initial posotion of first frame starts with x and y value
var curFrame = 0
var framecount = 8

//cordinates to render sprite img
var x = 0
var y = 0

//render frame part of img to display
var srcX = 0
var srcY = 0

var left = false
var right = true

var speed = 12

//get canvas element
var canvas = document.getElementById("canvas")

//display sprite image in canvas
canvas.width = canvasWidth
canvas.height = canvasHeight

var ctx = canvas.getContext("2d")

//adding the image source
var character = new Image()
character.src = "character.png"

function updateFrame(){
    //pre-increment function give example abt pre and post increment
    curFrame = ++curFrame % framecount //1%8=1,2%8=2,..8%8=0 /9%8=1
    srcX = curFrame * width
    ctx.clearRect(x,y,width,height)
    if(left && x>0){
        srcY = trackLeft * height //frames in second row
        x-=speed
    }
    if(right && x<(canvasWidth-width)){
        srcY = trackRight * height //frames in first row
        x+=speed
    }
}

function draw(){
    updateFrame()
    ctx.drawImage(character,srcX,srcY,width,height,x,y,width,height)
}


//set interval
setInterval(draw,100)

//button click function
function moveLeft(){
    left = true
    right = false
}

function moveRight(){
    left = false
    right = true
}

