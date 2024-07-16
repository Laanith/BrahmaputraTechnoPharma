"use client";

import teamMemberImage from "@/assets/images/miles-image.webp";
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

  const data = [

    {
      name: "Ms.Medhi, CEO",
      image: teamMemberImage,
      description:
        "At the helm of our company is Ms. Medhi, whose strategic vision and unwavering dedication have been instrumental in steering the startup through its formative years. Her leadership is characterized by a clear focus on long-term goals, a commitment to fostering innovation, and an ability to inspire and motivate the team. Ms. Medhi’s adeptness in navigating the complex landscape of the startup ecosystem has led us to achieve significant milestones and secure crucial funding.",
      socials: {
        facebook: "/",
        instagram: "/",
        linkedIn: "/",
      },
    },
    {
      name: "Somnath Chanda, CTO",
      image: teamMemberImage,
      description:
      "Our Chief Technology Officer, Somnath Chanda, is the technical mastermind behind our innovative solutions. With deep knowledge of the latest technological advancements and exceptional problem-solving skills, Somnath ensures our products and services remain cutting-edge and effective. He oversees the development and implementation of technology strategies, manages technical teams, and maintains a robust, scalable infrastructure. His contributions are crucial to our competitive edge in the industry.",
      socials: {
        facebook: "/",
        instagram: "/",
        linkedIn: "/",
      },
    },
    {
      name: "Mr.Medhi, CMO",
      image: teamMemberImage,
      description:
        "The creative force behind our marketing strategies is Mr. Medhi, our Chief Marketing Officer. His innovative approach to marketing has significantly increased our brand visibility and market presence. Mr. Medhi excels in understanding market trends, consumer behavior, and developing compelling marketing campaigns that resonate with our target audience. His work ensures that our message reaches the right people, thereby driving growth and customer engagement. His ability to adapt to changing market conditions and leverage new marketing channels has been instrumental in our success.",
      socials: {
        facebook: "/",
        instagram: "/",
        linkedIn: "/",
      },
    },

    {
      name: "Mr.Borthakur, COO",
      image: teamMemberImage,
      description:
        "As the Chief Operating Officer, Mr. Borthakur is the backbone of our operational framework. His role is crucial in ensuring the smooth execution of day-to-day activities, optimizing processes, and enhancing overall efficiency. With a strategic approach to operations management, Mr. Borthakur has been successful in streamlining workflows, reducing costs, and improving productivity. His operational expertise allows the rest of the team to focus on their core areas, knowing that the operational aspects are in capable hands.",
      socials: {
        facebook: "/",
        instagram: "/",
        linkedIn: "/",
      },
    },

    {
      name: "Dr.Dutta & Surmaita, Advisors",
      image: teamMemberImage,
      description:
        "Our advisors, Dr. Dutta and Surmaita, bring a wealth of knowledge and experience to our team. Dr. Dutta’s academic and industry expertise provides us with a strong foundation in research and development, ensuring that our solutions are scientifically sound and innovative. Surmaita’s strategic insights and business acumen offer invaluable guidance on market positioning, growth strategies, and risk management. Their combined input helps us make informed decisions and navigate the complexities of the startup world with confidence.",
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
      <div className="flex flex-col gap-10 justify-around relative lg:px-20">
        {data.map(obj => {
          return (<div key={obj.name}>
            <p><strong>{obj.name}</strong></p>
            <br/>
            <p>{obj.description}</p>
          </div>);
        })}
      </div>
    </main>
  );
};

export default TeamPage;
