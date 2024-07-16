"use client";
import Link from "next/link";
import { useRef, useState } from "react";
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import "./Header.css";
import { usePathname } from "next/navigation";
import CompanyLogo from "@/assets/svg/company-logo.svg";
import Image from "next/image";
import useScreenSize from "@/scripts/useScreenSize";





// header color #65A47A

export default function MenuAppBar() {
  const pathname = usePathname();

  const screenSize = useScreenSize();
  const isActive = (href) => pathname === href;

  const [clicked, setClicked] = useState(false);

  return (
    <header className="bg-primary text-textPrimary mb-auto w-full min-h-[20vh] flex flex-col border-b-[15px] border-primaryYellow">
      <nav className="my-auto">
        <Link href="/" className="ml-0">
          <span className="flex flex-row">
            <Image src={CompanyLogo} alt="company-logo" className="w-[60px] mr-2 object-contain sm:w-[80px] sm:text-2xl sm:mr-4 lg:w-[120px] lg:mr-[1.25rem]"/>
            <h1 className={"font-bold text-xs sm:text-base lg:text-3xl w-[40%] h-full my-auto font-inter"}
            >
              Brahmaputra
              <br />
              TechnoPharmaceuticals <br />
              Pvt. Ltd.
              {/* {screenSize.width} */}
            </h1>
          </span>
        </Link>
        <ul
          className={"bg-primary font-open z-50" + (clicked ? " active" : "")}
          id="navbar"
        >
          <li>
            {clicked ? (
              <div
                onClick={() => {
                  setClicked(!clicked);
                }}
                className="pr-8 pl-0 py-4"
              >
                <FaTimes className="z-50" />
              </div>
            ) : (
              <></>
            )}
          </li>
          <li
            className={isActive("/") ? "border-white border-b-2" : ""}
            onClick={() => {
              if (clicked) setClicked(false);
            }}
          >
            <Link href="/">Home</Link>
          </li>

          <li
            className={isActive("/about-us") ? "border-white border-b-2" : ""}
            onClick={() => {
              if (clicked) setClicked(false);
            }}
          >
            <Link href="/about-us">About Us</Link>
          </li>

          <li
            className={
              isActive("/research-and-development")
                ? "border-white border-b-2"
                : ""
            }
            onClick={() => {
              if (clicked) setClicked(false);
            }}
          >
            <Link href="/research-and-development">R&D</Link>
          </li>

          <li
            className={isActive("/products") ? "border-white border-b-2" : ""}
            onClick={() => {
              if (clicked) setClicked(false);
            }}
          >
            <Link href="/products" className="">
              Products
            </Link>
          </li>

          <li
            className={isActive("/news") ? "border-white border-b-2" : ""}
            onClick={() => {
              if (clicked) setClicked(false);
            }}
          >
            <Link href="/news">News</Link>
          </li>
          <li
            className={isActive("/careers") ? "border-white border-b-2" : ""}
            onClick={() => {
              if (clicked) setClicked(false);
            }}
          >
            <Link href="/careers">Careers</Link>
          </li>
        </ul>
        <div id="mobile">
          <button
            id="bar"
            onClick={() => {
              setClicked(!clicked);
            }}
          >
            {clicked ? <></> : <FaBars />}
          </button>
        </div>
      </nav>
    </header>
  );
}
