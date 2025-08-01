import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header({ toggleSidebar }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      console.log('Search submitted:', searchTerm);
      setSearchTerm('');
    }
  };

  return (
    <nav className="flex items-center gap-8 p-[0.5rem 1rem] justify-between">
      {/* Left Section */}
      <div className="flex items-center">
        <button
          classNam="border-none cursor-pointer h-10 w-10 rounded-[50%] bg-none md:hidden"
          onClick={toggleSidebar}
        >
          <i className="material-icons flex items-center justify-center text-2xl">menu</i>
        </button>
        <Link to="/" className="flex g-2 no-underline md:hidden">
          <img
            src="/yt_logo_rgb_light.png"
            alt="Logo"
            className="w-20 ml-[15px]"
          />
        </Link>
      </div>

      {/* Center Section */}
      <div className="flex w-full justify-center items-center">
        <form
          className=" flex flex-1 max-w-[550px] h-10 items-center"
          onSubmit={handleSearchSubmit}
        >
          <input
            type="search"
            placeholder="Search"
            className="w-full h-[34px] px-4 outline-none text-[1rem] rounded-l-[3.1rem] border border-gray-300"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            aria-label="Search videos"
          />
          <button
            type="submit"
            className="w-auto h-[34px] px-5 rounded-r-[3.1rem] border-l-0 border border-gray-300 bg-[#e5e5e5] cursor-pointer"
            aria-label="Search"
          >
            <i className="material-icons text-lg">search</i>
          </button>
        </form>
        <button className="hidden md:flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-200 transition">
          <i className="material-icons text-lg">mic</i>
        </button>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* <i className="material-icons cursor-pointer">video_call</i> */}
        <i className="material-icons cursor-pointer">notifications</i>
        <img
          src="/Tima.jpg"
          alt="User"className="w-[32px] rounded-[50%] cursor-pointer"/>
      </div>
    </nav>
  );
}

export default Header;
