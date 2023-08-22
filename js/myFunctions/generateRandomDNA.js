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
		functionName: 'generateRandomDNA',
		title: 'Generate random DNA sequence',
		description: 'This function generates a random DNA sequence of a specified length.',
		inputPlaceholder: 'Enter length (e.g., 5)',
		inputType: 'number',
		inputId: 'dnaLengthInput',
		buttonText: 'Generate',
		outputId: 'output5',
		processInput: (inputValue) => [Number(inputValue)],
		generateOutputText: (result) => `Generated DNA sequence: ${result}`
};