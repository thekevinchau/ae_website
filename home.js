let service_img = document.querySelectorAll('.service-image');

service_img.forEach((image) => {
    if (image.textContent.toLowerCase() === "e"){
        image.style.backgroundColor = "orange";
    }
    else if (image.textContent.toLowerCase() === "p"){
        image.style.backgroundColor = "red";
    }})
console.log(service_img);