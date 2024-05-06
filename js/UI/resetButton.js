import {resetInput} from "./textInput.js";
import {resetDropdown} from "./dropdownMenu.js";
import {binarySearch} from "../myFunctions/binarySearch.js";
import {resetRadioButtons} from "./radioButtons.js";

export function resetButton(metadata){
		const resetButton = document.createElement('button');
		resetButton.className = 'reset side-by-side';
		resetButton.textContent = 'Reset'
		
		resetButton.addEventListener('click', (event) => {
				if (event.target.className.includes('reset')) {
						if (metadata.dropdownMenuId) {
								resetDropdown(metadata);
						}
						if (metadata.inputId) {
								resetInput(metadata);
						}
						if (metadata.type) {
								resetRadioButtons(metadata);
						}
						if(metadata.autoExecute) {
								document.getElementById('computerGuessNumberOutput').textContent = binarySearch();
						} else {
								document.getElementById(metadata.outputId).innerHTML = '';
						}
				}
		});
		return resetButton;
}