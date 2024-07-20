"use client";

import { ClockCircleOutlined } from "@ant-design/icons";
import { Timeline } from "antd";
import timelineDot from "@/assets/svg/timeline-dot.svg";
import Image from "next/image";
import { Chrono } from "react-chrono";
import { useEffect, useState } from "react";
import useScreenSize from "@/scripts/useScreenSize";

function Node({
  time,
  image,
  description,
  orientation,
  primer,
  setCurrentDesc,
  setCurrentImage,
}) {
  const { width, height } = useScreenSize();
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
        setCurrentImage(image);
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
      {isNotDesktop ? (
        <></>
      ) : hover ? (
        <span className="bg-gray-200 rounded-sm px-2 text-[8px] md:text-base my-auto z-10">
          {primer.length > 10 ? primer.slice(0, 10) + "..." : primer}
        </span>
      ) : (
        <></>
      )}
    </span>
  );
}

const StoryPage = () => {
  const [currentDesc, setCurrentDesc] = useState(
    "Our startup journey has been a blend of determination, innovation, and resilience. It began as a ‘dorm room startup’ from a hostel room as a University spin-off (also known as university spin-outs for start-up companies that transform intellectual properties filed from educational institutes that otherwise wouldn’t have been commercialized. Source: WIKIPEDIA) based on the data from the research, we first pitched at the Assam Biotech Conclave, organized by the Guwahati Biotech Park. Despite not being selected, this initial setback fuelled our resolve to innovate and excel. We also won 3rd prize in \"Research Wave\" organized by SAIL, IIT Guwahati."
  );

  const [currentImage, setCurrentImage] = useState(null);

  return (
    <main>
      <h1 className="font-bold font-inter text-center pt-10 text-2xl lg:text-3xl lg:pt-0 text-black">
        Our Story
      </h1>
      <div className="flex flex-col gap-10 lg:flex-row lg:justify-around">
        <div className="w-full font-open  text-[8px] md:text-xs pt-10 lg:py-4 justify-center  text-center">
          <div className="block">
            <Timeline
              mode="alternate"
              items={[
                {
                  children: (
                    <Node
                      time={"2015"}
                      description={
                        "Our startup journey has been a blend of determination, innovation, and resilience. It began as a ‘dorm room startup’ from a hostel room as a University spin-off (also known as university spin-outs for start-up companies that transform intellectual properties filed from educational institutes that otherwise wouldn’t have been commercialized. Source: WIKIPEDIA) based on the data from the research, we first pitched at the Assam Biotech Conclave, organized by the Guwahati Biotech Park. Despite not being selected, this initial setback fuelled our resolve to innovate and excel. We also won 3rd prize in \"Research Wave\" organized by SAIL, IIT Guwahati."
                      }
                      primer={"1st prize @ TIC Innovation"}
                      orientation={"right"}
                      setCurrentDesc={setCurrentDesc}
                      setCurrentImage={setCurrentImage}
                    />
                  ),
                }, 
                {
                  children: (
                    <Node
                      time={"2016"}
                      description={
                        "In 2016, our hard work paid off when we won the 1st Prize at the IITG-TIC Innovation Competition, organized by IIT Guwahati. This significant milestone reinforced our belief in our vision and capabilities. We were offered incubation space at TIC, IIT Guwahati."
                      }
                      primer={"1st prize @ TIC Innovation"}
                      orientation={"left"}
                      setCurrentDesc={setCurrentDesc}
                      setCurrentImage={setCurrentImage}
                    />
                  ),
                },
                {
                  children: (
                    <Node
                      time={"2019"}
                      description={
                        "Our momentum continued in 2019 when we secured the 2nd Prize at the NE-Hackathon organized by ASTU, Govt. of Assam. In July 2019, we pooled some funds among our family members and thought to start our venture as a Family Business under the Joint Hindu Family Business also known as Hindu Undivided Family (HUF). Our vision to include more inclusivity for talent pooling led to our registration as a private limited company on 27th December 2019 as Brahmaputra TechnoPharmaceuticals Pvt. Ltd."
                      }
                      primer={"2nd prize @ NE-hackathon"}
                      orientation={"right"}
                      setCurrentDesc={setCurrentDesc}
                      setCurrentImage={setCurrentImage}
                    />
                  ),
                },
                {
                  children: (
                    <Node
                      time={"2020"}
                      description={
                        "In February 2020, just before the pandemic, we established our lab-cum-office facility at the Guwahati Biotech Park then located inside the IIT Guwahati campus. Despite the challenges of the COVID-19 pandemic, we thrived by winning the COVID-19 Grand Challenge at IIT Guwahati and being shortlisted in several prestigious competitions. Our innovative streak saw us secure the 2nd runner-up position at the UNDO CORONA Ideation Challenge and top positions at the IKP Idea Exposition and BRTC Mapping the Changemakers of North East Region of India."
                      }
                      primer={"Registration as private limited company"}
                      orientation={"left"}
                      setCurrentDesc={setCurrentDesc}
                      setCurrentImage={setCurrentImage}
                    />
                  ),
                },
                {
                  children: (
                    <Node
                      time={"2021"}
                      description={
                        "In 2021, our achievements included winning the 1st Position in the Online Ideathon Challenge organized by Bio-NEST NIPER-G (Guwahati), the Rise & Shine event organized by IIC, Bineswar Brahma Engineering College, Kokrajhar, and the 2nd round of the TIDE 2.0 IDEATHON organized by Assam Don Bosco University. We gained valuable experiences through programs like the RKV-RAFTAAR online classes by IIM Kashipur and selections for the Agri-Launchpad by the Venture Center, NCL Pune, and the NE Launchpad organized by KIIT, Bhubaneswar. In 2021 we shifted our labs to BioNEST, Research Park at IIT Guwahati. Meanwhile the initial design for website was started by Manu Parasuraman, Department of Design, IITG."
                      }
                      primer={"1st position at Online Ideathon Challenge"}
                      orientation={"right"}
                      setCurrentDesc={setCurrentDesc}
                      setCurrentImage={setCurrentImage}
                    />
                  ),
                },
                {
                  children: (
                    <Node
                      time={"2023"}
                      description={
                        "In 2023, we achieved a major milestone by securing a Rs. 50 lakh grant through the BIG NER program."
                      }
                      primer={"Rs.50 Lakh grant by BIG-NER Program"}
                      orientation={"left"}
                      setCurrentDesc={setCurrentDesc}
                      setCurrentImage={setCurrentImage}
                    />
                  ),
                },

                {
                  children: (
                    <Node
                      time={"2024"}
                      description={
                        "Finally, on 17th July 2024, we hosted our dedicated website prepared by Laanith Dhruvarjun Chouhan, Department of Data Science and Artificial Intelligence, IITG, to connect with our stallholders. In 2024, being selected in the ideation stage of the Start-up Competition of the Assam State Bamboo Mission, further validating our innovative potential. And there's a lot more to come...."
                      }
                      primer={"Website hosted"}
                      orientation={"right"}
                      setCurrentDesc={setCurrentDesc}
                      setCurrentImage={setCurrentImage}
                    />
                  ),
                },
              ]}
            />
          </div>
        </div>
        <div className="w-full min-h-max mb-10 lg:mb-0 lg:flex lg:flex-row ">
          <h1 className="block font-open text-base p-3 px-10 lg:my-auto lg:w-[80%] xl:w-[80%]">
            {currentDesc}
          </h1>
        </div>
      </div>
    </main>
  );
};

export default StoryPage;
