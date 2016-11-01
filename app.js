"use strict";

function Player(){
	name: prompt("What is your name?");
	var score = 0;
	var health = 100;
	playerType: null;
	function addGold(amount){score += amount;};
	function getGold(){return score;};
	function decHealth(damage){health -= damage;};
	function addHealth(potion){health += potion;};
	
}

function startGame(){
	alert("You awake in a strange, dimly-lit room. Suddenly, you see an ominous, floating mustache. \n \'Hello, we're going to play a game. Try not to die.\'");
	var player = new Player();
	getPlayerType(player)
	alert(player.toughness);
}

function getPlayerType(player){
	var choice;
	var type = prompt("There are 3 different player classes. \n 1: Mage \n 2: Fighter \n 3: Thief \n To learn more about a class, enter the number.")
	switch (type){
		case "1":
			choice = prompt("The mage is very wise and can solve puzzles. However, he is fragile and always drunk. \n Do you want to be a mage?");
			if (choice.toLowerCase() === "yes"){
				player.playerType = "mage";
				return player = Object.assign(player, new Mage());
			}
			else{
				getPlayerType();
			}
			break;
		case "2":
			choice = prompt("The fighter is tough and strong, but not the smartest. He gets a damage reduction. \n Do you want to be a fighter?");
			if (choice.toLowerCase() === "yes"){
				player.playerType = "fighter";
				return player = Object.assign(player, new Fighter());
			}
			else{
				getPlayerType();
			}
			break;
		case "3":
			choice = prompt("The thief is quick and cunning. He is able to detect traps, and gets a gold bonus. \n Do you want to be a thief?");
			if (choice.toLowerCase() === "yes"){
				player.playerType = "thief";
				return player = Object.assign(player, new Thief());
			}
			else{
				getPlayerType();
			}
			break;
		default:
			getPlayerType();
			break;
	}
}

function Mage(player){
	this.dexterity = 3;
	this.intelligence = 10;
	this.toughness = 2;
}

function Fighter(){
	this.dexterity = 5;
	this.intelligence = 2;
	this.toughness = 10;
}

function Thief(){
	this.dexterity = 10;
	this.intelligence = 5;
	this.toughness = 3;
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var feudQuestions = [{
	question : "Name a kind of tree that streets are named after",
	answer1 : "Oak",
	gold1 : 32,
	answer2 : "Maple",
	gold2 : 16,
	answer3 : "Pine",
	gold3 : 4,
	answer4 : "Elm",
	gold4 : 20,
	answer5 : "",
	gold5 : 0,
	answer6 : "",
	gold6: 0,
	answer7 : "",
	gold7: 0,
	answer8 : "",
	gold8 : 0
	},	
	{question : "Name a type of ring that people wear",
	answer1 : "wedding",
	gold1 : 58,
	answer2 : "Diamond",
	gold2 : 12,
	answer3 : "Engagement",
	gold3 : 11,
	answer4 : "Earring",
	gold4 : 5,
	answer5 : "Class ring",
	gold5 : 3,
	answer6 : "",
	gold6: 0,
	answer7 : "",
	gold7: 0,
	answer8 : "",
	gold8 : 0
	},
	{question : "Name something doctors tell us to avoid",
	answer1 : "Smoking",
	gold1 : 34,
	answer2 : "Fat",
	gold2 : 20,
	answer3 : "Salt",
	gold3 : 16,
	answer4 : "Cholesterol",
	gold4 : 7,
	answer5 : "Stress",
	gold5 : 4,
	answer6 : "Red Meat",
	gold6: 3,
	answer7 : "Bears",
	gold7: 100,
	answer8 : "",
	gold8 : 0
	},
	{question : "Name the loudest animal at the zoo",
	answer1 : "Lion",
	gold1 : 41,
	answer2 : "Elephant",
	gold2 : 34,
	answer3 : "Monkey",
	gold3 : 22,
	answer4 : "Tiger",
	gold4 : 3,
	answer5 : "Joe",
	gold5 : 100,
	answer6 : "",
	gold6: 0,
	answer7 : "",
	gold7: 0,
	answer8 : "",
	gold8 : 0
	},
	{question : "Name something that might ruin a picnic",
	answer1 : "Rain",
	gold1 : 55,
	answer2 : "Ants",
	gold2 : 27,
	answer3 : "Bees",
	gold3 : 3,
	answer4 : "Fire",
	gold4 : 2,
	answer5 : "",
	gold5 : 0,
	answer6 : "",
	gold6: 0,
	answer7 : "",
	gold7: 0,
	answer8 : "",
	gold8 : 0
	},
	{question : "Tell me a nickname for a man named Robert",
	answer1 : "Bob",
	gold1 : 42,
	answer2 : "Rob",
	gold2 : 28,
	answer3 : "Bobby",
	gold3 : 11,
	answer4 : "Robby",
	gold4 : 10,
	answer5 : "Bert",
	gold5 : 7,
	answer6 : "",
	gold6: 0,
	answer7 : "",
	gold7: 0,
	answer8 : "",
	gold8 : 0
	},
	{question : "Name something kids love to jump on",
	answer1 : "Bed",
	gold1 : 47,
	answer2 : "Trampoline",
	gold2 : 42,
	answer3 : "",
	gold3 : 0,
	answer4 : "",
	gold4 : 0,
	answer5 : "",
	gold5 : 0,
	answer6 : "",
	gold6: 0,
	answer7 : "",
	gold7: 0,
	answer8 : "",
	gold8 : 0
	},
	{question : "Name a word that rhymes with 'Pun'",
	answer1 : "Fun",
	gold1 : 43,
	answer2 : "Sun",
	gold2 : 17,
	answer3 : "Bun",
	gold3 : 13,
	answer4 : "Run",
	gold4 : 10,
	answer5 : "Done",
	gold5 : 5,
	answer6 : "Hun",
	gold6: 4,
	answer7 : "",
	gold7: 0,
	answer8 : "",
	gold8 : 0
	},
	{question : "Name an animal that swims",
	answer1 : "Fish",
	gold1 : 24,
	answer2 : "Dolphin",
	gold2 : 19,
	answer3 : "Dog",
	gold3 : 15,
	answer4 : "Seal",
	gold4 : 11,
	answer5 : "Whale",
	gold5 : 8,
	answer6 : "",
	gold6: 0,
	answer7 : "",
	gold7: 0,
	answer8 : "",
	gold8 : 0
	},
	{question : "Name the most effective one-word command",
	answer1 : "Stop",
	gold1 : 41,
	answer2 : "No",
	gold2 : 31,
	answer3 : "Sit",
	gold3 : 8,
	answer4 : "Now",
	gold4 : 4,
	answer5 : "Come",
	gold5 : 3,
	answer6 : "",
	gold6: 0,
	answer7 : "",
	gold7: 0,
	answer8 : "",
	gold8 : 0
	},
	{question : "Name something a person might do in a talent contest",
	answer1 : "Sing",
	gold1 : 62,
	answer2 : "Dance",
	gold2 : 27,
	answer3 : "Host Family Feud",
	gold3 : 1000,
	answer4 : "",
	gold4 : 0,
	answer5 : "",
	gold5 : 0,
	answer6 : "",
	gold6: 0,
	answer7 : "",
	gold7: 0,
	answer8 : "",
	gold8 : 0
	},
	{question : "Name something that exists in outer space",
	answer1 : "Sun",
	gold1 : 31,
	answer2 : "Stars",
	gold2 : 31,
	answer3 : "Moon",
	gold3 : 13,
	answer4 : "",
	gold4 : 0,
	answer5 : "",
	gold5 : 0,
	answer6 : "",
	gold6: 0,
	answer7 : "",
	gold7: 0,
	answer8 : "",
	gold8 : 0
	},
	{question : "Name an inventor kids learn about in school",
	answer1 : "Thomas Edison",
	gold1 : 60,
	answer2 : "Benjamin Franklin",
	gold2 : 14,
	answer3 : "Edison",
	gold3 : 60,
	answer4 : "Ben Franklin",
	gold4 : 14,
	answer5 : "",
	gold5 : 0,
	answer6 : "",
	gold6: 0,
	answer7 : "",
	gold7: 0,
	answer8 : "",
	gold8 : 0
	},
	{question : "Name a place in the house where people store their junk",
	answer1 : "Closet",
	gold1 : 37,
	answer2 : "Garage",
	gold2 : 17,
	answer3 : "Attic",
	gold3 : 16,
	answer4 : "",
	gold4 : 0,
	answer5 : "",
	gold5 : 0,
	answer6 : "",
	gold6: 0,
	answer7 : "",
	gold7: 0,
	answer8 : "",
	gold8 : 0
	},
	{question : "Name a type of tree that grows very tall",
	answer1 : "",
	gold1 : 0,
	answer2 : "",
	gold2 : 0,
	answer3 : "",
	gold3 : 0,
	answer4 : "",
	gold4 : 0,
	answer5 : "",
	gold5 : 0,
	answer6 : "",
	gold6: 0,
	answer7 : "",
	gold7: 0,
	answer8 : "",
	gold8 : 0
	},
	{question : "Name something Jay Leno has more of than the average man",
	answer1 : "Chin",
	gold1 : 64,
	answer2 : "Money",
	gold2 : 15,
	answer3 : "Cars",
	gold3 : 8,
	answer4 : "",
	gold4 : 0,
	answer5 : "",
	gold5 : 0,
	answer6 : "",
	gold6: 0,
	answer7 : "",
	gold7: 0,
	answer8 : "",
	gold8 : 0
	},
	{question : "Name a country that has a lot of desert",
	answer1 : "Egypt",
	gold1 : 29,
	answer2 : "Saudi Arabia",
	gold2 : 27,
	answer3 : "United States",
	gold3 : 9,
	answer4 : "USA",
	gold4 : 9,
	answer5 : "Iran",
	gold5 : 7,
	answer6 : "India",
	gold6: 6,
	answer7 : "Iraq",
	gold7: 4,
	answer8 : "Australia",
	gold8 : 3
	},
	{question : "Name an object young children sleep with",
	answer1 : "Teddy Bear",
	gold1 : 47,
	answer2 : "Stuffed Animal",
	gold2 : 47,
	answer3 : "Blanket",
	gold3 : 30,
	answer4 : "Pacifier",
	gold4 : 6,
	answer5 : "",
	gold5 : 0,
	answer6 : "",
	gold6: 0,
	answer7 : "",
	gold7: 0,
	answer8 : "",
	gold8 : 0
	},
	{question : "Name a fruit with lots of seeds",
	answer1 : "Watermelon",
	gold1 : 38,
	answer2 : "Pomegranate",
	gold2 : 11,
	answer3 : "Kiwi",
	gold3 : 8,
	answer4 : "",
	gold4 : 0,
	answer5 : "",
	gold5 : 0,
	answer6 : "",
	gold6: 0,
	answer7 : "",
	gold7: 0,
	answer8 : "",
	gold8 : 0
	},
	{question : "Name the greatest game show host.",
	answer1 : "Steve Harvey",
	gold1 : 50,
	answer2 : "",
	gold2 : 0,
	answer3 : "",
	gold3 : 0,
	answer4 : "",
	gold4 : 0,
	answer5 : "",
	gold5 : 0,
	answer6 : "",
	gold6: 0,
	answer7 : "",
	gold7: 0,
	answer8 : "",
	gold8 : 0
	},
	
];

function feud(questions, player, fireball){
	var feudQuestionIndex = (Math.Random() * questions.length).floor();
	var feudQuestion = questions[feudQuestionIndex];
	var answer = prompt("A lone figure emerges from the shadows.  You realize it is Steve Harvey, of the hit game show family feud.  His moustache is glorious.  He looks you in the eye and says \n \n'" + feudQuestion.question + "'");
	if (answer){
		if (answer.ToUpperCase() === feudQuestion.answer1.ToUpperCase()){
			alert("Steve Harvey gestures to a glowing board on the wall.  It dings and your answer appears.  'Correct' a disembodied voice booms.  Steve Harvey vanishes into thin air. You gain " + feudQuestion.gold1 + " gold.");
			player.score += feudQuestion.gold1;
		}
		else if (answer.ToUpperCase() === feudQuestion.answer2.ToUpperCase()){
			alert("Steve Harvey gestures to a glowing board on the wall.  It dings and your answer appears.  'Correct' a disembodied voice booms.  Steve Harvey vanishes into thin air. You gain " + feudQuestion.gold2 + " gold.");
			player.score += feudQuestion.gold2;
		}
		else if (answer.ToUpperCase() === feudQuestion.answer3.ToUpperCase()){
			alert("Steve Harvey gestures to a glowing board on the wall.  It dings and your answer appears.  'Correct' a disembodied voice booms.  Steve Harvey vanishes into thin air. You gain " + feudQuestion.gold3 + " gold.");
			player.score += feudQuestion.gold3;
		}
		else if (answer.ToUpperCase() === feudQuestion.answer4.ToUpperCase()){
			alert("Steve Harvey gestures to a glowing board on the wall.  It dings and your answer appears.  'Correct' a disembodied voice booms.  Steve Harvey vanishes into thin air. You gain " + feudQuestion.gold4 + " gold.");
			player.score += feudQuestion.gold4;
		}
		else if (answer.ToUpperCase() === feudQuestion.answer5.ToUpperCase()){
			alert("Steve Harvey gestures to a glowing board on the wall.  It dings and your answer appears.  'Correct' a disembodied voice booms.  Steve Harvey vanishes into thin air. You gain " + feudQuestion.gold5 + " gold.");
			player.score += feudQuestion.gold5;
		}
		else if (answer.ToUpperCase() === feudQuestion.answer6.ToUpperCase()){
			alert("Steve Harvey gestures to a glowing board on the wall.  It dings and your answer appears.  'Correct' a disembodied voice booms.  Steve Harvey vanishes into thin air. You gain " + feudQuestion.gold6 + " gold.");
			player.score += feudQuestion.gold6;
		}
		else if (answer.ToUpperCase() === feudQuestion.answer7.ToUpperCase()){
			alert("Steve Harvey gestures to a glowing board on the wall.  It dings and your answer appears.  'Correct' a disembodied voice booms.  Steve Harvey vanishes into thin air. You gain " + feudQuestion.gold7 + " gold.");
			player.score += feudQuestion.gold7;
		}
		else if (answer.ToUpperCase() === feudQuestion.answer8.ToUpperCase()){
			alert("Steve Harvey gestures to a glowing board on the wall.  It dings and your answer appears.  'Correct' a disembodied voice booms.  Steve Harvey vanishes into thin air. You gain " + feudQuestion.gold8 + " gold.");
			player.score += feudQuestion.gold8;
		}
		else if (answer.ToUpperCase() === "CAST FIREBALL"){
			fireball(player);
		}
		else {
			var damage = takeDamage(player, 30);
			alert("Steve Harvey gestures to a glowing board on the wall.  A buzzer sounds and a red X appears.  Steve Harvey smacks you upside the head before vanishing into thin air.  You take " + damage + " damage.")
		}
	}
}

function takeDamage(player, maxDamage){
	var damage = (Math.Random() * maxDamage).floor();
			if (player.toughness >= damage){
				damage = 1;
			}else{
				damage = damage - player.toughness;
			}
		player.health -= damage;
		return damage;
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////--ignore roomArray for now--////
var roomArray = 
[
	{
		"name": "theThunderDome",
		"hasObstacle": "true",
		"obstacle": "",
		"hasItem": "true",
		"item": "",
	}
];

var cave =
	{
		//name: "theThunderDome",
		hasObstacle: true,
		obstacle: {},
		hasItem: true,
		item: {},
		name : function setRoomName(roomname){
			return roomname;
		}
	};

var obstacles = 
[
	{
		"id": "1",
		"name": "loki",
		"goldLost": 25,
		"damageCaused": 0 },
	{
		"id": "2",
		"name": "smaug",
		"goldLost": 40,
		"damageCaused": 20 },
	{
		"id": "3",
		"name": "urukHai",
		"goldLost": 5,
		"damageCaused": 13 },
	{
		"id": "4",
		"name": "balrog",
		"goldLost": 1,
		"damageCaused": 24 },
	{
		"id": "5",
		"name": "giantBearTrap",
		"goldLost": 0,
		"damageCaused": 5 },
	{
		"id": "6",
		"name": "packOfRabidWeasels",
		"goldLost": 3,
		"damageCaused": 9 },
	{
		"id": "7",
		"name": "trogdor",
		"goldLost": 0,
		"damageCaused": 19 },
	{
		"id": "8",
		"name": "liquidHotMagma",
		"goldLost": 5,
		"damageCaused": 12 },
	{
		"id": "9",
		"name": "sphinx",
		"goldLost": 18,
		"damageCaused": 5 },
	{
		"id": "10",
		"name": "puzzle",
		"goldLost": 10,
		"damageCaused": 0 },
];

var items = 
[
	{
		"id": "1",
		"type": "goldCoin",
		"goldEarned": 10,
		"heathIncrease": 0,
		"attributeIncrease": 0 },
	{
		"id": "2",
		"type": "goldNugget",
		"goldEarned": 15,
		"heathIncrease": 0,
		"attributeIncrease": 0 },
	{
		"id": "3",
		"type": "goldenShower",
		"goldEarned": 25,
		"heathIncrease": 0,
		"attributeIncrease": 0 },
	{
		"id": "4",
		"type": "elixer",
		"goldEarned": 0,
		"heathIncrease": 10,
		"attributeIncrease": 0 },
	{
		"id": "5",
		"type": "tome", //increases intelligence attribute
		"goldEarned": 0,
		"heathIncrease": 0,
		"attributeIncrease": 3 },
	{
		"id": "6",
		"type": "mithril", //increases toughness attribute
		"goldEarned": 0,
		"heathIncrease": 0,
		"attributeIncrease": 3 },
	{
		"id": "7",
		"type": "magicGloves", //increases dexterity attribute
		"goldEarned": 0,
		"heathIncrease": 0,
		"attributeIncrease": 3 },
	{
		"id": "8",
		"type": "scientificJournalEntry", //increases intelligence
		"goldEarned": 0,
		"heathIncrease": 0,
		"attributeIncrease": 1 },
	{
		"id": "9",
		"type": "helmet", //increases toughness
		"goldEarned": 0,
		"heathIncrease": 0,
		"attributeIncrease": 1 },
	{
		"id": "10",
		"type": "stretchPants", //increases dexterity
		"goldEarned": 0,
		"heathIncrease": 0,
		"attributeIncrease": 1 },
];

function runGame()
{
	alert("Welcome to the Thunder Dome, betch.");
	
	// while(true) //while(player.health > 0)
	// {
		// enterRoom(createRoom(cave));
	// }
	
	enterRoom(createRoom(cave));
}

function createRoom(cave)
{
	var roomname = prompt("Please set the name of the room you are entering: ");
	cave.name = roomname;
	cave.obstacle = setObstacle(getRandomNumber(), setObstacleProbability(getRandomNumber()));
	cave.item = setItem(getRandomNumber(), setItemProbability(getRandomNumber()));
	return cave;
}

function enterRoom(cave)
{
	alert("Room name: " + cave.name + 
			"\nDoes this room have an obstacle? " + cave.hasObstacle + 
			"\nDoes this room have an item? " + cave.hasItem +
			"\nObstacle: " + cave.obstacle.obstacles.name + 
			"\nItem: " + cave.item
			);
}

function getRandomNumber()
{
	return Math.random();
}

function setObstacleProbability(randomNumber)
{
	var hasObstacleProbability = (randomNumber * 100).toFixed(1);
	
	if(hasObstacleProbability >= 50)
	{
		return true;
	}
	else
	{
		return false;
	}
}

function setItemProbability(randomNumber)
{
	var hasItemProbability = (randomNumber * 100).toFixed(1);
	
	if(hasItemProbability >= 50)
	{
		return true;
	}
	else
	{
		return false;
	}
}

function setObstacle(randomNumber, hasObstacle)
{
	var obstacleSelection = Math.floor(randomNumber * 10);
	
	if(hasObstacle)
	{
		return obstacles[obstacleSelection];
	}
}

function setItem(randomNumber, hasItem)
{
	var itemSelection = Math.floor(randomNumber * 10);
	
	if(hasItem)
	{
		return items[itemSelection];
	}
}


runGame();

//startGame();