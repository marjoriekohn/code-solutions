import {timeConversion} from '../myFunctions/timeConversion.js';
import {luhnAlgorithm} from '../myFunctions/luhnAlgorithm.js';
import {dnaSequencing} from '../myFunctions/dnaSequencing.js';
import {randomNumber} from '../myFunctions/randomNumber.js';
import {fibonacciSequence} from "../myFunctions/Fibonacci.js";
import {factorial} from "../myFunctions/factorial.js";
import {binarySearch} from "../myFunctions/binarySearch.js";
import {binarySort} from "../myFunctions/binarySort.js";

// copy code function
export function copyFunctionCode(functionName, targetElement) {
		console.log('copyFunctionCode for ', functionName);
		let code = '';

		switch (functionName) {
				case 'timeConversion':
						code = timeConversion.toString();
						break;
				case 'luhnAlgorithm':
						code = luhnAlgorithm.toString();
						break;
				case 'dnaSequencing':
						code = dnaSequencing.toString();
						break;
				case 'randomNumber':
						code = randomNumber.toString();
						break;
				case 'binarySearch':
						code = binarySearch.toString();
						break;
				case	'factorial':
						code = factorial.toString();
						break;
				case 'fibonacciSequence':
						code = fibonacciSequence.toString();
						break;
				case 'binarySort':
						code = binarySort.toString();
						break;
		}
		console.log("Captured code:", code);

		navigator.clipboard.writeText(code).then(function() {
				console.log('Copying to clipboard was successful!');
		}, function(err) {
				console.error('Could not copy text: ', err);
		});

		const copyIcon = targetElement.querySelector('i');
		copyIcon.className = '';
		copyIcon.innerHTML = 'copied';
		setTimeout(() => {
				copyIcon.className = 'fa-solid fa-clipboard';
				copyIcon.innerHTML = '';
		}, 2000);
}