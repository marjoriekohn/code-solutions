// function #2 - Convert Minutes
export const convertMinutes = (minutes) => {
		const hours = Math.floor(minutes / 60);
		const remainingMinutes = minutes % 60;
		return `${hours} hour(s) and ${remainingMinutes} minute(s)`;
};

// Metadata about the function
export const convertMinutesMetadata = {
		title: 'Convert minutes to hours and minutes',
		description: 'This function takes in a number of minutes and returns the equivalent in hours and minutes.',
		inputPlaceholder: '120',
		inputType: 'number',
		inputId: 'minutesInput',
		buttonText: 'Convert',
		outputId: 'output2',
		processInput: (inputValue) => Number(inputValue),
		generateOutputText: (result) => `Converted to: ${result}`
};
