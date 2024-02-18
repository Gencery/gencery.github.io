(function createLoadingDisplay() {
	let loadingDisplay = document.createElement("div");
	loadingDisplay.setAttribute("id", "loaderContainer");
	//
	loadingDisplay.innerHTML = `<div class="loader"></div>
   <p id="loaderMsg" class="loaderMsg"></p>`;
	document.body.append(loadingDisplay);
})();

function toggleLoadingDisplay(msg) {
	let loadingScreen = document.getElementById("loaderContainer");
	if (window.getComputedStyle(loadingScreen).visibility == "hidden") {
		loadingScreen.style.visibility = "visible";
	} else {
		loadingScreen.style.visibility = "hidden";
	}
	if (msg) {
		document.getElementById("loaderMsg").innerText = msg;
	}
}
