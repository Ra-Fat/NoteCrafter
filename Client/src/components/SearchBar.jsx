import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

const Searchbar = ({value, onChange, handleSearch, handleClearSearch}) =>{
    return(
        <div className="w-80 flex items-center px-4 bg-[#21262b] rounded-md">
            <input type="text" placeholder="Search Notes" onChange={onChange} value={value} className="w-full text-xs bg-transparent py-[11px] outline-none" />
            {value && (
                <IoMdClose className="text-xl text-slate-500 cursor-pointer hover:text-white mr-3" onClick={handleClearSearch}/>
            ) }
            <FaMagnifyingGlass className="text-slate-400 cursor-pointer hover:text-white" onClick={handleSearch}/>
        </div>
    )
}
export default Searchbar;