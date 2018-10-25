var hasName = false;
var gameStarted = false;
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

function gameOver() {
	var game = document.querySelectorAll(".game");
	var g = game.length;

	var upgrades = document.querySelectorAll(".upgrades");
	var u = upgrades.length;

	var battle = document.querySelectorAll(".battle");
	var b = battle.length;

	while(g--)
		game[g].setAttribute("style", "display:none");
	while(u--)
		upgrades[u].setAttribute("style", "display:none");
	while(b--)
		battle[b].setAttribute("style", "display:none");

	document.getElementById("messageScreen").innerHTML = "You Died";
	document.getElementById("messageScreen").setAttribute("style", "display:block");
}

