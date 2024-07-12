import Card from "../module/Card";

export default function MenuPage({ data }) {
  return (
    <>
      <h1 className="text-2xl font-bold text-green-800 underline">Menu</h1>
      <section className="flex flex-wrap justify-around items-center mb-5">
        {data?.map((data) => (
          <Card data={data} key={data.id} />
        ))}
      </section>
    </>
  );
}
