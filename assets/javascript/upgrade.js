function displayUpgrades(makeAppear) {
	upgradeTime = true;

	var upgrades = document.querySelectorAll(".upgrades");
	var i = upgrades.length;

	document.getElementById("level").innerHTML = stats.level.toString();
	document.getElementById("upgradePoints").innerHTML = upgradePoints.toString();
	document.getElementById("healthDisplay").innerHTML = stats.maxHealth.toString();
	document.getElementById("attackDisplay").innerHTML = stats.attack.toString();
	document.getElementById("manaDisplay").innerHTML = stats.maxMana.toString();

	if (makeAppear) {
		document.getElementById("messageScreen").innerHTML = "Upgrade Time";
		while (i--)
			upgrades[i].setAttribute("style", "display:block"); 
	}
		
	else {
		while (i--)
			upgrades[i].setAttribute("style", "display:none");
		upgradeTime = false;
	}
}

function addSkill(elem, attribute) {
	if (upgradePoints > 0) {
		if (attribute === "health") {
			stats.maxHealth ++;
			upgradePoints --;
			document.getElementById(elem).innerHTML = stats.maxHealth.toString();
		}
		else if (attribute === "attack") {
			stats.attack ++;
			upgradePoints --;
			document.getElementById(elem).innerHTML = stats.attack.toString();
		}
		else if (attribute === "mana") {
			stats.maxMana ++;
			upgradePoints --;
			document.getElementById(elem).innerHTML = stats.maxMana.toString();
		}
	}
	else
		document.getElementById("messageScreen").innerHTML = "Sorry, no more points";
	document.getElementById("upgradePoints").innerHTML = upgradePoints.toString();
}

function subtractSkill(elem, attribute) {
	if (attribute === "health" && stats.maxHealth > 1) {
		stats.maxHealth --;
		upgradePoints ++;
		document.getElementById(elem).innerHTML = stats.maxHealth.toString();
	}
	else if (attribute === "attack" && stats.attack > 1) {
		stats.attack --;
		upgradePoints ++;
		document.getElementById(elem).innerHTML = stats.attack.toString();
	}
	else if (attribute === "mana" && stats.maxMana > 1) {
		stats.maxMana --;
		upgradePoints ++;
		document.getElementById(elem).innerHTML = stats.maxMana.toString();
	}
	document.getElementById("upgradePoints").innerHTML = upgradePoints.toString();
	document.getElementById("messageScreen").innerHTML = "Upgrade Time";
}
