// function #6 - random number game
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
		title: 'Generate Random Number within Range',
		description: 'This function generates a random number between the provided minimum and maximum values.',
		inputPlaceholder1: 'Enter a number	between 1 and 10',
		inputType1: 'number',
		inputId1: 'userNumberInput',
		buttonText: 'Generate Number',
		outputId: 'output6',
		processInput: (inputValue) => [Number(inputValue)],
		generateOutputText: (result) => result.message
};