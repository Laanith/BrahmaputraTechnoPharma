import Image from "next/image";
import charcoalImage from "@/assets/images/charcoal.webp";

const CosmeticsPage = () => {
    return (
      <main>
        <h1 className="font-bold font-inter text-center mt-10 text-2xl lg:text-3xl lg:pt-0">
          Activated Charcoal
        </h1>
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-around">
          <div className="w-full flex font-open capital-text text-[8px] md:text-xs pt-10 lg:py-4 justify-center ">
        <Image className="w-[75%] object-contain self-center px-10" src={charcoalImage} alt="image" />
          </div>
          <div className="w-full min-h-max mb-10 lg:mb-0 lg:flex lg:flex-col">
            <ul className="p-10 my-auto list-disc text-base">

            
  <li>
    <strong>Versatile Ingredient for Soaps:</strong><br/> Our raw activated carbon powder can be used to create highly effective cleansing soaps that detoxify and purify the skin, making it a sought-after ingredient for soap manufacturers.
  </li>
  <li>
    <strong>Essential for Face Washes:</strong><br/> With its powerful adsorptive properties, activated carbon powder is an ideal component in face washes, helping to remove impurities and provide a deep cleanse, attracting face wash producers.
  </li>
  <li>
    <strong>Innovative Toothpaste Additive:</strong><br/> Activated carbon powder is a key ingredient in advanced toothpaste formulations, offering deep cleaning and whitening benefits, making it an attractive option for dental care brands.
  </li>
  <li>
    <strong>Effective in Water Filters:</strong><br/> Due to its high adsorption capacity, our activated carbon powder is perfect for use in water filters, ensuring the removal of contaminants and providing clean, safe drinking water.
  </li>
  <li>
    <strong>Broad Application in Cosmetics:</strong><br/> From skincare to haircare, activated carbon powder&#39;s ability to absorb toxins and impurities makes it a versatile ingredient in various cosmetic products, appealing to a wide range of manufacturers.
  </li>








            </ul>
          </div>
        </div>
      </main>
    );
  };
  
  export default CosmeticsPage;
  