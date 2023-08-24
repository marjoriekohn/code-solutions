export function createTitleContainer(metadata) {
		const titleContainer = document.createElement('article');
		const functionTitle = document.createElement('p');
		functionTitle.textContent = metadata.title;
		titleContainer.appendChild(functionTitle);
		return titleContainer;
}
