const getFirstValue = array => array[0];

const convertMinutes = minutes => minutes *= 60; // returns number of seconds

const lessThan100 = (num1, num2) => {
		let sum = num1 + num2;
		return sum < 100;
};

function showFirstValue() {
		const arrayInput = document.getElementById('arrayInput').value;
		const array = arrayInput.split(',').map(Number);
		document.getElementById('output1').innerHTML = `First value: ${getFirstValue(array)}`;
}

function showConvertedMinutes() {
		const minutes = parseInt(document.getElementById('minutesInput').value);
		document.getElementById('output2').innerHTML = `${minutes} minutes is equal to ${convertMinutes(minutes)} seconds`;
}

function showLessThan100() {
		const num1 = parseInt(document.getElementById('num1Input').value);
		const num2 = parseInt(document.getElementById('num2Input').value);
		document.getElementById('output3').innerHTML = `The sum of ${num1} and ${num2} is${lessThan100(num1, num2) ? '' : ' not'} less than 100`;
}

function copyFunctionCode(functionName, button) {
		let code = '';

		switch (functionName) {
				case 'getFirstValue':
						code = `const getFirstValue = (array) => {
    return array[0];
};`;
						break;
				case 'convertMinutes':
						code = `const convertMinutes = (minutes) => {
    return minutes *= 60;
};`;
						break;
				case 'lessThan100':
						code = `const lessThan100 = (num1, num2) => {
    let sum;
    sum = num1 + num2;
    return sum < 100;
};`;
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


