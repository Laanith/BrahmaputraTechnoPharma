import Image from "next/image";
import GreenTeaImage from "@/assets/images/greenTea.webp";

const CatechinExtraction = () => {
  return (
    <main>
      <h1 className="font-bold font-inter text-center mt-10 text-2xl lg:text-3xl lg:pt-0">
        Catechin Extraction
      </h1>
      <div className="flex flex-col gap-10 lg:flex-row lg:justify-around">
        <div className="w-full flex font-open capital-text text-[8px] md:text-xs pt-10 lg:py-4 lg:justify-end">
        <Image className="h-[90%] object-cover self-center px-10" src={GreenTeaImage} alt="image" />
        </div>
        <div className="w-full min-h-max mb-10 lg:mb-0 lg:flex lg:flex-col ">
          <ul className="p-10 my-auto list-disc text-base">
            <li>
              Catechins are natural phenols and antioxidants found in green tea,
              fruits, chocolate, and wine, known for their numerous health
              benefits.
            </li><br/>

            <li>
              The extraction process begins with selecting high-quality green
              tea leaves, drying them, and grinding them into a fine powder.
            </li><br/>

            <li>
              The powdered leaves are mixed with a solvent, typically ethanol or
              water, and heated to extract catechins into the liquid.
            </li><br/>

            <li>
              The mixture is filtered to separate the solid plant material, then
              concentrated and purified to create a potent, catechin-rich
              extract.
            </li><br/>

            <li>
              Catechins offer health benefits such as antioxidant properties,
              support for heart health, weight management, brain function, and
              anti-inflammatory effects.
            </li><br/>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default CatechinExtraction;
