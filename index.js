
var randomNumber1=Math.floor(Math.random()*6)+1;
var randimages1="images/dice"+randomNumber1+".png";

document.querySelectorAll("img")[0].setAttribute("src",randimages1);

var randomNumber2=Math.floor(Math.random()*6)+1;
var randimages2="images/dice"+randomNumber2+".png";

document.querySelectorAll("img")[1].setAttribute("src",randimages2);


if (randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML="Player 2 won !! 🥳";
}
else if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="Player 1 won !! 🥳";
}
else{
  document.querySelector("h1").innerHTML="Draw";
}
