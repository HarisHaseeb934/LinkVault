import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";

const pageList = (currentPage, totalPages) => {
//   if (totalPages <= 5) return Array.from({ length: 5 }, (_, i) => i + 1);
  const pages = new Set([1, 2,3, currentPage, totalPages]);
  const sortedPages = [...pages]
    .filter((p) => p >= 1 && p <= totalPages)
    .sort((a, b) => a - b);
  return sortedPages.flatMap((p, i) =>
    i && p - sortedPages[i - 1] > 1 ? ["...", p] : [p],
  );
};

const Pagination = ({ currentPage, totalPages }) => {
  return (
    <div className="flex items-center gap-1">
      <button className="border-outline-variant text-on-surface/50 hover:bg-surface-container border size-8 text-sm flex justify-center items-center rounded-sm">
        <FaAngleLeft className=""/>
      </button>
      {pageList(1, 5)?.map((p, i) =>
        p === "..." ? <span className="text-on-surface/50" key={i}>...</span> : <button key={i} className={`${p === currentPage ? 'bg-primary/50 border border-outline-variant text-on-surface/70 size-8 rounded-sm text-xs': 'text-on-background/50 hover:text-on-background hover:bg-surface-container border border-outline-variant size-8 rounded-sm text-xs'}`}>{p}</button>,
      )}
      <button className="border-outline-variant text-on-surface/50 hover:bg-surface-container border size-8 text-sm flex justify-center items-center rounded-sm">
        <FaAngleRight className=""/>
      </button>
    </div>
  );
};

export default Pagination;
