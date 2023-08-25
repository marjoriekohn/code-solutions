import {convertMinutes} from '../myFunctions/convertMinutes.js';
import {validateAndIdentifyCard} from '../myFunctions/validateAndIdentifyCard.js';
import {generateRandomDNA} from '../myFunctions/generateRandomDNA.js';
import {randomNumber} from '../myFunctions/randomNumber.js';
import {fibonacciSequence} from "../myFunctions/Fibonacci.js";
import {factorial} from "../myFunctions/factorial.js";
import {computerGuessNumber} from "../myFunctions/computerGuessNumber.js";

// copy code function
export function copyFunctionCode(functionName, targetElement) {
		console.log('copyFunctionCode for ', functionName);
		let code = '';

		switch (functionName) {
				case 'convertMinutes':
						code = convertMinutes.toString();
						break;
				case 'validateAndIdentifyCard':
						code = validateAndIdentifyCard.toString();
						break;
				case 'generateRandomDNA':
						code = generateRandomDNA.toString();
						break;
				case 'randomNumber':
						code = randomNumber.toString();
						break;
				case 'computerGuessNumber':
						code = computerGuessNumber.toString();
						break;
				case	'factorial':
						code = factorial.toString();
						break;
				case 'fibonacciSequence':
						code = fibonacciSequence.toString();
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