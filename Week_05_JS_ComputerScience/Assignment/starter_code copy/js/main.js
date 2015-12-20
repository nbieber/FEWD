$(document).ready(function() {


	$(".readmore").click(readMore);

	function readMore(event) {

		// Stop link from acting like a link
		event.preventDefault();

		// Show the additional text
		$("#show-this-on-click").slideToggle();

		// Hide the read more link


		// Show the read less link


	}

	$(".readless").click(readLess);

	function readLess(event) {

		// Stop link from acting like a link
		event.preventDefault();

		// Hide the additional text


		// Show the read more link


		// Hide the read less link
	}


	//When user clicks 'Learn More'
	$(".learnmore").click(learnMore);


	function learnMore(event)
	{
		// Stop link from acting like a link
		event.preventDefault();

		// have the span slide down

		// hide the Learn more link
	}



});