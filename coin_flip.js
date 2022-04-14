function coinFlip() {
	document.getElementById("coin").style.width = "75%";
	document.getElementById("coin").style.height = "75%";
    if (Math.round(Math.random())) {
		document.getElementById("coin").src = "images/coin_heads.jpg";
	} else {
        document.getElementById("coin").src = "images/coin_tails.jpg";
	}
	setTimeout(function() {
		document.getElementById("coin").style.width = "100%";
		document.getElementById("coin").style.height = "100%";
		document.getElementById("coin").src = "images/coin_flip_2.gif";
	}, 3000);
}

window.addEventListener("load", function load(event) {
	var tryAgain = document.getElementById("try_again");
	tryAgain.addEventListener("click", function() {
		coinFlip();
		
	});
});







