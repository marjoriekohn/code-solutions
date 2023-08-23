export const validateAndIdentifyCard = (creditCardNumber) => {
		let sumOfForLoops = 0;
		for (let i = creditCardNumber.length - 2; i >= 0; i -= 2) {
				let doubleEveryOtherNumber = creditCardNumber[i] * 2;
				if (doubleEveryOtherNumber > 9) {
						doubleEveryOtherNumber -= 9;
				}
				sumOfForLoops += doubleEveryOtherNumber;
		}
		for (let i = creditCardNumber.length - 1; i >= 0; i -= 2) {
				sumOfForLoops += creditCardNumber[i];
		}
		const isCardNumberValid = sumOfForLoops % 10 === 0;
		
		let creditCardCompany = '';
		let creditCardCompanyIcon = '';
		
		switch (creditCardNumber[0]) {
				case 3:
						creditCardCompany = 'American Express';
						creditCardCompanyIcon = 'fa-brands fa-cc-amex';
						break;
				case 4:
						creditCardCompany = 'Visa';
						creditCardCompanyIcon = 'fa-brands fa-cc-visa';
						break;
				case 5:
						creditCardCompany = 'Mastercard';
						creditCardCompanyIcon = 'fa-brands fa-cc-mastercard';
						break;
				case 6:
						creditCardCompany = 'Discover';
						creditCardCompanyIcon = 'fa-brands fa-cc-discover';
						break;
				default:
						creditCardCompany = 'unknown company';
						creditCardCompanyIcon = 'fa-solid fa-credit-card';
		}
		return {
				isValid: isCardNumberValid,
				company: creditCardCompany, 
				icon: creditCardCompanyIcon
		}
};

// future updates:
// 1. add validation to ensure input is a number
// 2. add validation to ensure input consists only of digits and no other characters
// 3. ensure the credit card number has a valid length (typically 13 to 19 digits).
// 4. adding more card providers, or make the identification process more detailed	(identify the card provider based on the first 4 digits instead of just the first digit)
// 5. Allow for card numbers with spaces or dashes and sanitize the input accordingly.
// 6. separate the Luhn validation and card identification into two distinct functions.
// 7. Use modern array methods like reduce for summing digits.
// 8. add unit tests: test edge cases, expected behavior, invalid inputs, correct length, only contains digits

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
		generateOutputText: (result) => {
				return `${result.isValid ? `Valid card number <i class="${result.icon}"></i>` : `Invalid card number <i class="${result.icon}"></i>`}`;
		}
};