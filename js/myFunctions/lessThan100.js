// function #3 - sum of numbers
export const lessThan100 = (num1, num2) => {
		return (num1 + num2) < 100;
};

// Metadata about the function
export const lessThan100Metadata = {
		title: 'Is sum less than 100?',
		description: 'This function takes in two numbers and checks if their sum is less than 100.',
		inputPlaceholder1: 'Enter first number',
		inputType1: 'number',
		inputId1: 'num1Input',
		inputPlaceholder2: 'Enter second number',
		inputType2: 'number',
		inputId2: 'num2Input',
		buttonText: 'Check',
		outputId: 'output3',
		processInput: (inputValue1, inputValue2) => [Number(inputValue1), Number(inputValue2)],
		generateOutputText: (result) => result ? "The sum is less than 100" : "The sum is more than 100"
};
