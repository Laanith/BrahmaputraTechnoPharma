const SolidDosageForm = () => {
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
  Solid dosage forms are medications intended for oral consumption, including tablets, capsules, and powders, offering precision in dosing and convenience for patients.
</li>

<li>
  The formulation process starts with selecting active pharmaceutical ingredients (APIs) and excipients, ensuring compatibility and stability.
</li>

<li>
  The ingredients are then blended together to achieve a uniform mixture, followed by granulation to improve flow properties and compressibility.
</li>

<li>
  Granulated materials are compressed into tablets or filled into capsules using high-precision machinery, ensuring consistent dosage and quality.
</li>

<li>
  Rigorous quality control tests are conducted throughout the process to ensure uniformity, potency, dissolution, and bioavailability of the final product.
</li>

            </ul>
          </div>
        </div>
      </main>
    );
  };
  
  export default SolidDosageForm;
  