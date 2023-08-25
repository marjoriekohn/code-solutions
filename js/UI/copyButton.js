import {copyFunctionCode} from "../helper/copyFunctionCode.js";

export function copyButton(metadata){
		const copyButton = document.createElement('button');
		copyButton.className = 'copy side-by-side';
		
		const copyIcon = document.createElement('i');
		copyIcon.className = 'fa-solid fa-clipboard';
		copyButton.appendChild(copyIcon);
		
		copyButton.addEventListener('click', (event) => {
				if (event.target.className.includes('copy')) {
						copyFunctionCode(metadata.functionName, event.target);
				}
		});
	return copyButton;
}