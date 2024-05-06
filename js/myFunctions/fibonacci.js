const memoizedFibonacciSequence = {}; //persistent storage for memoized values
export const fibonacciSequence = (number) => {
		
		if (number === null || number === undefined || typeof number !== 'number') {
				return 'Enter a positive number.';
		}
		if (number in memoizedFibonacciSequence) {
				console.log(number);
				console.log(memoizedFibonacciSequence[number])
				return memoizedFibonacciSequence[number];
		}
		if (number <= 1) {
				return number;
		}
		
		let first = fibonacciSequence(number - 1);
		let second = fibonacciSequence(number - 2);
		let result = first + second;
		memoizedFibonacciSequence[number] = result;
		console.log('Fibonacci Function Result: ' + first + ' + ' + second + ' = ' + result);
		return result;
}

//future updates:
// add unit tests: test edge cases, expected behavior, and invalid inputs.

export const fibonacciSequenceMetadata = {
		functionName: 'fibonacciSequence',
		skills: ['recursion', 'conditional logic', 'memoization'],
		title: 'Recursion: Fibonacci',
		description: 'The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding numbers. This function takes in a number and returns the nth number in the Fibonacci sequence.',
		inputId: 'fibonacciSequenceInput',
		inputType: 'number',
		inputPlaceholder: 'Enter number',
		outputId: 'fibonacciSequenceOutput',
		processInput: (number) => [Number(number)],
		generateOutputText: (result) => result
};