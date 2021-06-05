var canvas = document.getElementById("CarRacingGame");
var ctx = canvas.getContext("2d");
var car_1_height = 100;
var car_1_width = 150;
var car_1_img = "tunedsupra2.jpg";
//var car_1_img = "wheel_supra.png";
var car_1_x = 100;
var car_1_y = 100;
var car_2_height = 100;
var car_2_width = 150;
var car_2_img = "silviaS16.jpg";
var car_2_x = 200;
var car_2_y = 100;
var background_1 = "somethingy.gif";
var background_2 = "goszilla gtr >=).jpeg";
window.onload = add();
window.addEventListener("keydown", handleKeyEvents);

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_2;

    car_1imgTag = new Image();
    car_1imgTag.onload = uploadCar1();
    car_1imgTag.src = car_1_img;

    car_2imgTag = new Image();      
    car_2imgTag.onload = uploadCar2;
    car_2imgTag.src = car_2_img;
}
function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}
function uploadCar1() {
    console.log('in uploadCar1');
    console.log(car_1_x + "this is car 1 x");
    console.log(car_1_y + "this is car 1 y");
    ctx.drawImage(car_1imgTag, car_1_x, car_1_y, car_1_width, car_1_height);
}
function uploadCar2() {
    console.log('in uploadCar2');
    console.log(car_2_x + "this is car 2 y");
    ctx.drawImage(car_2imgTag, car_2_y, car_2_x, car_2_width, car_2_height);
}
function handleKeyEvents(e){
    var pressedKeyCode = e.keyCode;
    var pressedCode = e.code;
    console.log('pressedKeyCode: ' + pressedKeyCode);
    console.log('pressedCode: ' + pressedCode);
    if(pressedKeyCode == '38'){
        car1up();
        console.log("up arrow pressed");
    }
    if(pressedKeyCode == '40'){
        car_1down();
        console.log("down arrow pressed");
    }
    if(pressedKeyCode == '37'){
        car_1left();
        console.log("left arrow pressed");
    }
    if(pressedKeyCode == '39'){
        car_1right();
        console.log("right arrow pressed");
    }
    if(pressedKeyCode == '87'){
        car_2up();
        console.log("w key pressed");
    }
    if(pressedKeyCode == '65'){
        car_2left();
        console.log("a key pressed");
    }
    if(pressedKeyCode == '83'){
        car_2down();
        console.log("s key pressed");
    }
    if(pressedKeyCode == '68'){
        car_2right();
        console.log("d key pressed");
        /*if(car_2_x > 500){
            console.log("car 2 won");
            document.getElementById("game_status").innerHTML = "car 2 won";
        }*/
    }
    if(car_2_x > 500){
        console.log("car 2 won");
        document.getElementById("game_status").innerHTML = "car 2 won";
    }
    if(car_1_x > 500){
        console.log("car 1 won");
        document.getElementById("game_status").innerHTML = "car 1 won";
    }
    /*else if(car_2_x > 500){
        console.log("car 2 won");
        document.getElementById("game_status").innerHTML = "car 2 won";
    }*/
}

function car1up(){
    if(car_1_y >= 0){
        console.log("up: " + car_1_y);
        car_1_y = car_1_y - 100;
        uploadBackground();
        uploadCar1();
        uploadCar2();
    } 
}

function car_1down(){
     if(car_1_y <=600){
        console.log("down" + car_1_y);
        car_1_y = car_1_y + 100;
        uploadBackground();
        uploadCar1();
        uploadCar2();
    } 
}

function car_1left(){
    if(car_1_x >= 0){
        console.log("left" + car_1_x);
        car_1_x = car_1_x - 100;
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}


function car_1right(){
    if(car_1_x <=800){
        console.log("right" + car_1_x);
        car_1_x = car_1_x + 100;
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}
function car_2up(){
    if(car_2_x >= 0){
        console.log("up2: " + car_2_x);
        car_2_x = car_2_x - 100;
        uploadBackground();
        uploadCar1();
        uploadCar2();
    } 
}

function car_2down(){
     if(car_2_x <=600){
        console.log("down2" + car_2_x);
        car_2_x = car_2_x + 100;
        uploadBackground();
        uploadCar1();
        uploadCar2();
    } 
}

function car_2left(){
    if(car_2_y >= 0){
        console.log("left2" + car_2_y);
        car_2_y = car_2_y - 100;
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}


function car_2right(){
    if(car_2_y <=800){
        console.log("right2" + car_2_y);
        car_2_y = car_2_y + 100;
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}