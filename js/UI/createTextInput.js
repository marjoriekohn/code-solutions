export function createTextInput(metadata) {
				const input = document.createElement('input');
				input.placeholder = metadata.inputPlaceholder;
				input.id = metadata.inputId;
				input.type = metadata.inputType;
				return input;
}