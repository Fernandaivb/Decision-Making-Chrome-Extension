window.addEventListener("load", function load(event) {
	var changeColor = document.getElementsByClassName("button");
	changeColor.addEventListener("click", function() {
		var clickEvent = document.getElementsByClassName("button").style.background = "#FFFFD8 
		if (clickEvent == "button1")
			changeColor();
		else if (clickEvent == "button2")
			changeColor