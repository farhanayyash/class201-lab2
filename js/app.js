'use strict'
alert("Wlcome to Farhan Ayyash website");

var Username = 0;
Username = check(Username,"Enter your name :");
console.log(Username);

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

var AMyrate = true ;
var AMyage =  false;
var AMyhome = false ;
var AMycar = true;
var AMytime = true;

if (!(DoWanPlay)){
  alert("As you wish!")
}else{
  Myrate = check(Myrate,"Is Farhan a Civil Engineer?");
  Myrate = checkyesorno(Myrate,"Is Farhan a Civil Engineer?");
  turevalue=checkyes(Myrate,turevalue);
  
  checkfinal(Myrate,AMyrate,"Is Farhan a Civil Engineer?");
  checkfinalno(Myrate,AMyrate,"Is Farhan a Civil Engineer?");

  Myage = check(Myage,"Is Farhan have G_class?");
  Myage = checkyesorno(Myage,"Is Farhan have G_class?");
turevalue=checkyes(Myage,turevalue);

checkfinal(Myage,AMyage,"Is Farhan have G_class?");
checkfinalno(Myage,AMyage,"Is Farhan have G_class?");

Myhome = check(Myhome,"Is Farhan living in USA?");
Myhome = checkyesorno(Myhome,"Is Farhan living in USA?");
turevalue=checkyes(Myhome,turevalue);

checkfinal(Myhome,AMyhome,"Is Farhan living in USA?");
checkfinalno(Myhome,AMyhome,"Is Farhan living in USA?");

Mycar = check(Mycar,"Does Farhan want to be a programmer?");
Mycar = checkyesorno(Mycar,"Does Farhan want to be a programmer?");
turevalue=checkyes(Mycar,turevalue);

checkfinal(Mycar,AMycar,"Does Farhan want to be a programmer?");
checkfinalno(Mycar,AMycar,"Does Farhan want to be a programmer?");

Mytime = check(Mytime,"Is Farhan from the future?");
Mytime = checkyesorno(Mytime,"Is Farhan from the future?");
turevalue=checkyes(Mytime,turevalue);

checkfinal(Mytime,AMytime,"Is Farhan from the future?");
checkfinalno(Mytime,AMytime,"Is Farhan from the future?");

if (count <= 2 ){
  improve = "improve yourself";
}else{
  improve = "you good";
}
var cc = "<br><p>Hey "+ Username +" Your score is : "+ count +" "+improve+" </p>";
finalp += cc;
console.log(finalp);
document.getElementById("Answer").innerHTML = finalp;

console.log(count);

console.log(cc);


}
alert("Hey "+ Username +" Your score is : "+ count+" "+improve);


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
      console.log(z+" Right");
      finalp += "<p>"+z+" Right</p>";
      count +=1;
      
    }else{
      console.log(z+" wrong");
      finalp += "<p>"+z+" wrong</p>";
  
    }
  }
}
function checkfinalno(x,y,z){
  if (x.toLowerCase() == "n" || x.toLowerCase() == "no" ){
    if (y){
      console.log(z+" wrong");
      finalp += "<p>"+z+" wrong</p>";
    }else{
      console.log(z+" Right");
      finalp += "<p>"+z+" Right</p>";
      count +=1;
      
    }
  }
}

