import {generateUI} from './generateUI.js';
import {convertMinutes, convertMinutesMetadata} from "./myFunctions/convertMinutes.js";
import {validateAndIdentifyCard, validateAndIdentifyCardMetadata} from "./myFunctions/validateAndIdentifyCard.js";
import {generateRandomDNA, generateRandomDNAMetadata} from "./myFunctions/generateRandomDNA.js";
import {randomNumber, randomNumberMetadata} from "./myFunctions/randomNumber.js";
import {fibonacciSequence, fibonacciSequenceMetadata} from "./myFunctions/Fibonacci.js";
import {factorial, factorialMetadata} from "./myFunctions/factorial.js";
import {computerGuessNumber, computerGuessNumberMetadata} from "./myFunctions/binarySearch.js";

let currentPage = 1;
const sectionsPerPage = 4;

export const sectionsData = [
		{function: validateAndIdentifyCard, metadata: validateAndIdentifyCardMetadata},
		{function: generateRandomDNA, metadata: generateRandomDNAMetadata},
		{function: fibonacciSequence, metadata: fibonacciSequenceMetadata},
		{function: computerGuessNumber, metadata: computerGuessNumberMetadata},
		{function: factorial, metadata: factorialMetadata},
		{function: convertMinutes, metadata: convertMinutesMetadata},
		{function: randomNumber, metadata: randomNumberMetadata},
];

const totalPages = Math.ceil(sectionsData.length / sectionsPerPage);

export function initializePagination() {
		generateMainSection();
		updatePaginationControls();
}
export function goToNextPage() {
		if (currentPage < totalPages) {
				currentPage++;
				generateMainSection();
				updatePaginationControls();
		}
}
export function goToPreviousPage() {
		if (currentPage > 1) {
				currentPage--;
				generateMainSection();
				updatePaginationControls();
		}
}

function generateMainSection() {
		const startIndex = (currentPage - 1) * sectionsPerPage;
		const endIndex = startIndex + sectionsPerPage;
		const mainContainer = document.getElementById('container');
		mainContainer.innerHTML = ''; 

		for (let i = startIndex; i < endIndex && i < sectionsData.length; i++) {
				generateUI(sectionsData[i].function, sectionsData[i].metadata);
		}
}

function updatePaginationControls() {
		const pageNumber = document.getElementById('pageNumber');
		const prevPageButton = document.getElementById('prevPage');
		const nextPageButton = document.getElementById('nextPage');
		pageNumber.innerHTML = `${currentPage}`;
		prevPageButton.disabled = currentPage <= 1;
		nextPageButton.disabled = currentPage >= totalPages;
}






