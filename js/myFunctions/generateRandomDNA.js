// function #5 - generate DNA strand
export const generateRandomDNA = (strandLength) => {
		const returnBase = () => {
				const dnaBases = ['A', 'T', 'C', 'G'];
				return dnaBases[Math.floor(Math.random() * 4)];
		};
		const newStrand = [];
		for (let i = 0; i < strandLength; i++) {
				newStrand.push(returnBase());
		}
		return newStrand;
};


// Metadata about the function
export const generateRandomDNAMetadata = {
		title: 'Generate Random DNA Sequence',
		description: 'This function generates a random DNA sequence of a specified length.',
		inputPlaceholder1: 'Enter length (e.g., 5)',
		inputType1: 'number',
		inputId1: 'dnaLengthInput',
		buttonText: 'Generate DNA',
		outputId: 'output5',
		processInput: (inputValue) => [Number(inputValue)],
		generateOutputText: (result) => `Generated DNA sequence: ${result}`
};