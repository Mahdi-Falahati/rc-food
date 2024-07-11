import Fast from "../icons/Fast";
import Food from "../icons/Food";
import Choice from "../icons/Choice";
import Clock from "../icons/Clock";

export default function Attributes() {
  return (
    <div className="flex flex-col my-10 px-3">
      <h3 className="text-xl font-bold">Why us?</h3>
      <div className="flex justify-around w-full flex-wrap mt-5">
        <div className="flex items-center justify-center flex-col p-2 my-2 w-[150px]">
          <Fast />
          <p className="text-gray-700 font-bold text-sm mt-4">Fast</p>
        </div>
        <div className="flex items-center justify-center flex-col p-2 my-2 w-[150px]">
          <Food />
          <p className="text-gray-700 font-bold text-sm mt-4">
            Best Restaurants
          </p>
        </div>
        <div className="flex items-center justify-center flex-col p-2 my-2 w-[150px]">
          <Choice />
          <p className="text-gray-700 font-bold text-sm mt-4">Your Choice</p>
        </div>
        <div className="flex items-center justify-center flex-col p-2 my-2 w-[150px]">
          <Clock />
          <p className="text-gray-700 font-bold text-sm mt-4">24-7</p>
        </div>
      </div>
    </div>
  );
}
