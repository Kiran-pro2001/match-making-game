function makeBubble()
{
    var clutter = " ";

    for(var i=1; i<=85; i++){
    
        var rn = Math.floor(Math.random()*10)

       clutter += `<div class="bubble">${rn}</div>`;
       document.querySelector("#pbtm").innerHTML=clutter;
    }
}



var timer = 60;
var timerint;
function runTimer()
{
    timerint = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerval").textContent = timer; 
        }
        else{
            score -= 10;
            clearInterval(timerint)
            document.querySelector("#pbtm").innerHTML = '<h1>Game Over</h1> <p style="margin-top: 20px; background-color: #40A578; padding: 20px; border-radius: 20px; color: white;">Your Score is ' + score + '</p>';
        }

    },1000);
}




var hitrn = 0;
function getNewHit()
{
    hitrn  = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent= hitrn;
}




var score = 0;
function increaseScore()
{
    document.querySelector("#scoreval").textContent= score;
    score += 10;
}






document.querySelector("#pbtm").addEventListener("click",function(dets){
    // alert("chal raha hai")
    var clickednum = (Number(dets.target.textContent));
    if(clickednum === hitrn){
        increaseScore();
        makeBubble()
        getNewHit()
    }
    else{
        score -= 10;
        // alert("You Lost")
        document.querySelector("#pbtm").innerHTML = '<h1>Game Over</h1> <p style="margin-top: 20px; background-color: #40A578; padding: 20px; border-radius: 20px; color: white;">Your Score is '+ score + '</p>';
        clearInterval(timerint)
        document.querySelector("#timerval").textContent = 0;
    }

})




makeBubble()
runTimer()
getNewHit()
increaseScore()