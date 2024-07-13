const GreenMethodForDecaffeination = () => {
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
  Green decaffeination methods focus on removing caffeine from coffee beans and tea leaves using environmentally friendly processes that maintain flavor and quality.
</li>

<li>
  One popular green method is the Swiss Water Process, which uses only water to extract caffeine, relying on solubility and osmosis without the need for chemical solvents.
</li>

<li>
  Another method involves using supercritical carbon dioxide (CO₂), which acts as a solvent at high pressures to selectively extract caffeine while preserving other flavor compounds.
</li>

<li>
  These methods ensure that the decaffeination process is sustainable, reducing chemical waste and minimizing environmental impact compared to traditional solvent-based techniques.
</li>

<li>
  The resulting decaffeinated products are tested for flavor and caffeine content to ensure they meet quality standards, providing a healthier and eco-friendly option for consumers.
</li>

            </ul>
          </div>
        </div>
      </main>
    );
  };
  
  export default GreenMethodForDecaffeination;
  