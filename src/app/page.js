// import Image from "next/image";
// import plantCarbon from '../assets/images/plant-carbon.png';
// export default function Home() {
//   return (
// <>
// <main className="flex flex-col gap-8 md:gap-16 xl:flex-row xl:gap-0 bg-red-100 xl:justify-items-start">
//   <Image className="mx-auto md:w-[320px] lg:w-[400px] border-[100px] border-primaryYellow rounded-full" src={plantCarbon} alt="image" width={300}></Image>
//   <h1 className=" font-extrabold text-2xl px-8 py-4 font-inter text-center align-middle sm:px-40 md:text-4xl lg:text-5xl lg:self-center lg:text-center xl:w-[50%]">We are India’s first activated carbon manufacturers that use tea leaves as raw material.</h1>
// </main>
// </>
//   );
// }

"use client";


import Image from "next/image";
import plantCarbon from '../assets/images/plant-carbon.png';
import './page.styles.css';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { CustomEase } from "gsap/CustomEase";
import { RoughEase, ExpoScaleEase, SlowMo } from "gsap/EasePack";
import { TextPlugin } from "gsap/TextPlugin";
import { useEffect, useRef } from "react";


gsap.registerPlugin(useGSAP,TextPlugin,RoughEase,ExpoScaleEase,SlowMo,CustomEase);

export default function Home() {

  return (

    <>
      <main className="flex flex-col gap-8 md:gap-16 xl:flex-row xl:gap-0 xl:justify-between">
        <div className="relative mx-auto p-16 rounded-full radial-yellow">
          <Image className="mx-auto md:w-[160px] lg:w-[300px] scale-[0.8]" src={plantCarbon} alt="image" width={300} height={300} />
          {/* <div className="absolute top-0 left-0 w-full h-full rounded-full border-[100px] border-primaryYellow pointer-events-none"></div> */}
        </div>
        <div className="w-fit h-fit flex flex-col justify-center py-10 xl:w-[50%] xl:h-full lg:self-center">
        <h1 className="text-primary black-text-stroke font-extrabold text-2xl px-8 py-4 font-inter text-center align-middle sm:px-40 md:text-4xl lg:text-[40px] xl:px-20  lg:text-center ">
          <span className="text-primaryYellow black-text-shadow">India’s first</span> activated carbon manufacturers that use tea leaves as raw material.
        </h1>
        <br/>
        <span className="font-open text-base bg-primaryYellow text-primary px-4 py-2 font-normal mx-auto text-shadow-none md:text-xl">Explore Products</span>
        </div>
      </main>
    </>
  );
}
