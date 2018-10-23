function displayUpgrades(makeAppear) {
	upgradeTime = true;

	var upgrades = document.querySelectorAll(".upgrades");
	var i = upgrades.length;

	document.getElementById("upgradePoints").innerHTML = upgradePoints;
	document.getElementById("healthDisplay").innerHTML = stats.maxHealth;
	document.getElementById("attackDisplay").innerHTML = stats.attack;
	document.getElementById("manaDisplay").innerHTML = stats.maxMana;

	if (makeAppear) {
		while (i--)
			upgrades[i].setAttribute("style", "display:block"); 
	}
		
	else {
		while (i--)
			upgrades[i].setAttribute("style", "display:none");
		upgradeTime = false;
	}
}

function addSkill(elem) {

}

function subtractSkill(elem) {
	console.log(elem.id);
}
