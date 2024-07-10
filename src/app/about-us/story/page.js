"use client";

import { ClockCircleOutlined } from "@ant-design/icons";
import { Timeline } from "antd";
import timelineDot from "@/assets/svg/timeline-dot.svg";
import Image from "next/image";
import { Chrono } from "react-chrono";
import { useEffect, useState } from "react";
import useScreenSize from "@/scripts/useScreenSize";

function ChronoTimeLine() {
  const items = [
    {
      title: "May 2019",
      cardTitle: "Dunkirk",
      cardSubtitle:
        "Men of the British Expeditionary Force (BEF) wade out to..",
    },
    {
      title: "June 2021",
      cardTitle: "Dunkirk",
      cardSubtitle:
        "Men of the British Expeditionary Force (BEF) wade out to..",
    },
    {
      title: "August 2022",
      cardTitle: "Dunkirk",
      url: "http://www.history.com",
      cardSubtitle:
        "Men of the British Expeditionary Force (BEF) wade out to..",
    },
  ];
  return (
    <div>
      <Chrono
        mode="VERTICAL_ALTERNATING"
        items={items}
        disableToolbar={true}
        borderLessCards={true}
        cardHeight={50}
        cardLess={true}
      />
    </div>
  );
}

function Node({ time, description, orientation, setCurrentDesc }) {

  const {width, height } = useScreenSize();
  const [hover, setHover] = useState(false);
  const [isNotDesktop, setIsNotDesktop] = useState(width < 1280);


  return (
    <span
      className={`h-fit flex w-fit relative cursor-pointer ${
        orientation === "left" ? "flex-row-reverse ml-auto" : "flex-row"
      }`}
      onMouseOver={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      onClick={() => {
        setCurrentDesc(description);
      }}
    >
      <span className="px-4 my-auto text-[10px] text-center md:text-base border border-blue-600 rounded-s align-text-top">
        {time}
      </span>
      <span className="flex flex-col">
        {isNotDesktop ? (
          <svg
            className="my-auto"
            width="5mm"
            height="5mm"
            viewBox="0 0 5 5"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="0"
              y1="2.5"
              x2="5"
              y2="2.5"
              stroke="black"
              strokeWidth="0.2"
            />
          </svg>
        ) : (
          <svg
            className="my-auto"
            width="10mm"
            height="5mm"
            viewBox="0 0 10 5"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="0"
              y1="2.5"
              x2="10"
              y2="2.5"
              stroke="black"
              strokeWidth="0.2"
            />
          </svg>
        )}
      </span>
      <span>
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            className={`${
              hover ? "fill-[#ffe768] fill-opacity-1 transition-all" : ""
            } `}
            cx="13"
            cy="13"
            r="13"
            fill="#65A47A"
            fillOpacity="0.6"
          />
          <circle cx="13" cy="13" r="8" fill="#FFE768" />
        </svg>
      </span>
      {
        isNotDesktop ? <></> : (
          hover ? (
            <span className="bg-gray-200 rounded-sm px-2 text-[8px] md:text-base my-auto z-10">
              {description.length > 10
                ? description.slice(0, 10) + "..."
                : description}
            </span>
          ) : (
            <></>
          )
        )
      }
    </span>
  );
}

const StoryPage = () => {
  const [currentDesc, setCurrentDesc] = useState(
    "A deep dive into the story of the birth..."
  );

  return (
    <main>
      <h1 className="font-bold font-inter text-center pt-10 text-2xl lg:text-3xl lg:pt-0">
        Our Story
      </h1>
      <div className="flex flex-col gap-10 lg:flex-row lg:justify-around">
        <div className="w-full font-open capital-text text-[8px] md:text-xs pt-10 lg:py-4 justify-center  text-center">
          <div className="block">
            <Timeline
              mode="alternate"
              items={[
                {
                  children: (
                    <Node
                      time={"2024"}
                      description={"something_a"}
                      orientation={"right"}
                      setCurrentDesc={setCurrentDesc}
                    />
                  ),
                },
                {
                  children: (
                    <Node
                      time={"2024"}
                      description={"something_b"}
                      orientation={"left"}
                      setCurrentDesc={setCurrentDesc}
                    />
                  ),
                },
                {
                  children: (
                    <Node
                      time={"2024"}
                      description={"something_c"}
                      orientation={"right"}
                      setCurrentDesc={setCurrentDesc}
                    />
                  ),
                },
                {
                  children: (
                    <Node
                      time={"2024"}
                      description={"something_d"}
                      orientation={"left"}
                      setCurrentDesc={setCurrentDesc}
                    />
                  ),
                },
                {
                  children: (
                    <Node
                      time={"2024"}
                      description={"something_e"}
                      orientation={"right"}
                      setCurrentDesc={setCurrentDesc}
                    />
                  ),
                },
                {
                  children: (
                    <Node
                      time={"2024"}
                      description={"something_f"}
                      orientation={"left"}
                      setCurrentDesc={setCurrentDesc}
                    />
                  ),
                },
                {
                  children: (
                    <Node
                      time={"2024"}
                      description={"something_g"}
                      orientation={"right"}
                      setCurrentDesc={setCurrentDesc}
                    />
                  ),
                },
              ]}
            />
          </div>
        </div>
        <div className="w-full min-h-max mb-10 lg:mb-0 lg:flex lg:flex-col">
          <h1
            className="block text-black font-open capital-text text-center text-base p-3 px-10 lg:my-auto lg:w-[80%] xl:w-[80%]"
          >
            {currentDesc}
          </h1>
        </div>
      </div>
    </main>
  );
};

export default StoryPage;
