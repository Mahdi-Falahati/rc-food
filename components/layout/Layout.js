import Link from "next/link";
import Header from "../module/Header";
import Footer from "../module/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="md:container md:mx-auto min-h-[66vh]">{children}</main>
      <Footer />
    </>
  );
}
