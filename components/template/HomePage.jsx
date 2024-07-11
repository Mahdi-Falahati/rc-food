import Attributes from "../module/Attributes";
import Banner from "../module/Banner";
import Companies from "../module/Companies";
import Defination from "../module/Defination";
import Guide from "../module/Guide";
import Instruction from "../module/Instruction";
import Restrictions from "../module/Restrictions";

export default function HomePage() {
  return (
    <section>
      <Banner />
      <Attributes />
      <Defination />
      <Companies />
      <Instruction />
      <Guide />
      <Restrictions />
    </section>
  );
}
