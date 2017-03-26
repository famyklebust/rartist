$(document).ready(function () {
	$(".button-collapse").sideNav({
		menuWidth: 240,
		edge: 'right', // menu alignment
		closeOnClick: true // close side-nav on <a> clicks
	});
	
	$('#lastfm-modal').modal({
		dismissible: true,
		startingTop: '4%',
		endingTop: '10%'
	});
});