import Card from "../module/Card";

export default function DiscountsPage({ data }) {
  return (
    <>
      <h1 className="text-2xl font-bold text-red-700 underline">Discounts</h1>
      <section className="flex flex-wrap justify-around items-center mb-5">
        {data?.map((data) => (
          <Card data={data} key={data.id} />
        ))}
      </section>
    </>
  );
}
