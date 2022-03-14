function coinFlip() {
	var coinImage = document.createElement("div");
	coinImage.id = "side";
    coinImage.innerHTML = "<img src = 'images/coin_flip.gif'>";
	document.body.appendChild(coinImage);
    if (Math.round(Math.random())) {
		coinImage.innerHTML = "<img src = 'images/coin_heads.jpg'>";
	} else {
        coinImage.innerHTML = "<img src = 'images/coin_tails.jpg'>";
	}
}

window.addEventListener("load", function load(event) {
	var tryAgain = document.getElementById("try_again");
	tryAgain.addEventListener("click", function() {
		coinFlip();
	});
});

document.getElementById("try_again").addEventListener("click", coinFlip);





