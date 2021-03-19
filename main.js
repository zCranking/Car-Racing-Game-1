canvas = document.getElementById("myCanvas");
ctx = canvas.getContext ("2d");
car_width = 160;
car_height = 140;
background_image = "racing_track.jpeg";
car1_image = "car1.png";
car2_image = "car 2.png";
car1_x = 10;
car1_y = 10;
car2_x = 10;
car2_y = 150;
function add(){
    background_drawing = new Image();
    background_drawing.onload = backgroundrawer;
    background_drawing.src = background_image;

    car1_drawing = new Image();
    car1_drawing.onload = car1drawer;
    car1_drawing.src = car1_image; 

    car2_drawing = new Image();
    car2_drawing.onload = car2drawer;
    car2_drawing.src = car2_image;
};

function car1drawer(){
    ctx.drawImage(car1_drawing, car1_x, car1_y, car_width, car_height);
    console.log("car1drawer");
};
function car2drawer(){
    ctx.drawImage(car2_drawing, car2_x, car2_y, car_width, car_height);
    console.log("car2drawer");
};
function backgroundrawer() {
    ctx.drawImage(background_drawing, 0, 0, canvas.width, canvas.height);
    console.log("backgroundrawer");
};

window.addEventListener("keydown1", myKeydown1);
function myKeydown1(e) {
    keystroke1 = e.keyCode;
    console.log(keystroke1);
    if(keystroke1 == '40'){
        down1();
        console.log("Down");
    };
    if(keystroke1 == '38'){
        up1();
        console.log("Up");
    };
    if(keystroke1 == '39'){
        right1();
        console.log("Right");
    };
    if(keystroke1 == '37'){
        left1();
        console.log("Left");
    };
};
function down1(){
    if(car1_y <= 700){
        car1_y = car1_y + 10;
        console.log("Down Arrow Key x=" + car1_x + " y= " + car1_y);
        backgroundrawer();
        car1drawer();           
    }; 
};
function up1(){
    if(car1_y >= 0){
        car1_y = car1_y - 10;
        console.log("Up Arrow Key x=" + car1_x + "   y= " + car1_y);
        backgroundrawer();
        car1drawer();
    };
};
function right1(){
    if(car1_x <=840){
        car1_x = car1_x + 10;
        console.log("Right Arrow Key x=" + car1_x + " y= " + car1_y);
        backgroundrawer();
        car1drawer();
    };
};
function left1(){
    if(car1_x >=0){
        car1_x = car1_x - 10;
        console.log("Left Arrow Key x=" + car1_x + " y= " + car1_y);
        backgroundrawer();
        car1drawer();
    };
};