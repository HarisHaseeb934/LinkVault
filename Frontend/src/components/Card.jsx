import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { HiOutlinePencil } from "react-icons/hi2";

const TAGS = ["react", "nodejs", "mongodb", "css", "tools"];

const Card = () => {
  return (
    <div className="bg-surface group rounded-lg p-5 border border-outline-variant hover:border-outline flex flex-col gap-3">
      <div className="flex justify-between items-center">
        <span className="font-mono text-xs text-on-background/50">
          react.dev
        </span>
        <span className="text-on-background/70 flex gap-3">
          <button className="opacity-0 group-hover:opacity-100 hover:bg-surface-container-high p-1 hover:text-on-background cursor-pointer">
            <HiOutlinePencil />
          </button>
          <button className="opacity-0 group-hover:opacity-100 hover:bg-surface-container-high p-1 hover:text-error cursor-pointer">
            <RiDeleteBinLine />
          </button>
          <button className="hover:bg-surface-container-high p-1">
            <FaRegStar />
          </button>
          {/* <button className="hover:bg-surface-container-high p-1 text-accent-favorite">
            <FaStar/>
          </button> */}
        </span>
      </div>

      <h2 className="text-on-surface group-hover:text-on-primary-container font-semibold">
        useOptimistic — React Reference
      </h2>

      <p className="text-on-background/50 text-sm">
        Clean pattern for instant IJI updates on star toggles server
        confirmation settles.
      </p>

      <div className="font-display flex flex-wrap gap-1">
            {TAGS.map((tag, index) => {
                return <span key={index} className="text-on-background/50 hover:text-on-background text-xs bg-surface-container-high p-0.5 px-3 border border-outline rounded-2xl ">#{tag}</span>
            })}
      </div>
    </div>
  );
};

export default Card;
