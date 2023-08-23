const memoizedFibonacciSequence = {}; //persistent storage for memoized values
export const fibonacciSequence = (number) => {
		
		if (number === null || number === undefined || typeof number !== 'number') {
				return 'Enter a positive number.';
		}
		if (number in memoizedFibonacciSequence) {
				console.log('memoized value used');
				return memoizedFibonacciSequence[number];
		} else if (number <= 1) {
				return number;
		} else if (number <= 10) {
				memoizedFibonacciSequence[number] = fibonacciSequence(number - 1) + fibonacciSequence(number - 2);
				console.log('memoized value created')
				return memoizedFibonacciSequence[number];
		} else {
				memoizedFibonacciSequence[number] = fibonacciSequence(number - 1) + fibonacciSequence(number - 2);
				console.log('memoized value created')
				return memoizedFibonacciSequence[number];
		}
}

//future updates:
// add unit tests: test edge cases, expected behavior, and invalid inputs.

export const fibonacciSequenceMetadata = {
		functionName: 'fibonacciSequence',
		skills: ['recursion', 'conditional logic', 'memoization'],
		title: 'Generate Fibonacci Sequence',
		description: 'The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding numbers. This function takes in a number and returns the nth number in the Fibonacci sequence.',
		inputId: 'fibonacciSequenceInput',
		inputType: 'number',
		inputPlaceholder: 'Enter number',
		buttonText: 'Generate',
		outputId: 'fibonacciSequenceOutput',
		processInput: (number) => [Number(number)],
		generateOutputText: (result) => result
};