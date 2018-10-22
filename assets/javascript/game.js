var hasName = false;

var stats = {
	name: "",
	health: 1,
	attack: 1,
	mana: 1
};

document.onkeyup = function (e) {
	e = e || window.event;

	if (e.key != "Enter" && !hasName) {
		stats.name = stats.name + e.key;
		document.getElementById("keystroke").innerHTML = stats.name;
	}
	else {
		hasName = true;
		document.getElementById("name").innerHTML = stats.name;
	}
}