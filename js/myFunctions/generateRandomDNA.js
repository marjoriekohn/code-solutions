export const generateRandomDNA = (strandLength, format) => {
		console.log(`Length: ${strandLength}, Format: ${format}`)
		
		if (strandLength !== Number(strandLength) || strandLength < 0 || !Number.isInteger(strandLength)) {
				return 'Enter a positive number';
		}

		const dnaBases = ['A', 'T', 'C', 'G'];
		const createDNA = [];

		for (let i = 0; i < strandLength; i++) {
				createDNA.push(dnaBases[Math.floor(Math.random() * 4)]);
				console.log('random DNA strand created: ' + createDNA);
		}
		
		const complementaryDNABases = {'A': 'T',	'T': 'A',	'C': 'G',	'G': 'C'};
		const createComplementaryDNA = createDNA.map((base) => complementaryDNABases[base]);
		const rnaTranscription = {'A': 'U',	'T': 'A',	'C': 'G',	'G': 'C'};
		const rnaTranscriptionStrand = createDNA.map((base) => rnaTranscription[base]);
		
		switch (format)	{
				case 'ATCG':
						return createDNA.join('');
				case 'A-T-C-G':
						return createDNA.join('-');
				case 'Complementary DNA':
						return `${createDNA.join('')} -> ${createComplementaryDNA.join('')}`;
				case 'RNA Transcription':
						return `${createDNA.join('')} -> ${rnaTranscriptionStrand.join('')}`;
				default:
						return 'Select a valid format';
		}
};

//future updates:
// 8. Use the spread operator to make code more concise
// 9. add an option to generate protein sequences
// 10. add unit tests: test edge cases, expected behavior, invalid inputs, correct length, only contains valid DNA bases


// Metadata about the function
export const generateRandomDNAMetadata = {
		functionName: 'generateRandomDNA',
		skills: ['random data generation', 'array manipulation', 'string formatting'],
		title: 'Generate random DNA sequence',
		description: 'This function generates a random DNA sequence of a specified length and format. Complementary DNA and RNA transcription are also available.',
		inputPlaceholder: 'Enter length (e.g., 5)',
		inputType: 'number',
		inputId: 'dnaLengthInput',
		dropdownMenuId: 'dnaFormatSelector',
		option1: 'ATCG',
		option2: 'A-T-C-G',
		option3: 'Complementary DNA',
		option4: 'RNA Transcription',
		buttonText: 'Generate',
		outputId: 'output5',
		processInput: (inputValue, format) => [Number(inputValue), String(format)],
		generateOutputText: (result) => result
};