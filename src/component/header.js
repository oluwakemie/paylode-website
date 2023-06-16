import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
const Header = () => {
  const [toggle, setToggle] = useState(true);
  const [showMenu, setShowMenu] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
    setShowMenu(!showMenu);
  };

  return (
    <div className="sticky w-full bg-gray-100 z-1000 lg:relative shadow ">
      <div className="flex flex-row items-center  justify-between relative px-[30px] md:px-[80px] lg:px-[130px] py-[12px]">
        <img src="/paylodelogo.png" alt="" className="lg:h-[45px] h-[38px]" />

        <nav className="hidden lg:inline-block">
          <ul className="flex flex-row items-center text-[#124072] justify-between gap-[30px] ">
            <Link to="/">
              <li className="cursor-pointer hover:text-[##990019] hover:border-b-[#124072]">
                Home
              </li>
            </Link>

            {/* <Link href="#product" ><li className="cursor-pointer hover:text-[##990019] hover:border-b-[#124072]">
              Process
            </li></Link> */}
            <Link to="/pricing">
              <li className="cursor-pointer hover:text-[##990019] hover:border-b-[#124072]">
                Pricing
              </li>
            </Link>

            <li className="cursor-pointer hover:text-[##990019] hover:border-b-[#124072]">
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
        </nav>
        <button className="animate-pulse py-[14px] px-[40px] bg-[#124072] text-white font-bold rounded-md hidden lg:inline-block">
          <a href="#contact">Contact Us</a>
        </button>
        <button onClick={handleToggle} className="lg:hidden md:inline-block">
          {toggle ? <GiHamburgerMenu /> : <AiOutlineClose />}
        </button>

        {showMenu && (
          <div className="bg-white absolute right-1 rounded-md shadow -bottom-[230%] lg:hidden w-[200px] py-5 px-3 z-1000">
            <ul className="flex flex-col gap-[10px] mb-2 ">
              {" "}
              <li className="cursor-pointer border-b  hover:text-[##990019] hover:border-b-[#124072]">
                <a href="#home">Home</a>
              </li>{" "}
              <li className="cursor-pointer hover:text-[##990019] border-b hover:border-b-[#124072]">
                <a href="#product">Products</a>
              </li>{" "}
              <li className="cursor-pointer  hover:text-[##990019] border-b hover:border-b-[#124072]">
                <a href="#contact">Contact Us</a>
              </li>
              {/* <li className="cursor-pointer border-b hover:text-[##990019] hover:border-b-[#124072]">
                Event
              </li> */}
            </ul>
            {/* <button className="animate-pulse py-[8px] px-[24px] bg-[#124072] text-white font-bold rounded-md">
              Sign Up
            </button> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
