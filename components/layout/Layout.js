import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      <header className="md:container md:mx-auto relative top-0 flex justify-around my-5">
        <h1 className="text-xl tracking-wide font-bold text-lime-800">
          RC - Food
        </h1>
        <section>
          <Link
            href="/menu"
            className="text-lg tracking-wide font-bold text-teal-800 mx-2"
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
            href="/categories"
            className="text-lg tracking-wide font-bold text-teal-900 mx-2"
          >
            Discunts
          </Link>
        </section>
      </header>
      <main className="md:container md:mx-auto min-h-[90vh]">{children}</main>
      <footer className="md:container md:mx-auto relative bottom-0">
        footer
      </footer>
    </>
  );
}
