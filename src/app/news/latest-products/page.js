const LatestProducts = () => {
  return (
    <main className="flex flex-col p-10 text-base">
      <h1 className="font-inter font-extrabold text-black text-3xl mb-10 lg:mb-10 text-center">
        Latest Products
      </h1>
      <div className="flex flex-col gap-10 justify-around p-4 lg:px-20">

        <dl>
          <div>
            <dt className="font-bold">
              Eco-Pure Activated Carbon from Waste Tea Leaves
            </dt>
            <dd>
              <ul>
                <li>
                  {" "}
                  <strong> Description: </strong> Produced using our advanced
                  biomass liquefaction process, this high surface area activated
                  carbon is ideal for applications in water and air
                  purification, as well as pharmaceutical uses.
                </li>
                <li>
                  <strong>Benefits:</strong> Eco-friendly, high adsorption
                  capacity, and made from sustainable raw materials.
                </li>
                <li>
                  {" "}
                  <strong>Availability:</strong> Now available for industrial
                  and commercial applications.
                </li>
              </ul>
            </dd>
          </div>
          <br />
          <div>
            <dt className="font-bold">
              {" "}
              Premium Plant Extracts: Catechins and Anthocyanins
            </dt>
            <dd>
              <ul>
                <li>
                  {" "}
                  <strong> Description: </strong> High purity extracts from
                  natural sources, offering potent antioxidant properties
                  beneficial for dietary supplements, pharmaceuticals, and
                  cosmetics
                </li>
                <li>
                  <strong>Benefits:</strong>High purity, natural health
                  benefits, versatile applications.
                </li>
                <li>
                  {" "}
                  <strong>Availability:</strong> Available for order in bulk
                  quantities.
                </li>
              </ul>
            </dd>
          </div>

          <br />
          <div>
            <dt className="font-bold">Advanced In-Vitro Digestion Protocols</dt>
            <dd>
              <ul>
                <li>
                  {" "}
                  <strong> Description: </strong> Cutting-edge in-vitro
                  digestion protocols developed to enhance understanding of
                  nutrient bioavailability for nutraceuticals, pharmaceuticals,
                  and food products.
                </li>
                <li>
                  <strong>Benefits:</strong> Scientific validation, improved
                  product efficacy, advanced research support
                </li>
                <li>
                  {" "}
                  <strong>Availability:</strong> Available for collaboration and
                  research partnerships.
                </li>
              </ul>
            </dd>
          </div>

          <br />
          <div>
            <dt className="font-bold">
              Organ-on-Chip Devices for Quick Determination of In-Vitro
              Bioavailability
            </dt>
            <dd>
              <ul>
                <li>
                  {" "}
                  <strong> Description: </strong> Ongoing research and
                  development to integrate in-vitro protocols onto
                  micro-channeled chips, creating organ-on-chip devices.
                </li>
                <li>
                  <strong>Benefits:</strong> Faster and more accurate
                  determination of bioavailability, innovative research
                  applications, personalized medicine potential.
                </li>
                <li>
                  {" "}
                  <strong>Availability:</strong>Expected to be available for
                  research use in the coming year.
                </li>
              </ul>
            </dd>
          </div>

          <br />

          <div>
            <dt className="font-bold">Food and Flavor Testing</dt>
            <dd>
              <ul>
                <li>
                  {" "}
                  <strong> Description: </strong>Our state-of-the-art food and
                  flavor testing services ensure the quality, safety, and
                  sensory appeal of food products.
                </li>
                <li>
                  <strong>Benefits:</strong> Comprehensive testing, sensory
                  analysis, consumer satisfaction.
                </li>
                <li>
                  {" "}
                  <strong>Availability:</strong>Available for product
                  development and quality assurance.
                </li>
              </ul>
            </dd>
          </div>
        </dl>
        <p>
          <strong> CEO&#39;s Statement</strong>
          <br />
          &#34;We are thrilled to bring these innovative products to
          market,&#34; said Ms. Medhi, CEO of Brahamaputra TechnoPharmaceuticals
          Pvt. Ltd. &#34;Our new product line is a testament to our commitment
          to sustainability, cutting-edge research, and meeting the needs of our
          customers. We are excited to see the positive impact these products
          will have across various industries.&#34;
        </p>

        <p>
          <strong> About Brahmaputra TechnoPharmaceuticals Pvt. Ltd.</strong>
          <br />
          Our company is a pioneer in producing high-quality, sustainable
          products for the food, pharmaceutical, and nutraceutical industries.
          With a focus on innovation, research, and environmental stewardship,
          we deliver solutions that enhance health and wellness while preserving
          our planet.
        </p>
      </div>
      <br />
    </main>
  );
};

export default LatestProducts;
