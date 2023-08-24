export const computerGuessNumber = (() => {
		let computerGuessCount = 0;
		let minimumNumber = 1;
		let maximumNumber = 100;

		return (askUser) => {
				if (computerGuessNumberMetadata.buttonText === 'Reset') {
						computerGuessCount = 0;
						minimumNumber = 1;
						maximumNumber = 100;
						computerGuessNumberMetadata.buttonText = 'Submit';
						return 'Game Reset! Is your number 50?';
				} else if (computerGuessCount === 0){
						computerGuessCount++;
						return 'Is your number 50?';
				}

		while (minimumNumber <= maximumNumber) {
				let computerGuess = Math.floor((minimumNumber + maximumNumber) / 2);
				
				switch (askUser) {
						case 'too low':
								minimumNumber = computerGuess + 1;
								break;
						case 'too high':
								maximumNumber = computerGuess - 1;
								break;
						case 'correct':
								return `Guessed it in ${computerGuessCount} attempts!`;
						default:
								return "Invalid feedback!";
				}
				computerGuessCount++;
				computerGuess = Math.floor((minimumNumber + maximumNumber) / 2);
				return `Is your number ${computerGuess}?`;
		}
				return "Couldn't guess your number!";
		}
})();

export const computerGuessNumberMetadata = {
		functionName: 'computerGuessNumber',
		skills: ['binary search', 'conditionals'],
		title: 'Guess Your Number',
		description: 'The function uses a binary search to guess the number that you are thinking of. It will ask you if the number is too high, too low, or correct. It will then guess again based on your feedback.',
		type: 'radio',
		name: 'computerGuessNumber',
		inputA:	'too low',
		inputB: 'too high',
		inputC: 'correct',
		submitButtonText: 'Submit',
		resetButtonText: 'Reset',
		outputId: 'computerGuessNumberOutput',
		autoExecute: true,
		processInput: (askUser) => [String(askUser)],
		generateOutputText: (result) => result
};