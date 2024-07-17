import Image from "next/image";
import sitemapImage from "@/assets/images/sitemap.svg";


const Sitemap = () => {
    return ( <main className="flex flex-row w-full h-full">
<Image src={sitemapImage} alt="image" className="mx-auto"></Image>
    </main> );
}
 
export default Sitemap;