//console.log("it working!");

//p5 code

let uploadedImage;


function setup(){

    createCanvas(windowWidth, windowHeight); //want to resize image to fit the canvas

    let fileInput = createFileInput(handleFile);
    fileInput.id('input-file'); // Give it an ID to connect with the label tag in html (GEMINI)
    fileInput.hide(); // Hide the default browser button (GEMINI)

}

function draw() {

 // Only run the code if an image has been successfully uploaded
  if (uploadedImage) {
    
    // making the image fill the width while remaining proportional (GEMINI)
    // The formula is: newHeight = (originalHeight / originalWidth) * newWidth
    let newHeight = (uploadedImage.height / uploadedImage.width) * width;
    
    // --- 2. Draw the image as the background ---
    // The image will now fit the canvas width perfectly and be scaled proportionally.
    image(uploadedImage, 0, 0, width, newHeight);
    
    let pixelRegion = uploadedImage.get(mouseX, mouseY, 800, 800);

    image(pixelRegion, width * 0.1, newHeight * 0.1, 400, 50);
    image(pixelRegion, width * 0.25, newHeight * 0.2, 200, 350);
    image(pixelRegion, width * 0.4, newHeight * 0.5, 300, 300);
    image(pixelRegion, width * 0.5, newHeight * 0.4, 500, 200);
    image(pixelRegion, random(width * 0.85, newHeight * 0.15), random(width * 0.85, newHeight * 0.15), random(10, 100), random(100, 10));
    image(pixelRegion, mouseX, mouseY, 150, 150);
  }


}

function handleFile(file) {
  // Check if the file is an image (P5 ref)
  if (file.type === 'image') {
    // loadImage() is asynchronous, so we use a callback
    // to ensure the image is loaded before we try to use it.
    loadImage(file.data, (img) => {
      uploadedImage = img;
    });
  } else {
    // If the file is not an image, clear the variable
    uploadedImage = null;
    console.log('Not an image file!');
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}