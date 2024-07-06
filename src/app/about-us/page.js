import Card from "@/components/Card/Card";
import teamImg from "@/assets/images/team.jpg";
import teamWorkImg from "@/assets/images/teamwork.jpg";

const About = () => {
    const data = [
        {title : 'Our story', link : '/', imgSrc : teamImg}, {title : 'Our team', link : '/', imgSrc : teamWorkImg}, {title : 'Product profiles', link : '/', imgSrc : teamImg}
    ]
    return ( <main className="flex flex-col  p-10">
        <h1 className="font-inter font-extrabold text-black text-3xl mb-10 lg:mb-10 text-center">About Us</h1>
        <div className="flex flex-col gap-10 xl:flex-row">
        {data.map(obj =><Card key={obj.link} data={obj} />)}
        </div>
    </main> );
}
 
export default About;