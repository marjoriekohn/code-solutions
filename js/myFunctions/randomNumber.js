export const randomNumber = (userGuess, numberRange) => {
		console.log(`User Guess: ${userGuess}, Number Range: ${numberRange}`);

		if (userGuess <= 0 || userGuess === null || userGuess === undefined || typeof userGuess !== 'number') {
				return 'Enter a positive number.';
		}

		if ((userGuess < 1 || userGuess > 25) && numberRange === '1-25') {
				return 'Enter a number between 1 and 25.';
		} else if ((userGuess < 1 || userGuess > 50) && numberRange === '1-50') {
				return 'Enter a number between 1 and 50.';
		} else if ((userGuess < 1 || userGuess > 100) && numberRange === '1-100') {
				return 'Enter a number between 1 and 100.';
		} else {
				console.log(userGuess);
				console.log(numberRange);
				console.log('Guess a number in the range you selected.');
		}

		let computerGuess = 0;
		switch (numberRange) {
				case '1-25':
						computerGuess = Math.floor(Math.random() * 25 + 1);
						return { userGuess: userGuess, computerGuess: computerGuess };
				case '1-50':
						computerGuess = Math.floor(Math.random() * 50 + 1);
						return { userGuess: userGuess, computerGuess: computerGuess };
				case '1-100':
						computerGuess = Math.floor(Math.random() * 100 + 1);
						return { userGuess: userGuess, computerGuess: computerGuess };
				default:
						return 'Enter a number.';
		}
};


// future updates:
// 5. Add unit tests: test edge cases, expected behavior, and invalid inputs.


// Metadata about the function
export const randomNumberMetadata = {
		functionName: 'randomNumber',
		skills: ['random data generation', 'conditional logic', 'input validation'],
		title: 'Generate a random number',
		description: 'This function generates a random number. Can you guess the number?.',
		inputPlaceholder: 'Enter a number between 1 and 10',
		inputType: 'number',
		inputId: 'userNumberInput',
		dropdownMenuId: 'numberRangeSelector',
		option1: '1-25',
		option2: '1-50',
		option3: '1-100',
		submitButtonText: 'Submit',
		resetButtonText: 'Reset',
		outputId: 'output6',
		processInput: (userGuess, numberRange) => [Number(userGuess), String(numberRange)],
		generateOutputText: (result) => {
				if (typeof result === 'string') {
						return result;
				}
				return `Your guess: ${result.userGuess}, Computer's guess: ${result.computerGuess}`;
		}
};