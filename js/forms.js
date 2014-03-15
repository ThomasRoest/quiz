
function log(value){
	console.log(value);
}


var score = 0;


function getAnswer(){
	var answer = document.getElementById('a2').checked; //true
	console.log(answer)
	if(answer === true){
		score += 1;
		alert("true" + score + " points");

	} else {
		alert("false");
	}

}


