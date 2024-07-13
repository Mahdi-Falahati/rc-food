import { useRouter } from "next/router";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex justify-center flex-col items-center h-[63vh] px-3">
      <h1 className="text-8xl sm:text-9xl tracking-widest my-3 font-bold italic">
        404
      </h1>
      <h2 className="text-red-700 font-bold italic text-xl text-center">
        Ooops!! Page Not Found
      </h2>
      <p className="text-gray-600 italic text-center">
        Sorry, the page you are looking for could not be found.
      </p>
      <button
        className="bg-red-600 hover:bg-yellow-400 hover:text-black transition-all text-white my-10 w-[200px] py-2 rounded-lg font-bold tracking-widest"
        onClick={router.back}
      >
        Back
      </button>
    </div>
  );
}
