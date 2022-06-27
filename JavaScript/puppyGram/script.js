function uploadPup(element) {
    console.log("Pupper uploaded", element)
    //changes the text once button is pressed
    element.innerText = "Uploaded, Thanks!";
}

function removeElement(element) {
    console.log("attempting to remove...")
    element.remove();
}

function playVideo(element){
    element.play();
}

function pauseVideo(element){
    element.pause();
}

function changeImg(element) {
    element.src = "./resources/anothaPuppy.jpeg"
}

function cookieMonster() {
    var  element = document.querySelector("#cookie-box");
    element.remove();

}