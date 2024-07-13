const AnthocyaninExtraction = () => {
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
  Anthocyanins are natural pigments found in fruits and vegetables like berries, grapes, and red cabbage, known for their antioxidant properties and vibrant colors.
</li>

<li>
  The extraction process begins with selecting fresh, high-quality plant material, which is then washed and chopped to increase the surface area for extraction.
</li>

<li>
  The plant material is soaked in a solvent, often a mixture of water and ethanol or methanol, to dissolve the anthocyanins and separate them from the plant tissue.
</li>

<li>
  The mixture is filtered to remove solid residues, and the liquid extract is concentrated using evaporation or freeze-drying techniques to increase the anthocyanin content.
</li>

<li>
  The final extract is purified to remove impurities and tested for concentration and purity, ensuring it meets quality standards for use in food, cosmetics, and supplements.
</li>


            </ul>
          </div>
        </div>
      </main>
    );
  };
  
  export default AnthocyaninExtraction;
  