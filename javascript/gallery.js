let imgs = document.querySelectorAll(".image img");
let slidesIndex = 0;
//console.log(imgs);

let btnNext = document.querySelector(".right-arrow");
let btnPrev = document.querySelector(".left-arrow");
//let centerImage0 = document.getElementById("focused-image");
let centerImage = document.querySelector("#focused-image img");
let imageHeader = document.getElementById("image-header");
//console.log(centerImage);

// let imageHeader = document.getElementsByTagName('h2');
// console.log(imageHeader);

btnNext.addEventListener("click", showNextImage );
btnPrev.addEventListener("click", showPrevImage );

function loadImage(){
    if(slidesIndex === -1  || slidesIndex===undefined){
        slidesIndex = imgs.length-1;
    }
    if(slidesIndex===imgs.length){
        slidesIndex = 0;
    }
    
    imageHeader.innerHTML = imgs[slidesIndex].alt;
    centerImage.src = imgs[slidesIndex].src;
}

function showNextImage() {
    slidesIndex++;
    //console.log(slidesIndex);
    //console.log(centerImage);
    loadImage();
}

function showPrevImage() {
    slidesIndex--;
    //console.log(slidesIndex);
    //console.log(centerImage);
    loadImage();
}

for (let i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener("click", function() {
        // console.log("you clicked picture number " + i);
        slidesIndex = i;
        imageHeader.innerHTML = imgs[slidesIndex].alt;
        centerImage.src=imgs[slidesIndex].src;
    });
}

//setInterval(showNextImage, 3000);