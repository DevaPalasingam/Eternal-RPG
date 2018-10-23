var adjectives = ['Bothered', 'Irritated', 'Frustrated', 'Irate', 'Furious', 'Disgusted', 'Somber', 'Lonely', 'Disappointed', 'Dissatisfied', 'Gloomy', 'Depressed', 'Dejected', 'Unhappy', 'Optimistic', 'Happy', 'Thrilled', 'Cheerful', 'Joyful', 'Elated', 'Distressed', 'Frightened', 'Alarmed', 'Frantic', 'Petrified', 'Unsuspecting', 'Bewildered', 'Baffled', 'Out-of-place', 'Burdened', 'Upset', 'Restless', 'Stressed', 'Bored', 'Apathetic'];
var nouns = ['Bunny', 'Pumpkin', 'Villager', 'Alien', 'Witch', 'Orc', 'Grad-Student', 'Dentist', 'Teacher', 'Zombie'];
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
	generateEnemy();
}

function generateEnemy() {
	var name = adjectives[Math.floor(Math.random() * adjectives.length)] + ' ' + nouns[Math.floor(Math.random() * nouns.length)];
	console.log(name);
}