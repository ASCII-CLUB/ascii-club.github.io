// ENV Vars
const prodURL = "ascii-club.github.io"
const baseURL = window.location.hostname;
const isProd = prodURL == baseURL;
const devDiscordContactWebhook = "https://discord.com/api/webhooks/1407095671072358513/w3mHXxzAfBaj45iyQMkKHgBCWtZgQITtXqL2_4DW_HsCOa-eRIMLq938svmoBcunu1Kz";
const prodDiscordContactWebhook = "https://discord.com/api/webhooks/1407097018718879925/LF_CT2JOeN_O2qxuBJVmQogeEcSPzIKYfxBjYw_g0Aii-MPO4mi9A1TC1mayNjilw51S";

async function submitContactForm(ev) {
	ev.preventDefault();
	const name = document.getElementById("contact-name").value;
	const email = document.getElementById("contact-email").value;
	const comment = document.getElementById("contact-comment").value;

	document.getElementById("contact-submit").style.display = "none";

	const webhookbody = {
		embeds: [{
			title: "Contact Form (website)",
			fields: [
				{ name: "name", value: name },
				{ name: "email", value: email },
				{ name: "comment", value: comment },
			]
		}]
	};

	const webhookurl = isProd ? prodDiscordContactWebhook : devDiscordContactWebhook;

	const response = await fetch(webhookurl, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(webhookbody),
	});

	if (response.ok) {
		alert("Message has been recieved by club officers");
	} else {
		alert("There was an error, please try again later");
		document.getElementById("contact-submit").style.display = "unset";
	}
}

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