import type { ReactNode } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

type FilterValue = "all" | "small" | "medium" | "large";

function CabinFilter() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();

  const raw = searchParams.get("capacity");

  const activeFilter: FilterValue =
    raw === "small" || raw === "medium" || raw === "large" ? raw : "all";

  function handleFilter(filter: FilterValue): void {
    const params = new URLSearchParams(searchParams.toString());
    params.set("capacity", filter);
    navigate(`${location.pathname}?${params.toString()}`);
  }

  return (
    <div className="border border-primary-800 flex flex-wrap">
      <Button
        filter="all"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        All <span className="hidden sm:inline">cabins</span>
      </Button>
      <Button
        filter="small"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        1-3 <span className="hidden sm:inline">guests</span>
      </Button>
      <Button
        filter="medium"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        4-7 <span className="hidden sm:inline">guests</span>
      </Button>
      <Button
        filter="large"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        8-12 <span className="hidden sm:inline">guests</span>
      </Button>
    </div>
  );
}

type ButtonProps = {
  filter: FilterValue;
  handleFilter: (filter: FilterValue) => void;
  activeFilter: FilterValue;
  children: ReactNode;
};

function Button({ filter, handleFilter, activeFilter, children }: ButtonProps) {
  const isActive = filter === activeFilter;

  return (
    <button
      onClick={() => handleFilter(filter)}
      className={`py-2 px-5 hover:bg-primary-700 cursor-pointer  ${
        isActive ? "bg-primary-700 text-primary-50" : ""
      }`}
    >
      {children}
    </button>
  );
}

export default CabinFilter;
