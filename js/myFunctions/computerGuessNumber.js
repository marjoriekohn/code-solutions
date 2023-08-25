// future updates: combine this with generate random number
// generate random number function will call guessNumber
// guess number will only compare if the number is less, more, or equal to the given number

export const computerGuessNumber = (() => {
		let computerGuessCount = 0;
		let minimumNumber = 1;
		let maximumNumber = 100;

		const startGuessing = (askUser) => {
				if (computerGuessCount === 0) {
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
						}
						computerGuessCount++;
						computerGuess = Math.floor((minimumNumber + maximumNumber) / 2);
						return `Is your number ${computerGuess}?`;
				}
				return "Couldn't guess your number!";
		};
		startGuessing.reset = () => {
				computerGuessCount = 0;
				minimumNumber = 1;
				maximumNumber = 100;
		};
		return startGuessing;
})();


export const computerGuessNumberMetadata = {
		functionName: 'computerGuessNumber',
		skills: ['binary search', 'conditionals'],
		title: 'Binary Search',
		description: 'The function uses a binary search to guess the number that you are thinking of. It will ask you if the number is too high, too low, or correct. It will then guess again based on your feedback.',
		type: 'radio',
		name: 'computerGuessNumber',
		radioOptions: ['too low', 'too high', 'correct'],
		outputId: 'computerGuessNumberOutput',
		autoExecute: true,
		generateOutputText: (result) => result
};