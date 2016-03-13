

var btnCurrentPos = [{btn:"svg_5",position:"position1"},{btn:"svg_6",position:"position2"},{btn:"svg_7",position:"position3"}]
var pos;
function randomButton()
{
  return Math.floor(Math.random() * 2) + 0 ;
}
var tryedButtons =[]
var buttonMoving;
var leavingPostion;
//var playerComp = ["svg_5","svg_6","svg_7"];
function computerPlay()
{
  if(tryedButtons.length < 3)
  {
    var point = Math.floor(Math.random() * player.length);
    var button = player[point];
    console.log(button);
    tryedButtons.push(button);
    //delete player[point];
    player.splice(point, 1);
    buttonMoving = button;

    var bunx= document.getElementById(button).getAttribute('cx');
    var buny= document.getElementById(button).getAttribute('cy');
    console.log(buny,bunx);
    leavingPostion = myParent(bunx,buny);
    //isFree(id,parent,bunx,buny);
    //buttonClicked(button);

  }
  else {
    return "noMoreMoves"
  }

  //document.getElementById(button).click();
}


function movecompButton()
{
  console.log("in: "+whereFrom);
  var freeBox = [];
  if(whereFrom == "position 1")
  {
    //  console.log("ount: "+whereFrom);
    if(position2 == "free"){freeBox.push("svg_15");}
    if(position4 == "free"){freeBox.push("svg_17");}
  }
  else if(whereFrom == "position 2")
  {
    if(position1 == "free"){freeBox.push("svg_12");}
    if(position3 == "free"){freeBox.push("svg_14");}
  }
  else if(whereFrom == "position 3")
  {
    if(position2 == "free"){freeBox.push("svg_15");}
    if(position6 == "free"){freeBox.push("svg_19");}
  }
  else if(whereFrom == "position 4")
  {
    if(position1 == "free"){freeBox.push("svg_12");}
    if(position7 == "free"){freeBox.push("svg_18");}
  }
  else if(whereFrom == "position 5")
  {
    if(position1 == "free"){freeBox.push("svg_12");}
    if(position2 == "free"){freeBox.push("svg_15");}
    if(position3 == "free"){freeBox.push("svg_14");}
    if(position4 == "free"){freeBox.push("svg_17");}
    if(position6 == "free"){freeBox.push("svg_19");}
    if(position7 == "free"){freeBox.push("svg_18");}
    if(position8 == "free"){freeBox.push("svg_13");}
    if(position9 == "free"){freeBox.push("svg_20");}
  }
  else if(whereFrom == "position 6")
  {
    if(position3 == "free"){freeBox.push("svg_14");}
    if(position9 == "free"){freeBox.push("svg_20");}
  }
  else if(whereFrom == "position 7")
  {
    if(position4 == "free"){freeBox.push("svg_17");}
    if(position8 == "free"){freeBox.push("svg_13");}
  }
  else if(whereFrom == "position 8")
  {
    if(position7 == "free"){freeBox.push("svg_18");}
    if(position9 == "free"){freeBox.push("svg_20");}
  }
  else if(whereFrom == "position 9")
  {
    if(position6 == "free"){freeBox.push("svg_19");}
    if(position8 == "free"){freeBox.push("svg_13");}
  }
  if(position5 == "free"){freeBox.push("svg_16");}
  console.log(freeBox);
  if(freeBox.length > 0)
  {
    var parentBox = freeBox[Math.floor(Math.random() * freeBox.length)];
    return parentBox;
  }
  else
  {
    return "boxedin"
  }
}


function startComputer()
{

  var moves = computerPlay();
  if(moves == "noMoreMoves")
  {
    //console.log("opoopopop");
  }
  else
  {
    //var mv = movecompButton();
    var mv;
    var vm = movecompButton();
    var io = wiser();
    var buttonMovings;
    if(io == false)
    {
      mv = vm;
      buttonMovings = buttonMoving;
    }
    else
    {
      mv = io;
      buttonMovings = pos;
    }

    if(mv == "boxedin")
    {
      //console.log("opoopopop");
      startComputer();
    }
    else
    {
      //var bunx= document.getElementById(buttonMoving).getAttribute('cx');
      //  var buny= document.getElementById(buttonMoving).getAttribute('cy');
      //  console.log(buny,bunx);
      var ty = document.getElementById(mv).getAttribute('y') ;
      var tv = document.getElementById(mv).getAttribute('x');
      console.log("tv: "+ty,tv);
      document.getElementById(buttonMovings).setAttribute('cy',parseInt(ty)+35);
      document.getElementById(buttonMovings).setAttribute('cx',parseInt(tv)+50);
      //console.log("tvPlus: "+(ty+50,tv+50);
      checkId(mv,"occupied");
      checkId(leavingPostion,"free");
      var positionm = checkingWhereIAm(mv);
      changeJson(buttonMoving,positionm);
      player = ["svg_5","svg_6","svg_7"];
      tryedButtons = [];
      whoWon(player[0],player[1],player[2]);
      if(isThereAWinner == "yes")
      {
        document.getElementById('winner').innerHTML=nextPlayer+" is the winner";
        clearInterval(turnerTimer);
        //  turnerTimer = "";
        console.log("We have a winner");
      }
      else {

        isThereAWinner == "no"
        changePlayer();
        clearInterval(turnerTimer);
        turnerTimer = setInterval(changePlayer, 15000);//15 seconds
      }


      //var parent = myParent(bunx,buny);
      //  movingTo(mv,buttonMoving,parent,"");
    }
  }

}
player = ["svg_5","svg_6","svg_7"];


function changeJson(id,positionm)
{
  if(id == "svg_5")
  {
    btnCurrentPos[0].position = positionm;
  }
  else if(id == "svg_6")
  {
    btnCurrentPos[1].position = positionm;
  }
  else if (id == "svg_7") {
    btnCurrentPos[2].position = positionm;
  }
  //var btnCurrentPos = [{btn:"svg_5",postion:"position1"},{btn:"svg_6",position:"position2"},{btn:"svg_7",position:"position3"}]
}



function checkingWhereIAm(id)
{
  if(id == "svg_12")
  {
    return "position1";
  }
  else if(id=="svg_13")
  {
    return "position8";
  }
  else if(id == "svg_14")
  {
    return "position3";
  }
  else if(id == "svg_15")
  {
    return "position2";
  }
  else if(id == "svg_16")
  {
    return "position5";
  }
  else if(id == "svg_17")
  {
    return "position4";
  }
  else if(id == "svg_18")
  {
    return "position7";
  }
  else if(id == "svg_19")
  {
    return "position6";
  }
  else if(id == "svg_20")
  {
    return "position9";
  }
}
