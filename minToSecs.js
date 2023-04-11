// goal: write a function convertMinsToSecs() that takes an integer minutes and converts it into seconds.
const convertMinsToSecs = (minutes) => {
		if(typeof minutes !== "number") {
				return null;
		}
		return minutes *= 60; // returns number of seconds
}
console.log(convertMinsToSecs(80)); // testing
console.log(convertMinsToSecs(800)); // testing
console.log(convertMinsToSecs(-70)); // testing
console.log(convertMinsToSecs(0)); // testing
