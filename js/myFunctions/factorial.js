export const factorial = (number) => {

		if (number === null || number === undefined || typeof number !== 'number') {
				return 'Enter a positive number.';
		} else if (number <= 1) {
				return number;
		} else {
				return number * factorial(number - 1);
		}
}

export const factorialMetadata = {
		functionName: 'factorial',
		skills: ['recursion', 'conditionals', 'math', 'algorithm'],
		title: 'Recursion: Factorial',
		description: 'This function takes in a number and returns its factorial.',
		inputId: 'factorialInput',
		inputType: 'number',
		inputPlaceholder: 'Enter number',
		outputId: 'factorialOutput',
		processInput: (number) => [Number(number)],
		generateOutputText: (result) => result
};