import { NavLink } from "react-router-dom";
import { FaRegBookmark, FaTag, FaRegStar } from "react-icons/fa";
import { MdOutlineSettings } from "react-icons/md";

const SIDEBAR_TABS = [
  { label: "All Links", icon: <FaRegBookmark /> },
  { label: "Favourites", icon: <FaRegStar /> },
  { label: "Untagged", icon: <FaTag /> },
];

const TAGS = ["react", "nodejs", "mongodb", "css", "tools"];

const Siderbar = () => {
  return (
    <aside className="lg:w-60 bg-surface-container-low p-4 lg:min-h-screen flex flex-col justify-between">
      <div className="">
        <h1 className="font-display text-on-background">
          <NavLink className={`flex items-center font-semibold text-lg gap-1`}>
            <img src="linkvault_logo.jpeg" alt="" className="w-10" />
            LinkVault
          </NavLink>
        </h1>
        <ul className="font-display flex flex-col gap-2 py-4">
          {SIDEBAR_TABS.map((tab, index) => {
            const { label, icon } = tab;
            return (
              <li
                key={index}
                className="flex text-[13px] justify-between hover:bg-surface-container text-on-background/70 hover:text-on-background p-2 rounded-sm"
              >
                <span className="flex items-center gap-2">
                  {icon}
                  {label}
                </span>
                <span>42</span>
              </li>
            );
          })}
        </ul>
        <p className="text-on-background/70 p-2 text-[13px]">TAGS</p>
        <ul className="flex flex-wrap lg:flex-col">
          {TAGS.map((tag, index) => {
            return (
              <li
                key={index}
                className="text-[12px] flex justify-between hover:bg-surface-container text-on-background/70 hover:text-on-background p-2 rounded-sm"
              >
                <span>#{tag}</span>
                <span>42</span>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="text-[13px] border-t border-outline-variant">
          <div className="flex p-2">
            <img src="" alt="" />
            <div className="flex flex-col text">
              <span className="text-on-background">Name</span>
              <span className="text-on-background/70">Email</span>
            </div>
          </div>
          <NavLink className={`flex gap-2 items-center hover:bg-surface-container text-on-background/70 hover:text-on-background p-2 rounded-sm`}>
          <MdOutlineSettings className="text-lg"/>
          Settings
          </NavLink>
      </div>
    </aside>
  );
};

export default Siderbar;
