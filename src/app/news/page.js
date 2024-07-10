import Card from "@/components/Card/Card";
import teamImg from "@/assets/images/team.jpg";
import teamWorkImg from "@/assets/images/teamwork.jpg";
import productsImg from "@/assets/images/products.webp";
import bioTechImg from "@/assets/images/Bioengineering.webp";
import handShakeImg from "@/assets/images/handshake.webp";
import achievementsImg from "@/assets/images/achievements.webp";

const News = () => {
  const data = [
    { title: "Latest Products", link: "/", imgSrc: productsImg },
    { title: "Latest Technologies", link: "/", imgSrc: bioTechImg },
    { title: "Recent Agreements", link: "/", imgSrc: handShakeImg },
    { title: "Recent Achievements", link: "/", imgSrc: achievementsImg },
  ];
  return (
    <main className="flex flex-col  p-10">
      <h1 className="font-inter font-extrabold text-black text-3xl mb-10 lg:mb-10 text-center">
        News
      </h1>
      <div className="flex flex-col gap-10 xl:flex-row">
        {data.map((obj) => (
          <Card key={obj.link} data={obj} />
        ))}
      </div>
    </main>
  );
};

export default News;
