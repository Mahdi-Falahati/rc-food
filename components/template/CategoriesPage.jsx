import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Card from "../module/Card";

export default function CategoriesPage({ data }) {
  const router = useRouter();

  const [query, setQuery] = useState({ difficulty: "", time: "" });

  useEffect(() => {
    const { difficulty, time } = router.query;
    if (query.difficulty !== difficulty || query.time !== time) {
      setQuery({ difficulty, time });
    }
  }, []);

  const changeHandler = (e) => {
    setQuery({ ...query, [e.target.name]: e.target.value });
  };

  const searchHandler = () => {
    router.push({
      pathname: "/categories",
      query,
    });
  };

  return (
    <div className="">
      <h1 className="text-2xl ml-2 font-bold text-purple-900 my-4 underline">
        Categories
      </h1>
      <div>
        <div className="flex  justify-center items-center flex-wrap flex-col md:flex-row">
          <select
            className="m-4 bg-white font-bold italic text-center outline-none tracking-widest"
            value={query.difficulty}
            name="difficulty"
            onChange={changeHandler}
          >
            <option value="">Difficulty</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
          <select
            className="m-4 font-bold bg-white italic text-center outline-none tracking-widest"
            value={query.time}
            name="time"
            onChange={changeHandler}
          >
            <option value="">Cooking Time</option>
            <option value="more">More than 30 min</option>
            <option value="less">Less than 30 min</option>
          </select>
          <button
            className="w-[140px] bg-purple-900 text-white rounded-lg py-1 sm:mx-4 font-bold italic outline-none tracking-widest"
            onClick={searchHandler}
          >
            Search
          </button>
        </div>
        <div className="flex justify-around items-center my-5 flex-wrap">
          {!data.length ? (
            <img src="/images/search.png" alt="Category" />
          ) : null}
          {data.map((food) => (
            <Card key={food.id} data={food} />
          ))}
        </div>
      </div>
    </div>
  );
}
