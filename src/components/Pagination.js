import React, { useState } from "react";
import { Link } from "react-router-dom";

const Pagination = ({ eventsPerPage, totalEvents, onPageChange }) => {
  const totalPage = Math.ceil(totalEvents / eventsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    onPageChange(newPage);
  };
  

  return (
    <nav aria-label="Page navigation example" className="mt-5">
      <ul class="pagination">
        <li class="page-item">
        <Link className="page-link" to="#" aria-label="Previous" onClick={() => handlePageChange(currentPage - 1)}>
            <span aria-hidden="true">&laquo;</span>
          </Link>
        </li>
        {[...Array(totalPage).keys()].map((page) => (
          <li key={page + 1} className={`page-item ${currentPage === page + 1 ? 'active' : ''}`}>
            <Link className="page-link" to="#" onClick={() => handlePageChange(page + 1)}>
              {page + 1}
            </Link>
          </li>
        ))}
        <li class="page-item">
        <Link className="page-link" to="#" aria-label="Next" onClick={() => handlePageChange(currentPage + 1)}>
            <span aria-hidden="true">&raquo;</span>
        </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
