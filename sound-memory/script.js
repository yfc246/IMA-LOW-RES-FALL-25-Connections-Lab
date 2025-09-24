console.log("it working!");





//p5 code

let pic;

function preload() {
    pic = loadImage("media/bgimg-1.png");
}

function setup(){
    // createCanvas(pic.width, pic.height);

    createCanvas(windowWidth, windowHeight); //want to resize image to fit the canvas

}

function draw() {
    image(pic,0, 0);

    let pixelRegion = pic.get(mouseX, mouseY, 200, 200)

    //one sample version
    // image(pixelRegion, 200, 200, 100, 100)
    // image(pixelRegion, mouseX, mouseY, 50, 300)


    //random version (it's a little crazy now but kinda like it)
    // image(pixelRegion, random(50,300), random(50,300), random(200, width/2), random(200, height/2))
    // image(pixelRegion, mouseX, mouseY, 50, 300)


    //multiple sample version 

    image(pixelRegion, width * 0.1, height * 0.1, 400, 50) //(x, y, w, h)
    image(pixelRegion, width * 0.25, height * 0.2, 200, 350) 
    image(pixelRegion, width * 0.4, height * 0.5, 300, 300) 
    image(pixelRegion, width * 0.5, height * 0.4, 500, 200) 
    image(pixelRegion, random(width * 0.85, height * 0.15), random(width * 0.85, height * 0.15), random(10, 100), random(100, 10))

    image(pixelRegion, mouseX, mouseY, 150, 150)

    //resize image to fit width proportionally
    pic.resize(width, 0);



    //corner
    // image(pixelRegion, width * 0.7, height * 0.65, 300, 50) //(x, y, w, h)
    // image(pixelRegion, width * 0.7, height * 0.65, 50, 300) 

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
