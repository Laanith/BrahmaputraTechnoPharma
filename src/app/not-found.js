"use client";

import { Player } from "@lottiefiles/react-lottie-player";
import notFoundAnimation from "@/assets/lottie/404.json";
import { useState, useEffect } from "react";
import Lottie from "lottie-react";
import useScreenSize from "@/scripts/useScreenSize";

const NotFound = () => {

    const {width, height} = useScreenSize();
    const [isMobile, setIsMobile] = useState(width < 640);
    const [isTab, setIsTab] = useState(width < 1280);
    const [isDesktop, setIsDesktop] = useState(width > 1280);

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
