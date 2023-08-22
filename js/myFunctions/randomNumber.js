export const randomNumber = (userGuess) => {
		const computerGuess = Math.floor(Math.random() * 10 + 1);
		return {
				userGuess: userGuess,
				computerGuess: computerGuess,
				message: `Computer chose ${computerGuess}. ${userGuess === computerGuess ? 'YOU WIN!' : 'Try again!'}`
		};
};


// Metadata about the function
export const randomNumberMetadata = {
		functionName: 'randomNumber',
		title: 'Guess random number',
		description: 'This function generates a random number between the provided minimum and maximum values.',
		inputPlaceholder: 'Enter a number between 1 and 10',
		inputType: 'number',
		inputId: 'userNumberInput',
		buttonText: 'Guess',
		outputId: 'output6',
		processInput: (inputValue) => [Number(inputValue)],
		generateOutputText: (result) => result.message
};