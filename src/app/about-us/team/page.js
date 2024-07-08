"use client";

import teamMemberImage from "@/assets/images/miles-image.jpg";
import Image from "next/image";

import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

import Link from "next/link";
import "./page.styles.css";
import { useState, useEffect } from "react";

const TeamPage = () => {
  const [index, setIndex] = useState(0);

  const data = [
    {
      name: "Somnath Chanda",
      image: teamMemberImage,
      description:
        "somnath is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      socials: {
        facebook: "/",
        instagram: "/",
        linkedIn: "/",
      },
    },
    {
      name: "Drishti Medhi",
      image: teamMemberImage,
      description:
        "balayya is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      socials: {
        facebook: "/",
        instagram: "/",
        linkedIn: "/",
      },
    },
    {
      name: "Gaurav Medhi",
      image: teamMemberImage,
      description:
        "coco-cola pepsi is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      socials: {
        facebook: "/",
        instagram: "/",
        linkedIn: "/",
      },
    },

    {
      name: "surya",
      image: teamMemberImage,
      description:
        "surya pepsi is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      socials: {
        facebook: "/",
        instagram: "/",
        linkedIn: "/",
      },
    },
  ];

  return (
    <main className="flex flex-col p-10">
      <h1 className="font-inter font-extrabold text-black text-3xl mb-10 lg:mb-10 text-center">
        Our Team
      </h1>
      <div className="flex flex-col gap-10 lg:flex-row xl:gap-0 justify-around relative">
        <div className="flex flex-col justify-center w-[100%] mx-auto">
          <Image
            className="mx-auto w-[100%] md:w-[300px] lg:w-[200px]"
            src={data[index].image}
            alt="team-member-image"
          />
          <p className="font-open font-bold capital-text mx-auto text-2xl py-4 text-center">
            {data[index].name}
          </p>
          <div className="flex flex-row mx-auto">
            {data[index].socials.facebook ? (
              <Link href={data[index].socials.facebook}>
                <span className="mui-icon">
                {" "}

                  <FacebookIcon fontSize="large" />
                </span>
              </Link>
            ) : (
              <></>
            )}
            {data[index].socials.instagram ? (
              <Link href={data[index].socials.instagram}>
                <span className="mui-icon">
                {" "}

                  <InstagramIcon fontSize="large" />
                </span>
              </Link>
            ) : (
              <></>
            )}
            {data[index].socials.linkedIn ? (
              <Link href={data[index].socials.linkedIn}>
                <span className="mui-icon">
                  {" "}
                  <LinkedInIcon fontSize="large" />
                </span>
              </Link>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="font-open capital-text text-sm text-center flex justify-center m-auto md:px-10">
          {data[index].description}
        </div>
        <span className=" " id="BUTTON-HOLDER">
          <span className="mui-icon"
            id="left-button"
            onClick={() => {
              let newIndex = index - 1;
              if (newIndex < 0) setIndex(data.length - 1);
              else setIndex(newIndex);
            }}
          >
            {" "}
            <KeyboardArrowLeftIcon
              sx={{
                cursor : "pointer",
                marginY: "auto",
                display: "inline",
                alignSelf: "flex-start",
                zIndex: 100,
              }}
            />
          </span>
          <span className="mui-icon"
            id="right-button"
            onClick={() => {
              let newIndex = index + 1;
              if (newIndex > data.length - 1) setIndex(0);
              else setIndex(newIndex);
            }}
          >
            {" "}
            <KeyboardArrowRightIcon
              sx={{
                cursor : "pointer",
                marginY: "auto",
                alignSelf: "flex-end",
                display: "inline",
                zIndex: 100,
              }}
            />
          </span>
        </span>
      </div>
    </main>
  );
};

export default TeamPage;
