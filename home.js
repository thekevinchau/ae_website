
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
        "portfolio-photos/1f0045823120765eb11e56ff989e9a59.jpeg",
        "portfolio-photos/bc6c999cdc4611fce76960bb90c8d606.jpeg",
        "portfolio-photos/f92ededbcdc4fe32ea1e3dfdbd0bbb32.jpeg",
        "portfolio-photos/IMG_0923.jpeg",
        "portfolio-photos/IMG_2181.jpeg",
        "portfolio-photos/IMG_1962.jpeg"
    ];


    let portfolio_container = document.querySelector('.portfolio-cards')

    for (let k = 0; k < photos.length; k++){
        let photo_card = document.createElement('div');
        let photo = document.createElement('div');
        photo_card.className = "portfolio-card";
        photo.className = "portfolio-image"
        photo_card.appendChild(photo);
        portfolio_container.appendChild(photo_card);
    }
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

