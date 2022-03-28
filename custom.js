window.addEventListener("load", function load(event) {
	var element = document.getElementById("randomize");
    element.addEventListener("click", function() {
		print();
    });
});

function print() {
    document.getElementById("result").innerHTML = document.getElementById('option1').value;
}
