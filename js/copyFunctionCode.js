import {convertMinutes} from './myFunctions/convertMinutes.js';
import {validateAndIdentifyCard} from './myFunctions/validateAndIdentifyCard.js';
import {generateRandomDNA} from './myFunctions/generateRandomDNA.js';
import {randomNumber} from './myFunctions/randomNumber.js';
import {fibonacciSequence} from "./myFunctions/Fibonacci.js";
import {factorial} from "./myFunctions/factorial.js";
import {computerGuessNumber} from "./myFunctions/binarySearch.js";

// copy code function
export function copyFunctionCode(functionName, buttonDiv) {
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

		const el = document.createElement('textarea');
		el.value = code;
		document.body.appendChild(el);
		el.select();
		document.execCommand('copy');
		document.body.removeChild(el);

		const copyIcon = buttonDiv.children.item(1).children.item(0);
		copyIcon.className = '';
		copyIcon.innerHTML = 'copied';
		setTimeout(() => {
				copyIcon.className = 'fa-solid fa-clipboard';
				copyIcon.innerHTML = '';
		}, 2000);
}