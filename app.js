// utility functions
// function #1 - array[0]
const getFirstValue = array => array[0];
// function #2 - minutes to seconds
const convertMinutes = minutes => minutes *= 60;
// function #3 - sum of numbers
const lessThan100 = (num1, num2) => { // adds two numbers, checks for > 100
		let sum = num1 + num2;
		return sum < 100;
};
// function #4 - validate credit card
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
				company = 'unknown company';
		}
		return { 		// Return validity and company
				isValid: isValid,
				company: company,
		};
};
// function #5 - generate DNA
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
// function #6 - random number game
const randomNumber = () => Math.floor(Math.random() * 10 + 1);


// DOM FUNCTIONS
function showFirstValue() {
		const arrayInput = document.getElementById('arrayInput').value;
		const array = arrayInput.split(',');
		document.getElementById('output1').innerHTML = `[0] = "${getFirstValue(array)}"`;
}
function showConvertedMinutes() {
		const minutes = parseInt(document.getElementById('minutesInput').value);
		document.getElementById('output2').innerHTML = `${minutes} minutes is ${convertMinutes(minutes)} seconds.`;
}
function showLessThan100() {
		const num1 = parseInt(document.getElementById('num1Input').value);
		const num2 = parseInt(document.getElementById('num2Input').value);
		document.getElementById('output3').innerHTML = `${num1} + ${num2} = ${num1 + num2} which is${lessThan100(num1, num2) ? ' less' : ' more'} than 100.`;
}
function showCardValidationResult() {
		const ccNumber = document.getElementById('ccNumberInput').value;
		const ccNumbers = ccNumber.split('').map(Number);
		const cardInfo = validateAndIdentifyCard(ccNumbers);
		const validationStatus = cardInfo.isValid ? 'valid' : 'invalid';
		const cardCompany = cardInfo.company;
		document.getElementById('output4').innerHTML = `This ${cardCompany} card is ${validationStatus}.`;
}
function showRandomDNAStrand() {
		const strandLength = document.getElementById('strandLengthInput').value;
		const randomDNAStrand = generateRandomDNA(strandLength);
		document.getElementById('output5').innerHTML = `${randomDNAStrand.join('')}`;
}
function showRandomNumber() {
		const guess = parseInt(document.getElementById('guessInput').value);
		const computer = randomNumber();
		document.getElementById('output6').innerHTML = `Computer chose ${computer}. ${guess === computer ? 'YOU WIN!' : 'Try again!'}`;
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
				case 'validateAndIdentifyCard':
						code = `const ${functionName} = ${validateAndIdentifyCard.toString()}`;
						break;
				case 'generateRandomDNA':
						code = `const ${functionName} = ${generateRandomDNA.toString()}`;
						break;
				case 'randomNumber':
						code = `const ${functionName} = ${randomNumber.toString()}`;
						break;
		}

		const el = document.createElement('textarea');
		el.value = code;
		document.body.appendChild(el);
		el.select();
		document.execCommand('copy');
		document.body.removeChild(el);

		const copyMessage = button.nextElementSibling;
		// copyMessage.style.display = 'inline-block';
		button.children.item(0).className = '';
		button.children[0].innerHTML = 'copied';
		setTimeout(() => {
				button.children[0].className = 'fa-solid fa-clipboard';
				button.children[0].innerHTML = '';
		}, 2000);
}