//photo array
let photos = ["portfolio-photos/50da1426fc747415a57321c7b929643d.jpeg"]
//Document Selectors
let service_img = document.querySelectorAll('.service-image');
let service_tiles = document.querySelectorAll('.service-tiles');
let portfolio_images = document.querySelectorAll('.portfolio-image')
//
service_img.forEach((image) => {
    if (image.textContent.toLowerCase() === "e"){
        image.style.backgroundColor = "orange";
    }
    else if (image.textContent.toLowerCase() === "p"){
        image.style.backgroundColor = "red";
    }})


//Function that generates the photos in order from the photo array.
for (let i = 0; i < portfolio_images.length; i++){
    for (let j = 0; j < photos.length; j++){
        portfolio_images[i].style.backgroundImage = "url(" + photos[i] + ")";
    }
}
