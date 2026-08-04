console.log("page loaded...");

function over(element){
    element.play();
}

function out(element){
    element.pause();
    if(element.paused())
        element.play();

}