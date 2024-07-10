import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <>
      <hr className=" border-t-stone-950 border border-dotted " />
      <footer className="px-3 md:container md:mx-auto  relative  bottom-0 my-3">
        <section className="flex-col md:flex-row flex">
          <div className="mb-5">
            <h1 className="text-xl tracking-wide font-bold text-lime-800">
              <Link href="/">RC - Food</Link>
            </h1>
            <p className="md:w-[95%] mt-2 text-xs text-justify">
              Proident do officia consequat nostrud id esse. Fugiat velit
              incididunt anim culpa id enim eiusmod non. Et enim nulla aliqua
              sit excepteur. Laboris eu exercitation exercitation amet magna
              proident. Laborum ut nostrud do do id do. Dolore cillum occaecat
              pariatur proident magna incididunt mollit Lorem eu dolore Lorem
              qui mollit.
            </p>
          </div>
          <div className="flex flex-col justify-around items-center w-full mb-5">
            <h2 className="w-full text-zinc-500 text-lg font-bold">Tools :</h2>
            <div className="w-full flex justify-around items-center flex-wrap">
              <Link
                href="/menu"
                className="underline w-[100px] text-sm tracking-wide font-bold  text-zinc-500 mx-2"
              >
                Menu
              </Link>
              <Link
                href="/categories"
                className="underline w-[100px] text-sm tracking-wide font-bold text-zinc-500 mx-2"
              >
                Categories
              </Link>
              <Link
                href="/categories"
                className="underline w-[100px] text-sm tracking-wide font-bold text-zinc-500 mx-2"
              >
                Discunts
              </Link>
            </div>
          </div>
        </section>
        <p className="text-center tracking-widest text-zinc-500 w-full">
          Created By Mahdi-Falahati
        </p>
      </footer>
    </>
  );
}
