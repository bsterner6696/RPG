function player(name){
	this.name = prompt("What is your name?");
	var score = 0;
	var health = 100;
	playerType: getPlayerType();
	function addGold(amount){score += amount;};
	function getGold(){return score;};
	
}

function startGame(){
	alert("You awake in a strange, dimly-lit room. Suddenly, you see an ominous, floating mustache. \n \'Hello, we're going to play a game. Try not to die.\'");
	var player = new player(name, 0);
}

function getPlayerType(){
	var type = prompt("There are 3 different player classes. \n 1: Mage \n 2: Fighter \n 3: Thief \n To learn more about a class, enter the number.")
	switch (type){
		case "1":
			
	}
}

function mage(){
	dexterity = 3
	intelligence = 10
	toughness = 2
	fireball = function(){}
}

function fighter(){
	dexterity = 5
	intelligence = 2
	toughness = 10
}

function thief(){
	dexterity = 10
	intelligence = 5
	toughness = 3
}
