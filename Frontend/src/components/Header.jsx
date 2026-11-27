import SearchBox from './SearchBox';
import { RiAddLargeLine } from 'react-icons/ri';

const SORT = [
  { value: "des", label: "Newest first" },
  { value: "asc", label: "Oldest first" },
  { value: "title", label: "Title A-Z" },
];

const Header = ({handleModalOpen}) => {
  return (
    <header className="p-5 flex justify-between gap-3 flex-col sm:flex-row">
        <SearchBox />
        <div className="flex gap-3">
          <div className="text-on-background flex items-center gap-2 pr-2 rounded-sm text-sm focus:border-primary border border-outline-variant bg-background">
            <select
              name=""
              id=""
              className="w-full outline-none py-1.5 px-2 bg-background"
            >
              {SORT.map((s, i) => {
                return (
                  <option key={i} value={s.value}>
                    {s.label}
                  </option>
                );
              })}
            </select>
          </div>
          <button onClick={handleModalOpen} className="font-display flex text-on-background items-center gap-2 bg-primary py-1.5 px-3 rounded-sm text-sm">
            <RiAddLargeLine className="text-on-background" />
            Add Link
          </button>
        </div>
    </header>
  )
}

export default Header