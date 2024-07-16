import Card from "@/components/Card/Card";
import productsImg from "@/assets/images/products.webp";
import bioTechImg from "@/assets/images/Bioengineering.webp";
import handShakeImg from "@/assets/images/handshake.webp";
import achievementsImg from "@/assets/images/achievements.webp";
import Link from "next/link";

const News = () => {
  const data = [
    { title: "Latest Products", link: "/news/latest-products", imgSrc: productsImg },
    { title: "Latest Technologies", link: "/news/latest-technologies", imgSrc: bioTechImg },
    { title: "Recent Agreements", link: "/news/recent-agreements", imgSrc: handShakeImg },
    { title: "Recent Achievements", link: "/news/recent-achievements", imgSrc: achievementsImg },
  ];
  return (
    <main className="flex flex-col  p-10">
      <h1 className="font-inter font-extrabold text-black text-3xl mb-10 lg:mb-10 text-center">
        News
      </h1>
      <div className="flex flex-col gap-10 xl:flex-row">
        {data.map((obj) => (
          <Link key={obj.link} href={obj.link}>
          <Card key={obj.link} data={obj} />
          </Link>
        ))}
      </div>
    </main>
  );
};

export default News;
