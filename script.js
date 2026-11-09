function horse() {
	window.location.href = "/images/images.jpg";
}

function kat() {
	window.location.href = "https://kittkat.xyz/";
}

async function asciiAnim() {
	var btn = document.getElementById("ascii-anim-btn");
	btn.classList.remove("btn-info");
	btn.classList.add("btn-warning");
	btn.setAttribute("onclick", "");

	var element = document.getElementById("ascii-logo-code");
	element.removeAttribute("onclick");
	var animFileContent = loadFile("/assets/ascii-anim.txt");
	var frames = animFileContent.split("---");
	for (var i = 0; i < frames.length; i++) {
		element.innerHTML = frames[i] + "\n";
		await sleep(1000 / 3);
	}

	btn.classList.add("btn-info");
	btn.classList.remove("btn-warning");
	btn.setAttribute("onclick", "asciiAnim()");
}

function loadFile(filePath) {
	var result = null;
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", filePath, false);
	xmlhttp.send();
	if (xmlhttp.status == 200) {
		result = xmlhttp.responseText;
	}
	return result;
}

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}