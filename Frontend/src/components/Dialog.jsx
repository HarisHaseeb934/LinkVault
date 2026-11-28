import { MdOutlineClose } from "react-icons/md";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import Input from "./Input";
import FormButton from "./FormButton";

const Dialog = ({ dialogModal, handleModalClose }) => {
  const [inputTag, setInputTag] = useState("");
  const [favorite, setFavorite] = useState(true);
  const [tags, setTags] = useState(["nodejs", "react"]);
  const handleTags = (i) => {
    setTags((prev) => prev.filter((tag, index) => index !== i));
  };
  const handleTagInsertion = (e) => {
    if (e.key === "enter" || e.key === ",") {
      return setTags((prev) => [...prev, inputTag]);
    }
    if (e.key === "Backspace" && tags.length > 0 && !inputTag) {
      return setTags((prev) => prev.slice(0, -1));
    }
    setInputTag(e.target.value);
  };

  const handleFavorite = () => {
    setFavorite((prev) => !prev);
  };

  return (
    <dialog
      ref={dialogModal}
      className="rounded-lg backdrop:bg-black/50 m-auto max-w-lg w-full border border-outline"
    >
      <form className="bg-surface flex flex-col divide-y divide-outline">
        <div className="flex items-center justify-between text-on-background p-5">
          <h1 className="font-bold text-lg">Save New Resources</h1>
          <button
            type="button"
            className="p-1 hover:bg-surface-container-high cursor-pointer"
            onClick={handleModalClose}
          >
            <MdOutlineClose className="text-on-background/70" />
          </button>
        </div>
        <div className="p-5 flex flex-col gap-5">
          <Input
            label={"URL"}
            name={"url"}
            type={"url"}
            placeholder={"www.google.com"}
          />
          <Input
            label={"Title"}
            name={"title"}
            placeholder={"Resource title"}
          />

          <div className="flex flex-col">
            <label htmlFor="tags" className=" text-on-surface text-sm">
              Tags
            </label>
            <div className="bg-surface-container-low flex flex-wrap gap-2 w-full font-display p-2 text-on-surface text-sm focus-within:border-primary border rounded-sm border-outline-variant">
              {tags.map((tag, i) => {
                return (
                  <span
                    key={i}
                    className="flex items-center bg-primary/50 text-on-surface/70 px-2 rounded-xl gap-2 justify-between "
                  >
                    #{tag}
                    <button
                      type="button"
                      className="hover:bg-on-surface-variant/20 cursor-pointer"
                      onClick={() => handleTags(i)}
                    >
                      <MdOutlineClose className="text-on-background" />
                    </button>
                  </span>
                );
              })}
              <input
                type="text"
                className="flex-1 outline-none"
                id="tags"
                placeholder="Add tag..."
                //   onChange={(e) => setInputTag(e.target.value)}
                onKeyDown={handleTagInsertion}
                //   value={inputTag}
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="notes" className=" text-on-surface text-sm">
              Notes
            </label>
            <textarea
              name="notes"
              id="notes"
              className="bg-surface-container-low w-full resize-none placeholder:text-on-surface/50 font-display p-2 text-on-surface font-normal text-sm outline-none focus:border-primary border rounded-sm border-outline-variant"
              placeholder="Add a brief personal note for quick recall..."
              rows="3"
            ></textarea>
          </div>
          <div className="flex justify-between">
            <span className="flex items-center gap-1 font-display text-on-surface text-sm">
              <FaStar className="text-accent-favorite" />
              Marks as Favorite
            </span>
            <button
              className={`w-10 border relative flex items-center transition-all duration-200 border-outline rounded-2xl cursor-pointer ${favorite ? "bg-primary" : "bg-surface-container-high"}`}
              type="button"
              onClick={handleFavorite}
            >
              <div
                className={`size-4 bg-on-surface rounded-full transition-all duration-200 ${favorite ? "translate-x-5" : "translate-x-0.5"}`}
              ></div>
            </button>
          </div>
        </div>
        <div className="flex justify-end bg-surface-container-low text-sm text-on-background gap-3 p-5">
          <button className="bg-surface-container-high border border-outline-variant px-3.5 py-2 rounded-lg cursor-pointer">
            Cancel
          </button>
          <FormButton text={"Save Link"} />
        </div>
      </form>
    </dialog>
  );
};

export default Dialog;
