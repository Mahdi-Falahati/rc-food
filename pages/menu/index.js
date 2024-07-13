import MenuPage from "../../components/template/MenuPage";

export default function Menu({ data }) {
  return <MenuPage data={data} />;
}

export async function getStaticProps() {
  const fetching = await fetch("https://api-rcfood.vercel.app/data");
  const data = await fetching.json();
  return {
    props: {
      data,
      revalidate: 60*60*1,
    },
  };
}
