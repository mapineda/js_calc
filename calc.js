// calculations for jsCalc exercise GA WDI-02-w02d05  Deddens Pineda

// arrange calculation functions in a calc object
// start off with two functions: add and subtract
// need to validate input data also


// Main calculation function object:

$(function(){
	
	// Add event listeners
	var strNum, numNum;
	var outStr = "";
	var result = 0;
	var state = 'add';
	// get the input field jQuery object
	var input = $("#input");

	input.focus();
	function updateResult () {
		switch (state) {
				
			case 'add':
				result += numNum;
				break;

			case '-':
				result -= numNum;
				break;

			case 'divi':
				result /= numNum;
				break;

			case "mult":
				result *= numNum;
				break;
		}
	}

// number keys handlers	
	$('#a1').click(function(){
		input.val(input.val() + "1" );
		$('#input').focus();
	});

	$('#a2').click(function(){
		input.val(input.val() + "2" );
		$('#input').focus();
	});
	$('#a3').click(function(){
		input.val(input.val() + "3" );
		$('#input').focus();
	});
	$('#a4').click(function(){
		input.val(input.val() + "4" );
		$('#input').focus();
	});
	$('#a5').click(function(){
		input.val(input.val() + "5" );
		$('#input').focus();
	});
	$('#a6').click(function(){
		input.val(input.val() + "6" );
		$('#input').focus();
	});
	$('#a7').click(function(){
		input.val(input.val() + "7" );
		$('#input').focus();
	});
	$('#a8').click(function(){
		input.val(input.val() + "8" );
		$('#input').focus();
	});
	$('#a9').click(function(){
		input.val(input.val() + "9" );
		$('#input').focus();
	});
	$('#a0').click(function(){
		input.val(input.val() + "0" );
		$('#input').focus();
	});

	$('#add').click(function(){
		// grab number from input box
		strNum = $('#input').val();
		numNum = parseInt (strNum);
		// valadate data for number and NaN 
		if ((typeof numNum === 'number') && (numNum === numNum)){
			// make our output string
			updateResult();
			outStr = outStr + String(numNum) + " + ";
			// put result in box
			$('#output').val(outStr)
			// clear the input box;
			$('#input').val("");
			state = 'add';

		} else { 
			alert('Please enter a valid numNum.');
		};
			$('#input').focus();
	});

	$('#minus').click(function(){
		// grab number from input box
		strNum = $('#input').val();
		numNum = parseInt (strNum);
		// valadate data for number and NaN 
		if ((typeof numNum === 'number') && (numNum === numNum)){
			// make our output string
			updateResult();
			outStr = outStr + String(numNum) + " - ";
			// put result in box
			$('#output').val(outStr)
			// clear the input box;
			$('#input').val("");
			state = '-';

		} else { 
			alert('Please enter a valid numNum.');
		};
			$('#input').focus();
	});

	$('#divi').click(function(){
		// grab number from input box
		strNum = $('#input').val();
		numNum = parseInt (strNum);
		// valadate data for number and NaN 
		if ((typeof numNum === 'number') && (numNum === numNum)){
			// make our output string
			updateResult();
			outStr = "("+outStr + String(numNum) + ") / ";
			// put result in box
			$('#output').val(outStr)
			// clear the input box;
			$('#input').val("");
			state = 'divi';

		} else { 
			alert('Please enter a valid numNum.');
		};
			$('#input').focus();
	});

	$('#mult').click(function(){
		// grab number from input box
		strNum = $('#input').val();
		numNum = parseInt (strNum);
		// valadate data for number and NaN 
		if ((typeof numNum === 'number') && (numNum === numNum)){
			// make our output string
			updateResult();
			outStr = "("+ outStr + String(numNum) + ") * ";
			// put result in box
			$('#output').val(outStr)
			// clear the input box;
			$('#input').val("");
			state = 'mult';

		} else { 
			alert('Please enter a valid numNum.');
		};
			$('#input').focus();
	});

	$('#enter').click(function(){
		var msgStr;
		// grab number from input box
		strNum = $('#input').val();
		numNum = parseInt (strNum);

		// valadate data for number and NaN 
		if ((typeof numNum === 'number') && (numNum === numNum)){
			// make our output string
			updateResult();
			outStr = outStr + String(numNum) + " = " + result;
			// put result in box
			$('#output').val(outStr);
			msgStr = "<p>"+outStr+"</p>";
			alert(msgStr);
			$('#msg').append(msgStr);
			$('#input').val("");
			state = 'add';
			outStr = "";
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


