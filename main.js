function preload(){

}
function setup() {

    video=createCapture(VIDEO);
    video.size(550, 500);
    canvas=createCanvas(550, 500);
    canvas.position(560, 100);
    Posenet=ml5.poseNet(video, modelLoaded);
    Posenet.on("pose", gotPoses);
}
function draw() {
    background("#d0ff00")
}
function modelLoaded() {
    console.log("The model has been intiliased. Thank you for your patience :)")
}
function gotPoses(results) {
    if (results.length>0){
        console.log(results);
    }
}