var adjectives = ['Bothered', 'Irritated', 'Frustrated', 'Irate', 'Furious', 'Disgusted', 'Somber', 'Lonely', 'Disappointed', 'Dissatisfied', 'Gloomy', 'Depressed', 'Dejected', 'Unhappy', 'Optimistic', 'Happy', 'Thrilled', 'Cheerful', 'Joyful', 'Elated', 'Distressed', 'Frightened', 'Alarmed', 'Frantic', 'Petrified', 'Unsuspecting', 'Bewildered', 'Baffled', 'Out-of-place', 'Burdened', 'Upset', 'Restless', 'Stressed', 'Bored', 'Apathetic'];
var nouns = ['Bunny', 'Pumpkin', 'Villager', 'Alien', 'Witch', 'Orc', 'Grad-Student', 'Dentist', 'Teacher', 'Zombie', 'Clown'];
var enemyStats = {
	name: "",
	level: 1,
	health: 1,
	attack: 1,
	exp: 1
};

function battle() {
	document.getElementById("messageScreen").innerHTML = "Battle Time";
	displayUpgrades(false);
	initializeStats();
	generateEnemy();
}

function initializeStats() {
	stats.health = stats.maxHealth;
	stats.mana = stats.maxMana;
}

function generateEnemy() {
	var isBoss = ((Math.floor(Math.random() * 5)) == 4) ? true : false;
	console.log(isBoss);

	var name = adjectives[Math.floor(Math.random() * adjectives.length)] + ' ' + nouns[Math.floor(Math.random() * nouns.length)];
	name = isBoss ? ("Boss: " + name) : name;
	document.getElementById("monster").innerHTML = name;

	var level;
	if (isBoss)
		level = Math.floor(Math.random() * (5 + 1) ) + stats.level;
	else
		level = Math.floor((Math.random() * (stats.level + 5)) + 1);

	displayBattle();
}

function displayBattle() {
	var battle = document.querySelectorAll(".battle");
	var i = battle.length;

	document.getElementById("battleLv").innerHTML = stats.level.toString();
	document.getElementById("battleHealth").innerHTML = stats.health.toString();
	document.getElementById("battleAttack").innerHTML = stats.attack.toString();
	document.getElementById("battleMana").innerHTML = stats.mana.toString();
	document.getElementById("battleExp").innerHTML = stats.exp.toString();

	document.getElementById("monsterLv").innerHTML = enemyStats.level.toString();
	document.getElementById("monsterHealth").innerHTML = enemyStats.health.toString();
	document.getElementById("monsterAttack").innerHTML = enemyStats.attack.toString();

	while (i--)
		battle[i].setAttribute("style", "display:block");
}

function run() {
	generateEnemy();
}

