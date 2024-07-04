"use client";
import Link from "next/link";
import { useRef, useState } from "react";
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import './Header.css';

// header color #65A47A

export default function MenuAppBar() {


  const [clicked, setClicked ] = useState(false);

  return (
    <header className="bg-primary text-textPrimary mb-auto w-full min-h-[20vh] flex flex-col border-b-[15px] border-primaryYellow">
      <nav className="my-auto">
        <h1 className="font-bold text-xs sm:text-base md:text-4xl w-[40%] h-full bg-pink-200">Brahmaputra<br/>
        TechnoPharmaceuticals Pvt. Ltd.</h1>
        <ul className= {"bg-primary font-open" + (clicked ? " active" : "")} id="navbar">
        <li>
          {clicked ? <div onClick={()=>{setClicked(!clicked)}} className="pr-8 pl-0 py-4"><FaTimes className="z-50"/></div>  : <></>}
          </li>
          <li className="active">
            <Link href="" className="">Products</Link>
          </li>
          <li>
            <Link href="">R&D</Link>
          </li>
          <li>
            <Link href="">Home</Link>
          </li>
          <li>
            <Link href="">About Us</Link>
          </li>
          <li>
            <Link href="">News</Link>
          </li>
          <li>
            <Link href="">Contact Us</Link>
          </li>
        </ul>
        <div id="mobile">
      <button id='bar' onClick={()=>{setClicked(!clicked)}}>
              {clicked ? <></>: <FaBars/>}
        </button>
      </div>
      </nav>
    </header>
  );
}
