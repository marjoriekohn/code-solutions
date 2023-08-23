export const generateRandomDNA = (strandLength, format) => {
		console.log(`creating a random DNA sequence. Length: ${strandLength}`)
		
		if (strandLength !== Number(strandLength) || strandLength < 0 || !Number.isInteger(strandLength)) {
				return 'Enter a positive number';
		}
		const getRandomBase = () => {
				const dnaBases = ['A', 'T', 'C', 'G'];
				return dnaBases[Math.floor(Math.random() * 4)];
		};
		
		const newDNAStrand = [];
		for (let i = 0; i < strandLength; i++) {
				newDNAStrand.push(getRandomBase());
				console.log(newDNAStrand);
		}

		const complementaryDNABases = {
				'A': 'T',	'T': 'A',	'C': 'G',	'G': 'C'
		};
				
		if (format === 'ATCG') {
				return newDNAStrand.join('');
		} else if (format === 'A-T-C-G') {
				return newDNAStrand.join('-');
		}
		
		if (format === 'complementary') {
				const complementaryDNAStrand = newDNAStrand.map((base) => complementaryDNABases[base]);
				return `${newDNAStrand.join('')} -> ${complementaryDNAStrand.join('')}`;
		}
};

//future updates:
// 7. add an option to generate RNA sequences
// 8. Use the spread operator to make code more concise
// 9. add an option to generate protein sequences
// 10. add unit tests: test edge cases, expected behavior, invalid inputs, correct length, only contains valid DNA bases


// Metadata about the function
export const generateRandomDNAMetadata = {
		functionName: 'generateRandomDNA',
		title: 'Generate random DNA sequence',
		description: 'This function generates a random DNA sequence of a specified length.',
		inputPlaceholder: 'Enter length (e.g., 5)',
		inputType: 'number',
		inputId: 'dnaLengthInput',
		dropdownMenuId: 'dnaFormatSelector',
		option1: 'ATCG',
		option2: 'A-T-C-G',
		option3: 'complementary',
		buttonText: 'Generate',
		outputId: 'output5',
		processInput: (inputValue, format) => [Number(inputValue), String(format)],
		generateOutputText: (result) => result
};