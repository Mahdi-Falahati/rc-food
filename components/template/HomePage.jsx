import Attributes from "../module/Attributes";
import Banner from "../module/Banner";
import Companies from "../module/Companies";
import Defination from "../module/Defination";
import Instruction from "../module/Instruction";

export default function HomePage() {
  return (
    <section>
      <Banner />
      <Attributes />
      <Defination />
      <Companies />
      <Instruction />
    </section>
  );
}
