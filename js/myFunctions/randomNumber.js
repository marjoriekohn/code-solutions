export const randomNumber = (numberRange) => {
		console.log(`Number Range: ${numberRange}`);

		let randomNumber = 0;
		switch (numberRange) {
				case '1-25':
						randomNumber = Math.floor(Math.random() * 25 + 1);
						return randomNumber;
				case '1-50':
						randomNumber = Math.floor(Math.random() * 50 + 1);
						return randomNumber;
				case '1-100':
						randomNumber = Math.floor(Math.random() * 100 + 1);
						return randomNumber;
				default:
						return 'Select a number range.';
		}
};


// future updates:
// 5. Add unit tests: test edge cases, expected behavior, and invalid inputs.


// Metadata about the function
export const randomNumberMetadata = {
		functionName: 'randomNumber',
		skills: ['random data generation', 'conditional logic', 'input validation'],
		title: 'Random Number',
		description: 'This function generates a random number.',
		dropdownMenuId: 'numberRangeSelector',
		dropdownMenuOptions: ['1-25', '1-50', '1-100'],
		outputId: 'userNumberOutput',
		processInput: (numberRange) => [String(numberRange)],
		generateOutputText: (result) => result
};