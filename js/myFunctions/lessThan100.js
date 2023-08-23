export const lessThan100 = (num1, num2) => {
		let sum = num1 + num2;
		console.log(`sum is ${sum}`);

		if (sum === 100) {
				return `${num1} + ${num2} is equal to 100`;
		} else if (sum < 100) {
				return `${num1} + ${num2} = ${sum} which is less than 100`;
		} else if (sum > 100) {
				return `${num1} + ${num2} = ${sum} which is more than 100`;
		} else {
				return "Enter two numbers";
		}
};


// future updates:
// 2. allow the function to accept an array of numbers and check if their sum is less than a specified threshold
// 3. add unit tests: test edge cases, expected behavior, and invalid inputs (validate various combinations of inputs and their expected outcomes

// Metadata about the function
export const lessThan100Metadata = {
		functionName: 'lessThan100',
		title: 'Is sum less than 100?',
		description: 'This function takes in two numbers and checks if their sum is less than 100.',
		inputPlaceholder: 'Enter first number',
		inputType: 'number',
		inputId: 'num1Input',
		inputPlaceholder2: 'Enter second number',
		inputType2: 'number',
		inputId2: 'num2Input',
		buttonText: 'Check',
		outputId: 'output3',
		processInput: (num1, num2) => [Number(num1), Number(num2)],
		generateOutputText: (result) => result
};
