import Image from "next/image";
import skinCareImage from "@/assets/images/skinCare.webp";

const CosmeticsPage = () => {
    return (
      <main>
        <h1 className="font-bold font-inter text-center mt-10 text-2xl lg:text-3xl lg:pt-0">
          Cosmetics
        </h1>
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-around">
          <div className="w-full flex font-open capital-text text-[8px] md:text-xs pt-10 lg:py-4 justify-center ">
        <Image className="w-[75%] object-contain self-center px-10" src={skinCareImage} alt="image" />
          </div>
          <div className="w-full min-h-max mb-10 lg:mb-0 lg:flex lg:flex-col">
            <ul className="p-10 my-auto list-disc text-base">

            
  <li>
    <strong>Innovative Skin Care Solutions:</strong><br/> Our activated carbon is highly effective in adsorbing impurities, making it an ideal ingredient for creating skin care products that cleanse, detoxify, and purify the skin.
  </li>
  <li>
    <strong>Advanced Hair Care Products:</strong><br/> Leveraging the adsorptive properties of activated carbon, we develop hair care products that remove buildup, enhance scalp health, and leave hair feeling refreshed and rejuvenated.
  </li>
  <li>
    <strong>Safe and Gentle Baby Care:</strong><br/> Our activated carbon-based baby care products are designed to be gentle and safe, effectively removing impurities while being kind to delicate baby skin.
  </li>
  <li>
    <strong>Natural and Effective Ingredients:</strong><br/> Committed to natural and effective formulations, we utilize the power of activated carbon to deliver high-quality cosmetics that meet consumer demands for clean and sustainable products.
  </li>
  <li>
    <strong>Leading in Cosmetic Innovation:</strong><br/> By harnessing the unique properties of activated carbon, we position ourselves at the forefront of cosmetic innovation, offering products that combine advanced technology with natural benefits.
  </li>







            </ul>
          </div>
        </div>
      </main>
    );
  };
  
  export default CosmeticsPage;
  