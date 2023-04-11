// goal: create a function getFirstValue that will return the first element of an array.
const getFirstValue = (array) => {
		if (!Array.isArray(array)) { // checks if input is an array
				return 'Enter comma-separated numbers'; // returns error if it isn't an array
		}
		return array[0]; // returns first element of array
}
console.log(getFirstValue([6, 16, 71, 18])); // testing getFirstValue
console.log(getFirstValue([1, 16, 71, 18])); // testing getFirstValue
console.log(getFirstValue([0, 16, 71, 18])); // testing getFirstValue
console.log(getFirstValue([-1, 16, 71, 18])); // testing getFirstValue
console.log(getFirstValue([-100, 16, 71, 18])); // testing getFirstValue
