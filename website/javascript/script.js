$(document).ready(() => {	
	let header = "http://ivanpenev.hopto.org/bootstrap/website/resources/header.html",
    	footer = "http://ivanpenev.hopto.org/bootstrap/website/resources/footer.html";

    // Load header, then apply active
	$('header').load(header, function() {
	    let page = window.location.href.split("/").slice(-1)[0].split(".")[0]; //get file name
	    active(page);

	    let post_pages = ["prenuptial", "bride", "divorce"];

	    if (post_pages.includes(page)) {
	    	writePostBreadcrumb(page);
	    }
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
	let result = "",
		link = "";

	switch (page) {
		case "prenuptial":
			result = "Prenuptial Agreement";
			link = "post.html?titulo=Prenuptial Agreement&imagen=images/prenuptial.jpg";
			break;
		case "bride":
			result = "Marriage";
			link = "post.html?titulo=Marriage&imagen=images/bride.jpg";
			break;
		case "divorce":
			result = "Divorce";
			link = "post.html?titulo=Divorce&imagen=images/divorce.jpg";
			break;
	}

	document.getElementById("post_breadcrumb").innerHTML += result;
	document.getElementById("post_breadcrumb").setAttribute("href", link);
}