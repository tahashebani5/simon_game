var arrey = [];
var arrey1 = [];
var level = 1;
var start1 = 1;

    

$(".btn").click(function(){
    var buttonName = this.classList[1];
    if (start1 > 1) {
    check(buttonName);
    Animetion(buttonName);
    arrey1.push(buttonName);

            for (let i = 0; i < arrey1.length; i++) {
        if (arrey1[i] === arrey[i]) { 
            if (arrey1.length === arrey.length ) {
            level = level + 1;
            setTimeout(function(){ $("h1").text("level "+level);},400)
           
            arrey1 = [];
            start();
        }  
        } else {
            $("h1").text("Game over press Any key to Restart  ");
            gameOver();
            level = 1;
            arrey1 = [];
            arrey = [];
            start1 = 1;
        }
      
    }
} 
});
$(Document).keypress(function(){
    $("h1").text("level "+level);
    if (start1 === 1) {
       var name =  start();
        start1++;  
    }
    

});







function start(){
    var n = Math.floor(Math.random()*4);
    var name = document.querySelectorAll(".btn")[n].classList[1];
    arrey.push(name);
    setTimeout(function(){  
        check(name);
        Animetion(name);
        
    },600)
    return name;
}


function check(buttonName){
    switch (buttonName) {
        case "blue":
            var blue = new Audio('./sounds/blue.mp3');
            blue.play();
            break;
        case "red":
            var red = new Audio('./sounds/red.mp3');
            red.play();
            break;

        case "green":
            var green = new Audio('./sounds/green.mp3');
            green.play();
            break;

        case "yellow":
            var yellow = new Audio('./sounds/yellow.mp3');
            yellow.play();
            break;
    
        default:
            break;
    }
}
function Animetion(currentKey){
    var activeButton = document.querySelector("."+ currentKey);
    activeButton.classList.add("pressed");

    setTimeout( function(){activeButton.classList.remove("pressed");},90);
}
function gameOver(){
    $("body").addClass("game-over");
    var wrong = new Audio("./sounds/wrong.mp3");
    wrong.play();
    setTimeout(function(){$("body").removeClass("game-over");},300);
}