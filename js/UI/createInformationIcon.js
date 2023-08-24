export function createInformationIcon(metadata) {
		const informationIcon = document.createElement('i');
		informationIcon.className = 'fa-solid fa-circle-info';
		informationIcon.addEventListener('click', () => {
				alert(metadata.description);
		});
		return informationIcon;
}