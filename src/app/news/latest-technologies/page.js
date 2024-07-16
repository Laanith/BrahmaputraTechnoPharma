const LatestTechnologies = () => {
  return (
    <main className="flex flex-col p-10 text-base">
      <h1 className="font-inter font-extrabold text-black text-3xl mb-10 lg:mb-10 text-center">
        Latest Technologies
      </h1>
      <div className="flex flex-col gap-10 justify-around p-4 lg:px-20">
        At Brahmaputra TechnoPharmacuticals Pvt. Ltd., our commitment to
        innovation drives us to develop cutting-edge technologies in production.
        Our latest advancements include:
        <br />
        <br />
        <h3 className="font-semibold text-2xl underline text-black">
          Production Capabilities{" "}
        </h3>
        <dl>
          <div>
            <dt className="font-bold">
              Food and Pharmaceutical Grade High Surface Area Activated Carbon
            </dt>
            <dd>
              <ul>
                <li>
                  {" "}
                  <strong> Technology: </strong> Advanced biomass liquefaction
                  from waste tea leaves.
                </li>
                <li>
                  <strong>Benefits:</strong> Superior adsorption for water, air
                  purification, pharmaceuticals.
                </li>
                <li>
                  {" "}
                  <strong>Features:</strong> Sustainable, high efficiency, food
                  and pharma grade.
                </li>
              </ul>
            </dd>
          </div>
          <br />
          <div>
            <dt className="font-bold"> High Purity Bioactive Extracts</dt>
            <dd>
              <ul>
                <li>
                  {" "}
                  <strong> Technology: </strong> State-of-the-art extraction
                  methods.
                </li>
                <li>
                  <strong>Benefits:</strong> Pure catechins, anthocyanins for
                  supplements, cosmetics.
                </li>
                <li>
                  {" "}
                  <strong>Features:</strong> Potent antioxidants, natural
                  sourcing, versatile applications.
                </li>
              </ul>
            </dd>
          </div>

          <br />
          <div>
            <dt className="font-bold">Low Temperature Biomass Liquefaction</dt>
            <dd>
              <ul>
                <li>
                  {" "}
                  <strong> Technology: </strong> Efficient conversion of organic
                  waste.
                </li>
                <li>
                  <strong>Benefits:</strong> Minimal energy, high yield for
                  activated carbon.
                </li>
                <li>
                  {" "}
                  <strong>Features:</strong> Environmental-friendly, waste
                  reduction.
                </li>
              </ul>
            </dd>
          </div>

          <br />
          <div>
            <dt className="font-bold">In-Vitro Digestion Protocols</dt>
            <dd>
              <ul>
                <li>
                  {" "}
                  <strong> Technology: </strong> Advanced simulation of human
                  digestion.
                </li>
                <li>
                  <strong>Benefits:</strong> Study of nutrient bioavailability
                  for products.
                </li>
                <li>
                  {" "}
                  <strong>Features:</strong> Accurate, supports product
                  development.
                </li>
              </ul>
            </dd>
          </div>

          <br />

          <div>
            <dt className="font-bold">
              Organ-on-Chip Devices for Bioavailability Testing
            </dt>
            <dd>
              <ul>
                <li>
                  {" "}
                  <strong> Technology: </strong> Micro-channeled chips simulate
                  organs.
                </li>
                <li>
                  <strong>Benefits:</strong> Quick, precise bioavailability
                  testing.
                </li>
                <li>
                  {" "}
                  <strong>Features:</strong> Potential for personalized
                  medicine.
                </li>
              </ul>
            </dd>
          </div>
          <br />
        </dl>
      </div>
      <br />
    </main>
  );
};

export default LatestTechnologies;
