$(document).ready(function () {
	// Initialize collapse button
	$(".button-collapse").sideNav({
		menuWidth: 240, 
		edge: 'right', // menu alignment
		closeOnClick: true // close side-nav on <a> clicks
	});

	// Initialize collapsible (uncomment the line below if you use the dropdown variation)
	//$('.collapsible').collapsible();
});