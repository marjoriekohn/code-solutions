// future updates: loop through options

export function createRadioButtons(metadata) {
				console.log(`Creating radio buttons for ${metadata.title}`);
				
				const radioDiv = document.createElement('div');
				radioDiv.className = 'radio-container';
				const radioDivA = document.createElement('div');
				radioDivA.className = 'radio-option';
				const optionA = document.createElement('input');
				optionA.name = metadata.name;
				optionA.type = metadata.type;
				optionA.value = metadata.inputA;
				radioDivA.appendChild(optionA);
				const labelA = document.createElement('label');
				labelA.for = metadata.inputA;
				labelA.innerHTML = metadata.inputA;
				radioDivA.appendChild(labelA);
				
				const radioDivB = document.createElement('div');
				radioDivB.className = 'radio-option';
				const optionB = document.createElement('input');
				optionB.name = metadata.name;
				optionB.type = metadata.type;
				optionB.value = metadata.inputB;
				radioDivB.appendChild(optionB);
				const labelB = document.createElement('label');
				labelB.for = metadata.inputB;
				labelB.innerHTML = metadata.inputB;
				radioDivB.appendChild(labelB);
				
				const radioDivC = document.createElement('div');
				radioDivC.className = 'radio-option';
				const optionC = document.createElement('input');
				optionC.name = metadata.name;
				optionC.type = metadata.type;
				optionC.value = metadata.inputC;
				radioDivC.appendChild(optionC);
				const labelC = document.createElement('label');
				labelC.for = metadata.inputC;
				labelC.innerHTML = metadata.inputC;
				radioDivC.appendChild(labelC);
				
				radioDiv.appendChild(radioDivA);
				radioDiv.appendChild(radioDivB);
				radioDiv.appendChild(radioDivC);
				return radioDiv;
}