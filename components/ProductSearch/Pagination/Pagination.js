import { useState } from "react";

export const Pagination = ({ totalPages, onPageClick }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
    onPageClick(pageNumber);
  };

  let pagesToShow = [];

  if (totalPages <= 3) {
    pagesToShow = Array.from({ length: totalPages }, (_, i) => i + 1);
  } else {
    if (currentPage <= 2) {
      pagesToShow = [1, 2, 3];
    } else if (currentPage >= totalPages - 1) {
      pagesToShow = [totalPages - 2, totalPages - 1, totalPages];
    } else {
      pagesToShow = [currentPage - 1, currentPage, currentPage + 1];
    }
    if (currentPage > 3) {
      pagesToShow.unshift("...");
      pagesToShow.unshift(1);
    } else if (currentPage === 3) {
      pagesToShow.unshift(1);
    }
    if (currentPage < totalPages - 2) {
      pagesToShow.push("...");
      pagesToShow.push(totalPages);
    } else if (currentPage === totalPages - 2) {
      pagesToShow.push(totalPages);
    }
  }

  return (
    <div className="max-w-5xl mx-auto mb-10 flex justify-center gap-2">
      {pagesToShow.map((page, i) => (
        <div
          key={i}
          className={`btn ${page === currentPage ? "active" : ""}`}
          onClick={() => {
            if (typeof page === "number") {
              handleClick(page);
            }
          }}
        >
          {page}
        </div>
      ))}
    </div>
  );
};
