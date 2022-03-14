function coinFlip() {
    if (Math.round(Math.random())) {
		document.getElementById("coin").src = "images/coin_heads.jpg";
	} else {
        document.getElementById("coin").src = "images/coin_tails.jpg";
	}
}

window.addEventListener("load", function load(event) {
	var tryAgain = document.getElementById("try_again");
	tryAgain.addEventListener("click", function() {
		coinFlip();
	});
});







