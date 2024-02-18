//Add a background video
// bgVideo(
// 	"https://www.pexels.com/download/video/4316363/?fps=29.97&h=720&w=1280"
// );
bgVideo("./Assets/img/bgVideo.mp4");

function loadResource(type, url) {
	//
	let resource = null;
	if (type == "script") {
		resource = document.createElement("script");
		resource.setAttribute("src", url);
		//
		document.body.append(resource);
	} else if (type == "style") {
		resource = document.createElement("link");
		resource.setAttribute("rel", "stylesheet");
		resource.setAttribute("href", url);
		//
		document.getElementsByTagName("head")[0].append(resource);
	} else {
		console.log("type should be either style or script!");
	}
}

loadResource("script", "./Assets/js/components/loading.js");
loadResource("style", "./Assets/scss/components/_loaderDisplay.css");

function loadPage(page) {
	loadResource("script", `./Assets/js/pages/${page}.js`);

	page.view;
}
