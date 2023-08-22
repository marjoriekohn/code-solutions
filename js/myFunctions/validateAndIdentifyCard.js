// function #4 - validate credit card number
export const validateAndIdentifyCard = (cardNumber) => { // Validate credit card number
		let sum = 0;
		for (let i = cardNumber.length - 2; i >= 0; i -= 2) {
				let doubled = cardNumber[i] * 2;
				if (doubled > 9) {
						doubled -= 9;
				}
				sum += doubled;
		}
		for (let i = cardNumber.length - 1; i >= 0; i -= 2) {
				sum += cardNumber[i];
		}
		
		const isValid = sum % 10 === 0;
		let company = ''; 	// Identify credit card company
		if (cardNumber[0] === 3) {
				company = 'American Express';
		} else if (cardNumber[0] === 4) {
				company = 'Visa';
		} else if (cardNumber[0] === 5) {
				company = 'Mastercard';
		} else if (cardNumber[0] === 6) {
				company = 'Discover';
		} else {
				company = 'unknown company';
		}
		return `Card is ${isValid ? `valid and is a ${company} card.` : "invalid"}`;
};

export const validateAndIdentifyCardMetadata = {
		functionName: 'validateAndIdentifyCard',
		title: 'Validate and identify credit card',
		description: 'This function takes in a credit card number and validates it, as well as identifies the credit card provider.',
		inputPlaceholder: 'Enter credit card number',
		inputType: 'text',
		inputId: 'cardNumberInput',
		buttonText: 'Validate',
		outputId: 'output4',
		expectsArray: true,
		processInput: (inputValue) => Array.from(inputValue).map(Number),
		generateOutputText: (result) => result
};