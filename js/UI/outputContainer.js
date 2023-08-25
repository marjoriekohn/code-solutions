export function outputContainer(metadata) {
				const outputContainer = document.createElement('article');
				const outputText = document.createElement('p');
				outputText.className = "output-text";
				outputText.id = metadata.outputId;
				outputContainer.appendChild(outputText);
				return outputContainer;
}

export function displayResult(metadata, result) {
		document.getElementById(metadata.outputId).innerHTML = metadata.generateOutputText(result);
		console.log("Result:", result);
}