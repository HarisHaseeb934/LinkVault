import Card from "../components/Card";
import SearchBox from "../components/SearchBox";
import { RiAddLargeLine } from "react-icons/ri";

const SORT = [
  { value: "des", label: "Newest first" },
  { value: "asc", label: "Oldest first" },
  { value: "title", label: "Title A-Z" },
];

const Dashboard = () => {
  return (
    <main className="bg-background w-full divide-y divide-outline-variant">
      <div className="p-5 flex justify-between gap-3 flex-col sm:flex-row">
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
          <button className="font-display flex text-on-background items-center gap-2 bg-primary py-1.5 px-3 rounded-sm text-sm">
            <RiAddLargeLine className="text-on-background" />
            Add Link
          </button>
        </div>
      </div>

      <div className="p-5">
        <div className="font-display flex justify-between items-baseline">
          <h2 className="text-on-background text-lg">All Links</h2>
          <span className="text-on-background/50 text-xs font-mono">
            42 resources
          </span>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mt-3.5">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
