const ActivatedCarbonProduction = () => {
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
  Activated carbon is a highly porous material used for filtration and adsorption in various industries, including water purification, air treatment, and medical applications.
</li>

<li>
  The production process begins with selecting a carbon-rich raw material, such as coconut shells, wood, or coal, which is then cleaned and dried.
</li>

<li>
  The raw material undergoes carbonization, where it is heated in an inert atmosphere to remove volatile substances, leaving behind a solid carbon structure.
</li>

<li>
  The carbonized material is activated through physical or chemical processes to develop a highly porous structure, enhancing its adsorption capabilities.
</li>

<li>
  The activated carbon is then crushed, sized, and tested for surface area, pore size, and adsorption capacity to ensure it meets quality standards for its intended applications.
</li>

            </ul>
          </div>
        </div>
      </main>
    );
  };
  
  export default ActivatedCarbonProduction;
  