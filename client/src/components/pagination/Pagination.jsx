/* eslint-disable react/prop-types */

import styles from "./Pagination.module.css"

const Pagination = ({
  filteredCountries,
  cardsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(filteredCountries.length / cardsPerPage); i++) {
    pages.push(i);
  }

  const handleCurrentPage = (page) => {
    if (page > 0 && page < pages.length + 1) {
      setCurrentPage(page);
    }
  };

  let moreThanTen = filteredCountries.length > cardsPerPage;
  console.log(currentPage)

  return (
    <div>
      {moreThanTen && (
        <button onClick={() => handleCurrentPage(currentPage - 1)}>Prev</button>
      )}

      {pages.map((page, index) => {
        return (
          <button className={styles.button}key={index} onClick={() => handleCurrentPage(page)}>
            {page}
          </button>
        );
      })}

      {moreThanTen && (
        <button onClick={() => handleCurrentPage(currentPage + 1)}>Next</button>
      )}
    </div>
  );
};

export default Pagination;
