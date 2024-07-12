import MenuPage from "../../components/template/MenuPage";

export default function Menu({ data }) {
  return <MenuPage data={data} />;
}

export async function getStaticProps() {
  const fetching = await fetch("http://localhost:4000/data");
  const data = await fetching.json();
  return {
    props: {
      data,
      revalidate: 2,
    },
  };
}
