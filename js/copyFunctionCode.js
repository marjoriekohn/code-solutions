import { getFirstValue } from './myFunctions/getFirstValue.js';
import { convertMinutes } from './myFunctions/convertMinutes.js';
import { lessThan100 } from './myFunctions/lessThan100.js';
import { validateAndIdentifyCard } from './myFunctions/validateAndIdentifyCard.js';
import { generateRandomDNA } from './myFunctions/generateRandomDNA.js';
import { randomNumber } from './myFunctions/randomNumber.js';


// copy code function
export function copyFunctionCode(functionName, button) {
		let code = '';

		switch (functionName) {
				case 'getFirstValue':
						code = `const ${functionName} = ${getFirstValue.toString()}`;
						break;
				case 'convertMinutes':
						code = `const ${functionName} = ${convertMinutes.toString()}`;
						break;
				case 'lessThan100':
						code = `const ${functionName} = ${lessThan100.toString()}`;
						break;
				case 'validateAndIdentifyCard':
						code = `const ${functionName} = ${validateAndIdentifyCard.toString()}`;
						break;
				case 'generateRandomDNA':
						code = `const ${functionName} = ${generateRandomDNA.toString()}`;
						break;
				case 'randomNumber':
						code = `const ${functionName} = ${randomNumber.toString()}`;
						break;
		}

		const el = document.createElement('textarea');
		el.value = code;
		document.body.appendChild(el);
		el.select();
		document.execCommand('copy');
		document.body.removeChild(el);

		const copyMessage = button.nextElementSibling;
		button.children.item(0).className = '';
		button.children[0].innerHTML = 'copied';
		setTimeout(() => {
				button.children[0].className = 'fa-solid fa-clipboard';
				button.children[0].innerHTML = '';
		}, 2000);
}