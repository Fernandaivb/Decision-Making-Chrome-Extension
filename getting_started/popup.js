//set the element that is changeable in the HTML page
let changeColor = document.getElementById("changeColor");

//fetch the color from the storage with storage API
chrome.storage.sync.get("color", ({ color}) => {
	changeColor.style.backgroundColor = color;
});

//when the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("click", async () => {
	let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
	
	chrome.scripting.executeScript({
		target: { tabId: tab.id },
		function: setPageBackgroundColor,
	});
});

//body of this function will be executed as a content script inside current page
function setPageBackgroundColor() {
	chrome.storage.sync.get("color", ({ color }) => {
		document.body.style.backgroundColor = color;
	});
}