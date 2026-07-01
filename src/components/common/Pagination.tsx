import { useSearchParams } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  count: number;
  pageSize: number;
}

export default function Pagination({ count, pageSize }: PaginationProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const pageCount = Math.ceil(count / pageSize);

  if (pageCount <= 1) return null;

  function nextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;
    searchParams.set("page", String(next));
    setSearchParams(searchParams);
  }

  function prevPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;
    searchParams.set("page", String(prev));
    setSearchParams(searchParams);
  }

  function setPage(pageNumber: number) {
    searchParams.set("page", String(pageNumber));
    setSearchParams(searchParams);
  }

  const pages = Array.from({ length: pageCount }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-end py-4 mt-8 border-t border-primary-800 text-primary-100">
      <div className="flex items-center gap-2">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="flex items-center justify-center p-2 rounded-md bg-primary-900 border border-primary-800 hover:bg-accent-600 hover:text-primary-50 transition-all duration-300 disabled:opacity-50 disabled:hover:bg-primary-900 disabled:hover:text-primary-100 disabled:cursor-not-allowed cursor-pointer"
          aria-label="Previous Page"
        >
          <ChevronLeft className="h-5 w-5" />
          <span className="sr-only">Previous</span>
        </button>

        <div className="flex items-center gap-1">
          {pages.map((page) => (
            <button
              key={page}
              onClick={() => setPage(page)}
              className={`px-3 py-1.5 rounded-md text-sm font-semibold transition-all duration-300 cursor-pointer ${
                page === currentPage
                  ? "bg-accent-600 text-primary-50 font-bold scale-105"
                  : "hover:bg-primary-800 hover:text-white"
              }`}
            >
              {page}
            </button>
          ))}
        </div>

        <button
          onClick={nextPage}
          disabled={currentPage === pageCount}
          className="flex items-center justify-center p-2 rounded-md bg-primary-900 border border-primary-800 hover:bg-accent-600 hover:text-primary-50 transition-all duration-300 disabled:opacity-50 disabled:hover:bg-primary-900 disabled:hover:text-primary-100 disabled:cursor-not-allowed cursor-pointer"
          aria-label="Next Page"
        >
          <ChevronRight className="h-5 w-5" />
          <span className="sr-only">Next</span>
        </button>
      </div>
    </div>
  );
}
