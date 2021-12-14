// let capture = null
// let posenet = null
// let noseX = null;
// let noseY = null;
// function setup(){
//     createCanvas(1000,1000);   //Canvas Size
//     capture = createCapture(VIDEO)
//     capture.hide()
//     console.log('ml5 version:', ml5.version);
//     posenet = ml5.poseNet(capture,modelLoaded);
//     posenet.on('pose',receivedPoses)
// }

// function receivedPoses(poses){
//  console.log(poses)
//  if(poses.length>0){
//      singlePose = poses[0];
//      noseX = singlePose.pose.nose.x
//      noseY = singlePose.pose.nose.y
//  }
// }
// function modelLoaded(){
//     console.log('Model Loaded...!!')
// }


// function draw(){      //Canvas Background Color
//  fill(255)
//  image(capture,0,0,800,600)
//  ellipse(noseX,noseY,30)
// }

let capture;
let posenet;
let noseX,noseY;
let reyeX,reyeY;
let leyeX,leyeY;
let singlePose,skeleton;
let actor_img;
let specs,smoke;

function setup() {
    createCanvas(800, 500);
    capture = createCapture(VIDEO)
    capture.hide();
    posenet = ml5.poseNet(capture, modelLoaded);
    posenet.on('pose',receivedPoses);

}

function receivedPoses(poses){
    console.log(poses);

    if(poses.length > 0){
        singlePose = poses[0].pose;
        skeleton = poses[0].skeleton;
    }
}

function modelLoaded() {
    console.log('Model has loaded');
}

function draw() {

    // images and videos(webcam)
    image(capture, 0, 0);
    fill(255,0,0);

    if(singlePose){
        for(let i=0; i<singlePose.keypoints.length; i++){
            ellipse(singlePose.keypoints[i].position.x, singlePose.keypoints[i].position.y,20);
        }
        stroke(255,255,255);
        strokeWeight(5);
        for(let j=0; j<skeleton.length; j++){
            line(skeleton[j][0].position.x, skeleton[j][0].position.y, skeleton[j][1].position.x, skeleton[j][1].position.y)
        }

        //image(specs,singlePose.nose.x-35,singlePose.nose.y-50,80,80);
        //image(smoke,singlePose.nose.x-35,singlePose.nose.y+10,40,40);

        
    }

    

}