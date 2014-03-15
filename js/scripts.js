// var allQuestions = [

// 					{question: "How many planets are there in our solar system", 
// 					choices: ["4", "6", "7", "8"], 
// 					correctAnswer: 0},

// 					{question: "question2", 
// 					choices: ["4", "6", "7", "8"], 
// 					correctAnswer: "dikke stront"},

// 					];


// var firstquestion = function(){
// 	$('.start-game').addClass('hide');
// 	$('.question1').removeClass('hide');
// }



// $(document).ready(function(){
// 	$(".start").on('click', function(){
// 		firstquestion();
// 	});
// });


function log(value){
	console.log(value);
}


var names = ["thomas", "harry", "pietje", "wazzup"];
var numbers = [12, 45, 56, 23, 234];




function logNames(){
	for(i = 0; i < names.length; i++){
		log(names[i]);
		}
	}


var answer = prompt("enter 1 for names or 2 for numbers");

if(answer === 1){
	logNames(names);
} else if(answer === "20"){
	logNames(numbers);
} else {
	log("please enter 1 or 2!");
}



