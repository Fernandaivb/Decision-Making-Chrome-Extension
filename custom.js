function randomizer() {
    if ((Math.floor(Math.random() * 4) + 1) == 1) {
        document.getElementById("result").innerHTML = document.getElementById('option1').value;
      }
      else if ((Math.floor(Math.random() * 4) + 1) == 2) {
        document.getElementById("result").innerHTML = document.getElementById('option2').value;
      }
      else if ((Math.floor(Math.random() * 4) + 1) == 3) {
        document.getElementById("result").innerHTML = document.getElementById('option3').value;
      }
      else {
        document.getElementById("result").innerHTML = document.getElementById('option4').value;
      }
}

window.addEventListener("load", function load(event) {
	var element = document.getElementById("randomize");
    element.addEventListener("click", function() {
		randomizer();
    });
});
