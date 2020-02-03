window.onload = function() { // Onload
	let url   = window.location.href,
		pages = ["About", "Contact", "Index", "Lawyers", "Practices"];
	active(pages, url);
}

$(document).ready(() => {
	let header = "http://ivanpenev.hopto.org/bootstrap/lawfirm%20website/resources/header.html",
    	footer = "http://ivanpenev.hopto.org/bootstrap/lawfirm%20website/resources/footer.html";

    // Load the HTML contents of the header into <header>
    $('header').load(header);
    // Load the HTML contents of the footer into <footer>
    $('footer').load(footer);
});

/* Active Class */
const active = (pages, url) => {
	let arr = url.split("/"),
		page = arr[arr.length-1].split(".")[0];

	console.log(arr);
	console.log(page);

	document.getElementById(page).setAttribute('class', 'active');
}