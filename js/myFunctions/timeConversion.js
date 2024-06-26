export const timeConversion = (minutes, format) => {
		console.log(`converting ${minutes} minutes to ${format} format...`)
		
		if (minutes <= 0 || minutes === null || minutes === undefined || typeof minutes !== 'number') {
				return 'Enter a positive number of minutes.';
		}
		const hours = Math.floor(minutes / 60);
		const remainingMinutes = minutes % 60;
		
		if (format === 'h:mm') {
				return `${hours}:${remainingMinutes}`;
		} else if (format === 'hh:mm') {
				return `${hours < 10 ? '0' + hours : hours}:${remainingMinutes < 10 ? '0' + remainingMinutes : remainingMinutes}`;
		} else if (format === 'hours:minutes') {
				return `${hours === 1 ? hours + ' hour' : hours + ' hours'} and ${remainingMinutes === 1 ? remainingMinutes + ' minute' : remainingMinutes + ' minutes'}`;
		}
};

//future updates:
// add unit tests: test edge cases, expected behavior, and invalid inputs.

// Metadata about the function
export const timeConversionMetadata = {
		functionName: 'timeConversion',
		skills: ['time conversion', 'conditionals'],
		title: 'Time Conversion',
		description: 'This function takes in a number of minutes and returns the equivalent in hours and minutes in a format of your choice.',
		inputId: 'convertMinutesInput',
		inputType: 'number',
		inputPlaceholder: 'Enter minutes',
		dropdownMenuId: 'timeFormatSelector',
		dropdownMenuOptions: ['h:mm', 'hh:mm', 'hours:minutes'],
		outputId: 'convertMinutesOutput',
		processInput: (minutes, format) => [Number(minutes), String(format)],
		generateOutputText: (result) => result
};
