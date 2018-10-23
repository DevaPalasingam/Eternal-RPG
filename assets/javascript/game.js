var hasName = false;
var gameStarted = false;
var upgradeTime = false;
var nameTime = false;

var upgradePoints = 5;
var stats = {
	name: "",
	level: 1,
	maxHealth: 5,
	health: 5,
	attack: 1,
	maxMana: 1,
	mana: 1,
	nextLv: 1,
	exp: 0
};

document.onkeyup = function (e) {
	e = e || window.event;
	var keystroke = e.key;

	if (!gameStarted) {
		if (keystroke === "Enter")
			startGame();	
	}
	else if (nameTime) 
		makeName(keystroke);
}

