import {generateUI} from '../UI/generateUI.js';
import {timeConversion, timeConversionMetadata} from "../myFunctions/timeConversion.js";
import {luhnAlgorithm, luhnAlgorithmMetadata} from "../myFunctions/luhnAlgorithm.js";
import {dnaSequencing, dnaSequencingMetadata} from "../myFunctions/dnaSequencing.js";
import {randomNumber, randomNumberMetadata} from "../myFunctions/randomNumber.js";
import {fibonacciSequence, fibonacciSequenceMetadata} from "../myFunctions/Fibonacci.js";
import {factorial, factorialMetadata} from "../myFunctions/factorial.js";
import {binarySearch, binarySearchMetadata} from "../myFunctions/binarySearch.js";
import {binarySort, binarySortMetadata} from "../myFunctions/binarySort.js";

let currentPage = 1;
const sectionsPerPage = 4;

export const sectionsData = [
		{function: luhnAlgorithm, metadata: luhnAlgorithmMetadata},
		{function: dnaSequencing, metadata: dnaSequencingMetadata},
		{function: fibonacciSequence, metadata: fibonacciSequenceMetadata},
		{function: factorial, metadata: factorialMetadata},
		{function: binarySearch, metadata: binarySearchMetadata},
		{function: timeConversion, metadata: timeConversionMetadata},
		{function: randomNumber, metadata: randomNumberMetadata},
		{function: binarySort, metadata: binarySortMetadata}
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






