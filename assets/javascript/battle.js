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

	var name = adjectives[Math.floor(Math.random() * adjectives.length)] + ' ' + nouns[Math.floor(Math.random() * nouns.length)];
	name = isBoss ? ("Boss: " + name) : name;
	document.getElementById("monster").innerHTML = name;

	var level;
	if (isBoss)
		level = Math.floor(Math.random() * (5 + 1) ) + stats.level;
	else
		level = Math.floor(Math.random() * stats.level) + 1;

	var health = Math.floor(Math.random() * level) + 1 + stats.attack + stats.maxMana;
	var attack = Math.floor(Math.random() * level) + 1;
	var exp = Math.floor(Math.random() * level) + 1;

	enemyStats.name = name;
	enemyStats.level = level;
	enemyStats.health = health;
	enemyStats.attack = attack;
	enemyStats.exp = exp;

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

	document.getElementById("secondMessage").innerHTML = enemyStats.name + " appeared";
	document.getElementById("monsterLv").innerHTML = enemyStats.level.toString();
	document.getElementById("monsterHealth").innerHTML = enemyStats.health.toString();
	document.getElementById("monsterAttack").innerHTML = enemyStats.attack.toString();

	while (i--)
		battle[i].setAttribute("style", "display:block");
}

function strike() {
	document.getElementById("messageScreen").innerHTML = "Attack for " + stats.attack.toString() + " damage";
	checkEnemy(stats.attack);
}

function fireball() {
	var manaCost = Math.floor(stats.maxMana / 10) + 1;
	console.log(manaCost);
	var damage = stats.maxMana * 3;
	if (stats.mana >= manaCost) {
		stats.mana = stats.mana - manaCost;
		document.getElementById("battleMana").innerHTML = stats.mana;
		checkEnemy(damage);
	}
	else
		document.getElementById("messageScreen").innerHTML = "Not enough Mana";
}

function heal() {
	var manaCost = Math.floor(stats.maxMana / 5) + 1;
	var healthIncrease = Math.floor(stats.maxHealth / 3) + 1;
	if (stats.mana >= manaCost) {
		stats.mana = stats.mana - manaCost;
		if (healthIncrease > (stats.maxHealth - stats.health)) {
			document.getElementById("messageScreen").innerHTML = "Heal " + (stats.maxHealth - stats.health) + " HP";
			stats.health = stats.maxHealth;
		}
		else {
			stats.health = stats.health + healthIncrease;
			document.getElementById("messageScreen").innerHTML = "Heal " + healthIncrease + " HP";
			console.log("healing");
		}
		document.getElementById("battleHealth").innerHTML = stats.health;
		document.getElementById("battleMana").innerHTML = stats.mana;
		checkEnemy(0);
	}
	else
		document.getElementById("messageScreen").innerHTML = "Not enough Mana";
}

function run() {
	var x = (stats.level < 5) ? 1 : 5
	if (x < stats.health) {
		checkPlayer(x);
		document.getElementById("messageScreen").innerHTML = "Run and take " + x + " damage";
		generateEnemy();
	}
	else {
		gameOver();
	}
}

function checkEnemy(damage) {
	if (damage >= enemyStats.health) {
		stats.exp = stats.exp + enemyStats.exp;
		document.getElementById("battleExp").innerHTML = stats.exp.toString();
		document.getElementById("messageScreen").innerHTML = "+" + enemyStats.exp.toString() + " Exp";
		if (stats.exp >= stats.nextLv)
			levelUp();
		else
			generateEnemy();
	}
	else {
		enemyStats.health = enemyStats.health - damage;
		document.getElementById("monsterHealth").innerHTML = enemyStats.health.toString();
		document.getElementById("secondMessage").innerHTML = enemyStats.name.toString() + " attacks for " + enemyStats.attack.toString() + " damage";
		checkPlayer(enemyStats.attack);
	}
}

function checkPlayer(damage) {
	if (damage >= stats.health) {
		gameOver();
	}
	else {
		stats.health = stats.health - damage;
		document.getElementById("battleHealth").innerHTML = stats.health;
	}
}

function levelUp() {
	var battle = document.querySelectorAll(".battle");
	var i = battle.length;

	upgradePoints = upgradePoints + Math.floor(Math.random() * stats.level) + 1;
	stats.level ++;
	stats.exp = stats.exp - stats.nextLv;
	stats.nextLv = stats.nextLv * 2

	while (i--)
		battle[i].setAttribute("style", "display:none");

	displayUpgrades(true);
}
