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
