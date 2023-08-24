export function createOutputContainer(metadata) {
				const outputContainer = document.createElement('article');
				const outputText = document.createElement('p');
				outputText.id = metadata.outputId;
				outputContainer.appendChild(outputText);
				return outputContainer;
}