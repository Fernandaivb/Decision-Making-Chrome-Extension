function coinFlip() {
    document.getElementById("coin_flip").innerHTML
        = "<img src = 'images/coin_flip.gif'>";
    if (Math.floor(Math.random()))
	document.getElementById("coin_flip").innerHTML 
	    = "<img src = 'images/coin_heads.jpg'>";
    else
        document.getElementById("coin_flip").innerHTML
	    = "<img src = 'images/coin_tails.jpg'>";
}
