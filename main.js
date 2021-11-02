x=0;
y=0;
drawcircle="";
drawrectangle="";
function setup(){
    Canvas=createCanvas(900,600);
}

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start(){
    document.getElementById("status").innerHtml = "System is listening please speak";
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    document.getElementById("status").innerHTML="The speech has been recognized as : " + content;
    if (content=="Circle."){
        x=Math.floor(Math.random() * 900);
        y=Math.floor(Math.random() * 600);
        drawcircle="set";
    }
    if (content=="Rectangle."){
        x=Math.floor(Math.random() * 900);
        y=Math.floor(Math.random() * 600);
        drawrectangle="set";
    }

}
function draw(){
    if (drawcircle=="set"){
        radius=Math.floor(Math.random() * 100);
        circle(x,y,radius);
        document.getElementById("status").innerHTML="circle is drawn";
        drawcircle="";
    }
    if (drawrectangle=="set"){
        rect(x,y,70,50);
        document.getElementById("status").innerHTML="rectangle is drawn";
        drawrectangle="";
    }
}