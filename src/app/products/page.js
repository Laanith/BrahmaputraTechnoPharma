import LotionSVG from "@/assets/svg/lotion.svg";
import HerbalSVG from "@/assets/svg/herbal.svg";
import PharmaSVG from "@/assets/svg/pharma.svg";
import PowderSVG from "@/assets/svg/powder.svg";
import CosmeticsSVG from "@/assets/svg/cosmetics.svg";
import FruitsSVG from "@/assets/svg/fruits.svg";
import Image from "next/image";

function Products() {
  return (
    <main>
    <h1 className="font-bold font-inter text-center pt-10 text-2xl lg:text-3xl lg:pt-0">Our Products</h1>
    <div className="flex flex-col gap-10 lg:flex-row lg:justify-around">
      <div className="w-full flex font-open capital-text text-[8px] md:text-xs pt-10 lg:py-4 lg:justify-end">
        <div className="grid grid-cols-2 gap-4 lg:gap-0 w-[80%] xl:w-[60%] mx-auto lg:mx-0 lg:self-end lg:mr-[140px]">
          <div className="flex-col text-center mx-auto justify-between">
            <Image className="mx-auto" height={75} src={LotionSVG} alt="svg" />
            <p className="self-end py-4">toiletries</p>
          </div>
          <div className="flex-col text-center mx-auto justify-between">
            {" "}
            <Image className="mx-auto" height={75} src={HerbalSVG} alt="svg" />
            <p className="self-end py-4">herbal products</p>

          </div>
          <div className="flex-col text-center mx-auto justify-between">
            {" "}
            <Image className="mx-auto" height={75} src={PharmaSVG} alt="svg" />
            <p className="self-end py-4">pharma</p>
          </div>
          <div className="flex-col text-center mx-auto justify-between">
            {" "}
            <Image className="mx-auto" height={75} src={PowderSVG} alt="svg" />
            <p className="self-end py-4">activated charcoal</p>
          </div>
          <div className="flex-col text-center mx-auto justify-between">
            {" "}
            <Image className="mx-auto" height={75} src={CosmeticsSVG} alt="svg" />
            <p className="self-end py-4">cosmetics</p>

          </div>
          <div className="flex-col text-center mx-auto justify-between">
            {" "}
            <Image className="mx-auto" height={75} src={FruitsSVG} alt="svg" />
            <p className="self-end py-4">neutraceuticals</p>
          </div>
        </div>
      </div>
      <div className="w-full min-h-max mb-10 lg:mb-0 lg:flex lg:flex-col">
        <h1 className="text-primary font-inter font-extrabold text-center text-3xl p-3 px-10 lg:my-auto lg:w-[80%] xl:w-[80%]
        md:text-4xl lg:text-[36px] black-text-stroke">
          <span className="text-black">Activated Carbon</span> is not only a product itself but can also be a raw material for myriad set of applications
        </h1>
      </div>
    </div>
    </main>
  );
}

export default Products;
