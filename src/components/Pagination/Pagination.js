import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./Pagination.scss";

Pagination.propTypes = {
  pagination: PropTypes.object.isRequired,
  onPageChange: PropTypes.func,
};

Pagination.defaultProps = {
  onPageChange: null,
};

function Pagination({ pagination, onPageChange }) {
  const { _limit, _page, _totalRow } = pagination;

  const [pages, setPages] = useState([]);
  const totalPages = Math.ceil(_totalRow / _limit);

  useEffect(() => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }

    setPages(pages);
  }, [_page, _limit, _totalRow]);

  return (
    <div className="pagination">
      {pages.map((item, index) => (
        <button
          className={`pagination__btn ${+_page === item ? "active" : ""}`}
          key={index}
          onClick={() => onPageChange(item)}
        >
          {item}
        </button>
      ))}
      <button
        className="pagination__btn next"
        disabled={_page >= totalPages}
        onClick={() => onPageChange(+_page + 1)}
      >
        <ion-icon name="chevron-forward-outline"></ion-icon>
      </button>
    </div>
  );
}

export default Pagination;
