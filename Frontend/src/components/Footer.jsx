import Pagination from "./Pagination"

const Footer = () => {
  return (
    <div className="flex flex-col sm:flex-row p-5 sm:items-center sm:justify-between gap-3">
        <div className="text-on-background/50 font-display text-xs">Showing <span className="text-on-background">1-9</span> of <span className="text-on-background">42</span> links</div>
        <Pagination currentPage={3} totalPages={4}/>
    </div>
  )
}

export default Footer