"use client";

import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Image from "next/image";

function createData(gen, time, image) {
  return { gen, time, image };
}

const rows = [
  createData("The Greatest Generation", "1901-1927", "/smth"),
  createData("The Silent Generation", "1928-1945", "/smth"),
  createData("Baby Boom Generation", "1946-1964", "/smth"),
  createData("Generation X", "1965-1980", "/smth"),
  createData("Generation Y", "1981-1996", "/smth"),
  createData("Generation Z or iGen", "1997-2010", "/smth"),
  createData("Generation Alpha", "2011-2024", "/smth"),
  createData("Generation Beta", "2025-2034", "/smth"),
  createData("Generation Ultra", "2034-2041", "/smth"),
];

export default function GeneraPage() {
  return (
    <main className="flex flex-col p-10 text-base">
      <h1 className="font-inter font-extrabold text-black text-3xl mb-10 lg:mb-10 text-center">
        The Use of Activated Carbon Across Generations
      </h1>
      <div className="flex flex-col gap-10 justify-around p-4 lg:px-20">
        <span className="font-semibold">
          Activated carbon, known for its high adsorption capacity, has
          applications that have evolved with the needs and technological
          advancements of each generation. Here&#39;s how activated carbon is
          utilized across different youth generations, reflecting their unique
          characteristics, societal changes, and language styles.
        </span>
        <h3 className="font-semibold text-2xl underline text-black  mb-4">
          Generations
        </h3>

        <dl>
          <div>
            <dt className="font-bold">Baby Boomers (Born 1946-1964)</dt>
            <dd>
              <ul>
                <li>
                  <strong>Usage:</strong> Water purification and industrial
                  applications.
                </li>
                <li>
                  <strong>Lingo:</strong> Ensuring Clean Water for All.
                </li>
                <li>
                  <strong>Explanation:</strong> During our time, activated
                  carbon was a game-changer in making sure everyone had access
                  to safe drinking water. It was used in municipal water
                  treatment plants and home water filters to remove impurities
                  and contaminants, providing peace of mind and promoting a
                  healthier lifestyle.
                </li>
              </ul>
            </dd>
          </div>
          <br />
          <div>
            <dt className="font-bold">Generation X (Born 1965-1980)</dt>
            <dd>
              <ul>
                <li>
                  <strong>Usage:</strong> Personal health and consumer products.
                </li>
                <li>
                  <strong>Lingo:</strong> Indoor Air Quality Matters.
                </li>
                <li>
                  <strong>Explanation:</strong> Activated carbon became crucial
                  in the 80s and 90s as we dealt with increasing urban
                  pollution. We started seeing it in air purifiers, which
                  improved the air quality in our homes and offices. It was also
                  used in medical detoxification treatments, helping us maintain
                  better health amidst growing environmental concerns.
                </li>
              </ul>
            </dd>
          </div>
          <br />
          <div>
            <dt className="font-bold">Millennials (Born 1981-1996)</dt>
            <dd>
              <ul>
                <li>
                  <strong>Usage:</strong> Personal care and sustainability.
                </li>
                <li>
                  <strong>Lingo:</strong> Natural Wellness Solutions.
                </li>
                <li>
                  <strong>Explanation:</strong> Millennials have always valued
                  health and the environment. We embraced activated carbon in
                  our beauty and personal care routines, using products like
                  face masks, toothpaste, and deodorants. This natural solution
                  provided effective detoxification and purification, aligning
                  perfectly with our commitment to sustainability and wellness.
                </li>
              </ul>
            </dd>
          </div>
          <br />
          <div>
            <dt className="font-bold">Generation Z (Born 1997-2012)</dt>
            <dd>
              <ul>
                <li>
                  <strong>Usage:</strong> Tech gadgets and lifestyle products.
                </li>
                <li>
                  <strong>Lingo:</strong> Smart Living with Eco-Friendly Tech.
                </li>
                <li>
                  <strong>Explanation:</strong> As digital natives, Gen Z loves
                  integrating technology into every aspect of life. Activated
                  carbon features in our smart gadgets like phone cases that
                  reduce radiation exposure and in advanced air purifiers for
                  our smart homes. These innovations help us maintain a healthy,
                  eco-conscious lifestyle while staying connected.
                </li>
              </ul>
            </dd>
          </div>
          <br />
          <div>
            <dt className="font-bold">Generation Alpha (Born 2013-2023)</dt>
            <dd>
              <ul>
                <li>
                  <strong>Usage:</strong> Education and sustainable living.
                </li>
                <li>
                  <strong>Lingo:</strong> Learning and Living Green.
                </li>
                <li>
                  <strong>Explanation:</strong> For us, learning about the
                  environment starts early. Activated carbon is part of our
                  educational tools and eco-friendly projects. We use it in
                  school science experiments and sustainable toys to understand
                  water purification and air quality management. Its all about
                  hands-on learning and making a difference from a young age.
                </li>
              </ul>
            </dd>
          </div>
          <br />
          <div>
            <dt className="font-bold">Generation Neo (Born 2024-2030)</dt>
            <dd>
              <ul>
                <li>
                  <strong>Usage:</strong> Advanced environmental and health
                  solutions.
                </li>
                <li>
                  <strong>Lingo:</strong> Innovating for a Greener Future.
                </li>
                <li>
                  <strong>Explanation:</strong> Were all about finding
                  cutting-edge solutions to environmental challenges. Activated
                  carbon is key in our global climate initiatives and advanced
                  health treatments. Whether its in wearable health monitors
                  that detoxify blood or in large-scale projects cleaning up
                  pollution, were leveraging its power to create a sustainable
                  and healthy future.
                </li>
              </ul>
            </dd>
          </div>
          <br />
          <div>
            <dt className="font-bold">Generation Pro (Born 2031-2036)</dt>
            <dd>
              <ul>
                <li>
                  <strong>Usage:</strong> Integrated smart environments.
                </li>
                <li>
                  <strong>Lingo:</strong> Smart Eco-Systems for Everyday Life.
                </li>
                <li>
                  <strong>Explanation:</strong> In our interconnected world,
                  activated carbon plays a vital role. Its in our smart home
                  systems, autonomously purifying air and water to ensure we
                  live in clean environments. Its also crucial in space
                  exploration missions, helping us maintain sustainability on
                  Earth and beyond. Were all about smart, eco-friendly living.
                </li>
              </ul>
            </dd>
          </div>
        </dl>

        <p>
          Activated carbon&#39;s versatility and effectiveness have made it a staple
          across generations, with each era leveraging its unique properties to
          address contemporary challenges. From ensuring clean water for Baby
          Boomers to creating smart eco-systems for Generation Pro, activated
          carbon continues to evolve, meeting the diverse needs and
          technological advancements of each generation.
        </p>
      </div>
      <br />
    </main>
  );
}
