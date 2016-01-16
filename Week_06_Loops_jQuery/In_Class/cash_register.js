// When I press a key in the textbox
// $("#newEntry").keypress(function(event) {
// 	// If it is the enter key
// 	if(event.which === 13)
// 	{
// 		// Call addToTotal
// 		addToTotal();
// 	}
// });

$("#entry").submit(addToTotal);

var total = 0;
function addToTotal(event)
{
	// Prevent default behavior
	event.preventDefault();

	// Get the number from the textbox - make sure it's a number!
	var number = parseFloat($("#newEntry").val());

	// Clear the textbox
	$("#newEntry").val("");

	// Add it to the total
	total = total + number;
	alert(total);

	// Print out the new total

}