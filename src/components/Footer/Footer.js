import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from '@mui/icons-material/YouTube';
import Link from "next/link";
import "./footer.styles.css";


function Footer() {
    return (<footer  className="bg-black text-white h-fit lg:min-h-[6vh] mt-auto border-t-[15px] border-primaryYellow flex flex-col gap-8 px-4 py-6 lg:flex-row justify-center align-middle lg:justify-around lg:align-middle text-center lg:text-center font-open">
        <p className="px-4 md:px-0 hover-dotted-underline">Copyright © Brahmaputra TechnoPharmaceuticals Pvt. Ltd.</p>
        <p className="capital-text hover-dotted-underline"><Link href="/genera" >Genera</Link></p>
        <p className="capital-text hover-dotted-underline"><Link href="/contact" >Contact Us</Link></p>
        <p className="capital-text hover-dotted-underline">Sitemap</p>
        <span className="flex flex-row gap-2 mx-auto lg:mx-0">
            <FacebookIcon/>
            <InstagramIcon/>
            <LinkedInIcon/>
            <YouTubeIcon />
        </span>
    </footer>);
}

export default Footer;