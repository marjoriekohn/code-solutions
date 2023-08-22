import {getFirstValue} from './myFunctions/getFirstValue.js';
import {convertMinutes} from './myFunctions/convertMinutes.js';
import {lessThan100} from './myFunctions/lessThan100.js';
import {validateAndIdentifyCard} from './myFunctions/validateAndIdentifyCard.js';
import {generateRandomDNA} from './myFunctions/generateRandomDNA.js';
import {randomNumber} from './myFunctions/randomNumber.js';

// copy code function
export function copyFunctionCode(functionName, buttonDiv) {
		console.log('copyFunctionCode for ', functionName);
		let code = '';

		switch (functionName) {
				case 'getFirstValue':
						code = getFirstValue.toString();
						break;
				case 'convertMinutes':
						code = convertMinutes.toString();
						break;
				case 'lessThan100':
						code = lessThan100.toString();
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