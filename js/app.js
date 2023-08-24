import {goToNextPage, goToPreviousPage, initializePagination} from "./pagination.js";
import {computerGuessNumber, computerGuessNumberMetadata as metadata} from "./myFunctions/binarySearch.js";

document.addEventListener('DOMContentLoaded', () => {
		console.log("DOMContentLoaded event fired");
		initializePagination();

		const prevPageButton = document.getElementById('prevPage');
		const nextPageButton = document.getElementById('nextPage');

		prevPageButton.addEventListener('click', goToPreviousPage);
		nextPageButton.addEventListener('click', goToNextPage);
});

// for functions that don't require user input)
document.addEventListener('DOMContentLoaded', () => {
		document.getElementById('computerGuessNumberOutput').textContent = computerGuessNumber();
});
