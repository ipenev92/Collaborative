$(document).ready(() => {	
	let header = "http://ivanpenev.hopto.org/bootstrap/website/resources/header.html",
    	footer = "http://ivanpenev.hopto.org/bootstrap/website/resources/footer.html";

    // Load header, then apply active
	$('header').load(header, function() {
		$("#practices").hover(function() {
			$("#list_practices").show();
		}, function() {
			$("#list_practices").hide();
		});
		
	    let page = window.location.href.split("/").slice(-1)[0].split(".")[0]; //get file name
	    active(page);
 	});

    // Load footer
    $('footer').load(footer);
});

const active = page => {
	document.getElementById(page).setAttribute('class', 'active');
}