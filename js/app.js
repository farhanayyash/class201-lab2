'use strict'
alert("Wlcome to Farhan Ayyash website");

var Username = 0;
Username = check(Username,"Enter your name :");

var DoWanPlay = confirm(Username+", Do you want Play About Me guessing game ?");

var improve = "";

var turevalue = 0;
var Myrate = 0 ;
var Myage =  0;
var Myhome = 0 ;
var Mycar = 0;
var Mytime = 0;

var finalp = "";
var count = 0;
var count2 = 0;


var AMyrate = true ;
var AMyage =  false;
var AMyhome = false ;
var AMycar = true;
var AMytime = true;
var allvar = [0,0,0,0,0];
var allquestions= ["Is Farhan a Civil Engineer?","Is Farhan have G_class?","Is Farhan living in USA?","Does Farhan want to be a programmer?","Is Farhan from the future?"];
var allans = [true,false,false,true,true];

if (!(DoWanPlay)){
  alert("As you wish!")
}else{
  for(var i = 0 ;i<=4;i++){
    allvar[i] = check(allvar[i],allquestions[i]);
    allvar[i] = checkyesorno(allvar[i],allquestions[i]);
    turevalue=checkyes(allvar[i],turevalue);
  
    checkfinal(allvar[i],allans[i],allquestions[i]);
    checkfinalno(allvar[i],allans[i],allquestions[i]);
  }
  guessgame();
  guesscity();

if (count <= 2 ){
  improve = "improve yourself";
}else{
  improve = "you good";
}
var cc = "<br><p>Hey "+ Username +" Your score is : "+ count +" "+improve+" </p>";
finalp += cc;
document.getElementById("Answer").innerHTML = finalp;





}
var q6 ;

function guessgame(){
  var ramd = Math.floor(Math.random() * 11);
console.log(ramd);

var guess = [];
for (var i = 4; i > 0 ;i--){
  q6 = prompt("guess a number, you have a "+i+" attempts ");
  q6 = Number(q6);
  while(!(Number.isInteger(q6)) || q6 == ""){
    q6 = prompt("guess a number, you have a "+i+" attempts ");
    q6 = Number(q6);
  }
  if (true){
    if (q6 == ramd){
      count2= count2+1;
      alert("Great, You good!");
      break;
    }else if (q6 > ramd){
      alert(q6+" is too high");
      guess.push(q6);
    }else{
      alert(q6+" is too low");
      guess.push(q6);
    }
  }
}
var trys="";
console.log(guess);
if (q6 != ramd){
  for (var i = 0 ; i < guess.length ;i++){
    trys = trys +'['+ guess[i]+'] ';
  }
  alert("My number was '"+ ramd+"', your guesses: "+trys);
}
console.log(count);
}

function guesscity(){
  var q7a = ["zarqa","amman","aqaba"]
var q7 = "";
var checkloop = 0;
for(var i = 6; i > 0; i--){
  q7= prompt("where I prefer to live? you have a "+ i+' attempts');
  q7 = check(q7,"where I prefer to live? you have a "+ i+' attempts');
  for (var c = 0 ; c < q7a.length;c++){
    if (q7.toLowerCase() == q7a[c]){
      alert("Great, "+q7+" was right");
      count2= count2+1;
      console.log(count2);
      checkloop = 1;
      break;
    }else{
      
      continue;
    }
  }
  if (checkloop == 1){
    break;
  }else{alert("ah, "+ q7+" Wrong try again.");}
}
var trys1=[];
if(!(checkloop == 1 )){
  for (var i = 0 ; i < q7a.length ;i++){
    trys1 = trys1 +'['+ q7a[i]+'] ';
  }
  alert("The answers was : " +trys1);
}else{
  for (var i = 0 ; i < q7a.length ;i++){
    trys1 = trys1 +'['+ q7a[i]+'] ';
  }
  alert("The answers was : " +trys1);
}



}




function check(x, y ){
  while (x == "" || x == null || x == undefined || x == 0 ){
      x = prompt(y);
  }
  return x;
}
function checkyesorno(x,y){
  while ((x.toLowerCase() !== "y" && x.toLowerCase() !== "yes") && (x.toLowerCase() !== "n" && x.toLowerCase() !== "no") ){
    x = prompt(y);
}
return x;
}
function checkyes(x,y){
  if (x.toLowerCase() == "y" || x.toLowerCase() == "yes" ){
    y +=1
    return y;
}else{
  return y;
}
}

function checkfinal(x,y,z){
  if (x.toLowerCase() == "y" || x.toLowerCase() == "yes" ){
    if (y){
      alert("Right");
      finalp += "<p>"+z+" Right</p>";
      count +=1;
      
    }else{
      finalp += "<p>"+z+" wrong</p>";
      alert("Wrong");
  
    }
  }
}
function checkfinalno(x,y,z){
  if (x.toLowerCase() == "n" || x.toLowerCase() == "no" ){
    if (y){
      finalp += "<p>"+z+" wrong</p>";
      alert("Wrong");
    }else{
      finalp += "<p>"+z+" Right</p>";
      alert("Right");
      count +=1;
      
    }
  }
}
var finalcount= parseInt(count)+parseInt(count2);
console.log(count2);
console.log("This is your score: "+ finalcount);

alert("great you get: "+finalcount+" out of 7 questions asked.");

function h(){
  alert('good bye');
}
h();