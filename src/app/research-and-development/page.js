import Image from "next/image";
import Link from "next/link";

const ResearchAndDevelopment = () => {
  return (
    <main>
      <h1 className="font-bold font-inter text-center self-start mt-10 text-2xl lg:text-3xl lg:pt-4 ">
        Research and Development
      </h1>
      <div className="flex flex-col gap-10 lg:flex-row lg:justify-around mt-20 lg:mt-0">
        <div className="w-full min-h-max mb-10 lg:mb-0 lg:flex lg:flex-col">
          <ul className="font-open text-base p-10 flex flex-col justify-around gap-y-3 list-disc list-inside">
            <li>
              Equipped with state-of-the-art seperation technology, our
              processes effectively removes impurities, enhancing the purity of
              the final product.
            </li>
            <li>
              Our reactors are designed to minimize energy consumption, reducing
              operational costs and environmental impact.
            </li>
            <li>
              With high-speed processing capabilities, our in-house facility accelerates
              the production cycle, allowing for faster turnaround times.
            </li>
            <li>
              Our advanced control systems ensure consistent quality and output,
              maintaining uniformity across batches.
            </li>
            <li>
              Our production facilities are built with multiple safety mechanisms to
              protect both operators and the environment.
            </li>
            <li>
              The intuitive design of our equipment simplifies operation and
              maintenance, making it accessible for all skill levels.
            </li>
            <li>
              Our manufacturing unit is adaptable to various production scales, from
              small batch testing to large-scale manufacturing.
            </li>
          </ul>
        </div>
        <div className="w-full flex lg:flex-col font-open capital-text text-[8px] md:text-xs pt-10 mb-20 lg:py-4 lg:justify-start ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-auto justify-center">
              <Link href="/research-and-development/technological-developments">
              <div className="flex-col w-full bg-gray-300 text-center m-auto justify-between lg:m-2">
              <p className="self-end py-4 px-4 font-bold">
                Technological developments
              </p>
            </div>
              </Link>
            <Link href="/research-and-development/catechin-extraction">
              {" "}
              <div className="flex-col w-full bg-gray-300 text-center m-auto justify-between lg:m-2">
                {" "}
                <p className="self-end py-4 px-4 font-bold">
                  Catechin Extraction
                </p>
              </div>
            </Link>
            <Link href="/research-and-development/solid-dosage-form-formulation">
              <div className="flex-col w-full bg-gray-300 text-center m-auto justify-between lg:m-2">
                {" "}
                <p className="self-end py-4 px-4 font-bold">
                  Solid dosage form formulation
                </p>
              </div>
            </Link>
            <Link href="/research-and-development/activated-carbon-production">
              <div className="flex-col w-full bg-gray-300 text-center m-auto justify-between lg:m-2">
                {" "}
                <p className="self-end py-4 px-4 font-bold">
                  activated carbon production
                </p>
              </div>
            </Link>
            <Link href="/research-and-development/biomass-liquefaction">
              <div className="flex-col w-full bg-gray-300 text-center m-auto justify-between lg:m-2">
                {" "}
                <p className="self-end py-4 px-4 font-bold">
                  biomass liquefaction
                </p>
              </div>
            </Link>
            <Link href="/research-and-development/decaffeination-green-method">
              <div className="flex-col w-full bg-gray-300 text-center m-auto justify-between lg:m-2">
                {" "}
                <p className="self-end py-4 px-4 font-bold">
                  green method of decaffeination
                </p>
              </div>
            </Link>
            <Link href="/research-and-development/vegan-butter-production">
              <div className="flex-col w-full bg-gray-300 text-center m-auto justify-between lg:m-2">
                {" "}
                <p className="self-end py-4 px-4 font-bold">
                  production of vegan butter
                </p>
              </div>
            </Link>
            <Link href="/research-and-development/anthocyanin-extraction">
              <div className="flex-col w-full bg-gray-300 text-center m-auto justify-between lg:m-2">
                {" "}
                <p className="self-end py-4 px-4 font-bold">
                  Anthocyanin Extraction
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ResearchAndDevelopment;
