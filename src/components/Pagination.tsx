import RightArrow from "./icons/RightArrow";
import LeftArrow from "./icons/LeftArrow";
import type { PaginationProps } from "@/types";

const Pagination = ({ currentPage = 1, setCurrentPage }: PaginationProps) => {
  const pages: Array<number | string> = [];
  if (currentPage <= 3) {
    pages.push(1, 2, 3, "...", 8, 9, 10);
  } else if (currentPage <= 5) {
    pages.push(1, "...", currentPage, "...", 8, 9, 10);
  } else if (currentPage <= 7) {
    pages.push(1, 2, 3, "...", currentPage, "...", 10);
  } else {
    pages.push(1, 2, 3, "...", 8, 9, 10);
  }

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8 text-[#667085] col-span-full">
      <button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
        className="cursor-pointer flex items-center gap-1 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <LeftArrow /> Previous
      </button>

      <div className="flex items-center gap-0.5">
        {pages.map((page, index) => (
          <button
            key={index}
            onClick={() => typeof page === "number" && setCurrentPage(page)}
            className="h-10 w-10 rounded-md cursor-pointer"
            style={{
              backgroundColor: currentPage === page ? "#F9F5FF" : "",
              color: currentPage === page ? "#7F56D9" : "",
            }}
          >
            {page}
          </button>
        ))}
      </div>
      <button
        disabled={currentPage === 10}
        onClick={() => setCurrentPage(currentPage + 1)}
        className="cursor-pointer flex items-center gap-1 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Next <RightArrow />
      </button>
    </div>
  );
};

export default Pagination;
