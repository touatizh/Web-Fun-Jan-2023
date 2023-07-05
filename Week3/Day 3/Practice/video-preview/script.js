console.log("page loaded...");

function playOnMouseOver(element) {
    element.play();
    element.muted = true;
}

function pauseOnMouseOut(elemnt) {
    elemnt.pause();
}