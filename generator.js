function randomNumber() {
	var min = parseInt(document.getElementsByClassName('min')[0].value);
	var max = parseInt(document.getElementsByClassName('max')[0].value);
	
	

	var result = Math.floor(Math.random() * (max - min + 1)) + min;
	
	if ((isNaN(min)) || (isNaN(max)) || (isNaN(result))) {
		document.getElementById('result').innerHTML = "Try again";
	}
	else{
		document.getElementById('result').innerHTML = result;
	}
}

window.addEventListener("load", function load(event) {
	var element = document.getElementById("randomize");
	element.addEventListener("click", function() {
		randomNumber();
	});
});