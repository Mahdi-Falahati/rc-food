import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setToggle] = useState(false);

  const toggleHandler = () => {
    setToggle(!open);
  };

  return (
    <header className="md:container md:mx-auto items-center relative top-0 flex justify-around my-5">
      <h1 className="text-xl tracking-wide font-bold text-lime-800">
        <Link href="/">RC - Food</Link>
      </h1>
      <section className="md:inline-block hidden">
        <Link
          href="/menu"
          className="text-lg tracking-wide font-bold text-teal-900 mx-2"
        >
          Menu
        </Link>
        <Link
          href="/categories"
          className="text-lg tracking-wide font-bold text-teal-900 mx-2"
        >
          Categories
        </Link>
        <Link
          href="/discounts"
          className="text-lg tracking-wide font-bold text-teal-900 mx-2"
        >
          Discunts
        </Link>
      </section>
      <div
        onClick={toggleHandler}
        className="flex cursor-pointer h-[20px] flex-col justify-between items-center md:hidden"
      >
        <span className="h-1 w-10 bg-teal-900"></span>
        <span className="h-1 w-16 bg-teal-900"></span>
        <span className="h-1 w-8 bg-teal-900"></span>
      </div>

      {open && (
        <section className="md:hidden z-30 min-h-[60vh] absolute left-0 right-0 top-10 bg-white flex flex-col h-[300px] justify-around items-center">
          <Link
            href="/menu"
            className="text-lg tracking-wide font-bold text-teal-900 mx-2"
          >
            Menu
          </Link>
          <Link
            href="/categories"
            className="text-lg tracking-wide font-bold text-teal-900 mx-2"
          >
            Categories
          </Link>
          <Link
            href="/discounts"
            className="text-lg tracking-wide font-bold text-teal-900 mx-2"
          >
            Discunts
          </Link>
        </section>
      )}
    </header>
  );
}
