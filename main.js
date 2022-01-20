noseX=0
noseY=0

function preload(){
    mustashe=loadImage("https://i.postimg.cc/3x3QzSGq/m.png")
}
function setup(){
    canvas= createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
video.size(300,300);
video.hide();


poseNet=ml5.poseNet(video, Modelloaded);
poseNet.on('pose',gotPoses);

}



function take_snapshot(){
    save('myFilterImage.png');
}
function Modelloaded(){
    console.log("Posenet is loaded")
}


function draw(){
    image(video, 0, 0, 300, 300)
    image(mustashe, noseX-25, noseY, 50, 30)
}
  
    function gotPoses(results)
    {
        if(results.length > 0){
            console.log(results);
            noseX=results[0].pose.nose.x;
            noseY=results[0].pose.nose.y;
            console.log("nose x = " + results[0].pose.nose.x);
            console.log("nose y = " + results[0].pose.nose.y);
        }
    }