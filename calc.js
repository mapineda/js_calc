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
	var strNum, numNum;
	var outString = "";
	var result = 0;
	var state = 'add';

	function updateResult () {
		switch (state) {
				
			case 'add':
				result += numNum;
				break;

			case '-':
				result -= numNum;
				break;

			case 'div':
				result /= numNum;

		}

	}
	
	$('#add').click(function(){
		// grab number from input box
		strNum = $('#input').val();
		numNum = parseInt (strNum);
		// valadate data for number and NaN 
		if ((typeof numNum === 'number') && (numNum === numNum)){
			// make our output string
			updateResult();
			outString = outString + String(numNum) + " + ";
			// put result in box
			$('#output').val(outString)
			// clear the input box;
			$('#input').val("");
			state = 'add';

		} else { 
			alert('Please enter a valid numNum.');
		};
			$('#input').focus();
	});

	$('#-').click(function(){
		// grab number from input box
		strNum = $('#input').val();
		numNum = parseInt (strNum);
		// valadate data for number and NaN 
		if ((typeof numNum === 'number') && (numNum === numNum)){
			// make our output string
			updateResult();
			outString = outString + String(numNum) + " - ";
			// put result in box
			$('#output').val(outString)
			// clear the input box;
			$('#input').val("");
			state = '-';

		} else { 
			alert('Please enter a valid numNum.');
		};
			$('#input').focus();
	});

	$('#div').click(function(){
		// grab number from input box
		strNum = $('#input').val();
		numNum = parseInt (strNum);
		// valadate data for number and NaN 
		if ((typeof numNum === 'number') && (numNum === numNum)){
			// make our output string
			updateResult();
			outString = outString + String(numNum) + " / ";
			// put result in box
			$('#output').val(outString)
			// clear the input box;
			$('#input').val("");
			state = 'div';

		} else { 
			alert('Please enter a valid numNum.');
		};
			$('#input').focus();
	});

	$('#enter').click(function(){
		// grab number from input box
		strNum = $('#input').val();
		numNum = parseInt (strNum);
		// valadate data for number and NaN 
		if ((typeof numNum === 'number') && (numNum === numNum)){
			// make our output string
			updateResult();
			outString = outString + String(numNum) + " = " + result;
			// put result in box
			$('#output').val(outString);
			$('#input').val("");
			state = 'add';
			outString = "";
			result = 0;
		} else { 
			alert('Please enter a valid numNum.');
		};
			$('#input').focus();
	});

});
// var calc {

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

// // Add event listeners
// $('#plus').click(function()){
// 	var strNum, numNum;
// 	// grab number from input box
// 	strNum = $('#display').val();
// 	numNum = parseInit (strNum);
// 	// valadate data for number and NaN 
// 		if ((typeof numNum === 'number') && (numNum === numNum)){
// 			alert('You entered' + numNum)  ;
// 		} else { 
// 			alert('Please enter a valid numNum.');
// 		};
// }


