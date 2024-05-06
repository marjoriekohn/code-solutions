export const binarySort = (input) => {
		let array = Array.isArray(input) ? input : input.split(',').map(Number);
		let sortedArray = [];

		if (array.length <= 1 || array.some(isNaN)) {
				return `Enter a list of numbers seperated by commas.`
		}
		sortedArray.push(array[0]);

		for (let i = 1; i < array.length; i++) {
				let itemToSort = array[i];
				let newFirstIndex = 0;
				let newLastIndex = sortedArray.length - 1;

				while (newFirstIndex <= newLastIndex) {
						let newMidIndex = Math.floor((newFirstIndex + newLastIndex) / 2);
						if (sortedArray[newMidIndex] < itemToSort) {
								newFirstIndex = newMidIndex + 1;
						} else {
								newLastIndex = newMidIndex - 1;
						}
				}
				sortedArray.splice(newFirstIndex, 0, itemToSort);
		}
		return `${array} was sorted to ${sortedArray}.`;
}

export const binarySortMetadata = {
		functionName: 'binarySort',
		skills: ['binary sort', 'algorithm', 'array manipulation', 'sorting'],
		title: 'Binary Insertion Sort',
		description: 'This function uses a binary insertion sort to sort an array of numbers you provide.',
		inputPlaceholder: 'Example: 4, 7, 2, 3, 1',
		inputType: 'text',
		inputId: 'binarySortInput',
		outputId: 'binarySortOutput',
		generateOutputText: (result) => result
};