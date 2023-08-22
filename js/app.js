import {goToNextPage, goToPreviousPage, initializePagination} from "./pagination.js";

document.addEventListener('DOMContentLoaded', () => {
		console.log("DOMContentLoaded event fired");
		initializePagination();

		const prevPageButton = document.getElementById('prevPage');
		const nextPageButton = document.getElementById('nextPage');

		prevPageButton.addEventListener('click', goToPreviousPage);
		nextPageButton.addEventListener('click', goToNextPage);
});