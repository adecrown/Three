
var x;
var y;
var gh = 0;
var id;
var buXy;
var buYx;
var position1 = "occupied";var position2 = "occupied";var position3 = "occupied";var position4 = "free";var position5 = "free";var position6 = "free";var position7 = "occupied";var position8 = "occupied";var position9 = "occupied";
var whereFrom;
var isThereAWinner = "no";
var turnerTimer = setInterval(changePlayer, 15000);//15 seconds
var opponent = "computer";
var nextPlayer;
var snapS = Snap("#threesvg");

//console.log(x);
function showCoords(event) {
  x = event.clientX;
  y = event.clientY;
  var coor = "X coords: " + x + ", Y coords: " + y;
  //console.log(x); //document.getElementById("demo").innerHTML = coor;
}


document.getElementById("btnResetr").addEventListener("click", resetr);


var player = ["svg_5","svg_6","svg_7"];
var player1 =["svg_5","svg_6","svg_7"];
var player2 =["svg_9","svg_10","svg_8"];

function checkId(id,val)
{

  if(id == "svg_12")
  {
    position1 = val;
  }
  else if (id == "svg_15")
  {
    position2 = val;
  }
  else if (id == "svg_14")
  {
    position3 = val;
  }
  else if (id == "svg_13")
  {
    position8 = val;
  }
  else if (id == "svg_16")
  {
    position5 = val;
  }
  else if (id == "svg_17")
  {
    position4 = val;
  }
  else if (id == "svg_18")
  {
    position7 = val;
  }
  else if (id == "svg_19")
  {
    position6 = val;
  }
  else if (id == "svg_20")
  {
    position9 = val;
  }
  else {
    console.log("mn");
  }
}


function checkFreeId(id)
{

  if(id == "svg_12")
  {
    return position1;
  }
  else if (id == "svg_15")
  {
    return position2;
  }
  else if (id == "svg_14")
  {
    return position3;
  }
  else if (id == "svg_13")
  {
    return  position8;
  }
  else if (id == "svg_16")
  {
    return  position5;
  }
  else if (id == "svg_17")
  {
    return position4;
  }
  else if (id == "svg_18")
  {
    return position7;
  }
  else if (id == "svg_19")
  {
    return  position6;
  }
  else if (id == "svg_20")
  {
    return position9;
  }
  else {
    console.log("mn");
  }
}


function myParent(cx,cy)
{
  var id;
  cx = parseInt(cx);
  cy = parseInt(cy);
  //  console.log("x: "+cx);
  //console.log("y: "+cy);
  if (cy >= 40 && cy < 70 && cx <= 75)
  {
    id = "svg_12";
    getxY(id);
    whereFrom = "position 1";
    console.log("Left position 1");
  }
  else if(cy >= 40 && cy < 100 && cx <= 410)
  {
    id = "svg_15";
    getxY(id);
    whereFrom = "position 2";
    console.log("Left position 2");
  }
  else if (cy >= 40 && cy < 100 && cx <= 750 && cx >= 700)
  {
    id = "svg_14";
    getxY(id);
    whereFrom = "position 3";
    console.log("Left position 3");
  }
  else if (cy >= 530 && cy < 600 && cx <= 750 && cx >=700)
  {
    id = "svg_20";
    getxY(id);
    whereFrom = "position 9";
    console.log("Left position 9");
  }
  else if (cy >= 258 && cy < 350 && cx <= 100)
  {
    id = "svg_17";
    getxY(id);
    whereFrom = "position 4";
    console.log("Left position 4");
  }
  else if (cy >= 500 && cy < 600 && cx <= 420 && cx >=390)
  {
    id = "svg_13";
    getxY(id);
    whereFrom = "position 8";
    console.log("Left position 8");
  }
  else if (cy >= 280 && cy < 350 && cx <= 450 )
  {
    id = "svg_16";
    getxY(id);
    whereFrom = "position 5";
    console.log("Left position 5");
  }
  else if (cy >= 535 && cy < 600 && cx <= 60)
  {
    id = "svg_18";
    getxY(id);
    whereFrom = "position 7";
    console.log("Left position 7");
  }
  else if (cy >= 300 && cy < 350 && cx <= 760)
  {
    id = "svg_19";
    getxY(id);
    whereFrom = "position 6";
    console.log("Left position 6");
  }
  else
  {
    id = "non";
  }
  return id;
}

function isFree(ballId,parentId,lcx,lcy)
{
  var recta = document.getElementsByTagName("rect");
  var buttonsCount = recta.length;
  for (var i = 0; i <= buttonsCount; i += 1) {
    recta[i].onclick = function(e) {
      console.log(this.id);

      movingTo(this.id,ballId,parentId,e);


    };
  }
}

function movingTo(id,ballId,parentId,e)
{
  var weFree = checkFreeId(id);
  var bunx= document.getElementById(id).getAttribute('x');
  var buny= document.getElementById(id).getAttribute('y');
  var distance = parseInt(lineDistance(buXy,buYx,bunx,buny));
  console.log(distance);
  var turner = whoSTurn(ballId);
  if(turner == "Your turn")
  {
    if(distance <= 415 || distance == 423 || distance == 425)
    {
      if(weFree == "free")
      {
        console.log(bunx,buny);
        console.log("aca: "+e.pageX,e.pageY);
        //  var bodyOffsets = document.body.getBoundingClientRect();
        //tempX = e.pageX - bodyOffsets.left;
        //document.getElementById(ballId).setAttribute('cy',e.pageY);
        //document.getElementById(ballId).setAttribute('cx', e.pageX -300);
        svgAnimate(ballId,parseInt(bunx)+50,parseInt(buny)+35);
        document.getElementById(ballId).setAttribute('cy',parseInt(buny)+35);
        document.getElementById(ballId).setAttribute('cx', parseInt(bunx)+50);
        checkId(id,"occupied");
        console.log("I think: "+parentId);
        checkId(parentId,"free");
        //var player = ["svg_5","svg_6","svg_7"];
        whoWon(player[0],player[1],player[2]);
        if(isThereAWinner == "yes")
        {
          document.getElementById('winner').innerHTML=nextPlayer+" is the winner";
          clearInterval(turnerTimer);
          console.log("We have a winner");
        }
        else {
          isThereAWinner == "no";
          changePlayer();
          clearInterval(turnerTimer);
          turnerTimer = setInterval(changePlayer, 15000);//15 seconds
        }
      }
      else {
        console.log("not free");
        document.getElementById('svgAlert').innerHTML = "The position is not free";
      }
    }
    else {
      console.log("can't skip");
      document.getElementById('svgAlert').innerHTML = "You can't Skip";
    }
  }
  else {
    document.getElementById('svgAlert').innerHTML = "Not yet your turn";
    console.log("Not yet your turn");
  }
}

function lineDistance(point1X,point1Y,point2X,point2Y)
{
  var xs = 0;
  var ys = 0;

  xs = point2X - point1X;
  xs = xs * xs;

  ys = point2Y - point1Y;
  ys = ys * ys;

  return Math.sqrt( xs + ys );
}

function whoSTurn(id)
{

  if (player.indexOf(id) != -1)
  {

    return "Your turn";

  }
  else {
    return "Not your turn";
    //  changePlayer()
  }
}

function changePlayer()
{
  var hn = ["svg_5","svg_6","svg_7"];
  document.getElementById('svgAlert').innerHTML = "............";
  if(player.toString() == hn.toString())
  {
    player = ["svg_8","svg_9","svg_10"];
    console.log("Player 2's turn: "+player);
    document.getElementById("svgTurn").innerHTML="Player 2's turn";
    document.getElementById("svgTurn").style.color = "#23c423";
    nextPlayer = "player 2";
  }
  else
  {
    player = hn;
    //changeOpponent();
    setTimeout(changeOpponent, 3000);
    console.log("Player 1's turn: "+player);
    if(opponent == "computer")
    {
      document.getElementById("svgTurn").innerHTML="Computer's turn";
      nextPlayer = "computer";
    }
    else
    {
      document.getElementById("svgTurn").innerHTML="Player 1's turn";
      nextPlayer = "player 1";
    }
    document.getElementById("svgTurn").style.color = "#d67820";
  }

}

function changeOpponent()
{
  if(opponent == "computer")
  {
    startComputer();
  }

}

function getxY(id)
{
  buXy= document.getElementById(id).getAttribute('x');
  buYx= document.getElementById(id).getAttribute('y');
}

changePlayer();
var buttons = document.getElementsByTagName("ellipse");
var buttonsCount = buttons.length;
for (var i = 0; i <= buttonsCount; i += 1) {
  buttons[i].onclick = function(e) {
    console.log("aca: "+e.pageX,e.pageY);
    //var hn = ["svg_5","svg_6","svg_7"];
    if(opponent == "computer" && this.id == "svg_5"||opponent == "computer" && this.id == "svg_6"||opponent == "computer" && this.id == "svg_7")
    {
      console.log("you are not computer");
    }
    else {
      buttonClicked(this.id);
    }

  };
};


function buttonClicked(id)
{
  console.log(this.id);
  var bunx= document.getElementById(id).getAttribute('cx');
  var buny= document.getElementById(id).getAttribute('cy');
  console.log(buny,bunx);
  var parent = myParent(bunx,buny);
  isFree(id,parent,bunx,buny);
}


function whoWon(btn1,btn2,btn3)
{
  var playerBtn = [btn1,btn2,btn3];
  //var pl = ["svg_5","svg_6","svg_7"];
  //var player2 =["svg_9","svg_10","svg_8"];
  /*if(nextPlayer == "player 2")
  {
  playerBtn = ["svg_8","svg_9","svg_10"]
}
else {
playerBtn = ["svg_5","svg_6","svg_7"]
}*/

console.log("playerBtn: "+playerBtn);
var button1;var button2;var button3;
var bunx;
var buny;
var index;
for (index = 0; index < playerBtn.length; ++index) {
  //  console.log(a[index]);
  bunx = document.getElementById(playerBtn[index]).getAttribute('cx');
  buny = document.getElementById(playerBtn[index]).getAttribute('cy');
  if(index == 0)
  {
    button1 =(parseInt(bunx) + parseInt(buny)) ;
  }
  else if (index == 1) {
    button2 =(parseInt(bunx) + parseInt(buny)) ;
  }
  else if (index == 2) {
    button3 =(parseInt(bunx) + parseInt(buny)) ;
  }
  else {
    console.log("out");
  }

}
console.log(button1);
console.log(button2);
console.log(button3);

var distance1 = Math.abs(button2 - button1);
var distance2 = Math.abs(button3 - button2);
var distance3 = Math.abs(button3 - button1);

console.log(distance1);
console.log(distance2);
console.log(distance3);
if((distance1 == 581 || distance1==580||distance1 == 1156 || distance1 == 578||distance1 == 831||distance1 == 576) && (distance1 == 581||distance2 == 576 ||distance2 == 578 || distance2==580 ||distance2 == 831 ||distance2 == 1156) && ( distance3==580||distance3 == 325||distance3 == 1157||distance3==576 || distance3 == 1158))
{
  console.log("we get angle 1");
  isThereAWinner = "yes";
}
else if ((distance1 == 100 || distance1 == 95 || distance1==104||distance1 == 195||distance1 == 199) && (distance2 == 95 || distance2 == 195 || distance2 == 100 || distance2 == 199 ||  distance2==104) && (distance3 == 195 || distance3 == 95 || distance3 == 100 || distance3 == 104 || distance3==199))
{
  console.log("we get angle 2");
  isThereAWinner = "yes";
}
else if ((distance1 == 515 || distance1 == 257  || distance1 == 258 || distance1 == 255 || distance1 == 512) && (distance2 == 258 || distance2 == 515 || distance2 == 257 || distance2 == 255 || distance2 == 512) && (distance3 == 257||distance3 == 258 || distance3 == 255|| distance3 == 512|| distance3 == 515))
{
  console.log("we get straight down");
  isThereAWinner = "yes";
}
else if ((distance1 == 343 || distance1 == 348 || distance1 == 691) && (distance2 == 691 || distance2 == 343 || distance2 == 348)&& (distance3 == 348 || distance3 == 691||distance3 == 343))
{
  console.log("we get middle");
  isThereAWinner = "yes";
}
else {
  isThereAWinner = "no";
}
}


function svgAnimate(id,x,y)
{
  var buttonMovin = snapS.select("#"+id);
  //buttonMovin.attr({
  //  fill:"blue"
  //});

  buttonMovin.animate({
    cx:x,
    cy:y
  },500);
}


function resetr()
{
  console.log("click");
  document.getElementById("svg_5").setAttribute('cy',50);
  document.getElementById("svg_5").setAttribute('cx', 67.5);
  document.getElementById("svg_6").setAttribute('cy',42);
  document.getElementById("svg_6").setAttribute('cx', 398.5);
  document.getElementById("svg_7").setAttribute('cy',47);
  document.getElementById("svg_7").setAttribute('cx',746.5);
  document.getElementById("svg_8").setAttribute('cy',540);
  document.getElementById("svg_8").setAttribute('cx',54.5);
  document.getElementById("svg_9").setAttribute('cy',536);
  document.getElementById("svg_9").setAttribute('cx',740.5);
  document.getElementById("svg_10").setAttribute('cy',550);
  document.getElementById("svg_10").setAttribute('cx',403.5);

  for (var i = 1; i < 10; i++)
  {
    if(i == 4 || i == 5 || i == 6)
    {
      window["position"+i] = "free";
    }
    else {
      window["position"+i] = "occupied";
    }
  }
  changePlayer
  clearInterval(turnerTimer);
  turnerTimer = setInterval(changePlayer, 15000);//15 seconds
}
