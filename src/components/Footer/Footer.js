import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';
import Link from "next/link";
import "./footer.styles.css";


function Footer() {
    return (<footer className="bg-black text-white h-fit lg:min-h-[6vh] mt-auto border-t-[15px] border-primaryYellow flex flex-col gap-8 px-4 py-[12px] lg:flex-row justify-center align-middle lg:justify-around lg:align-middle text-center lg:text-center font-open">
        <p className="px-4 md:px-0 hover-dotted-underline">Copyright © Brahmaputra TechnoPharmaceuticals Pvt. Ltd.</p>
        <p className="capital-text hover-dotted-underline"><Link href="/genera" >Genera</Link></p>
        <p className="capital-text hover-dotted-underline"><Link href="/contact" >Contact Us</Link></p>
        <p className="capital-text hover-dotted-underline"><Link href="/sitemap">Sitemap</Link></p>
        <span className="flex flex-row gap-2 mx-auto lg:mx-0">

            <Link href="https://x.com/BtpBharat24934" target="_blank">
            <XIcon />
            </Link>

            <Link href="https://www.facebook.com/people/Brahmaputra-TechnoPharmacuticals-Pvt-Ltd/61562623814395/" target="_blank">
            <FacebookIcon/>
            </Link>
        
            <InstagramIcon />
            <Link href="https://www.linkedin.com/in/btp-bharat-83411831a/" target="_blank">
                <LinkedInIcon />
            </Link>

            <YouTubeIcon />
        </span>
    </footer>);
}

export default Footer;