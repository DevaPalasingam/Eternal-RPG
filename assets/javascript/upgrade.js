function displayUpgrades (makeAppear) {
	var upgrades = document.querySelectorAll(".upgrades");
	var i = upgrades.length;

	if (makeAppear)
		while (i--)
			upgrades[i].setAttribute("style", "display:block");
	else
		while (i--)
			upgrades[i].setAttribute("style", "display:none");
}

function addSkill (elem) {

}

function subtractSkill (elem) {
	console.log(elem.id);
}
