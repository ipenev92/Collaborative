window.onload = function() { // Onload
	let url   = window.location.href,
		pages = ["About", "Contact", "Index", "Lawyers", "Practices"];
	active(pages, url);
}

$(document).ready(() => {
    // Load the HTML contents of the header into <header>
    $('header').load('https://raw.githubusercontent.com/ipenev92/Bootstrap/master/lawfirm%20website/resources/header.html?token=AGNJPYHTYUSHDCIPUJHHJWS6HB2NC');
    // Load the HTML contents of the footer into <footer>
    $('footer').load('https://raw.githubusercontent.com/ipenev92/Bootstrap/master/lawfirm%20website/resources/footer.html?token=AGNJPYFYYKO5UJSEWNGF33C6HBZ24');
});

/* Active Class */
const active = (pages, url) => {
	let arr = url.split("/"),
		page = arr[arr.length-1].split(".")[0];

	document.getElementById(page).setAttribute('class', 'active');
}