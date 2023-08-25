import {displayResult} from "./outputContainer.js";
import {getTextValue} from "./textInput.js";
import {getDropdownValue} from "./dropdownMenu.js";
import {getRadioButtonValue} from "./radioButtons.js";

export function submitButton(metadata, functionToExecute){
		const submitButton = document.createElement('button');
		submitButton.className = 'submit side-by-side';
		submitButton.textContent = 'Submit';
		
		submitButton.addEventListener('click', (event) => {
				const rawInputs = [];
				const inputFunctions = {
						inputId: getTextValue,
						dropdownMenuId: getDropdownValue,
						radioOptions: getRadioButtonValue
				};
				
				for (let key in inputFunctions) {
						if (metadata[key]) {
								const input = inputFunctions[key](metadata);
								if (input !== null) {
										rawInputs.push(input);
								}
						}
				}
				console.log('rawInputs: ' + rawInputs + ' typeof rawInputs: ' + typeof rawInputs);
				const processedInputs = metadata.processInput ? metadata.processInput(...rawInputs) : rawInputs;
				console.log('processedInputs: ' + processedInputs  + ' typeof processedInputs: ' + typeof processedInputs);
				let result = functionToExecute(...processedInputs);
				displayResult(metadata, result);
		});
		return submitButton;
}
