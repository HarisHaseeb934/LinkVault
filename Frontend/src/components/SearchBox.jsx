import { IoIosSearch } from "react-icons/io";

const SearchBox = () => {

    return(
        <form className="max-w-xl flex flex-1 border border-outline-variant items-center pl-2 rounded-sm focus-within:border-primary font-display">
            <IoIosSearch className="text-on-background/70"/>
            <input type="text" className="outline-none w-full text-sm p-2 placeholder:text-on-background/50 text-on-background" placeholder="Search links by title, URL, or note..."/>
        </form>
    )
}

export default SearchBox