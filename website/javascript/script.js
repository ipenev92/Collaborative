$(document).ready(() => {	
	let header = "http://ivanpenev.hopto.org/bootstrap/website/resources/header.html",
    	footer = "http://ivanpenev.hopto.org/bootstrap/website/resources/footer.html";

    // Load header, then apply active
	$('header').load(header, function() {
	    let page = window.location.href.split("/").slice(-1)[0].split(".")[0]; //get file name
	    active(page);

	    console.log(page);

	    //if ()
    	writePostBreadcrumb(page);
 	});

    // Load footer
    $('footer').load(footer);
});

const active = page => {
	let id = "";

	switch (page) {
		case "prenuptial": case "bride": case "divorce":
			id = "practices";
			break;
		default:
			id = page;
	}

	document.getElementById(id).setAttribute('class', 'active');
}

const writePostBreadcrumb = page => {
	let result = "";
	switch (page) {
		case "prenuptial":
			;
			break;
		case "bride":
			;
			break;
		case "divorce":
			;
			break;
	}
}