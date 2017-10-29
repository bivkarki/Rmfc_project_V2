var score=0;
var name;
function start()
{  
name=prompt("What's your name ?");
var c=confirm("Welcome! "+name+"\n Are you ready? " + "\n #There are 10 questions hope you score them all! \n 1 correct answer=> 1 point");
if(c==true)
{ 
var ans1=prompt("In what year were Real Madrid formed?");
var ans2=prompt("What is a fan of Real Madrid C.F. known as?");
var ans3=prompt("What is the name of home stadium of Real Madrid C.F. ?");
var ans4=prompt("How many Liga titles have Real Madrid won till date?");
var ans5=prompt("Who is all time top scorer of Real Madrid C.F?");
var ans6=prompt("From which club Cristiano Ronaldo was signed to Real Madrid?");
var ans7=prompt("Which player has the most appearence of 741 and also have not got a single red card  for Real Madrid C.F.?");
var ans8=prompt("Who was the first Real Madrid player to win the Ballon d'Or in 1957.?");
var ans9=prompt("Which team did Real Madrid beat to land 'La Duo Decima'12th UEFA Champions League Trophy?");
var ans10=prompt("Who is known as the club president with the 'galactico' dream?");
if(ans1==1912) 
{score++;}
if( (ans2.toLowerCase()=="madridsta") || (ans2.toLowerCase()=="madridstas")) 
{score++;}
if((ans3.toLowerCase()=="santiago bernabéu stadium") || (ans3.toLowerCase()=="santiago bernabeu stadium") )
{score++;}
if(ans4==33) 
{score++;}
if( (ans6.toLowerCase()=="manchester united")  || (ans6.toLowerCase()=="manu") ) 
{score++;}
if((ans5.toLowerCase()=="cristiano ronaldo") || (ans5.toLowerCase()=="cristiano")|| (ans5.toLowerCase()=="ronaldo") )
{score++;}
if((ans7.toLowerCase()=="raul") || (ans7.toLowerCase()=="raul sanchez") )
{score++;}
if(ans8.toLowerCase()=="alfredo di stefano") 
{score++;}
if(ans9.toLowerCase()=="juventus") 
{score++;}
if( (ans10.toLowerCase()=="florentino perez") ||  (ans10.toLowerCase()=="florentinoperez") ) 
{score++;}
}
if(c==false)
{
window.close();
} 
document.getElementById("b1").disabled=true;
document.getElementById("b3").disabled=false;
document.getElementById("b4").disabled=false;
document.getElementById("b4").style.background="#01DF74";
document.getElementById("b3").style.background="#01DF74";
}
function get_score()
{
document.getElementById("cons").innerHTML=name+"\t\t, You scored "+score+"\n\n\n";
}
function get_answer()
{
document.location.href="answer.html";
}
function try_again()
{ 
document.location.href="rma_quiz.html";
}