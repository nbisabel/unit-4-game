$(document).ready(function() { 
    
//declare the buttons are buttons and a function that will happen when they reset  

/*$("#plain").on("click", randomGemNumber);
$("#yellow").on("click", randomGemNumber);
$("#blue").on("click", randomGemNumber);
$("#red").on("click", randomGemNumber); */

//declaring the function that is the random number for gems



/*gemBtn.attr("data-letter", randomGemNumber);
gemBtn.text(randomGemNumber);
gemBtn.append(".userScore");*/



//declare that the buttons bring random numbers every time you press them 

//var gemBtn = $(".gemButtons");
var randomGemNumber = [];
var compScore;
var usersScore;
var win;
var loss;
//remember, that there is a random score number and random numbers per gem!!!!
//computer random score 

//user score that accumulates while they contininue to click the buttons 
var compScore = Math.floor(Math.random() *101) + 19;
    $(".computer").text(compScore);


var crystal = $(".gemButton");
    crystal.attr({
        "class": 'crystals',
        "data-random": randomGemNumber
    });
$(".gemButton").append(crystal);


$(".crystals").on("click", function(){
let randomGemNumber = (Math.floor(Math.random() *11) +1);
   $(".crystals").html(randomGemNumber);
    console.log(randomGemNumber);
})

crystal = parseInt(crystal);
randomGemNumber = parseInt(randomGemNumber);

$(".userScore").text(randomGemNumber);

if (usersScore === compScore)
    wins++;

if  (usersScore === !compScore)
    loss++;
    
//reset function when score===userscore



//random number for clear gem 
//random number for yellow gem 
//random number for red gem
//random number for blue gem 


//function that adds all the random numbers together 


//if and else statements about wins or losses
//if numbers equal each other then they win, 
//if not they loose 


//make on clicks buttons 

//random number for the computer total 

//random number for each gem 

//declare buttons
})