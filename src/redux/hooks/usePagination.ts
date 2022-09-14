import { useState, useEffect } from 'react';

export const usePagination = (
	maxPage: number,
	itemPerPage: number = 10,
	numberOfPageButton: number = 7
) => {
	const [currentPage, setCurrentPage] = useState<number>(1);
	const FIRST_PAGE = 0;
	const [pageArray, setPageArray] = useState([
		FIRST_PAGE,
		1,
		2,
		3,
		4,
		5,

		maxPage,
	]);

	const prevPage = () => {
		setCurrentPage((oldPage) => {
			const newPage = oldPage - 1;
			if (newPage < 0) return maxPage;
			return newPage;
		});
	};

	const nextPage = () => {
		setCurrentPage((oldPage) => {
			const newPage = oldPage + 1;

			if (newPage > maxPage) return 0;
			return newPage;
		});
	};

	useEffect(() => {
		const tempPageArray = pageArray.map((page, index) => {
			if (index === FIRST_PAGE) return 0;
			if (index === numberOfPageButton - 1) return maxPage;

			let tempPage = currentPage + index - 3;

			if (currentPage === FIRST_PAGE) {
				tempPage += 3;
			} else if (currentPage === FIRST_PAGE + 1) {
				tempPage += 2;
			} else if (currentPage === FIRST_PAGE + 2) {
				tempPage += 1;
			} else if (currentPage === maxPage) {
				tempPage -= 3;
			} else if (currentPage === maxPage - 1) {
				tempPage -= 2;
			} else if (currentPage === maxPage - 2) {
				tempPage -= 1;
			}

			return tempPage;
		});
		setPageArray(tempPageArray);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentPage, maxPage]);

	return { currentPage, setCurrentPage, nextPage, prevPage, pageArray };
};
