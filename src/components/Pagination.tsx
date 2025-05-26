import { getPageNumbers } from "../utils/helpers";
import type { Pagination as PaginationType } from "../utils/types";

type PaginationProps = PaginationType & {
  onPageChange: (page: number) => void;
};

const Pagination = ({ page, totalPages, onPageChange }: PaginationProps) => {
  const pages = getPageNumbers(page, totalPages);

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center my-5">
      <div className="flex-grow">
        Page {page} of {totalPages}
      </div>
      <div className="flex justify-center gap-5">
        {page !== 1 && (
          <button
            className="text-indigo-500 text-underline"
            onClick={() => onPageChange(page - 1)}
          >
            Previous
          </button>
        )}
        {pages.map((pageNo, i) => {
          if (typeof pageNo === "string") {
            return <span key={`${pageNo}-${i}`}>...</span>;
          }

          return (
            <button
              key={pageNo}
              className={`text-indigo-500 ${
                page === pageNo ? "underline" : ""
              }`}
              onClick={() => onPageChange(pageNo)}
            >
              {pageNo}
            </button>
          );
        })}
        {page !== totalPages && (
          <button
            className="text-indigo-500 text-underline"
            onClick={() => onPageChange(page + 1)}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Pagination;
