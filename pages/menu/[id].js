import { useRouter } from "next/router";
import DetailsPage from "../../components/template/DetailsPage";

export default function Details({ data }) {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <div
        role="status"
        class="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse flex justify-center items-center"
      >
        <p class="p-2 text-center text-gray-200 dark:text-gray-700 w-48 mb-4">
          Loading Page...
        </p>
      </div>
    );
  }
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
