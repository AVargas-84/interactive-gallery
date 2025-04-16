const img = document.getElementById('centralImage');
const imgText = document.getElementById('centralText');

function upDate (previewPic){
    imgText.innerHTML = previewPic.alt;
    img.style.justifyContent = 'center';
    img.style.alignItems = 'flex-start';
    img.style.backgroundImage = "url('" + previewPic.src + "')";
    img.style.color = "black";   
};

function unDo (){
    imgText.innerHTML = "Hover over an image to see Vegeta´s transformations &#128170;";
    img.style.backgroundImage = "url('')";
    img.style.color = "white";
    img.style.alignItems = 'center';
};

const allImages = document.querySelectorAll('.preview');

function addTabIndex (){
    for (let i=0; i<allImages.length; i++){
        allImages[i].setAttribute('tabindex', 0);
    }
};
