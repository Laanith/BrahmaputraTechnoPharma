import Image from "next/image";
import nutraceuticalsImage from "@/assets/images/nutraceuticals.webp";

const NutraPage = () => {
    return (
      <main>
        <h1 className="font-bold font-inter text-center mt-10 text-2xl lg:text-3xl lg:pt-0">
          Nutraceuticals
        </h1>
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-around">
          <div className="w-full flex font-open capital-text text-[8px] md:text-xs pt-10 lg:py-4 justify-center ">
        <Image className="w-[75%] object-contain self-center px-10" src={nutraceuticalsImage} alt="image" />
          </div>
          <div className="w-full min-h-max mb-10 lg:mb-0 lg:flex lg:flex-col">
            <ul className="p-10 my-auto list-disc text-base">


  <li>
    <strong>Innovative Tea-Based Beverages : </strong><br/> Our expertise in tea extraction allows us to create unique, health-enhancing beverages such as kombucha and other tea-infused drinks, offering a natural and delicious way to support wellness.
  </li>
  <li>
    <strong>Plant-Based Vegan Butter : </strong><br/> Leveraging the rich nutrients of tea plants, we produce tea plant-based vegan butter, a versatile and healthy alternative to traditional dairy and vegan butters.
  </li>
  <li>
    <strong>Health-Boosting Nutraceuticals : </strong><br/> By combining the therapeutic benefits of tea with advanced formulation techniques, we develop a range of nutraceutical products aimed at promoting overall health and well-being.
  </li>
  <li>
    <strong>Sustainable and Natural Ingredients : </strong><br/> Our commitment to sustainability ensures that all our products are made from natural, responsibly sourced ingredients, aligning with consumer demand for eco-friendly and health-conscious choices.
  </li>
  <li>
    <strong>Pioneering Tea Technology : </strong><br/> As leaders in tea technology, we continuously innovate to bring cutting-edge tea-based nutraceuticals to market, positioning ourselves at the forefront of the health and wellness industry.
  </li>






            </ul>
          </div>
        </div>
      </main>
    );
  };
  
  export default NutraPage;
  