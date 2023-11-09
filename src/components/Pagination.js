import React from "react";

const Pagination = () => {
  return (
    <nav aria-label="Page navigation example" className="mt-5">
      <ul class="pagination">
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Previous" >
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">
            1
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">
            2
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">
            3
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">
            4
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">
            5
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
