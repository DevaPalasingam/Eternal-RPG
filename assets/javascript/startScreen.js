function startGame () {
	gameStarted = true;
	document.getElementById("messageScreen").innerHTML = "What's your name";

	nameTime = true;
}

function makeName (keystroke) {
	if (keystroke != "Enter") {
		if (keystroke.length === 1) {
			stats.name = stats.name + keystroke;
		}
		else if (keystroke === "Backspace") {
			stats.name = stats.name.slice(0, -1);
		}
		document.getElementById("keystroke").innerHTML = stats.name;
	}
	else {
		nameTime = false;
		displayUpgrades(true);
	}
}