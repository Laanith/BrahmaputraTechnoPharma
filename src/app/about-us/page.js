import Card from "@/components/Card/Card";
import teamImg from "@/assets/images/team.jpg";
import teamWorkImg from "@/assets/images/teamwork.jpg";
import Link from "next/link";
const About = () => {
    const data = [
        {title : 'Our story', link : '/', imgSrc : teamImg}, {title : 'Our team', link : '/about-us/team', imgSrc : teamWorkImg}, {title : 'Product profiles', link : '/', imgSrc : teamImg}
    ]
    return ( <main className="flex flex-col  p-10">
        <h1 className="font-inter font-extrabold text-black text-3xl mb-10 lg:mb-10 text-center">About Us</h1>
        <div className="flex flex-col gap-10 xl:flex-row justify-around">
      {data.map(obj => <Link href={obj.link} key={obj.link}><Card key={obj.link} data={obj} /></Link>)}
        </div>
    </main> );
}
 
export default About;