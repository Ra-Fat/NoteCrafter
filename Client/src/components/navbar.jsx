import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Searchbar from './SearchBar';
import { useNavigate } from 'react-router-dom';
import { ProfileInfo } from './ProfileInfo';
import { FaBook } from "react-icons/fa";

export default function Navbar() {

    const [searchQuery, setSearchQuery]= useState("");

    const navigate= useNavigate();
    const onLogout = ()=>{
        navigate('/SignIn');
    }
    const handleSearch = ()=>{

    }
    const handleClearSearch = ()=>{
        setSearchQuery("");
    }
  return (
    <header className="bg-[#171717] h-16 w-full  flex items-center overflow-hidden">
      <div className="flex items-center justify-between font-bold text-white w-full px-20 py-2 drop-shadow-2xl "> 
        <Link className="text-xl" to="/"> Note-Crafter</Link>
        <Searchbar value={searchQuery}onChange={({target})=>{setSearchQuery(target.value)}} handleSearch={handleSearch} handleClearSearch= {handleClearSearch}/>
        <ProfileInfo onLogout={onLogout} />
      </div>
    </header>
  );
}
