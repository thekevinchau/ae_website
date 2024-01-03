
//Function that sets the background colors of each service conditionally.
function setServiceColor() {
    let service_img = document.querySelectorAll('.service-image');
    service_img.forEach((image) => {
        if (image.textContent.toLowerCase() === "e"){
            image.style.backgroundColor = "orange";
        }
        else if (image.textContent.toLowerCase() === "p"){
            image.style.backgroundColor = "red";
        }})
}


//Function that generates the photos in order from the photo array.
function setImages() {
    let photos = [
        "portfolio-photos/50da1426fc747415a57321c7b929643d.jpeg", 
        "portfolio-photos/8687fe95e58647c5fbea18566b2d564a.jpeg", 
        "portfolio-photos/017dfa9c6553b51df5e660a7369eecd6.jpeg",
        "portfolio-photos/1f0045823120765eb11e56ff989e9a59.jpeg"]

    let portfolio_images = document.querySelectorAll('.portfolio-image')

    for (let i = 0; i < portfolio_images.length; i++){
        for (let j = 0; j < photos.length; j++){
            portfolio_images[i].style.backgroundImage = "url(" + photos[i] + ")";
        }
    }
}


function main(){
    setImages();
    setServiceColor();
}

main();

