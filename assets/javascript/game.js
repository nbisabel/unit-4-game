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
var randomGemNumber;
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

$("#plain").on("click", function(){
var randomGemNumber = Math.floor(Math.random() *11) +1;
    $("#plain").html(randomGemNumber);
    console.log(randomGemNumber);
})

$("#yellow").on("click", function(){
    var randomGemNumber = Math.floor(Math.random() *11) +1;
        $("#yellow").html(randomGemNumber);
        console.log(randomGemNumber);
    })
$("#blue").on("click", function(){
    var randomGemNumber = Math.floor(Math.random() *11) +1;
        $("#blue").html(randomGemNumber);
        console.log(randomGemNumber);
    })

$("#red").on("click", function(){
    var randomGemNumber = Math.floor(Math.random() *11) +1;
        $("#red").html(randomGemNumber);
        var num = $(this).attr('data-random');
        console.log(typeof num);
    })

    randomGemNumber = parseInt(randomGemNumber);
    
    
  
   
        
  







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