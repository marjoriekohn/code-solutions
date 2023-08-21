// function #1 - array[0]
export const getFirstValue = array => array[0];

// Metadata about the function
export const getFirstValueMetadata = {
		title: 'Get first element of an array',
		description: 'This function takes in a comma-separated list of items and returns the first item.',
		inputPlaceholder: 'dog, cat, bird, fish',
		inputType: 'text',
		inputId: 'arrayInput',
		buttonText: 'Find',
		outputId: 'output1',
		processInput: (inputValue) => inputValue.split(','),
		generateOutputText: result => `[0] = ${result}`
};