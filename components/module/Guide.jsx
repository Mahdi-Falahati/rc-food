import Link from "next/link";

function Guide() {
  return (
    <div className="flex flex-wrap justify-around items-center my-10 border-y py-5 border-red-950	">
      <Link
        href="/categories"
        className="my-3 mx-1 transition delay-150 hover:scale-110  bg-red-700 font-bold rounded-xl hover:bg-red-900  py-2 px-10 inline-block text-white"
      >
        Categories
      </Link>
      <Link
        href="/menu"
        className="my-3 mx-1 transition delay-150 hover:scale-110  bg-green-700 font-bold rounded-xl hover:bg-green-900  py-2 px-10 inline-block text-white"
      >
        Menu
      </Link>
      <Link
        href="/discount"
        className="my-3 mx-1 transition delay-150 hover:scale-110  bg-purple-700 font-bold rounded-xl hover:bg-purple-900  py-2 px-10 inline-block text-white"
      >
        Discount
      </Link>
    </div>
  );
}

export default Guide;
