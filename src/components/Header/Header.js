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
        <Link href="/"><h1 className="font-bold text-xs sm:text-base md:text-4xl w-[40%] h-full">Brahmaputra<br/>
        TechnoPharmaceuticals <br/>Pvt. Ltd.</h1></Link>
        <ul className= {"bg-primary font-open z-50" + (clicked ? " active" : "")} id="navbar">
        <li>
          {clicked ? <div onClick={()=>{setClicked(!clicked)}} className="pr-8 pl-0 py-4"><FaTimes className="z-50"/></div>  : <></>}
          </li>
          <li className="" >
            <Link href="/products" className="">Products</Link>
          </li>
          <li>
            <Link href="/research-and-development">R&D</Link>
          </li>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about-us">About Us</Link>
          </li>
          <li>
            <Link href="/news">News</Link>
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
