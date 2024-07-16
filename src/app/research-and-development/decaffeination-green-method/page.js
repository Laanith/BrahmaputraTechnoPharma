import Image from "next/image";
import decafImage from "@/assets/images/decaffeination.webp"


const GreenMethodForDecaffeination = () => {
    return (
      <main>
        <h1 className="font-bold font-inter text-center mt-10 text-2xl lg:text-3xl lg:pt-0">
          Green Method for decaffeination
        </h1>
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-around">
          <div className="w-full flex font-open capital-text text-[8px] md:text-xs pt-10 lg:py-4 lg:justify-end ">
          <Image
            className="h-[90%] object-contain self-center px-10"
            src={decafImage}
            alt="image"
          />
          </div>
          <div className="w-full min-h-max mb-10 lg:mb-0 lg:flex lg:flex-col ">
            <ul className="p-10 my-auto list-disc text-base">
            <li>
  Green decaffeination methods focus on removing caffeine from coffee beans and tea leaves using environmentally friendly processes that maintain flavor and quality.
</li><br/>

<li>
  One popular green method is the Swiss Water Process, which uses only water to extract caffeine, relying on solubility and osmosis without the need for chemical solvents.
</li><br/>

<li>
  Another method involves using supercritical carbon dioxide (CO₂), which acts as a solvent at high pressures to selectively extract caffeine while preserving other flavor compounds.
</li><br/>

<li>
  These methods ensure that the decaffeination process is sustainable, reducing chemical waste and minimizing environmental impact compared to traditional solvent-based techniques.
</li><br/>

<li>
  The resulting decaffeinated products are tested for flavor and caffeine content to ensure they meet quality standards, providing a healthier and eco-friendly option for consumers.
</li><br/>

            </ul>
          </div>
        </div>
      </main>
    );
  };
  
  export default GreenMethodForDecaffeination;
  