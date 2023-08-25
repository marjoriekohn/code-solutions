export function dropdownMenu(metadata) {
		console.log(`Generating dropdown menu for ${metadata.title}`);
		
		const dropdownMenu = document.createElement('select');
		dropdownMenu.id = metadata.dropdownMenuId;
				
		for (let i =	0; i < metadata.dropdownMenuOptions.length; i++) {
				const option	= document.createElement('option');
				option.value = metadata.dropdownMenuOptions[i];
				option.text = metadata.dropdownMenuOptions[i];
				dropdownMenu.appendChild(option);
		}
		return dropdownMenu;
}

export function getDropdownValue(metadata) {
		const dropdownElement = document.getElementById(metadata.dropdownMenuId);
		return dropdownElement.value;
}

export function resetDropdown(metadata) {
		document.getElementById(metadata.dropdownMenuId).selectedIndex = 0;
}