import Link from "next/link";
import Location from "../icons/Location";
import Dollar from "../icons/Dollar";

export default function Card({ data }) {
  const { id, name, price, details, discount } = data;

  return (
    <div className="m-5 w-[220px] shadow-xl p-3">
      <div className="relative">
        <img
          src={`/images/${id}.jpeg`}
          alt={name}
          className="h-[150px] rounded-t-md"
        />
        {discount !== 0 && (
          <span className="absolute z-10 top-1 left-1 bg-red-700 text-white px-2 border broder-2 border-solid border-white rounded-md font-bold">
            {discount}%
          </span>
        )}
      </div>
      <h2 className="mb-3 mt-2 text-center tracking-wider font-bold">{name}</h2>
      <section className="flex justify-between items-center mb-3 font-bold">
        <div className="flex items-center justify-center">
          <Location />
          {details[0].Cuisine}
        </div>
        {discount ? (
          <span className="text-red-600 flex items-center font-bold">
            <Dollar /> {`${(price * (100 - discount)) / 100} $`}
          </span>
        ) : (
          <span className="flex items-center font-bold">
            <Dollar /> {`${price} $`}
          </span>
        )}
      </section>
      <Link
        href={`/menu/${id.toString()}`}
        className="hover:scale-105 transition-all block text-center text-white bg-green-600 rounded-md font-bold tracking-wider mt-3"
      >
        See Detailes
      </Link>
    </div>
  );
}
