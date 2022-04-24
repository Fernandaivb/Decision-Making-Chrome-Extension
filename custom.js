window.addEventListener("load", function load(event) {
  var yellow = document.getElementById('yellow');
  var option1 = document.getElementById('option1');
  var magenta = document.getElementById('magenta');
  var option2 = document.getElementById('option2');
  var orange = document.getElementById('orange');
  var option3 = document.getElementById('option3');
  var green = document.getElementById('green');
  var option4 = document.getElementById('option4');
	var replace = document.getElementById("execute");
	replace.addEventListener("click", function() {
    yellow.innerText = "\n" + option3.value;
    magenta.innerText = "\n" + option1.value;
    orange.innerText = "\n" + option4.value;
    green.innerText = "\n" + option2.value;
	});
});

function rotateFunction(){
    var min = 1024;
    var max = 9999;
    var deg = Math.floor(Math.random() * (max - min)) + min;
    document.getElementById('box').style.transform = "rotate("+deg+"deg)";
    var element = document.getElementById('mainbox');
}

window.addEventListener("load", function load(event) {
	var element = document.getElementsByClassName("spin");
  if (element) {
  	element[0].addEventListener("click", function() {
  		rotateFunction();
	  });
  }
});
