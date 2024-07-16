import Image from "next/image";
import bioCrudeOilImage from "@/assets/images/biofuels.webp"

const BiomassLiquefaction = () => {
  return (
    <main>
      <h1 className="font-bold font-inter text-center mt-10 text-2xl lg:text-3xl lg:pt-0">
        Biomass Liquefaction
      </h1>
      <div className="flex flex-col gap-10 lg:flex-row lg:justify-around">
        <div className="w-full flex font-open capital-text text-[8px] md:text-xs pt-10 lg:py-4 lg:justify-end ">
        <Image
            className="h-[90%] object-contain self-center px-10"
            src={bioCrudeOilImage}
            alt="image"
          />
        </div>
        <div className="w-full min-h-max mb-10 lg:mb-0 lg:flex lg:flex-col ">
          <ul className="p-10 my-auto list-disc text-base">
            <li>
              Biomass liquefaction is a process that converts organic materials,
              such as plant and animal waste, into liquid biofuels and valuable
              chemicals.
            </li><br/>

            <li>
              The process begins with selecting and preparing biomass feedstock,
              which is cleaned and dried to ensure consistent quality and
              efficiency.
            </li><br/>

            <li>
              The prepared biomass undergoes thermal or hydrothermal treatment,
              breaking down complex organic molecules into simpler, liquid forms
              using heat and pressure.
            </li><br/>

            <li>
              Catalysts are often used to enhance the reaction, increasing the
              yield and quality of the liquid products while reducing processing
              time and energy consumption.
            </li><br/>

            <li>
              The resulting liquid biofuels are refined and purified to meet
              quality standards, making them suitable for use in energy
              production, transportation, and as chemical feedstocks.
            </li><br/>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default BiomassLiquefaction;
