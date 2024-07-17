import Link from "next/link";

const Careers = () => {
    return ( <main className="flex flex-row text-base p-8">
        <span className="mx-auto">
            If you are interested in working at Brahmaputra TechnoPharmaceuticals Pvt. Ltd. contact us {" "}<Link href={"https://forms.gle/puwPBfCYdvEuBvjS9"} className="text-blue-600 underline">
            here
            </Link>
        </span>
    </main> );
}
 
export default Careers;