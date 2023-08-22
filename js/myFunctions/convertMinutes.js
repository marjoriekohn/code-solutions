export const convertMinutes = (minutes) => {
		const hours = Math.floor(minutes / 60);
		const remainingMinutes = minutes % 60;
		return `${hours} hour(s) and ${remainingMinutes} minute(s)`;
};

// Metadata about the function
export const convertMinutesMetadata = {
		functionName: 'convertMinutes',
		title: 'Convert minutes to hours',
		description: 'This function takes in a number of minutes and returns the equivalent in hours and minutes.',
		inputPlaceholder: 'Enter minutes',
		inputType: 'number',
		inputId: 'minutesInput',
		buttonText: 'Convert',
		outputId: 'output2',
		processInput: (minutesInput) => [Number(minutesInput)],
		generateOutputText: (result) => `Converted to: ${result}`
};
