import Link from "next/link";
import teaImage from "@/assets/images/tea-gardens.jpeg";
import Image from "next/image";


const Careers = () => {
    return ( <main className="flex flex-col lg:flex-row text-base p-8 gap-10 justify-around">
        <div className="w-full h-full">
            <Image src={teaImage} alt="tea" className="lg:h-[400px] mx-auto object-cover" />
        </div>
        <div className="mx-auto text-center font-bold font-inter text-2xl w-full flex flex-row align-middle justify-center">
<span className="my-auto">
If you are interested in working at<br/> Brahmaputra TechnoPharmaceuticals Pvt. Ltd.<br/> contact us {" "}<Link href={"https://forms.gle/puwPBfCYdvEuBvjS9"} className="text-blue-600 underline">
            here
            </Link>
</span>
        </div>
    </main> );
}
 
export default Careers;