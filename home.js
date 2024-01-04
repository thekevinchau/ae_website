
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

function serviceHelper(array){
    let ul = document.createElement('ul');
    for (let i = 0; i < array.length; i++){
        let li = document.createElement('li');
        li.textContent = array[i];
        ul.appendChild(li);
        console.log(ul);
    }
    return ul;
}

function setServiceDetails(){
    const mechanical_systems = [
        'Heating',
        'Ventilation',
        'Air Conditioning',
        'Boiler Systems',
        'Chilling Systems',
        'Pumps',
        'Energy Management',
        'Building Automation'
      ];
    const electrical_systems = [
        'Power Distribution',
        'Lighting Control',
        'Fire Alarm Systems',
        'Telecommunication',
        'Security Systems',
        'Emergency Generator',
        'Uninterruptible Power Supply',
        'Short Circuit, Coordination',
        'Arc Flash'
      ];
    const plumbing_systems = [
        'Building Plumbing',
        'Domestic Water System',
        'Sanitary System',
        'Storm Water System',
        'Sprinkler Layout',
        'Sewage Pumps',
        'Water Purification',
        'Natural Gas System',
        'Grease Traps'
      ];

    let serviceCards = document.querySelectorAll('.service-tile');

    serviceCards.forEach((card) => {
        if (card.id === "tile-1"){
            let ul = serviceHelper(mechanical_systems);
            card.appendChild(ul);
        }
        else if (card.id === "tile-2"){
            let ul = serviceHelper(electrical_systems);
           card.appendChild(ul);
        }
        else{
            let ul = serviceHelper(plumbing_systems);
            card.appendChild(ul);
        }
    })
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
    setServiceDetails();

}

main();

