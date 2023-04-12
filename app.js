// utility functions
const getFirstValue = array => array[0]; // returns first value of an array
const convertMinutes = minutes => minutes *= 60; // converts minutes to seconds
const lessThan100 = (num1, num2) => { // adds two numbers, checks for > 100
		let sum = num1 + num2;
		return sum < 100;
};
const generateRandomDNA = (strandLength) => {
		const returnBase = () => {
				const dnaBases = ['A', 'T', 'C', 'G'];
				return dnaBases[Math.floor(Math.random() * 4)];
		};

		const newStrand = [];
		for (let i = 0; i < strandLength; i++) {
				newStrand.push(returnBase());
		}
		return newStrand;
};

const validateAndIdentifyCard = (ccNumbers) => { // Validate credit card number
		let sum = 0;
		for (let i = ccNumbers.length - 2; i >= 0; i -= 2) {
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

		let company = ''; 	// Identify credit card company
		if (ccNumbers[0] === 3) {
				company = 'American Express';
		} else if (ccNumbers[0] === 4) {
				company = 'Visa';
		} else if (ccNumbers[0] === 5) {
				company = 'Mastercard';
		} else if (ccNumbers[0] === 6) {
				company = 'Discover';
		} else {
				company = 'company not found';
		}
		return { 		// Return validity and company
				isValid: isValid,
				company: company,
		};
};

// HTML functions
function showFirstValue() {
		const arrayInput = document.getElementById('arrayInput').value;
		const array = arrayInput.split(',');
		document.getElementById('output1').innerHTML = `First value: ${getFirstValue(array)}`;
}

function showConvertedMinutes() {
		const minutes = parseInt(document.getElementById('minutesInput').value);
		document.getElementById('output2').innerHTML = `${minutes} minutes is equal to ${convertMinutes(minutes)} seconds`;
}

function showLessThan100() {
		const num1 = parseInt(document.getElementById('num1Input').value);
		const num2 = parseInt(document.getElementById('num2Input').value);
		document.getElementById('output3').innerHTML = `The sum of ${num1} and ${num2} is ${num1 + num2} which is${lessThan100(num1, num2) ? '' : ' not'} less than 100`;
}
function showRandomDNAStrand() {
		const strandLength = document.getElementById('strandLengthInput').value;
		const randomDNAStrand = generateRandomDNA(strandLength);
		document.getElementById('outputRandomDNA').innerHTML = `Generated DNA strand: <strong>${randomDNAStrand.join('')}</strong>`;
}

function showCardValidationResult() {
		const ccNumber = document.getElementById('ccNumberInput').value;
		const ccNumbers = ccNumber.split('').map(Number);
		const cardInfo = validateAndIdentifyCard(ccNumbers);
		const validationStatus = cardInfo.isValid ? 'valid' : 'invalid';
		const cardCompany = cardInfo.company;
		document.getElementById('output5').innerHTML = `The credit card number is <strong>${validationStatus}</strong> and belongs to <strong>${cardCompany}</strong>.`;
}

// copy code function
function copyFunctionCode(functionName, button) {
		let code = '';

		switch (functionName) {
				case 'getFirstValue':
						code = `const ${functionName} = ${getFirstValue.toString()}`;
						break;
				case 'convertMinutes':
						code = `const ${functionName} = ${convertMinutes.toString()}`;
						break;
				case 'lessThan100':
						code = `const ${functionName} = ${lessThan100.toString()}`;
						break;
				case 'generateRandomDNA':
						code = `const ${functionName} = ${generateRandomDNA.toString()}`;
						break;
				case 'validateAndIdentifyCard':
						code = `const ${functionName} = ${validateAndIdentifyCard.toString()}`;
						break;
		}

		const el = document.createElement('textarea');
		el.value = code;
		document.body.appendChild(el);
		el.select();
		document.execCommand('copy');
		document.body.removeChild(el);

		const copyMessage = button.nextElementSibling;
		copyMessage.style.display = 'inline-block';
		setTimeout(() => {
				copyMessage.style.display = 'none';
		}, 2000);
}