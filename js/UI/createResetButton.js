export function createResetButton(metadata, functionToExecute){
		const resetButton = document.createElement('button');
		resetButton.className = 'reset side-by-side';
		resetButton.textContent = metadata.resetButtonText;
		resetButton.addEventListener('click', (event) => {
				if (event.target.className.includes('reset')) {
						document.getElementById(metadata.outputId).innerHTML = '';
						document.getElementById(metadata.inputId).value = '';
						document.getElementById(metadata.dropdownMenuId).selectedIndex = 0;
						document.querySelector(`input[name="${metadata.name}"]:checked`).checked = false;
				}
		});
		return resetButton;
}