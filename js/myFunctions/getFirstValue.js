export const getFirstValue = array	=> array[0];

// future updates:
// 1. add validation to ensure input is an array
// 2. add validation to ensure input is not empty, null, or undefined
// 3. add allowances for different delimiters (not just comma) for the input string.
// 4. add unit tests: test edge cases, expected behavior, invalid inputs, inputs with different delimiters
// 5. add an option to get the first n values instead of just the first one.


// Metadata about the function
export const getFirstValueMetadata = {
		functionName: 'getFirstValue',
		title: 'Get first element of an array',
		description: 'This function takes in a comma-separated list of items and returns the first item.',
		inputPlaceholder: 'dog, cat, bird, fish',
		inputType: 'text',
		inputId: 'arrayInput',
		buttonText: 'Find',
		outputId: 'output1',
		expectsArray: true,
		processInput: (inputValue) => inputValue.split(', '),
		generateOutputText: result => `[0] = ${result}`
};