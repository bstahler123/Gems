
$(document).ready(function(){
	var randomNumber = 0;
	var score = 0;
	var emerald = 0;
	var diamond = 0;
	var saphire = 0;
	var ruby = 0;
	var wins = 0;
	var losses = 0;
	var currentTime = 0;
	var myTimer;
	$(".con").hide();
					// Timer //

	function timer(){

	 currentTime = 20;
		 
	 clearInterval(myTimer); 

	 myTimer = setInterval(function(){
		
			currentTime--;
		
		if (currentTime >= 0){
			$(".timer").empty();
			$(".timer").append(currentTime);

			
			
			console.log(currentTime);
		}
		if  (currentTime === 0){

			$("#alert").addClass("defeat").append("out of time!!");
			
			losses++;
			$(".losses").empty();
			$(".losses").append(losses);
			$(".con").hide();
			$("timer").empty();

		}


},1000);


	}

function buttonCheck(){
	if (score === randomNumber){
		$("#alert").addClass("victory").html("VICTORY!!!");
		wins++;
		$(".wins").empty();
		$(".wins").append(wins);		
		$("#score").append(" is your score you win!!");
		$(".con").hide();
		clearInterval(myTimer);
		$(".timer").empty();
		$(".timer").append("0");
		
		

		
	} else if (score > randomNumber){
		$("#alert").addClass("defeat").html("Defeat!!");
		losses++;
		$(".losses").empty().append(losses);		
		$("#score").append(" is your score you lose!!");
		$(".con").hide();
		clearInterval(myTimer);
		$(".timer").empty();
		$(".timer").append("0");
		
		
	}
	
	}

	// Generating random numbers for gems and number to match

	$("#Reset").on("click", function(){
	

	$("#randomnumber,#score,#alert").empty();
	$("#alert").removeClass("victory").removeClass("defeat");

	timer();



	// Values of Gems
	
	score = 0;
	emerald = 1 + Math.floor(Math.random() * 10);
	diamond = 1 + Math.floor(Math.random() * 10);
	ruby = 1 + Math.floor(Math.random() * 10);
	saphire = 1 + Math.floor(Math.random() * 10)
	console.log(emerald, diamond, ruby, saphire);

	// Value of random Number

	 randomNumber = 40 + Math.floor(Math.random() * 5);
	console.log(randomNumber);
	$("#randomnumber").append(randomNumber);
	$("#score").append("Pick a Gem!!");
	$(".con").show();

});

	// Diamond button

	$(".btn-default").on("click", function(){
	score = diamond + score;
	console.log(score);
	$("#score").empty();
	$("#score").append(score);
	buttonCheck();
});	
	// Emerald button


	$(".btn-success").on("click", function(){
	score = emerald + score;
	console.log(score);
	$("#score").empty();
	$("#score").append(score);
	buttonCheck();
});
	// Saphire button 

	$(".blue").on("click", function(){
	score = saphire + score;
	console.log(score);
	$("#score").empty();
	$("#score").append(score);
	buttonCheck();
});
	// Ruby button

	$(".btn-danger").on("click", function(){
	score = ruby + score;
	console.log(score);
	$("#score").empty();
	$("#score").append(score);
	buttonCheck();
	
	});

	$(".button").on("click", function(){
	$(".directions").toggle();
	


	

	



	});

	

	
});
 

