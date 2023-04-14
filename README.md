# JavaScript Functions Library

## Table of Contents

1. [Introduction](#introduction)
2. [Technologies Used](#technologies-used)
3. [Demo](#demo)
4. [Code Example](#code-example)
5. [Contributing](#contributing)
6. [License](#license)
7. [Contact Information](#contact-information)

## Introduction

This project is a simple website that showcases a collection of JavaScript functions. Users can interact with these functions by inputting values and viewing the generated results. Additionally, a copy button is available for users to easily copy the function code for use in their own projects. The initial purpose of this project was to create a personal repository of reusable, high-quality JavaScript functions to improve coding efficiency.

## Technologies Used

- HTML
- CSS
- JavaScript
- Clipboard API

## Demo

Visit the live demo at [https://marymkohn.github.io/javascript-functions/](https://marymkohn.github.io/javascript-functions/).

## Code Example

One of the showcased functions is a credit card validator that uses the Luhn algorithm to check if a credit card number is valid. It also returns the company that the credit card number belongs to. This function demonstrates the quality and utility of the code in this repository.
```Javascript
// function #4 - validate credit card information
const validateAndIdentifyCard = (ccNumbers) => {
  let sum = 0;
	for (let i = ccNumbers.length - 2; i >= 0; i -= 2) { // Luhn algorithm
		let doubled = ccNumbers[i] * 2;
		if (doubled > 9) {
			doubled -= 9;
		}
		sum += doubled;
	}
	for (let i = ccNumbers.length - 1; i >= 0; i -= 2) {
		sum += ccNumbers[i];
	}
	const isValid = sum % 10 === 0;

	let company = ''; // Identify credit card company
	if (ccNumbers[0] === 3) {
		company = 'American Express';
	} else if (ccNumbers[0] === 4) {
		company = 'Visa';
	} else if (ccNumbers[0] === 5) {
		company = 'Mastercard';
	} else if (ccNumbers[0] === 6) {
		company = 'Discover';
	} else {
		company = 'unknown company';
	}
	return {  // Return validity and company
		isValid: isValid,
		company: company,
	};
};
```

## Contributing

Contributions are welcome! To contribute, please follow these steps:

1. Fork the repository
2. Create a new branch with a descriptive name
3. Commit your changes to the branch
4. Create a pull request

For submitting issues, please create a new issue in the GitHub repository and provide a clear description of the problem.

## License

This project is created by Mary Kohn and is free to use, modify, and distribute for personal or commercial purposes.
This project is open source and available under the [MIT License](LICENSE).

## Contact Information

Mary Kohn

[LinkedIn](www.linkedin/in/marymkohn)

[E-mail](mailto:marymkohn@gmail.com)


