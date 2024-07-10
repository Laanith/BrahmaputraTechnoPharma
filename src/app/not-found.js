"use client";

import { Player } from "@lottiefiles/react-lottie-player";
import notFoundAnimation from "@/assets/lottie/404.json";
import { useState, useEffect } from "react";
import Lottie from "lottie-react";

const NotFound = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
    const [isTab, setIsTab] = useState(window.innerWidth < 1280);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1280);

    const handleResize = () => {
        setIsMobile(window.innerWidth < 640);
        setIsTab(window.innerWidth < 1024);
        setIsDesktop(window.innerWidth > 1024);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <main className="flex flex-row">
            <span className=" h-full mx-auto">
                <Lottie
                    animationData={notFoundAnimation}
                    loop={true}
                    className={
                        isMobile ? ( "w-[400px]") : ( isTab ? "w-[600px]" : (isDesktop ? "w-[400px]" : <></>))
                    }
                />
            </span>
        </main>
    );
};

export default NotFound;
