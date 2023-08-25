export function textInput(metadata) {
		
		const inputDiv = document.createElement('div');
		inputDiv.className = 'input-container';
		
		const input = document.createElement('input');
		input.placeholder = metadata.inputPlaceholder;
		input.id = metadata.inputId;
		input.type = metadata.inputType;
		
		inputDiv.appendChild(input);
		return inputDiv;
}

export function getTextValue(metadata) {
		const textValue = document.getElementById(metadata.inputId).value;
		if (!textValue) {
				alert('Please enter a value.');
				return null;
		}
		return textValue;
}

export function resetInput(metadata) {
		document.getElementById(metadata.inputId).value = '';
}