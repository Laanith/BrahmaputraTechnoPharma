const VeganButterProduction = () => {
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
  Vegan butter is a plant-based alternative to traditional butter, made from ingredients like oils, nuts, and water, offering a dairy-free option for consumers.
</li>

<li>
  The production process starts with selecting high-quality plant-based oils such as coconut, olive, or sunflower oil, which are blended to achieve the desired texture and flavor.
</li>

<li>
  Emulsifiers and stabilizers, often derived from natural sources like soy or sunflower lecithin, are added to create a stable, creamy consistency.
</li>

<li>
  Natural flavors, such as nutritional yeast or cultured ingredients, are incorporated to mimic the taste of traditional butter and enhance the overall flavor profile.
</li>

<li>
  The mixture is then chilled and whipped to achieve a spreadable texture, followed by packaging and quality testing to ensure consistency and shelf stability.
</li>

            </ul>
          </div>
        </div>
      </main>
    );
  };
  
  export default VeganButterProduction;
  