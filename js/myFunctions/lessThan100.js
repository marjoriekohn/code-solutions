// function #3 - sum of numbers
export const lessThan100 = (num1, num2) => {
		let sum = num1 + num2;
		if (sum < 100) {
				return `${num1} + ${num2} is less than 100`;
		} else if (sum	> 100) {
				return `${num1} + ${num2} is more than 100`;
		} else if (sum === 100) {
				return `${num1} + ${num2} = 100`;
		} else {
				return "invalid input";
		}
};

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
		processInput: (inputValue1, inputValue2) => [Number(inputValue1), Number(inputValue2)],
		generateOutputText: (result) => result
};
