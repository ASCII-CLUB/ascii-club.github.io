async function submitContactForm() {
	const name = document.getElementById("contact-name").value;
	const email = document.getElementById("contact-email").value;
	const comment = document.getElementById("contact-comment").value;

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

	const webhookurl = "https://discord.com/api/webhooks/1407097018718879925/LF_CT2JOeN_O2qxuBJVmQogeEcSPzIKYfxBjYw_g0Aii-MPO4mi9A1TC1mayNjilw51S";

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
	}
}

function horse() {
	window.location.href = "/images/images.jpg";
}