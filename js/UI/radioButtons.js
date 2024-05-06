import {binarySearch} from "../myFunctions/binarySearch.js";

export function radioButtons(metadata) {
		console.log(`Generating radio buttons for ${metadata.title}`);

		const rowContainer = document.createElement('div');
		rowContainer.className = 'radio-container';
		
		for (let i = 0; i < metadata.radioOptions.length; i++) {
				const radioOptionDiv = document.createElement('div');
				radioOptionDiv.className = 'radio-option';

				// radio input button
				const optionInput = document.createElement('input');
				optionInput.name = metadata.name;
				optionInput.type = metadata.type;
				optionInput.value = metadata.radioOptions[i];
				radioOptionDiv.appendChild(optionInput);

				// radio input label
				const optionLabel = document.createElement('label');
				optionLabel.for = metadata.radioOptions[i];
				optionLabel.innerHTML = metadata.radioOptions[i];
				radioOptionDiv.appendChild(optionLabel);
				
				rowContainer.appendChild(radioOptionDiv);
		}
		return rowContainer;
}

export function getRadioButtonValue(metadata) {
		const radioButton = document.querySelector(`input[name="${metadata.name}"]:checked`);
		if (!radioButton) {
				alert('Please select an option.');
				return;
		}
		return radioButton.value;
}

export function resetRadioButtons(metadata) {
		binarySearch.reset();
		const radioButtons = document.querySelectorAll(`input[type="radio"]:checked`);
		radioButtons.forEach((radioButton) => {
				radioButton.checked = false;
		});
}
