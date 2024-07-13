const BiomassLiquefaction = () => {
  return (
    <main>
      <h1 className="font-bold font-inter text-center pt-10 text-2xl lg:text-3xl lg:pt-0">
        Our Products
      </h1>
      <div className="flex flex-col gap-10 lg:flex-row lg:justify-around">
        <div className="w-full flex font-open capital-text text-[8px] md:text-xs pt-10 lg:py-4 lg:justify-end bg-emerald-200"></div>
        <div className="w-full min-h-max mb-10 lg:mb-0 lg:flex lg:flex-col bg-red-200">
          <ul className="p-10 my-auto list-disc">
            <li>
              Biomass liquefaction is a process that converts organic materials,
              such as plant and animal waste, into liquid biofuels and valuable
              chemicals.
            </li>

            <li>
              The process begins with selecting and preparing biomass feedstock,
              which is cleaned and dried to ensure consistent quality and
              efficiency.
            </li>

            <li>
              The prepared biomass undergoes thermal or hydrothermal treatment,
              breaking down complex organic molecules into simpler, liquid forms
              using heat and pressure.
            </li>

            <li>
              Catalysts are often used to enhance the reaction, increasing the
              yield and quality of the liquid products while reducing processing
              time and energy consumption.
            </li>

            <li>
              The resulting liquid biofuels are refined and purified to meet
              quality standards, making them suitable for use in energy
              production, transportation, and as chemical feedstocks.
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default BiomassLiquefaction;
