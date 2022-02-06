leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
function setup(){

    video = createCapture(VIDEO)
    video.position(350,150)
    

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}

function modelLoaded() {
    console.log('PoseNet is Initialized')
}
function preload(){
    song = loadSound("music.mp3")
}
function draw(){
    image(video,0,0,600,500);
    fill("#00008b")
    stroke("#00008b")

    if(scoreLeftWrist > 0.2)
    {
    circle(leftWristX, leftWristY, 20)
    InNumberleftWristY = Number(leftWristY)
    remove_decimals = floor(InNumberleftWristY);
    }
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("scoreLeftWrist = " + scoreLeftWrist);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristx = "+ leftWristX+ " leftWristY = " + leftWristY);
        rightWristX = results[0].pose.rightWrist.x;
        rightristY = results[0].pose.rightWrist.y;
        console.log("rightWristx = "+ rightWristX+ " rightWristY = " + rightWristY);
    }
}

