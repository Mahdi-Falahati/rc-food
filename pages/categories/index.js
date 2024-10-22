import CategoriesPage from "../../components/template/CategoriesPage";

export default function Categories({ data }) {
  return <CategoriesPage data={data} />;
}

export async function getServerSideProps(context) {
  const {
    query: { difficulty, time },
  } = context;

  const fetching = await fetch(`http://api-rcfood.vercel.app/data/`);
  const data = await fetching.json();

  const filteredData = data.filter((item) => {
    const difficultyResult = item.details.filter(
      (detail) => detail.Difficulty && detail.Difficulty === difficulty
    );
    const timeResult = item.details.filter((detail) => {
      const cookingTime = detail["Cooking Time"] || "";
      const [timeDetail] = cookingTime.split(" ");
      if (time === "less" && timeDetail && +timeDetail <= 30) {
        return detail;
      } else if (time === "more" && +timeDetail > 30) {
        return detail;
      }
    });
    if (time && difficulty && timeResult.length && difficultyResult.length) {
      return item;
    } else if (!time && difficulty && difficultyResult.length) {
      return item;
    } else if (time && !difficulty && timeResult.length) {
      return item;
    }
  });

  return { props: { data: filteredData } };
}
