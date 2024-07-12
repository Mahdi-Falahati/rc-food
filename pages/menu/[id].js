import DetailsPage from "../../components/template/DetailsPage";

export default function Details({ data }) {
  return <DetailsPage data={data} />;
}

export async function getStaticPaths() {
  const fetching = await fetch(`http://localhost:4000/data/`);
  const data = await fetching.json();
  const paths = data.slice(0, 3).map((item) => ({
    params: {
      id: item.id.toString(),
    },
  }));
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const fetching = await fetch(`http://localhost:4000/data/${params.id}`);
  const data = await fetching.json();

  return { props: { data } };
}
