// future updates: loop through options

export function createDropdownMenu(metadata) {
				const dropdownMenu = document.createElement('select');
				dropdownMenu.id = metadata.dropdownMenuId;

				// option 1
				const option1 = document.createElement('option');
				option1.value = metadata.option1;
				option1.text = metadata.option1;
				dropdownMenu.appendChild(option1);

				// option 2
				const option2 = document.createElement('option');
				option2.value = metadata.option2;
				option2.text = metadata.option2;
				dropdownMenu.appendChild(option2);

				//	option 3
				if (metadata.option3) {
								const option3 = document.createElement('option');
								option3.value = metadata.option3;
								option3.text = metadata.option3;
								dropdownMenu.appendChild(option3);
				}

				//	option 4
				if (metadata.option4) {
								const option4 = document.createElement('option');
								option4.value = metadata.option4;
								option4.text = metadata.option4;
								dropdownMenu.appendChild(option4);
				}
				return dropdownMenu;
}