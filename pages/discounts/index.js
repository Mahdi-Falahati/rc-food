import DiscountsPage from "../../components/template/DiscountsPage";

export default function Categories({ data }) {
  return <DiscountsPage data={data} />;
}

export async function getStaticProps() {
  const fetching = await fetch("http://localhost:4000/data");
  const response = await fetching.json();
  const data = response.filter((item) => item.discount !== 0);

  return {
    props: {
      data,
      revalidate: 2,
    },
  };
}
