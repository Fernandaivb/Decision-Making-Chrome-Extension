function randomNumber() {
	var min = parseInt(document.getElementsByClassName('min')[0].value);
	var max = parseInt(document.getElementsByClassName('max')[0].value);
	
	var result = Math.floor(Math.random() * (max - min + 1)) + min;
	
	document.getElementById('result').innerHTML = result;
}

window.addEventListener("load", function load(event) {
	var element = document.getElementById("randomize");
	element.addEventListener("click", function() {
		randomNumber();
	});
});

function customErrorMsg() {
	var error = document.getElementById("error");
	if (isNaN(document.getElementById("min").value)) {
		error.textContent = "Please enter a number";
		error.style.color = "red"
	} else {
		error.textContent = "";
	}
}
