import Image from "next/image";
import toiletriesImage from "@/assets/images/toiletries.webp";

const ToiletriesPage = () => {
    return (
      <main>
        <h1 className="font-bold font-inter text-center mt-10 text-2xl lg:text-3xl lg:pt-0">
          Toiletries
        </h1>
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-around">
          <div className="w-full flex font-open capital-text md:text-xs pt-10 lg:py-4 justify-center ">
        <Image className="w-[75%] object-contain self-center px-10" src={toiletriesImage} alt="image" />
          </div>
          <div className="w-full min-h-max mb-10 lg:mb-0 lg:flex lg:flex-col">
            <ul className="p-10 my-auto list-disc text-base">

            
            
  <li>
    <strong>Effective Germ-Killing Soaps:</strong><br/>Our activated carbon-based soaps are designed to effectively eliminate germs and bacteria, providing superior hygiene and cleanliness.
  </li>
  <li>
    <strong>Deep-Cleaning Toothpaste:</strong><br/> Utilizing the adsorptive properties of activated carbon, our toothpaste deeply cleans and purifies, ensuring optimal oral hygiene and fresh breath.
  </li>
  <li>
    <strong>Antibacterial Hand Wash:</strong><br/> Our hand washes infused with activated carbon efficiently kill germs while being gentle on the skin, promoting safe and hygienic hand care.
  </li>
  <li>
    <strong>Purifying Body Wash:</strong><br/> Our body wash products use activated carbon to remove impurities and bacteria from the skin, providing a deep-cleaning and refreshing experience.
  </li>
  <li>
    <strong>Sanitizing Wipes:</strong><br/> Our activated carbon-based wipes offer a convenient and effective solution for on-the-go germ elimination, ensuring cleanliness and safety wherever you are.
  </li>








            </ul>
          </div>
        </div>
      </main>
    );
  };
  
  export default ToiletriesPage;
  