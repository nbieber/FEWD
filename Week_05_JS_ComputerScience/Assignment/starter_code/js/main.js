// Don't run code until HTML has loaded
$(document).ready(function () {

	function readMore(event)
	{
		// Prevents the default behavior
		event.preventDefault();

		// Show the additional text and "Read Less" link
		$(".hide").show();

		// Hide the "Read More"
		$(".readmore").hide();
	}

	$(".readmore a").click(readMore);


});

