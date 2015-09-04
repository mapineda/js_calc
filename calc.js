// calculations for jsCalc exercise GA WDI-02-w02d05  Deddens Pineda

// arrange calculation functions in a calc object
// start off with two functions: add and subtract
// need to validate input data also


// Main calculation function object:
$(function(){
	// var calc = {

	// 	function add (x,y){
	// 		return (x+y);
	// 	},

	// 	function subtract (x,y){
	// 		return (x-y);
	// 	}

	// 	// Add more functions here
	// }

	// function validate (userString){
	// 	// change sting to number
		
	// 	parseInit (userString);
	// 	// do validation

	// 	// return false if not valid or return number if valid
	// }

	// Add event listeners
	$('#enter').click(function(){
		var strNum, numNum;
		// grab number from input box
		strNum = $('#input').val();
		console.log (strNum);
		numNum = parseInt (strNum);
		// valadate data for number and NaN 
			if ((typeof numNum === 'number') && (numNum === numNum)){
				alert('You entered' + numNum)  ;
			} else { 
				alert('Please enter a valid numNum.');
			};
	});
});
