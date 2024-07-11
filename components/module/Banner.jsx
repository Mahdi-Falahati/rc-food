import Link from "next/link";
import React from "react";

export default function Banner() {
  return (
    <div className="flex flex-col md:flex-row justify-around items-center my-10">
      <div className="p-4 md:w-[450px]">
        <h2 className="text-lg font-bold text-green-900 underline">RC-Food</h2>
        <p className="text-gray-800 text-xs">Food Delivery and Takeout!</p>
        <span className="text-justify mt-4 inline-block">
          RC-Food is an online food ordering and delivery platform launched by
          Uber in 2014. Meals are delivered by couriers using cars, scooters,
          bikes, or on foot.
        </span>
        <Link
          href="/menu"
          className="transition delay-150 hover:scale-110  bg-green-700 font-bold mt-4 rounded-xl hover:bg-green-900  py-2 px-5 inline-block text-white"
        >
          See All
        </Link>
      </div>
      <div>
        <img
          className="w-[250px] sm:w-[450px]"
          src="/images/banner.png"
          alt="Food image"
        />
      </div>
    </div>
  );
}
