var position = document.getElementById('plate').style.left;
var apple;
var applePosition = 50;
var win;
var winCounter=0;
var loseCounter=0;
var level=0;
var inter;


position='550px'
document.addEventListener("keydown", function(event) {
    console.log(`Key pressed: ${event.key}`);
    if(event.key=='ArrowRight'&& parseInt(position)<1110){
        
        position = parseInt(position)+(10+level*3)+'px';
        document.getElementById('plate').style.left=position;

    }
    if(event.key=='ArrowLeft'&& parseInt(position)>0){
        
        position = parseInt(position)-10+'px';
        document.getElementById('plate').style.left=position;

    }
  });


function reset(){
    document.getElementById('game-over').style.display='none';
    document.getElementById('lose').innerHTML='missed:'+0;
    document.getElementById('winner').style.display='none';
    document.getElementById('counter').innerHTML='score:'+0;
    loseCounter=0;
    winCounter=0;
    applePosition = 50; 
    document.getElementById('start').disabled = true;
}

 



function start(){
    reset();
if(applePosition < 550){
    createApple()
}
var randNum;


  function createApple(){
      randNum= Math.random() * 1140;
      apple = document.createElement('img');
      apple.src='apple.png';
      apple.style = ' width: 60px; height: 60px; position: absolute;';
      apple.style.left= randNum + 'px';
      document.getElementById('play-area').appendChild(apple);
      
      //////////////////////////////////////
      apple.style.top='50px';   
        inter = setInterval(function moveApple(){
                apple.style.top= parseInt(apple.style.top)+(1+level)+'px';      ////////////////////////////////////
                applePosition=parseInt(apple.style.top);

                if(parseInt(apple.style.top)>=510){

                        if(randNum>(parseInt(position)-60) && randNum < (parseInt(position)+100)){
                            winCounter++
                            document.getElementById('counter').innerHTML='score:'+winCounter;
                            if(winCounter==10){
                                clearInterval(inter);
                                apple.style.display='none';
                                document.getElementById('winner').style.display='block';
                                applePosition = 50; 
                                document.getElementById('start').disabled = false;
                                level++;     //////////////////////////////////////////////////////
                                let showLevel = level+1;
                                document.getElementById('next-level').innerHTML= 'level:'+showLevel;
                                document.getElementById('level').innerHTML='level:'+showLevel;
                                return false;}
                        }
                        else{
                            loseCounter++
                            document.getElementById('lose').innerHTML='missed:'+loseCounter;
                            if(loseCounter==3){
                                clearInterval(inter);
                                apple.style.display='none';
                                document.getElementById('game-over').style.display='block';
                                applePosition = 50; 
                                document.getElementById('start').disabled = false;
                                return false;}
                        }
                apple.style.display='none';
                clearInterval(inter);
                applePosition = 50; 
                createApple();
            
            }
      },10);

  }
}
function stop(){
    clearInterval(inter);
    apple.style.display='none';
    document.getElementById('start').disabled = false;
    document.getElementById('level').innerHTML='level:1';
    document.getElementById('counter').innerHTML='score:0';
    document.getElementById('lose').innerHTML='missed:0';
    level=0;                ///////////////////////////////////////////////
}