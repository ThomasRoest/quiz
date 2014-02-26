 $(document).ready(function(){
 	$('.start-game').on('click', function(){
 		$('.game-start').fadeOut("fast");
 		$('.first-question').toggleClass('.visible');
 	});
 });


