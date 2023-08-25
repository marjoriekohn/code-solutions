export const validateAndIdentifyCard = (userInput) => {

		let creditCardCompany = '';
		let creditCardCompanyIcon = '';
		const creditCardNumber = Array.from(userInput).map(Number);
		
		if (creditCardNumber.length !==	16) {
				return 'Enter a 16 digit credit card number.';
		}
		
		const isCardNumberValid = creditCardNumber.reduce((totalSum, currentDigit, currentIndex) => {
						if ((15 - currentIndex) % 2 === 1) {
								let doubleEveryOtherNumber = currentDigit * 2;
								return totalSum + (doubleEveryOtherNumber > 9 ? doubleEveryOtherNumber - 9 : doubleEveryOtherNumber);
						} else {
								return totalSum + currentDigit;
						}
				}, 0) % 10 === 0;
		
		const firstFourDigits = creditCardNumber.slice(0, 4).join('');
		switch (true) {
				case /^3[47]/.test(firstFourDigits):
						creditCardCompany = 'American Express';
						creditCardCompanyIcon = 'fa-brands fa-cc-amex';
						break;
				case /^4/.test(firstFourDigits):
						creditCardCompany = 'Visa';
						creditCardCompanyIcon = 'fa-brands fa-cc-visa';
						break;
				case /^(5[1-5])/.test(firstFourDigits):
						creditCardCompany = 'Mastercard';
						creditCardCompanyIcon = 'fa-brands fa-cc-mastercard';
						break;
				case /^6011|^(622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9([01][0-9]|2[0-5]))|64[4-9]|65)/.test(firstFourDigits):
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
// 5. Allow for card numbers with spaces or dashes and sanitize the input accordingly.
// 8. add unit tests: test edge cases, expected behavior, invalid inputs, correct length, only contains digits

export const validateAndIdentifyCardMetadata = {
		functionName: 'validateAndIdentifyCard',
		skills: ['array methods', 'conditional logic', 'regular expressions', 'algorithms', 'pattern matching', 'data validation'],
		title: 'Luhn Algorithm',
		description: 'This function uses the Luhn Algorithm to validate a credit card number. After validation, it uses' +
				' regular expressions to identify the credit card provider. For test credit card numbers, visit https://stripe.com/docs/testing',
		inputPlaceholder: 'Enter credit card number',
		inputType: 'number',
		inputId: 'cardNumberInput',
		outputId: 'cardNumberOutput',
		generateOutputText: (result) => {
				return `${result.isValid ? `Valid card number <i class="${result.icon}"></i>` : `Invalid card number <i class="${result.icon}"></i>`}`;
		}
};