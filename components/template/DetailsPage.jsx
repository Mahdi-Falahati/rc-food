import Location from "../icons/Location";
import Dollar from "../icons/Dollar";
import { useRouter } from "next/router";

export default function DetailsPage({ data }) {
  const router = useRouter();
  const {
    id,
    name,
    price,
    discount,
    introduction,
    details,
    ingredients,
    recipe,
  } = data;
  return (
    <div>
      <button
        onClick={router.back}
        className="bg-red-600 mt-14 ml-2 hover:bg-red-900 transition-all text-white rounded-md px-10 py-1 font-bold tracking-wider"
      >
        Back
      </button>
      <div className="flex flex-col sm:flex-row justify-center items-center">
        <img
          src={`/images/${id}.jpeg`}
          alt={name}
          className="w-[200px] md:w-[350px] rounded-md my-4"
        />
        <div className="my-4 font-bold flex ml-4 flex-col justify-around">
          <h3 className="text-green-700 text-xl">{name}</h3>
          <span className="text smfont-thin flex items-center">
            <Location />
            {details[0].Cuisine}
          </span>
          <span className="flex items-center">
            <Dollar />
            {discount ? (price * (100 - discount)) / 100 : price}$
          </span>
          {discount ? (
            <span className="bg-red-600 text-white rounded-2xl text-center">
              {discount}% OFF
            </span>
          ) : null}
        </div>
      </div>
      <h2 className="text-2xl ml-2 underline font-bold my-5">
        Details - {name}
      </h2>

      <div className="text-center my-4 font-bold px-3">
        <p>{introduction}</p>
      </div>
      <section className="flex justify-around px-5 sm:items-start sm:flex-row flex-col my-5">
        <div>
          <h4 className="text-xl underline text-green-600 font-bold my-3">
            Details
          </h4>
          <ul>
            {details.map((detail, index) => (
              <li key={index} className="flex my-2">
                <p className="font-bold mr-2">{Object.keys(detail)[0]}: </p>
                <span className="text-gray-500">
                  {Object.values(detail)[0]}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-xl underline text-green-600 font-bold my-3">
            Ingredients
          </h4>
          <ul>
            {ingredients.map((item, index) => (
              <li key={index}>
                <p className="font-bold">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <div className="px-3">
        <h4 className="text-xl underline text-green-600 font-bold my-3">
          Recipe
        </h4>
        {recipe.map((item, index) => (
          <div
            key={index}
            className={`flex p-5 rounded-md text-justify my-2 ${
              index % 2 ? `bg-green-600 text-white` : `bg-white border-2`
            }`}
          >
            <span className="mr-3">{index + 1}</span>
            <p>{item}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <button className="my-5 w-[250px] transition-colors rounded-md hover:bg-green-700  bg-orange-500 text-white tracking-widest font-bold text-center py-3">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
