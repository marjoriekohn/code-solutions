export function outputContainer(metadata) {
				const outputContainer = document.createElement('article');
				
				const outputText = document.createElement('p');
				outputText.className = "output-text";
				outputText.id = metadata.outputId;
				outputContainer.appendChild(outputText);
				return outputContainer;
}

export function displayResult(metadata, result) {
		const outputText = document.getElementById(metadata.outputId);
		const outputData = metadata.generateOutputText(result);
		console.log("Output Container Result:", result);
		return outputText.innerHTML	= outputData;
}