export function createSubmitButton(metadata, functionToExecute){
		const submitButton = document.createElement('button');
		submitButton.className = 'submit side-by-side';
		submitButton.textContent = metadata.submitButtonText;
		
		submitButton.addEventListener('click', (event) => {
				const rawInputs = [
						metadata.inputId ? document.getElementById(metadata.inputId).value : null,
						metadata.dropdownMenuId ? document.getElementById(metadata.dropdownMenuId).value : null,
						metadata.type ? document.querySelector(`input[name="${metadata.name}"]:checked`).value : null
				].filter(val => val !== null); // removes null values from the array (for functions with only 1 input)
				
				const processedInputs = metadata.processInput ? metadata.processInput(...rawInputs) : rawInputs;
				let result;
				try {
						if (metadata.expectsArray) {
								result = functionToExecute(processedInputs); // If the function expects a single array as its argument
						} else {
								result = functionToExecute(...processedInputs); // If the function expects multiple arguments
						}
				} catch (error) {
						console.error("Error occurred during processing input or executing function:", error.message);
				}
				document.getElementById(metadata.outputId).innerHTML = metadata.generateOutputText(result);
				console.log("Result:", result);
		});
		return submitButton;
}
