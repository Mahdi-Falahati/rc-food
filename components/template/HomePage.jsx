import Attributes from "../module/Attributes";
import Banner from "../module/Banner";
import Companies from "../module/Companies";
import Defination from "../module/Defination";

export default function HomePage() {
  return (
    <section>
      <Banner />
      <Attributes />
      <Defination />
      <Companies />
    </section>
  );
}
