

var firstquestion = function(){
	$('.start-game').addClass('hide');
	$('.question1').removeClass('hide');
}

//write down functionality first


$(document).ready(function(){
	$(".start").on('click', function(){
		firstquestion();
	});
});




