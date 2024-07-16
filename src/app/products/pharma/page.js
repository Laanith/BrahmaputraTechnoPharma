import Image from "next/image";
import pharmaImage from "@/assets/images/pharmaceuticals.webp";

const PharmaPage = () => {
    return (
      <main>
        <h1 className="font-bold font-inter text-center mt-10 text-2xl lg:text-3xl lg:pt-0">
          Pharma
        </h1>
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-around">
          <div className="w-full flex font-open capital-text text-[8px] md:text-xs pt-10 lg:py-4 justify-center ">
        <Image className="w-[75%] object-contain self-center px-10" src={pharmaImage} alt="image" />
          </div>
          <div className="w-full min-h-max mb-10 lg:mb-0 lg:flex lg:flex-col">
            <ul className="p-10 my-auto list-disc text-base">
  <li>
    <strong>Natural Source Utilization : </strong><br/>Catechins, extracted from natural sources such as green tea, offer a potent, natural alternative for pharmaceutical applications, leveraging the health benefits of these bioactive compounds.
  </li>
  <li>
    <strong>Advanced Extraction Techniques : </strong><br/> Employing advanced extraction methods ensures the purity and efficacy of catechins, providing a high-quality base for developing effective pharmaceutical products.
  </li>
  <li>
    <strong>Formulation Innovation : </strong><br/> Through precise formulation techniques, extracted catechins can be transformed into solid dosage forms like tablets and capsules, making them convenient and user-friendly for patients.
  </li>
  <li>
    <strong>Therapeutic Benefits : </strong><br/> Catechins possess various therapeutic properties, including antioxidant, anti-inflammatory, and cardioprotective effects, paving the way for their inclusion in a wide range of pharmaceutical treatments.
  </li>
  <li>
    <strong>Market Expansion : </strong><br/> By developing catechin-based solid dosage forms, the company can diversify its product portfolio and enter the lucrative pharmaceutical market, meeting the increasing demand for natural and effective health solutions.
  </li>



            </ul>
          </div>
        </div>
      </main>
    );
  };
  
  export default PharmaPage;
  