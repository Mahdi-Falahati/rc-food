import Header from "../module/Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="md:container md:mx-auto min-h-[90vh]">{children}</main>
      <footer className="md:container md:mx-auto relative bottom-0">
        footer
      </footer>
    </>
  );
}
