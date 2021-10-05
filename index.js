var randomNo1=Math.floor((Math.random()*6))+1;
var randomimg="dice"+randomNo1+".png";
var source="images/"+randomimg;
var element=document.querySelectorAll("img")[0];
element.setAttribute("src",source);

var randomNo2=Math.floor(Math.random()*6)+1;
var randomimg2="dice"+randomNo2+".png";
var source2="images/"+randomimg2;
var element2=document.querySelectorAll("img")[1];
element2.setAttribute("src",source2);

if(randomNo1>randomNo2)
{
    document.querySelector("h1").innerHTML="Player 1 Wins!";
}
else if(randomNo1<randomNo2)
{
    document.querySelector("h1").innerHTML="Player 2 Wins!";

}
else
document.querySelector("h1").innerHTML="Draw!";