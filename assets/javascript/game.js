$(document).ready(function(){

function superStarter() {	

			var yellow = diamondValue(); 
			var blue = diamondValue();
			var green = diamondValue();
			var pink = diamondValue();
			var addDiamonds = 0;
			var wonGames = 0;
			var lostGames = 0;
			var totalGames= 0;
			var gameInProgress = true;
			var targetScore;

	function diamondValue() {
		return Math.floor(Math.random()*11);
	}

	function rangeRandom () {
		return Math.floor(Math.random()*19) + 39;
	}
	
	console.log("yellow:" + yellow);
	console.log("blue:" + blue );
	console.log("green:" + green);
	console.log("pink:" + pink );

	function startgame (){
		$("#target-score").empty();
		$("#diamond-sum").empty();
		gameInProgress = true;
		rangeRandom();
		targetScore = rangeRandom();
		$("#target-score").html(targetScore);
	}

	startgame();

	
	function setValue(color) {
		addDiamonds+= color;
		gameL();
	}


	function gameL(){
		$("#diamond-sum").html(addDiamonds);
		if(targetScore < addDiamonds){
			$("#diamond-sum").html("Sorry, you lost");
 			lostGames ++;
 			gameInProgress = false;
 			$("#losses-counter").html(lostGames);
 	 	} else if (targetScore === addDiamonds){
 	 		$("#diamond-sum").html("Great, You win!!!");
 			wonGames ++;
 			gameInProgress = false;
 			$("#win-counter").html(wonGames);
 		} 

 		totalGames = lostGames + wonGames;
 		$("#game-counter").html(totalGames);
 		
	}

	$("#b-pink").on("click", function(){
		setValue(pink);
	});	

	$("#b-green").on("click", function(){
		setValue(green);
	});	

	$("#b-blue").on("click", function(){
		setValue(blue);
	});	

	$("#b-yellow").on("click", function(){
		setValue(yellow);
	});	
	
}

superStarter();

$("#newGame").on("click", function (){
		superStarter();
		console.log("hola newGame");
	});



});
