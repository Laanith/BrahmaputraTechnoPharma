import Image from "next/image";
import herbalsImage from "@/assets/images/herbals.webp";

const CosmeticsPage = () => {
  return (
    <main>
      <h1 className="font-bold font-inter text-center mt-10 text-2xl lg:text-3xl lg:pt-0">
        Herbal Products
      </h1>
      <div className="flex flex-col gap-10 lg:flex-row lg:justify-around">
        <div className="w-full flex font-open capital-text text-[8px] md:text-xs pt-10 lg:py-4 justify-center ">
          <Image
            className="w-[75%] object-contain self-center px-10"
            src={herbalsImage}
            alt="image"
          />
        </div>
        <div className="w-full min-h-max mb-10 lg:mb-0 lg:flex lg:flex-col">
          <ul className="p-10 my-auto list-disc text-base">
            <li>
              <strong>Herbal Infused Skin Care:</strong>
              <br />
              Combining activated carbon with herbal extracts enhances skin care
              products, offering natural detoxification and rejuvenation
              benefits.
            </li>
            <li>
              <strong>Natural Hair Care Solutions:</strong>
              <br />
              Activated carbon paired with herbal ingredients creates gentle yet
              effective hair care products that cleanse, nourish, and strengthen
              hair.
            </li>
            <li>
              <strong>Botanical Dental Care:</strong>
              <br />
              Herbal-infused toothpaste formulations with activated carbon
              provide holistic oral care, promoting freshness and oral health
              benefits.
            </li>
            <li>
              <strong>Multi-Purpose Herbal Combinations:</strong>
              <br />
              By integrating activated carbon with various herbal extracts, we
              create versatile products that cater to diverse consumer needs,
              expanding our product portfolio sustainably.
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default CosmeticsPage;
