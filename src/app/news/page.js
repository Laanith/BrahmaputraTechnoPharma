import Card from "@/components/Card/Card";
import teamImg from "@/assets/images/team.jpg";
import teamWorkImg from "@/assets/images/teamwork.jpg";

const News = () => {
  const data = [
    { title: "Latest Products", link: "/", imgSrc: teamImg },
    { title: "Latest Tech", link: "/", imgSrc: teamWorkImg },
    { title: "Recent Agreements", link: "/", imgSrc: teamImg },
    { title: "Recent Achievements", link: "/", imgSrc: teamWorkImg },
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
